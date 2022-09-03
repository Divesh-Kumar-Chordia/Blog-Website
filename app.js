const express =require("express");
const bodyParser=require("body-parser");
const request =require("request");
const app=express();
const https=require("https");
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/",function(req,res){
res.sendFile(__dirname+"/signup.html");



});
app.post("/",function(req,res){
var firstname=req.body.fname;
var lastname=req.body.lname;
var email=req.body.email;
const data={
  members:[
    {
      email_address : email,
      status: "subscribed"
      merge_fields:{
        FNAME:firstname,
        LNAME:lastname,
        EMAIL:email,

      }
    }
  ]
};

const jsonData =JSON.stringify(data);
//here we not just need to gather info but also post them
const url ="https:/usX.api.mailchimp.com/3.0/lists"
https.request(url,options,function(response){

})
});

// https.get("/",function(response){
//   console.log(response.statusCode);
//   response.on("data",function(data){
//     const newsletter =JSON.parse(data);
// });

//api key

//3dcca3cc3124065ee84cd420b483ba98-us13

//audience id
//868d8e6f26

app.listen(3000,function(){
  console.log("Server is running on 3000 local host");
});
