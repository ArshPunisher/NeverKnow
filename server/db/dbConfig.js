const {Pool} = require('pg');

const pool = new Pool({
    connectionString: "postgres://neverknow:neverknow123@localhost:5432/neverKnowDB"
})

module.exports = {pool};