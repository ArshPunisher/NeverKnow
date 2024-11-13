const {Pool} = require('pg');

const pool = new Pool({
    connectionString: "postgres://neverknow:neverknow123@localhost:5432/neverKnowDB"
})

const itemsTable = async () =>{
    try {
        const query = `
            CREATE TABLE IF NOT EXISTS items(
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            description TEXT
            );
            `
            await pool.query(query)
            console.log('Table "items" initialized successfully')
    } catch (error) {
        console.log('Error initializing table:', error);
    }
}

const usersTable = async () =>{
    try {
        const query = `
        CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          username VARCHAR(50) NOT NULL,
          email VARCHAR(100) UNIQUE NOT NULL,
          password VARCHAR(100) NOT NULL
        );
        `
        await pool.query(query)
        console.log('Table "users" initialized successfully')
    } catch (error) {
        console.log('Error initializing table:', error);
    }
}

itemsTable()
usersTable()
module.exports = {pool};