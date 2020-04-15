require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const chalk = require('chalk');

const app = express();
const port = 3000;

app.use(
  cors(),
  bodyParser.urlencoded({extended: true}),
  bodyParser.json()
);

console.log(process.env.JWT_KEY);

app.get("/", (req, res) => {
  res.send("Hello world from new server");
});

app.listen(port, () => {
  console.log(`Listening on port: ${chalk.green(port)}`);
});