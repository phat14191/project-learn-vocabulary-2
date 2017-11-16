let express = require("express");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");
let morgan = require("morgan");
let path = require("path");
let cors = require("cors");

//import routes
let learnRouter = require("./routes/learn.js");
let authRouter = require("./routes/auth.js");
let profileRoute = require("./routes/profile.js");

//connect to db
mongoose.connect("mongodb://localhost/learn-auth");

//base express app
const app = express();

//setup cors
app.use(cors());

//setup JSON requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//use routes
app.use("/learn", learnRouter);
app.use("/auth", authRouter);
app.use("/profile", profileRoute);

//setup logging
app.use(morgan("dev"));

//setup routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`[+] Starting server on port ${PORT}`);
});
