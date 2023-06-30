const menu_bar = document.querySelector(".menu_bar");
const nav_list = document.querySelector(".nav-ul");

menu_bar.addEventListener("click", () => {

  if (document.body.clientWidth >= 950) {
    nav_list.style.display = "flex";
  } else {
    if (nav_list.style.display === "flex") {
      menu_bar.classList.remove("fa-caret-down");
      nav_list.style.display = "none";
    } else {
      menu_bar.classList.add("fa-caret-down");
      nav_list.style.display = "flex";
    }
  }
});

window.addEventListener("resize", () => {
  if (this.document.body.clientWidth >= 950) {
    nav_list.style.display = "flex";
  }else{
    if (nav_list.style.display === "flex") {
        menu_bar.classList.add("fa-caret-down");
       
      } else {
        menu_bar.classList.remove("fa-caret-down");
       
      }
  }
});

if(document.body.clientWidth<950){
    if (nav_list.style.display === "flex") {
        menu_bar.classList.add("fa-caret-down");
       
      } else {
        menu_bar.classList.remove("fa-caret-down");
       
      }
  
}