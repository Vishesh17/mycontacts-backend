const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//@desc get all contacts
//@route GET /api/contacts
//@access public

const getAllContacts = asyncHandler(async(req,res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
})

//@desc Create New Contact
//@route POST /api/contacts
//@access public

const createContact = asyncHandler(async(req,res) => {
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.statue(400);
        throw new Error("All fields are mandatory");
    }
    const contact = await Contact.create({
        name, 
        email,
        phone
    });
    res.status(201).json(contact);
})

//@desc Get Contact
//@route GET /api/contacts/:id
//@access public

const getContact = asyncHandler(async(req,res) => {
    const contact = Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(202).json(contact);
})

//@desc Delete Contact
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = asyncHandler(async(req,res) => {
    const contact = Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    await Contact.remove();
    res.status(202).json(contact);
})

//@desc Update Contact
//@route PUT /api/contacts/:id
//@access public

const updateContact = asyncHandler(async(req,res) => {
    const contact = Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true},
    )
    res.status(202).json(updateContact);
})



module.exports = { getContact, createContact, getAllContacts, updateContact, deleteContact };