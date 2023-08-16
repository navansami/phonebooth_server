const Contact = require('../models/Contact')

const getAllContacts = async (req, res) => {
    try {
        // did you retrieve the entire collection?
        const contacts = await Contact.find();
        if(contacts.length < 1) throw Error("No contacts were found")
        
        // If all is good and dandy
        res.status(200).json({
            message: "Request Success",
            total: contacts.length,
            data: {
                contacts
            }
        })

    } catch (error) {
        res.status(404).json({
            message: "Request Failed",
            dataRecv: error.message
        })
    }
}


const addNewContact = async (req, res) => {
    try {
        // Did check if contact already exists?
        const oldContact = await Contact.findOne({ name: req.name })
        if(oldContact) throw Error("Contact already exists")

        // If not, add new contact to collect
        const newContact = await Contact.create(req.body);
        if(!newContact) throw Error("unable to add contact")
        
        // If all is good and dandy
        res.status(200).json({
            message: "Request Success",
            data: `new contact '${newContact.name}' with id '${newContact._id}' was created`
        })

    } catch (error) {
        res.status(400).json({
            message: "Request Failed",
            dataRecv: error.message
        })
    }
}

module.exports = {
    getAllContacts,
    addNewContact
}