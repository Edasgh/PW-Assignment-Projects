const signup_form = document.getElementById("sign-up");
const signup_nm = document.getElementById("signup-nm");
const signup_usrNm = document.getElementById("signup-usrNm");
const signup_eml = document.getElementById("signup-eml");
const signup_psw = document.getElementById("signup-psw");
const signup_bio = document.getElementById("signup-bio");

signup_form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const payload = {
    name: signup_nm.value,
    userName: signup_usrNm.value,
    email: signup_eml.value,
    password: signup_psw.value,
    bio: signup_bio.value,
  };

  try {
    const response = await fetch("http://localhost:8080/signup", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    const resData = await response.json();
    console.log(resData);
    window.location.href = "http://127.0.0.1:8080/Login/Login.html";
  } catch (error) {
    console.log(error.message);
  }
});
