// creating a regular expression
let regExp = new RegExp(
  /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/gi
);

// the url to test
let url = "https://www.pwskills.com/";


let result= regExp.test(url);

console.log(result); // true
