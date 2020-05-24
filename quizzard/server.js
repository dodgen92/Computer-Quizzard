const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const UserRoute = require("./routes/usersRoute")

express.json();
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/users', {useNewUrlParser: true})
.then(console.log("mongodb running"))


app.use('/user', UserRoute)





app.listen(5000, () => console.log("app is running on server 5000!!!"))