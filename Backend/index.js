const express = require('express'); 
const { get } = require('express/lib/request');
const res = require('express/lib/response');
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 5000;                  //Save the port number where your server will be listening
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const url = require('url');
const request = require('request');

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

const apiKey="768bc09f96a97fa6a86c102ee146a0b0"

let response;

/* async function getWeather() {
    const weather = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&APPID=${apiKey}`
    );
     response = await weather.json();
     //console.log(response.main)
} */


  
app.get('/', (req, res) => {

    console.log(req.query.place)
    const place=req.query.place;

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&APPID=${apiKey}`
  request.get({
    url: url,
    json: true
  }, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        //console.log(response)
      console.log(body) // Print the json response
      res.send(body) 
     
    }else{
        console.log(error)
        res.send(error)
    }
  })
    
});





app.listen(port, () => {            
    console.log(`Now listening on port ${port}`); 
});