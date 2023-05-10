//jshint esversion: 6

const express = require("express");
const https = require("https");
const bodyparser = require("body-parser");
const request = require("request");
const { url } = require("inspector");
const { json } = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/signup.html")
});

app.post("/",function(req, res){
 const firstname = req.body.fname;
 const lastname = req.body.lname;
 const email = req.body.email;
 const data ={
    members:[
        {
            email_adress: email,
            status:"subscribed",
            merge_fields :{
                FNAME : firstname,
                LNAME : lastname
            }
        }
    ]
 }

 const jsondata = JSON.stringify(data);

const url = "https://us21.api.mailchimp.com/3.0/Lists/908b41fb83"
const options = {
    method: "POST",
    auth : "mridul:9b1ff252fe2dfc4b6196eee0c534ffdd-us21"
}
 const request = https.request(url,options,function(response){
        response.on("data",function(response){
            console.log(json.parse(data));
        })
 })
  request.write(jsondata);
  request.end();
});

app.listen(3000,function(){
    console.log("server running on port 3000");
});


//9b1ff252fe2dfc4b6196eee0c534ffdd-us21

//id : 908b41fb83.