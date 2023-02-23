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
    number:{
        type:Number
    },
    aboutus:{
        type:String
    },
    location:{
        type:String
    },
    product:{
        type:String
    },
    address:{
        type:String
    },
    curfew:{
        type:Boolean
    },
    studyroom:{
        type:Boolean
    },
    deposite:{
        type:Boolean
    },
    visitorallowed:{
        type:Boolean
    },
    meals:{
        type:Boolean
    },
    kitchen:{
        type:Boolean
    },
    freeparking:{
        type:Boolean
    },
    reception:{
        type:Boolean
    },
    elveter:{
        type:Boolean
    },
    carparking:{
        type:Boolean
    },

    // lastName:{
    //     type:String
    // }

})
const Pgs=new mongoose.model("Pg",PgSchema)
module.exports =Pgs