const authHelper = require('../utilities/authhelpers')
const User = require('../models/User')

const Login = async (req,res) => {
    try {
        // Does the user exist?
        const validUser = await User.findOne({ username: req.body.username })
        if(!validUser) throw Error(`Account with username '${req.body.username}' not found`)
        
        // Does the password match
        const validPassword = await authHelper.validatePassword(req.body.password,validUser.password)
        if(!validPassword) throw Error(`Your password is incorrect`)
        
        // If user is autenticate, did you create the json Web Token?
        const token = await authHelper.createToken({
            id: validUser._id,
            username: validUser.username,
            role: validUser.role
        })

        // If all good and dandy?
        res.status(200)
            // TODO: set expiry date
            .cookie('token', token, {
                secure: false,
                httpOnly: true
            })
            .json({
                message: "Request Success",
                data: {
                    login: `user '${validUser.username}' is logged in`,
                    token
                }
            })

    } catch (error) {
        res.status(400).json({
            message: "Request Failed",
            dataRecv: error.message
        })
    }
}


const Registration = async (req, res) => {
    try{
        // Does the user already exist?
        const oldUser = await User.findOne({username: req.body.username})
        if(oldUser) {
            throw Error(`User: ${req.body.username} already exists`)
        }
        
        // has the password been secured?
        const plainPassword = req.body.password;
        const securePassword = await authHelper.hashPassword(plainPassword)

        // did you update the new user with encrypted password?
        const updatedUser = { ...req.body, password: securePassword}

        // let's create the user
        const newUser = await User.create(updatedUser)

        // If all is good and dandy
        res.status(200).json({
            message: "success",
            dataRecv: `User '${newUser.username}' with id '${newUser._id}' was created`
        })

    } catch(error) {
        res.status(400).json({
            message: "Request Failed",
            dataRecv: error.message
        })
    }

}

module.exports = {
    Login,
    Registration
}