import express from 'express';
import cors from 'cors';
import React from 'react';
import { renderToString } from 'react-dom/server';
import NotFound from '@root/client/components/notFound/NotFound';

const footerLabels = {
  netflixRoulette: ["NETFLIX", "ROULETTE"],
}

const app = express();

app.use(cors());

//app.use(express.static(__dirname,'../client'));
app.use(express.static(__dirname));

app.get('*', (req, res, next) => {

  const css = new Set();
  //const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()));
  const markup = renderToString(

    <NotFound />
  )

  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
      <meta charset="utf-8">
      <title>Cinema-app-SSR</title>
      <style>
          @import url('https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap&subset=cyrillic');
      </style>
  </head>
  
  <body>
      <div id = "root">
        <div class = "app">
          ${markup}
        </div>   
      </div>
  </body>
  </html>
  `)
})

app.listen(3000, () => {
  console.log('Server is listening on port: 3000');
});