const express = require("express");
const app = express();
var ObjectId = require('mongodb').ObjectID;
const bodyParser=require('body-parser')
const AuthUser=require('../routes/auth')
const cors=require("cors")
const PgUser=require('../routes/pg')
const pgInsertUser=require('../routes/pg')
require("../db/conn");

app.use(cors())

app.use(express.json());

app.use(express.urlencoded({extended:false}))

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',pgInsertUser)
app.use('/',PgUser)
app.use('/',AuthUser)


app.listen(8000, () => console.log("listen on port 8000"));