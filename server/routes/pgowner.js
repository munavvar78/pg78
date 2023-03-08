const express = require("express");
const router = express.Router();
const Pgs = require("../model/pg");

router.post('/pgowner',(req,res)=>{
    token=req.body.token;
    Pgs.find({token:token},(err,items)=>{
        if(err){
            console.log(err);
            res.status(500).send("An error Accoured", err);
        }
        else{
            res.send({ items: items });
        }
    })
})
module.exports=router;