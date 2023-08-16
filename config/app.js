const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
const authRouter = require('../routes/auth');

// Middleware
app.use(express.json())
app.use(cors('*'))
app.use(morgan('dev'))

// Routes
app.get('/', (req, res) => {
    res.status(200).json({
        message: "success",
        data: "api v1 index"
    })
})

app.use("/api/v1/auth", authRouter)

module.exports = app;