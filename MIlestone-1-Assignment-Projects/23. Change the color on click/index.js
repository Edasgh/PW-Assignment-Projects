// getting the button
const button=document.getElementById("btn")

//creating the changeColor function
function changeColor() {
    let randomNumber = Math.floor(Math.random() * 16777215); //randomnumber
    let randomCode = "#" + randomNumber.toString(16); // random hex color
 
    document.body.style.backgroundColor=randomCode // setting a random background color on button click

}

button.addEventListener("click",changeColor)