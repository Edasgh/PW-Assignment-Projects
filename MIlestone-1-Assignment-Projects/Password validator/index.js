const form = document.getElementById("form");
const passWINput = document.getElementById("password");
const cPassWInput = document.getElementById("cpassword");

cPassWInput.addEventListener("keyup", () => {
  if (passWINput.value != cPassWInput.value) {
    console.log("Password didn't match. Password validation unsuccessful");
  } else {
    console.log("Password Matched. Password validation Successful.");
  }
});
