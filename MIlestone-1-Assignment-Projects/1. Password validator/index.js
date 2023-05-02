//getting all the required html elements
const form = document.getElementById("form");
const passWINput = document.getElementById("password");
const cPassWInput = document.getElementById("cpassword");
// log message to the console on typing in confirm-password input field
cPassWInput.addEventListener("keyup", () => {
  if (passWINput.value != cPassWInput.value) {
    console.log("Password didn't match. Password validation unsuccessful");
  } else {
    console.log("Password Matched. Password validation Successful.");
  }
});
