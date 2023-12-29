async function loadData() {
  const userNm = document.querySelector(".userName");
  const bio = document.querySelector(".bio");
  const email_text = document.querySelector(".email-text");
  const token = document.cookie.slice(6);
  try {
    const response = await fetch("http://localhost:8080/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status !== 200) {
      window.location.href = "http://127.0.0.1:8080/Login/Login.html";
      console.log(response);
    }

    const { data } = await response.json();
    userNm.textContent = data.userName;
    bio.textContent = data.bio;
    email_text.textContent = data.email;
  } catch (error) {
    console.log(error.message);
    window.location.href = "http://127.0.0.1:8080/Login/Login.html";
  }
}

window.addEventListener("DOMContentLoaded", loadData);
