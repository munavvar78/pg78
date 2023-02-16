const express = require("express");
const mongoose=require("mongoose")
const path = require("path");
const multer=require('multer')
const jwt=require('jsonwebtoken')
const bcrypt=require("bcrypt")
const app = express();
var ObjectId = require('mongodb').ObjectID;
const bodyParser=require('body-parser')

const cors=require("cors")
// const hbs =require('hbs')

require("../db/conn");

const Pgs=require('../model/pg')
const Users=require('../model/register')


// const template_path = path.join(__dirname, "..", "/templates/views");

// const partials_path = path.join(__dirname, "..", "/templates/partials");
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(__dirname+""))
// app.use(express.static(path.join(__dirname, "..", "/build")));

// app.set("view engine", "hbs");

// app.set("views", template_path);

// hbs.registerPartials(partials_path);
// app.get("/register", (req, res) => {
  //   res.render("register");
  // }); 
  let select=''
const storage = multer.diskStorage({
  destination:'uploads',
  filename: (req, file, cb) => {
    cb(null,Date.now() + path.extname(file.originalname))
  }
})
const upload = multer({ storage: storage }).single('file')
app.get('/pg/:id',(req,res)=>{
  const id=req.params;
Pgs.findOne({_id:ObjectId(id)}).then(items=>{
  res.send(items);
})})
  app.post('/pginsert',(req,res)=>{
    upload(req,res,(err)=>{

      console.log(req.body.file);
      if(err){
        console.log(err)
      }
      else{
        // console.log(req.file.filename);
        const newPg=new Pgs({
          name:req.body.name,
          select:req.body.select,
          file:req.body.file,
          price:req.body.price,
          number:req.body.number,
          product:req.body.product,
          aboutus:req.body.aboutus,
          location:req.body.location,
          address:req.body.address,
          curfew:req.body.curfew,
          studyroom:req.body.studyroom,
          deposite:req.body.deposite,
          visitorallowed:req.body.visitorallowed,
          meals:req.body.meals,
          kitchen:req.body.kitchen,
          freeparking:req.body.freeparking,
          reception:req.body.reception,
          elveter:req.body.elveter,
          carparking:req.body.carparking,
        })
        newPg.save().then(()=>res.send({message:"succefully registered"})).catch((err)=>console.log(err))
      }
    })

  })
  app.post('/pg',(req,res)=>{
    console.log(req.body)
    select=req.body.select
  //  upload(req,res,(err)=>{

  //  })
  
    Pgs.find({select:select},(err,items)=>{
      if(err){
        console.log(err)
        res.status(500).send('An error Accoured',err)
      }
      else{
      
        res.send({items:items})
        
      }
    })
  })
  app.post('/register',async(req,res)=>{
    const {name,email,password}=req.body
    console.log(req.body);
    Users.findOne({email:email},async(err,user)=>{
      if(user){
        res.send({message:"user already registered"})
      }else{
        
        const user =new Users({
          name,
          email,
          password
        })
        const token=await user.generatedAuthToken()
        
        res.cookie("jwt",token);
        // console.log(cookie);
        console.log("done")
        
        user.save(err=>{
          if(err){
            res.send(err)
          }else{
            res.send({message:"SucessFully Register",user})
          }
        })
      }})  
    }
    )
    app.post("/login",(req,res)=>{
      const {email,password}=req.body;
      Users.findOne({email:email},(err,user)=>{
        const isMatch=bcrypt.compare(password,user.password)
        if(user){
          if(isMatch){
            res.send({message:"Login Sucessfully",user:user})
          }else{
            res.send({message:"Password did't match"})
              
            }
          }else{
            res.send({message:"User not registered"})

          }

        })
            })
        // try {
      //   const password=req.body.password;
    //   const cpassword=req.body.confirmPassword;
      
    // if(password===cpassword){
    //   const registerEmployee=new Registers({
    //     firstName:req.body.firstName,
    //     lastName:req.body.lastName,
    //     email:req.body.email,
    //     password:req.body.password,
    //     confirmpassword:req.body.confirmPassword
    //   })
    //   const registered=await registerEmployee.save()
    //   res.status(200).send("done")
    // }}
    // catch(error){
    //   res.send(401).send(error)
    // }

console.log(select);
app.listen(8000, () => console.log("listen on port 3000"));