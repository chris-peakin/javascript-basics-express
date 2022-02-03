function negate(a) {
  return !a;
};

function both(a, b) {
  return a && b;
};

function either(a, b) {
  return a || b;
};

function none(a, b) {
  return !a && !b;
};

function one(a, b) {
  return (a && !b) || (!a && b);
};

function truthiness(a) {
  return !!a;
};

function isEqual(a, b) {
  return a === b;
};

function isGreaterThan(a, b) {
  return a > b;
};

function isLessThanOrEqualTo(a, b) {
  return a <= b;
};

function isOdd(a) {
  return (a % 2) > 0;
};

function isEven(a) {
  return (a % 2) === 0;
};

function isSquare(a) {
  return Number.isInteger(Math.sqrt(a));
};

function startsWith(char, string) {
  return (char === string.charAt(0));
};

function containsVowels(string) {
  /*Observed in another student's shared code.
  [aeiou]/i is a regular expression, searching for vowels (a, e, i , o and u)...
  ...in a case-insensitive way.
  [aeiouAEIOU] would also work, but is less elegant.
  test() searches for a match between the reg-ex and string...
  ...returning either true or false. */
  return /[aeiou]/i.test(string);
};

function isLowerCase(string) {
  return (string === string.toLowerCase());
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
