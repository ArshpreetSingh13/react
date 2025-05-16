const FormModel=require("../form/FormModel")

let add=(req,res)=>{

  
   let validation=""
    
    if(!req.body.firstName){
        
       validation="First Name is required"
    }

    if(validation){
        res.send({
            success: false,
            massege:"Fill the requirements",
            status:200
        })
    }
    else{

        FormModel.autoId=123
        FormModel.firstName=req.body.firstName
        FormModel.lastName=req.body.lastName
        FormModel.email=req.body.email
        FormModel.contect=req.body.contect
        FormModel.hobby=req.body.hobby
        
    }
}
 
module.exports={
    add
}