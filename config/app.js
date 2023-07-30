const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

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

module.exports = app;