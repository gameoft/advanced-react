import express from 'express';
import config from './config';
import serverRender from './serverRender';
//const express = require('express');
//const config = require('./config');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
   //res.render('index', {answer: 42});

   const initialContent = serverRender();
   res.render('index', { initialContent });
    
});


app.listen(config.port, function listenHandler() {
  console.info(`Running on ${config.port}...`);
});
