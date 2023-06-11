// the string
const str="hello, world!"

// the function to return the manipulated string
const logString=(maipulatedStr)=>{
 console.log(`The manipulated string is : ${maipulatedStr}`)
}

// the function to convert to uppercase along with a callback function
const manipulateString=(str,callbackFn)=>{

   let outputString="";

   for (let i = 0; i < str.length; i++) {
       outputString= outputString+str[i].toUpperCase();
    
   }

console.log(callbackFn(outputString))


}


manipulateString(str,logString)