const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const classRoute = require("./routes/subject")


dotenv.config();

app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));


mongoose.connect("mongodb://127.0.0.1:27017/Subject")

app.use("/v1/subject", subjectRoute);



app.listen(8000, ()=> {
    console.log("Server is running....");
});

