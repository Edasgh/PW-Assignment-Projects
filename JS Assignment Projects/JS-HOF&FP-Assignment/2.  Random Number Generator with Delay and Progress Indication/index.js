//delay period in miliseconds
let delay_in_miliseconds=3000 

// delay period in seconds
let delay_in_seconds=3000/1000 

// inititalize the second count
let secondSpent=1 

//setting a time interval to print every second the time remaining
let x = setInterval(() => {
    // calculating the remaining seconds
    let timeRemaining=delay_in_seconds-secondSpent
    // incrementing second count
    secondSpent++; 
if(timeRemaining<=0){
    // if the remaining time is 0 or negative then don't print anything and clear the time interval
  clearInterval(x);
  return
}
// printing the remaining time
   console.log(timeRemaining + " second(s) remaining");

}, 1000);

// the random number will be printed after 3 seconds
setTimeout(() => {
    // a random number between 1 to 100
    let randomNum=Math.floor(Math.random()*100) 
    console.log("The random number is : "+ randomNum)
}, delay_in_miliseconds);
