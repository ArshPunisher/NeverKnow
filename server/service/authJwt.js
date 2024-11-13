require('dotenv').config();
const jwt = require('jsonwebtoken')
const SECRET_KEY = process.env.JWT_SECRET

const createToken = (user) => {
    const payload = {
        id: user.id,
        username: user.username,
        email: user.email
    }
    const token = jwt.sign(payload, SECRET_KEY)
    return token;
}

const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        if (!token) {
            reject(new Error('Authentication token missing'));
        }

        jwt.verify(token, SECRET_KEY, (err, decoded) => {
            if (err) {
                reject(new Error('Invalid or expired token'));
            } else {
                resolve(decoded);
            }
        });
    });
};

module.exports = {createToken, verifyToken}