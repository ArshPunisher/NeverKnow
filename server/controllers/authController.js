const {pool} = require('../db/dbConfig')
const bcrypt = require('bcryptjs');
const { createToken } = require('../service/authJwt');

exports.login = async (req, res) =>{
    try {
        const {username, password} = req.body;
        console.log(username, password)
        const query = `SELECT * FROM Users WHERE username = $1`
        const {rows} = await pool.query(query, [username])

        if(rows.length == 0){
            return res.status(400).json({error:true, message:'User not found'})
        }
        console.log("user: ", rows)
        const user = rows[0];
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ error: true, message: "Invalid credentials" });
        }

        const token = createToken(user)
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 24* 60* 60* 1000
        })

        // Successfully logged in
        res.status(200).json({ error: false, message: "Login successful", user: { id: user.id, username: user.username, email: user.email } });
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


exports.signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if(!username || !email || !password){
            throw new Error("Bad Request")
        }
        const checkUsernameExists = await pool.query(`SELECT * FROM Users WHERE username = $1`,[username])
        console.log(checkUsernameExists.rows)
        if(checkUsernameExists.rows.length > 0){
            throw new Error("This username is taken!")
        }
        const hashPassword = await bcrypt.hash(password, 12);
        const query = `
        INSERT INTO Users (username, email, password)
        VALUES ($1, $2, $3) RETURNING *;
        `;
        const { rows } = await pool.query(query, [username, email, hashPassword]);
        const token = createToken(rows[0]);

        // Set token as an HttpOnly cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
            sameSite: 'lax', // Adjust as needed (Strict, Lax)
            maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
        });

        res.status(201).json({ error: false, message: 'Signup successful' });
    } catch (error) {
        res.status(400).json({ error: true, message: error.message });
    }
};