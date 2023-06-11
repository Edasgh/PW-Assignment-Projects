// array of integers
const arr1=[1,2,3,4,5,6,7,8,9,10]

// the function of making a number double

const doubledInteger = (num) => {
  return( num * 2);
};

// the function of making each element of an array double
const doubledArray = (arr, callbackFn) => {
  
   return arr.map((e)=>callbackFn(e))

};

// calling the function for arr1 array
console.log(doubledArray(arr1,doubledInteger))

/* OUTPUT :


[
   2,  4,  6,  8, 10,
  12, 14, 16, 18, 20
]


*/