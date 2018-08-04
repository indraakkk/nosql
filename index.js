var express = require("express")
var mongoose = require("mongoose")
var bodyParser = require("body-parser")
var dbConfig = require("./config/Database")
var app = express()

mongoose.connect(dbConfig.url)

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

require("./routes/employees")(app)

app.listen(3000);
console.log('App Listen on port 3000');