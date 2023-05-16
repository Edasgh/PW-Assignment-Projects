// the string to be reversed
let input="string"
console.log("After 2 seconds")
function reverseAfterTwoSeconds(str){
    let stringArray=str.split("")
    let reverseArray=stringArray.reverse();
    let reversedString=reverseArray.join("");
    setTimeout(() => {
      console.log(reversedString)
    }, 2000);
}

reverseAfterTwoSeconds(input);