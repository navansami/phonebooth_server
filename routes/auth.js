const router = require('express').Router()
const authCtlr = require('../controllers/auth')

// Login
router
    .route('/login')
    .post(authCtlr.Login)

// Registration
router
    .route('/register')
    .post(authCtlr.Registration)

// Reset Password
// router()
// .route('/reset')
// .post(() => console.log(`Route not yet defined`))


module.exports = router