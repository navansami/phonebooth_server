const router = require('express').Router()
const contactCtlr = require('../controllers/contacts')

// default Route
router
    .route('/')
    .get(contactCtlr.getAllContacts)
    // .post(() => console.log(`Route not yet defined`))

// By ID
// router
//     .route('/:id')
//     .get(() => console.log(`Route not yet defined`))
//     .put(() => console.log(`Route not yet defined`))
//     .delete(() => console.log(`Route not yet defined`))

module.exports = router