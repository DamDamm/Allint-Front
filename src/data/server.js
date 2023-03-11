import express from 'express';
import bodyParser from 'body-parser';
import jwt from 'express-jwt';
import jsonwebtoken from 'jsonwebtoken';
import axios from 'axios';

const products = import ('./MOCK_products.json');

const port = 3001;
const app = express();

app.use (bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  
  // response to preflight request
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  }
  else {
    next();
  }
});


app.listen(port, () => {
    console.log(`listening on *:${port}`);
  });