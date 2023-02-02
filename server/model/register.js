const mongoose=require('mongoose');
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken")
const employeeSchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    confirmpassword:{
        type:String,
        require:true
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
  


}) 
employeeSchema.methods.generatedAuthToken=async function(){
    try{
        const token=jwt.sign({_id:this._id},"mynameismunavvarjarjisbhaipopatiya")
        this.tokens=this.tokens.concat({token:token})
        await this.save();
        return token
    }
    catch(error){
        res.send("the error part"+ error)
        console.log("the error part"+ error)
    }
}
employeeSchema.pre("save", function(next){
    this.password= bcrypt.hash(this.password, 10)
    next()
})


const User=new mongoose.model("User",employeeSchema)
module.exports=User;