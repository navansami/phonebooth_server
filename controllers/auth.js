const authHelper = require('../utilities/authhelpers')
const User = require('../models/User')

const Registration = async (req, res) => {
    try{
        // Does the user already exist?
        const oldUser = User.findOne(req.body)
        if(oldUser) {
            throw Error(`User: ${req.body.username} already exists`)
        }
        // has the password been secured?
        const plainPassword = req.body.password;
        const securePassword = authHelper.hashPassword(plainPassword)

        // did you update the new user with encrypted password?
        const updatedUser = { ...req.body, password: securePassword}

        // let's create the user
        const newUser = await User.create(updatedUser)

        // If all is good and dandy
        res.status(200).json({
            message: "success",
            dataRecv: `User ${newUser.username} with id ${newUser._id} was created`
        })

    } catch(error) {
        res.status(400).json({
            message: "Request Failed",
            dataRecv: error.Message()
        })
    }

}

module.exports = {
    Registration
}