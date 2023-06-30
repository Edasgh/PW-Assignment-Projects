const menu_bar = document.querySelector(".menu_bar");
const nav_list = document.querySelector(".nav-list");

menu_bar.addEventListener("click", () => {
  // menu_bar.classList.toggle("fa-caret-down")

  if (document.body.clientWidth >= 900) {
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
  if (this.document.body.clientWidth >= 900) {
    nav_list.style.display = "flex";
  }else{
    if (nav_list.style.display === "flex") {
        menu_bar.classList.add("fa-caret-down");
       
      } else {
        menu_bar.classList.remove("fa-caret-down");
       
      }
  }
});

if(document.body.clientWidth<900){
    if (nav_list.style.display === "flex") {
        menu_bar.classList.add("fa-caret-down");
       
      } else {
        menu_bar.classList.remove("fa-caret-down");
       
      }
  
}