const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const user = require('./router/user.router')
const db = require("../src/config/db");
const app = express();

app.use(express.json())
app.use(morgan('dev'))
app.use(cors());
app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended : true }))

// database connect
db();

// routing connect
app.set('view engine', 'ejs');

app.use("/",user);

app.listen(process.env.PORT);
