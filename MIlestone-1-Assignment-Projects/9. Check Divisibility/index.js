// declaring prompt method
const prompt=require("prompt-sync")({sigint:true});
// taking input of 5 numbers from the user
let number1 = prompt("First number :");
let number2 = prompt("Second number :");
let number3 = prompt("Third number :");
let number4 = prompt("Fourth number :");
let number5 = prompt("Fifth number :");
//created an array of 5 numbers
let array = [number1, number2, number3, number4, number5];
// looping through each element of numbers array 
for (let i = 0; i < array.length; i++) {
  if (array[i] % 3 == 0 && array[i] % 2 != 0) {
    // printing the numbers which are divisible divisible by 3 but not by 2
    console.log(array[i])
  }else{
    continue
  }
}
