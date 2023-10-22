
// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1
  }
  else if (num1 < num2) {
    return num2
  } else {
    return num1 || num2
  }
  
}


// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];


function findLongestWord(arrayWords) {
  let longestWord = "";
  if (arrayWords.length === 0){
    return null
  }
  else if (arrayWords.length === 1) {
    return arrayWords[0]
  } else {
    for (let i = 0; i < arrayWords.length; i++) {
    if (longestWord.length < arrayWords[i].length) {
      longestWord = arrayWords[i]
  }
    }
    return longestWord
  }
}




// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];


function sumNumbers(arrayNumbers) {
 let sum = 0;
 for (let i = 0; i < arrayNumbers.length; i++) {
  sum += arrayNumbers[i]
 }
 return sum
}





// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayAverage) {
  let sum = 0;
  for (let i = 0; i < arrayAverage.length; i++) {
    sum += arrayAverage[i]
  }
  const average = sum / arrayAverage.length;
  return average
}

const result = averageNumbers(numbersAvg);
console.log(result);


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(arrWords) {
  let totalLength = 0;
  for (let i = 0; i < arrWords.length; i++) {
    totalLength += arrWords[i].length;
  }
  const average = totalLength / arrWords.length;
  return average
}

const result = averageWordLength(words);
console.log(result);


// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(words) {
  const uniqueWords = [];

  for (let word of words) {
    if (!uniqueWords.includes(word)) {
      uniqueWords.push(word);
    }
  }

  return uniqueWords;
}


const uniqueWords = uniquifyArray(words)
console.log(uniqueWords)




// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(wordArray, searchWord) {
  for (let word of wordArray) {
    if (word === searchWord) {
      return true;
    }
  }
  return false; 
}

const words = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];


const searchWord = 'lokin';
const wordExists = doesWordExist(words, searchWord);
console.log(wordExists); 

