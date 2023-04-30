const prompt=require("prompt-sync")({sigint:true});
let number1 = prompt("First number :");
let number2 = prompt("Second number :");
let number3 = prompt("Third number :");
let number4 = prompt("Fourth number :");
let number5 = prompt("Fifth number :");

let array = [number1, number2, number3, number4, number5];

for (let i = 0; i < array.length; i++) {
  if (array[i] % 3 == 0 && array[i] % 2 != 0) {
    console.log(array[i])
  }else{
    continue
  }
}
