const mongoose = require("mongoose");

let FormSchema = mongoose.Schema({
    autoId: { type: Number, default: 0 },    
    firstName: { type: String, default: "First name" },
    lastName: { type: String, default: "last name" },
    email: { type: String, default: "email" },
    contect: { type: Number, default: 0 },
    hobby: { type: String, default: "hobby" }
})

module.exports=mongoose.model("Form",FormSchema)