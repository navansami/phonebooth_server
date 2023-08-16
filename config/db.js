const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config("../env/.env" )

const dbOptions = {}
const uri = process.env.DB
    .replace("<user>", process.env.DBADMIN)
    .replace("<password>", process.env.DBPWD)
    .replace("<databasename>", process.env.DBNAME)

const connection = async () => {
    try {
        const connected = await mongoose.connect(uri, dbOptions)
        if(!connected) throw Error("Unable to connect to database")
        console.log(`Database Connected: ${process.env.DBNAME}`)
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = connection