const getNthElement = (index, array) => {
  return array[index % array.length];
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
  return array;
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  console.log(array.splice(index, 1));
};

// Note: needed to make this below function as part of JS Basics Express
// The reason being that removeNthElement requires an index which
// may not be specified by the user in the query.

const removeFirstElement = array => {
  return array.slice(1);
};

const numbersToStrings = numbers => {
  return numbers.map(individual => {
    return individual.toString();
  });
};

const uppercaseWordsInArray = strings => {
  return strings.map(individual => {
    return individual.toUpperCase();
  });
};

const reverseWordsInArray = strings => {
  const reversedArray = [];
  for (let i = 0; i < strings.length; i += 1) {
    const currentWord = strings[i].split('');
    const reversedWord = currentWord.reverse();
    reversedArray.push(reversedWord.join(''));
  }
  return reversedArray;
};

const onlyEven = numbers => {
  return numbers.filter(individual => {
    return individual % 2 === 0;
  });
};

const removeNthElement2 = (index, array) => {
  const shorterArray = [...array];
  shorterArray.splice(index, 1);
  return shorterArray;
};

const elementsStartingWithAVowel = strings => {
  /* https://stackoverflow.com/questions/52028403/filter-array-of-strings-keeping-only-ones-starting-with-vowels
  /^[aeiou]/i is basically asking to match a/e/i/o/u at the start and the /i part makes it case-insensitive
  Those that don't begin with a vowel are .filter -ed out
  At this stage, still not 100% sure how this works entirely */
  return strings.filter(str => /^[aeiou]/i.test(str));
};

const removeSpaces = string => {
  let spacelessString = '';
  /* For loop rolls through every character in the string, checking that it's NOT an empty space
  Because it rolls through every character, sneaky spaces have nowhere to hide here
  If the character is NOT an empty space, it gets added to the spacelessString variable */
  for (i = 0; i < string.length; i += 1) {
    if (string[i] !== ' ') {
      spacelessString += string[i];
    }
  }
  return spacelessString;
};

const sumNumbers = numbers => {
  return numbers.reduce((a, b) => {
    return a + b;
  });
};

const sortByLastLetter = strings => {
  /* https://stackoverflow.com/questions/32491788/sort-strings-by-last-letter-alphabetically-in-javascript
  Nested function compares two elements in the strings array (a and b) */
  function endComparator(a, b) {
    /*  slice(-1) extracts the last character from each element (ie. -1 from the end)
    If the character value of a is less than that of b, -1 is returned.
    Likewise, 1 is returned if vice versa. 0 is returned if they're the same.
    (Character value is the numerical value assigned to that character) */
    if (a.slice(-1) < b.slice(-1)) return -1;
    if (a.slice(-1) > b.slice(-1)) return 1;
    return 0;
  }
  /* strings.sort(endComparator) applies the above function to the strings array.
  .sort sorts the contents of the strings array (post-function) alphabetically
  It does this by actually sorting them numerically because -1 has been returned
  for a last letter that is lower alphabetically, and 1 returned for one higher alphabetically.
  The array is then sorted from -1 to 1.
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort */
  return strings.sort(endComparator);
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  removeFirstElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter,
};
