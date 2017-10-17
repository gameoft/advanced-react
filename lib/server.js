import express from 'express';
import config from './config';
import serverRender from 'renderers/server';
//const express = require('express');
//const config = require('./config');
import { data } from './testData';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  const initialContent = await serverRender();
  //console.info(`initialContent = ${initialContent}`);
  //const provadump = JSON.stringify(initialContent);
  //console.info(`provadump = ${provadump}`);

  res.render('index', { ...initialContent });
});

// app.get('/', async (req, res) => {
//   //res.render('index', {answer: 42});
//   const initialContent = await serverRender();
//   console.log(initialContent);
//   res.render('index', { ...initialContent });
// });

app.get('/data', (req, res) => {
  //console.info(`data = ${data.articles.length} articles`);
  res.send(data);
});


app.listen(config.port, function listenHandler() {
  console.info(`Running on ${config.port}...`);
});
