const dotenv = require("dotenv").config()
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')
const SaltRounds = 10;

exports.hashPassword = async (password) => {
    return await bcrypt.hash(password, SaltRounds)

}

exports.validatePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash)
}

exports.createToken = async payload => {
    return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '7d' })
}
