
const select=document.getElementById("car");
const days=document.getElementById("days");
const para=document.getElementById("para");
const form =document.querySelector(".container");

form.addEventListener("submit",(e)=>{
e.preventDefault();
// para.textContent=`${select.value} and ${days.value}`
if(days.value<0){
    para.textContent="Invalid day value"
}else{

    if(select.value=="Economy"){
        para.textContent=`Total cost is ${(days.value)*4000}`
}else if(select.value=="Midsize"){
    para.textContent=`Total cost is ${(days.value)*10000}`
}else{
    para.textContent=`Total cost is ${(days.value)*20000}`
}
}

})