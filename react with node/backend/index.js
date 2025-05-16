const express= require("express")


const app=express()

const PORT=5000

app.use(express.urlencoded())
app.use(express.json())

const db=require("./server/config/db")
 

const apiss = require("./server/route/Route")

app.use("/api", apiss)


app.get("/",(req,res)=>{
    res.send("api created") 
    
})


app.listen(PORT,(err)=>{
    if(err){
        console.log("There is error in server");
        
    }
    else{
        console.log("The server is running");
        
    }
})