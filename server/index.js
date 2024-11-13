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