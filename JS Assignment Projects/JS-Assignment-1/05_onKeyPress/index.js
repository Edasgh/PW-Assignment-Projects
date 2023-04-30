const container=document.querySelector(".container");
const textInput=document.querySelector("#text");
const typed_text=document.getElementById("typed-text")

textInput.addEventListener('keypress', function(e){
    typed_text.innerText = e.key
})