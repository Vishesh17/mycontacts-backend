const express = require("express");
const router = express.Router();
const {getContact, createContact, getAllContacts, updateContact, deleteContact} = require("../controllers/contactController");

router.route("/").get(getAllContacts).post(createContact);

router.route("/:id").put(updateContact).get(getContact).delete(deleteContact);

module.exports = router;
