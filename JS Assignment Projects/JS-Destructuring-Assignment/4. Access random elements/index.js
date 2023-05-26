// array 
let numArr=[1,2,3,4,5]

// function to return the first , second and last element
function destr(arr){
    // destructutring the array
const { 0: first,1:second, [arr.length - 1]: last, ...rest } = arr;
// the output array with first , second and the last element
let outputArr=[first,second,last]
console.log(outputArr)
// returning the outputArray
return outputArr
}

// calling the function for numArr
destr(numArr); // [1,2,5]