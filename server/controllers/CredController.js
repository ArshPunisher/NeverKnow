const {pool} = require('../db/dbConfig')

exports.home = (req, res) =>{
    try {
        res.status(200).json({msg: "Passed"})
    } catch (error) {
        res.status(400).json({error: "failed"})
    }
}
exports.createItems = async (req, res) =>{
    try {
        const {name, description} = req.body
        console.log(name, description)
        const query = `
        INSERT INTO items (name, description) 
        VALUES ($1, $2) 
        RETURNING *;
      `;
        const results = await pool.query(query, [name, description])

        res.status(201).json(results.rows[0])
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}