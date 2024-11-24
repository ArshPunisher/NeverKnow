require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const staticRoutes = require('./routes/staticRoutes')
const authApi = require('./routes/apiAuthRoutes')
const apiRoutes = require('./routes/apiRoutes')
const authMiddleware = require('./middlewares/authentication')
const PORT = process.env.PORT
const {createTables} = require('./db/schema')

async function dbConfig() {
    console.log("Starting database setup...");
    await createTables(); // Call the function
    console.log("Database setup complete.");
}

dbConfig().catch((error) => {
    console.error("Error in database setup:", error);
});

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}))

app.use('/', staticRoutes)
app.use('/api/', authApi)
app.use('/api/', authMiddleware ,apiRoutes)

app.listen(PORT, ()=> console.log("Server started at PORT: ", PORT))