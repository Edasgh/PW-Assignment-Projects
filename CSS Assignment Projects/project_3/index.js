const navList = document.querySelector(".nav_ul");
const menuBar = document.querySelector(".menu");

// onclick event on menubar
menuBar.addEventListener("click", function () {
  //if the screenWidth is 910px or above
  if (document.body.clientWidth >= 910) {
    navList.style.display = "flex";
  } else {
    if (navList.style.display === "none") {
      navList.style.display = "flex";
    } else {
      navList.style.display = "none";
    }
  }
});

// if user resizes the screen to check responsiveness
window.addEventListener("resize", function () {
  if (this.document.body.clientWidth >= 910) {
    navList.style.display = "flex";
  }
});
