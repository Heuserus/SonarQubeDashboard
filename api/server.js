
//TODOS:
//More Paramaters of fetch call from Config file rather than hardcoded
//Add api key secrets manager

const fetch = require('node-fetch');
const base64 = require('base-64')

const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 8000;

      let username = '************************************'; //api key
      let password = '';
      let headers = new fetch.Headers();
      headers.set('Authorization', 'Basic ' + base64.encode(username + ":" + password));



app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));




app.get('/api/repo', (req, res) => {
  
  const key = req.get('key')
  fetch('**'+key+'**' //fetch adresse
  ,{
    headers: headers
  }
  )
  .then(res => res.json())
   .then(json => res.json(json))
});




app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});