// creating a regular expression
let regExp= /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))/gi
// not done yet

let urlToTest="https://www.pwskills.com/"
let ndUrl="http://localhost:3000/auth/api"

console.log(regExp.test(ndUrl));
console.log(urlToTest.match(regExp));   

