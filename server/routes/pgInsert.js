const express = require("express");
const router = express.Router();
const Pgs = require("../model/pg");

router.post("/pginsert", (req, res) => {
      console.log(req.body.file);
        const newPg = new Pgs({
          name: req.body.name,
          select: req.body.select,
          file: req.body.file,
          gender: req.body.gender,
          numberbed:req.body.numberbed,
          nearcollege:req.body.nearcollege,
          deposite: req.body.deposite, 
          price: req.body.price,
          number: req.body.number,
          address: req.body.address,
          wifi: req.body.wifi,
          powerbackup: req.body.powerbackup,
          studyroom: req.body.studyroom,
          ac:req.body.ac,
          meals: req.body.meals,
          kitchen: req.body.kitchen,
          parking: req.body.parking,
          reception: req.body.reception,
          roomcleaning: req.body.roomcleaning,
          nonvegfood:req.body.nonvegfood,
          noticeperiod: req.body.noticeperiod,
          foodcharges: req.body.foodcharges,
          smoking: req.body.smoking,
          foodavailable: req.body.foodavailable,
          visitorentry: req.body.visitorentry,
          visitorallowed: req.body.visitorallowed,
          visitorentry: req.body.visitorentry,
          carparking: req.body.carparking,
          lift:req.body.lift,
          loudmusic:req.body.loudmusic,
          drinking:req.body.drinking,
          party:req.body.party,
          getclosingtime:req.body.getclosingtime,
          oppositegender:req.body.oppositegender,
          token: req.body.token,
        });
        newPg
          .save()
          .then(() => res.send({ message: "succefully registered",newPg }))
          .catch((err) => console.log(err));
      
  });
  module.exports=router;