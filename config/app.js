const cookieParser = require('cookie-parser')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
const authorize = require('../middleware/verifyToken')
const authRouter = require('../routes/auth');
const contactRouter = require('../routes/contacts')

// Middleware
app.use(cookieParser())
app.use(express.json())
app.use(cors('*'))
app.use(morgan('combined'))

// Routes
app.get('/', (req, res) => {
    res.status(200).json({
        message: "success",
        data: "api v1 index"
    })
})

app.use("/api/v1/auth/", authRouter)
app.use("/api/v1/contacts/", contactRouter )

module.exports = app;