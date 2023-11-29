// getting the menu-bar and the nav-list item
const menu_bar = document.querySelector(".menu_bar");
const nav_list = document.querySelector(".nav-list");

// on clicking the menubar, show the hidden nav-list to the user

menu_bar.addEventListener("click", () => {
  if (document.body.clientWidth >= 900) {
    nav_list.style.display = "flex";
  } else {
    // if the screen-width is less than 900px, then on showing the the hidden nav-list, the menu-bar should show the down arrow
    if (nav_list.style.display === "flex") {
      menu_bar.classList.remove("fa-caret-down");
      nav_list.style.display = "none";
    } else {
      menu_bar.classList.add("fa-caret-down");
      nav_list.style.display = "flex";
    }
  }
});

// if the user resizes the window
window.addEventListener("resize", () => {
  if (this.document.body.clientWidth >= 900) {
    nav_list.style.display = "flex";
  } else {
    if (nav_list.style.display === "flex") {
      // if the nav-list display is flex, menu-bar should show down-arrow
      menu_bar.classList.add("fa-caret-down");
    } else {
      // if the nav-list display is hidden, menu-bar should be as it is
      menu_bar.classList.remove("fa-caret-down");
    }
  }
});

// if the screen-width is less than 900px, then on showing the the hidden nav-list, the menu-bar should show the down arrow
if (document.body.clientWidth < 900) {
  if (nav_list.style.display === "flex") {
    menu_bar.classList.add("fa-caret-down");
  } else {
    menu_bar.classList.remove("fa-caret-down");
  }
}
