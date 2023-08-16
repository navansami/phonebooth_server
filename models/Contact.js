const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    // _creator: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    name: { type: String, required: true, unique: true },
    extension: { type: String, required: false },
    company: { type: String, required: true },
    department: { type: String, required: false },
    designation: { type: String, required: false },
    mobile: { type: String, required: false },
    email: { type: String, required: false },
    website: { type: String, required: false },
    comments: { type: String, required: false },
    tags: { type: Array, required: false, default: [] }
})

module.exports = mongoose.model("contacts", contactSchema)