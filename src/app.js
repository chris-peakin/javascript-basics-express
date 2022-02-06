const express = require('express');
const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacters,
  firstCharacter,
} = require('./lib/strings');
const { getNthElement } = require('./lib/arrays');

const app = express();

app.use(express.json());

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

app.post('/numbers/multiply', (req, res) => {
  if (req.body.a == null || req.body.b == null) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (isNaN(req.body.a) || isNaN(req.body.b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else if (req.body.a && req.body.b) {
    res.status(200).json({ result: multiply(req.body.a, req.body.b) });
  }
});

app.post('/numbers/divide', (req, res) => {
  if (req.body.a == null || req.body.b == null) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (isNaN(req.body.a) || isNaN(req.body.b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else if (req.body.b == 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (req.body.a == 0) {
    res.status(200).json({ result: 0 });
  } else if (req.body.a && req.body.b) {
    res.status(200).json({ result: divide(req.body.a, req.body.b) });
  }
});

app.post('/numbers/remainder', (req, res) => {
  if (req.body.a == null || req.body.b == null) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (isNaN(req.body.a) || isNaN(req.body.b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else if (req.body.b == 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (req.body.a == 0) {
    res.status(200).json({ result: 0 });
  } else if (req.body.a && req.body.b) {
    res.status(200).json({ result: remainder(req.body.a, req.body.b) });
  }
});

app.post('/arrays/element-at-index/2', (req, res) => {
  res.status(200).json({ result: getNthElement(req.body.index, req.body.array) });
});

module.exports = app;
