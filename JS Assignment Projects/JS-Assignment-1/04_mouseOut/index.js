const container=document.querySelector(".container");
const h2=document.querySelector("h2");

container.addEventListener("mouseover",()=>{
    container.style.backgroundColor="blue"
    h2.innerText="Get the cursor out of here"
    h2.style.color="cyan"
})

container.addEventListener("mouseout",()=>{
    container.style.backgroundColor="black"
    h2.innerText="MouseOut event Worked"
    h2.style.color="cyan"
})