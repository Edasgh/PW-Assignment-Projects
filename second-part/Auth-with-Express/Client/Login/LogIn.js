const login_form = document.getElementById("login");
const login_eml = document.getElementById("login-eml");
const login_psw = document.getElementById("login-psw");

login_form.onsubmit = async function (e) {
  e.preventDefault();

  const payload = {
    email: login_eml.value,
    password: login_psw.value,
  };

  try {
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    const respData = await response.json();
    const token = respData.token;

    document.cookie = `token=${token}; expires=Sat, 30th Dec 2023 12:00:00 UTC; path=/`;
    window.location.href = "http://127.0.0.1:8080/index.html";
  } catch (error) {
    console.log(error.message);
  }
};
