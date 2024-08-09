const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/LoginSignUpDB")
.then(()=>{
    console.log("mongoDB connected");
    
}).catch(()=> {
    console.log("Failed to connect");
    
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})


const collection = new mongoose.model("Users",logInSchema)
module.exports = collection