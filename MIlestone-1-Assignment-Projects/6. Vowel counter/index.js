// declaring prompt method
const prompt = require("prompt-sync")({ sigint: true });
const vowels = ["a", "e", "i", "o", "u"];
// taking input of name from the user
let name = prompt("Enter your name : ");

function countVowels(str) {
  //initialize count
  let count = 0;
  // loop through string to test if each character is a vowel
  //for every letter of name
  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
//return the number of vowels
  return count;
}

console.log("The number(s) of vowels in name is : " + countVowels(name));
