const mongoose=require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/Form_first").then(() => {
    console.log("server is connected");

}).catch((err)=>{
    console.log("Server is not connected",err);
    
})
