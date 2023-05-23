// creating a regexp
let regExp = new RegExp(
  /(?:https:\/\/www.linkedin.com\/in)\/(((\w+)(\d+)?)[-_])+[a-zA-Z,0-9]{4,29}/gi
);

//the linkedin url to test
let myLinkedinURL = "https://www.linkedin.com/in/eshita-das-68bb60259";


let result = regExp.test(myLinkedinURL);

console.log(result); // true

