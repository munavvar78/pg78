const express = require("express");
const router = express.Router();
const Pgs = require("../model/pg");
var ObjectId = require('mongodb').ObjectID;

router.post("/pg", (req, res) => {
  console.log(req.body);
  select = req.body.select;
  Pgs.find({ select: select }, (err, items) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error Accoured", err);
    } else {
      res.send({ items: items });
    }
  });
});

router.get("/pg/:id",(req, res) => {
  const id = req.params;
  Pgs.findOne({ _id:ObjectId(id)}).then((items) => {
    res.send(items);
  });
});
module.exports = router;
