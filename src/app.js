const express = require('express');
const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacters,
  firstCharacter,
} = require('./lib/strings');
const {
  getNthElement,
  arrayToCSVString,
  addToArray,
  elementsStartingWithAVowel,
  removeFirstElement,
  removeNthElement2,
} = require('./lib/arrays');
const { negate, truthiness, isOdd, startsWith } = require('./lib/booleans');

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

function checkBothAreNumbers(req, res) {
  const num1 = Number(req.params.number);
  const num2 = Number(req.params.number2);
  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
}

app.get('/numbers/add/:number/and/:number2', (req, res) => {
  if (!checkBothAreNumbers(req, res)) {
    res
      .status(200)
      .json({ result: add(parseInt(req.params.number), parseInt(req.params.number2)) });
  }
});

app.get('/numbers/subtract/:number/from/:number2', (req, res) => {
  if (!checkBothAreNumbers(req, res)) {
    res
      .status(200)
      .json({ result: subtract(parseInt(req.params.number2), parseInt(req.params.number)) });
  }
});

function checkBothAreValidNumbers(req, res) {
  const num1 = Number(req.body.a);
  const num2 = Number(req.body.b);

  if (req.body.a == null || req.body.b == null) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(num1) || Number.isNaN(num2)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
}

app.post('/numbers/multiply', (req, res) => {
  if (!checkBothAreValidNumbers(req, res)) {
    res.status(200).json({ result: multiply(req.body.a, req.body.b) });
  }
});

function divisionFunction(req, res) {
  const num1 = Number(req.body.a);
  const num2 = Number(req.body.b);

  if (req.body.a == null || req.body.b == null) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(num1) || Number.isNaN(num2)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else if (req.body.b == 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (req.body.a == 0) {
    res.status(200).json({ result: 0 });
  }
}

app.post('/numbers/divide', (req, res) => {
  if (!divisionFunction(req, res)) {
    res.status(200).json({ result: divide(req.body.a, req.body.b) });
  }
});

app.post('/numbers/remainder', (req, res) => {
  if (!divisionFunction(req, res)) {
    res.status(200).json({ result: remainder(req.body.a, req.body.b) });
  }
});

app.post('/arrays/element-at-index/:index', (req, res) => {
  res.status(200).json({ result: getNthElement(req.params.index, req.body.array) });
});

app.post('/arrays/to-string', (req, res) => {
  res.status(200).json({ result: arrayToCSVString(req.body.array) });
});

app.post('/arrays/append', (req, res) => {
  res.status(200).json({ result: addToArray(req.body.value, req.body.array) });
});

app.post('/arrays/starts-with-vowel', (req, res) => {
  res.status(200).json({ result: elementsStartingWithAVowel(req.body.array) });
});

app.post('/arrays/remove-element?:index', (req, res) => {
  if (!req.query.index) {
    res.status(200).json({ result: removeFirstElement(req.body.array) });
  } else {
    res.status(200).json({ result: removeNthElement2(req.query.index, req.body.array) });
  }
});

app.post('/booleans/negate', (req, res) => {
  res.status(200).json({ result: negate(req.body.value) });
});

app.post('/booleans/truthiness', (req, res) => {
  res.status(200).json({ result: truthiness(req.body.value) });
});

app.get('/booleans/is-odd/:number', (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  } else {
    res.status(200).json({ result: isOdd(req.params.number) });
  }
});

app.get('/booleans/:string/starts-with/:character', (req, res) => {
  if (req.params.character.length > 1) {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  } else {
    res.status(200).json({ result: startsWith(req.params.character, req.params.string) });
  }
});

module.exports = app;
