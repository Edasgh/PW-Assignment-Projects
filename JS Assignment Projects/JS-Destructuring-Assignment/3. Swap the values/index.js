
// function to swap array values
function swapValues(x,y){
    // swapping array values by destructuring
    return [x,y]=[y,x]

}
// calling the function for x=5,y=10
let arr1=swapValues(5,10)
console.log(arr1) // [10,5]