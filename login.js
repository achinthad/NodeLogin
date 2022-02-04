
const express = require("express");
const { performance } = require('perf_hooks');

const bodyParser = require("body-parser");
const { Sha256 } = require("./sha256.js");
const { Sha512 } = require("./sha512.js");
const { Md5 } = require("./md5.js");
const { TripleDes } = require("./tripleDES.js");
const encoder = bodyParser.urlencoded();



const app = express();
app.use("/assets", express.static("assets"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", encoder, function(req, res){
   
    let password  =req.body.password;
    console.log("Password: " + password);
    
    const sha256 = new Sha256;
    const sha512 = new Sha512;
    const md5 = new Md5;
    const tripleDes = new TripleDes;
    
    let startTime = performance.now()
    
    // const encryptedPassword= sha256.getEncriptCode();
    // console.log(encryptedPassword)
    
    
    // const encryptedPassword= sha512.getEncriptCode();
    // console.log(encryptedPassword)
    
    const encryptedPassword= tripleDes.getEncriptCode();
    console.log(encryptedPassword)

    

    
    // const encryptedPassword = md5.getEncriptCode();
    // console.log("Encrypted Password : "+ encryptedPassword)

    let endTime = performance.now()

    

    console.log("Password Length : " + password.length)
    console.log("encrypted Password Length : " + encryptedPassword.length)
    console.log(`It took ${(endTime - startTime)*1000000} nanoseconds to execute`)


});


app.listen(4500);







