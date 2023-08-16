const router = require('express').Router();

// Login
router
    .route('/login')
    .get(() => console.log("Route not yet defined"))

// Registration
router
    .route('/register')
    .post(() => console.log(`Route not yet defined`))

// Reset Password
router()
.route('/reset')
.post(() => console.log(`Route not yet defined`))


module.exports = router