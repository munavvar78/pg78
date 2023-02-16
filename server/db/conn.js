const mongoose=require("mongoose");
require('dotenv').config()

const DATA_BASE=process.env.DATABASE;
mongoose.connect(`${DATA_BASE}/pgRegistration`).then(()=>{
    console.log(`Connection Succesful..`)
}).catch((e)=>{
    console.log(`no Connection..`)
})