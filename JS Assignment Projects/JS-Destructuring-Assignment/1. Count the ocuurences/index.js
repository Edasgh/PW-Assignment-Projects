//string to check for duplicate words
let string = "I am not gonna live forever but I wanna live while I am alive";


// function to count duplicate words in a string
function countDuplicateWords(InputString) {
    // initialize an object for displaying ocuurences as word : number-of-occurences key-value pair
  let obj = {};
  // create an array of words in the string
  let wordsArray=InputString.split(" ")
  // create an array which dosen't have any duplicate word
  let uniqueWordsArray = [...new Set(wordsArray)];
  // mapping through all the elements 
  uniqueWordsArray.map(
    // filtering the wordsArray 
    //if the elements match then , display the number of elements (number of duplicate words) in wordsArray
    (el) => (obj[el] = wordsArray.filter((elm) => elm === el).length)
  );
  // printing and returning the word:no.-of-occurences key-value pair object
  console.log("The numbers of occurences of each word : ", obj);
  return obj;
}

//calling the function and assigning the string as an input
countDuplicateWords(string)
/* The numbers of occurences of each word : {
  I: 3,
  am: 2,
  not: 1,
  gonna: 1,
  live: 2,
  forever: 1,
  but: 1,
  wanna: 1,
  while: 1,
  alive: 1
}
*/

