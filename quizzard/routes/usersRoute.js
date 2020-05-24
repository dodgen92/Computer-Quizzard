const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/users")


router.post("/register", (req, res) => {
User.create(req.body)
.then(user => res.json(user))
})




module.exports = router