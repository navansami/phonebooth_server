const Contact = require('../models/Contact')

const getAllContacts = async (req, res) => {
    try {
        // did you retrieve the entire collection?
        const contacts = await Contact.find();
        if(!contacts) throw Error("No contacts were found")
        res.status(200).json({
            message: "Request Success",
            total: contacts.length,
            data: {
                contacts
            }
        })

    } catch (error) {
        res.status(400).json({
            message: "Request Failed",
            dataRecv: error.message
        })
    }
}

module.exports = {
    getAllContacts
}