const express = require('express');
const { add, subtract } = require('./lib/numbers');
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacters,
  firstCharacter,
} = require('./lib/strings');

const app = express();

app.get('/strings/hello/:string', (req, res) => {
  res.status(200).json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  if (req.query.length) {
    res.status(200).json({ result: firstCharacters(req.params.string, req.query.length) });
  } else {
    res.status(200).json({ result: firstCharacter(req.params.string) });
  }
});

app.get('/numbers/add/:number/and/:number2', (req, res) => {
  if (isNaN(req.params.number) || isNaN(req.params.number2)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res
      .status(200)
      .json({ result: add(parseInt(req.params.number), parseInt(req.params.number2)) });
  }
});

app.get('/numbers/subtract/:number/from/:number2', (req, res) => {
  if (isNaN(req.params.number) || isNaN(req.params.number2)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res
      .status(200)
      .json({ result: subtract(parseInt(req.params.number2), parseInt(req.params.number)) });
  }
});

module.exports = app;
