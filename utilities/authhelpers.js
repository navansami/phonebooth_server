const bcrypt = require('bcrypt')
const SaltRounds = 10;

exports.hashPassword = async (password) => {
    return await bcrypt.hash(password, SaltRounds)

}

exports.validatePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash)
}