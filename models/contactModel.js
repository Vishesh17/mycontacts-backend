const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true, "Please add the contact name"],
    },
    email : {
        type : String,
        required : [true, "Please add the emailId"],
    },
    phone : {
        type : String,
        required : [true, "Please add the phone number "],
    },
}, {
    timeStamps : true, 
});

module.exports = mongoose.model("Contacts", contactSchema); 