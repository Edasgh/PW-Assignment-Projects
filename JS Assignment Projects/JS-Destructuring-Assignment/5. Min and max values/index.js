// array to use as an input value
let arr=[5,2,1,7,9]

// function to find the maximum and minimum value from an array
function findMinAndMax(InputArr){
    //max value
let maxVal= Math.max(...InputArr)
// min value
let minVal = Math.min(...InputArr)
// output to return
let outputObj = { max : maxVal , min :minVal }
return outputObj
}

// the min and max value of arr - array  from the function
let minAndMaxVal=findMinAndMax(arr);
console.log(minAndMaxVal) // { max: 9, min: 1 }