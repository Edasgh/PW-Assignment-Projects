// array of numbers
let numbersArray = [
  1, 2, 4, 3, 5, 3, 4, 2, 6, 7, 9, 9, 8, 4, 5, 0, 1, 8, 9, 10, 22, 12, 14, 22,
  10, 18, 14, 12, 32, 14, 23
];

// function to remove duplicate numbers
function removeDuplicateNums(numsArray) {
  let setOfUniqueNums = new Set(numsArray);
  // returning the array of unique numbers
  let arrayOfUniqueNums=[...setOfUniqueNums];
  return arrayOfUniqueNums;
}

console.log(removeDuplicateNums(numbersArray)); 
//output

/*
[
  1,  2,  4,  3,  5,  6,  7,
  9,  8,  0, 10, 22, 12, 14,
 18, 32, 23
]

*/