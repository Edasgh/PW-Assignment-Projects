const button=document.querySelector(".clickMeBtn");
const textBlackh2=document.querySelector(".text-black");
button.addEventListener("dblclick",()=>{
    textBlackh2.classList.toggle("text-red");
alert("doubleClick event : you double clicked the button")
})
