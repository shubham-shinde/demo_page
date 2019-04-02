var express = require("express");
var cors = require('cors');
var bodyParser = require('body-parser');
var EosApi = require('eosjs-api') // Or EosApi = require('./src')
const config = require('config');


options = {
    httpEndpoint: 'https://api-kylin.eoslaomao.com:443', // default, null for cold-storage
    verbose: false, // API logging
    logger: { // Default logging functions
      log: config.verbose ? console.log : null,
      error: config.verbose ? console.error : null
    },
    fetchConfiguration: {}
  }
  
  eos = EosApi(options)

// import express_validator from 'express-validator';

const app = express();
app.use(cors());
app.use(bodyParser.json({extended: false}));
// app.use(express_validator());
app.use(express.static(__dirname + '/static'));

app.get('/', (req, res, next) => {
    res.sendfile('index.html');
})

app.get('/actions', (req, res, next) => {
    eos.getActions("user2account",-1,-5).then(result => res.send(result.actions))
})

app.get('/user', (req,res, next) => {
    eos.getTableRows(1, "user2account", "user2account", "user", "key", "0", "-1", 5).then(result => res.send(result));
})

app.listen(3000, (err) => {
    if(err) console.log("server can't start due to ::::" + err);
    else console.log("server is running on the port ::::" + 3000);
})