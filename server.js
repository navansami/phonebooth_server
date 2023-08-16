const server = require('./config/app')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 8888

connectDB()

server.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`)
})