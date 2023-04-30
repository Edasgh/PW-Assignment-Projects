const button=document.getElementById("btn")

function changeColor() {
    let randomNumber = Math.floor(Math.random() * 16777215);
    let randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor=randomCode;
}

button.addEventListener("click",changeColor)