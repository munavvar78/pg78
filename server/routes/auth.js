const express = require("express");
const router = express.Router();
const Users = require("../model/register");
const bcrypt=require("bcrypt")

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  Users.findOne({ email: email }, async (err, user) => {
    if (user) {
      res.send({ message: "user already registered" });
    } else {
      const user = new Users({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        pgowner:req.body.pgowner
      });
      const token = await user.generatedAuthToken();

      res.cookie("jwt", token);
      // console.log(cookie);
      console.log("done");

      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "SucessFully Register", user });
        }
      });
    }
  });
});
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  Users.findOne({ email: email }, (err, user) => {
    const isMatch = bcrypt.compare(password, user.password);
    if (user) {
      if (isMatch) {
        res.send({ message: "Login Sucessfully", user: user });
      } else {
        res.send({ message: "Password did't match" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  });
});
module.exports = router;
