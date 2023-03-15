const express = require("express");
const router = express.Router();
const Pgs = require("../model/pg");
var ObjectId = require('mongodb').ObjectID;


router.delete('/pgdelet',(req,res)=>{
    id=req.headers.id;
    Pgs.deleteOne({_id: ObjectId(id)}).then((items)=>{
        res.send(items)
    })
})
module.exports=router;