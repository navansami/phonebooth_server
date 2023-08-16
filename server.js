const server = require('./config/app')
const dotenv = require('dotenv').config({ path: `env/.env` })

const PORT = process.env.PORT || 8888

server.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`)
})