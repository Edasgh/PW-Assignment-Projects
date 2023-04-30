const container=document.querySelector(".container")
const h2=document.querySelector("h2")

container.addEventListener("mouseover",()=>{
    container.style.backgroundColor="green"
    h2.innerText="MouseOver Event"
    h2.style.color="cyan"
    
})
container.addEventListener("mouseout",()=>{
    container.style.backgroundColor="white"
    h2.innerText="Enter the cursor here"
    h2.style.color="black"
    
})
