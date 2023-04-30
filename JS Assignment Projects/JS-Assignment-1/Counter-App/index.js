// getting all the html elements
const valueSpan = document.getElementById("value");
const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
const resetButton = document.getElementById("reset");

let defaultValue=0; // default value of span

let valueSpanTextContent=Number(valueSpan.innerText)

// Incrementing number
incrementButton.addEventListener("click",()=>{
   let value=Number(valueSpan.innerText);
   valueSpan.innerText=value+1
});
//Decrementing number but not less than 0
decrementButton.addEventListener("click",()=>{
    let value=Number(valueSpan.innerText);
    if(value<=0){
        alert("Number can't be negative")
    }else{
        valueSpan.innerText=value-1

    }
});
//Resetting the value
resetButton.addEventListener("click",()=>{
   valueSpan.innerText=defaultValue
});