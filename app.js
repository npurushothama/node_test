var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

// "/" => Hi
app.get("/",function(req,res){
    // res.send("Hi there!")
    res.render("login")
});

app.get("/checklogin", function(req,res){
    console.log(req.body);
    var r = req.body;
    var uname = req.body.uname;
    var pwd = req.body.password;
    res.render("checklogin.ejs", { uname:uname, pwd:pwd});
});

app.post("/checklogin", function(req,res){
    var r = req.body;
    var uname = req.body.password;
    var pwd = req.body.password;
    res.render("checklogin.ejs", { r:r});
});

// "bye" => Goodbye

var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })
