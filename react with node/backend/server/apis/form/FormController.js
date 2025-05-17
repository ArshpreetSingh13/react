const formModel = require("../form/FormModel")

let add = (req, res) => {


    let validation = ""

    if (!req.body.firstName) {

        validation = "First Name is required"
    }

    if (!!validation) {
        res.send({
            success: false,
            massege: validation,
            status: 200
        })
    }
    else {

        
        formModel.findOne({ firstName: req.body.firstName }).then(async(FirstName)=>{

             if(FirstName){
                res.send({
                    success: false,
                    massege: "item Already Exist",
                    status: 200
                })
            }
            else{
                const totalForms= await formModel.countDocuments()
                const formDataModel = new formModel()

                formDataModel.autoId = totalForms
                formDataModel.firstName = req.body.firstName
                formDataModel.lastName = req.body.lastName
                formDataModel.email = req.body.email
                formDataModel.contect = req.body.contect
                formDataModel.hobby = req.body.hobby
                formDataModel.save().then((FormDataSave) => {

                    res.send({
                        success: true,
                        massege: FormDataSave,
                        status: 201
                    })
                }).catch(() => {


                    res.send({
                        success: false,
                        massege: "Data fill fail",
                        status: 200
                    })
                })
            }
        }).catch(()=>{
            res.send({
                success: false,
                massege: validation,
                status: 200
            })
        })
        
        
        
       

    }
}

module.exports = {
    add
}