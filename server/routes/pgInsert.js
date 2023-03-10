const express = require("express");
const router = express.Router();
const Pgs = require("../model/pg");

router.post("/pginsert", (req, res) => {
      console.log(req.body.file);
        const newPg = new Pgs({
          name: req.body.name,
          select: req.body.select,
          file: req.body.file,
          price: req.body.price,
          number: req.body.number,
          product: req.body.product,
          aboutus: req.body.aboutus,
          location: req.body.location,
          address: req.body.address,
          curfew: req.body.curfew,
          studyroom: req.body.studyroom,
          deposite: req.body.deposite,
          visitorallowed: req.body.visitorallowed,
          meals: req.body.meals,
          kitchen: req.body.kitchen,
          freeparking: req.body.freeparking,
          reception: req.body.reception,
          elveter: req.body.elveter,
          carparking: req.body.carparking,
          token: req.body.token,
        });
        newPg
          .save()
          .then(() => res.send({ message: "succefully registered",newPg }))
          .catch((err) => console.log(err));
      
  });
  module.exports=router;