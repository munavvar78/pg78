const mongoose=require("mongoose");

const PgSchema=mongoose.Schema({
    name:{
        type:String,
    },
    select:{
        type:String
    },
    file:{
        type:String
    },
    price:{
        type:Number
    },
    description:{
        type:String
    },
    address:{
        type:String
    }

    // lastName:{
    //     type:String
    // }

})
const Pg=new mongoose.model("Pg",PgSchema)
module.exports =Pg