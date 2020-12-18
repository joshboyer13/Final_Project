// Budget API


const {MongoClient} = require('mongodb');
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const express = require('express');
const cors = require('cors');




const itemModel = require("./Final-personal-budget/models/budget_Schema")
let url = 'mongodb+srv://josh:123@cluster0.ikk3a.mongodb.net/Users?retryWrites=true&w=majority';
const uri = "mongodb+srv://josh:123@cluster0.ikk3a.mongodb.net/Users?retryWrites=true&w=majority"
const client = new MongoClient(uri);

const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');
const path = require('path');
const { settings } = require('cluster');




/////////////////////////////////////
///////////App requests//////////////
/////////////////////////////////////

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use((req, res, next) => { 
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type, Authorization');
    next();
});

const app = express();
const port = 4200;

app.use(bodyParser.json());
app.use(cors());


const secretKey = "I hope the Grader of this project has a nice day";
const jwtMW = exjwt({
    secret: secretKey,
    algorithms: ['HS256']

});


app.get('/hello',( req, res) => {

  res.send('Hello World!')

});



app.get('/items',( req, res) => {
  console.log("Starting /items ")
  mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=>{
      console.log("Connected to the database")
      itemModel.find({})
          .then((data)=>{
              
              res.json(data);
              mongoose.connection.close()
          })
          .catch((err) => {
              console.log("Error")
          });

  })
  .catch((connectionError) => {
      console.log("Error while connecting to database")
  })

  


});

app.post("/addItem",(req, res) => {
  console.log("Entered Adding")
  mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=>{
          var addedItem= new itemModel({
              id: req.body.id,
              label: req.body.label,
              value: req.body.value,
              color: req.body.color
      });
      console.log(addedItem)
      console.log("Connected to the database and created new budget")
      
      budgetModel.insertMany(addedItem)
          
          .then((data)=>{

              
              res.json(data);
              mongoose.connection.close();
          })
          .catch((adderr) => {
              console.log("Adding Error")
          })

  })
  .catch((connectionError) => {
      console.log("Connection Error .add")
  })


});



app.listen(port, () => {
    console.log(`Listening`);
});

app.get('/budget2',( req, res) => {

  ///res.sendFile('/xampp/dev/personal-budget/budget-data.json');
  res.sendFile('budget-data.json', { root: __dirname });

});