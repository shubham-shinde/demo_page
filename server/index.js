import express from 'express';
import fs from 'fs';
import webpack from 'webpack';
// import config from '../webpack.config.dev.js';
import cors from 'cors';
import bodyParser from 'body-parser';

var app = express();
//add code to initialize compiler
// const compiler = webpack(config); 

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


//add middleware to compile befor running
// app.use(require('webpack-dev-middleware')(compiler,{
//     noInfo: true,
//     publicPath:config.output.publicPath
// }));

//eslint-disable-next-line no-console
app.listen(3000, () => console.log('listening on port 3000'));