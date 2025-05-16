

let router = require("express").Router()
const FormControl=require("../apis/form/FormController")

router.post("/form/form_add",FormControl.add)



module.exports= router