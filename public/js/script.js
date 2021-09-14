console.log("script.js");

async function login(e) {
  e.preventDefault();
  const username = document.getElementById("username-input").value;
  const password = document.getElementById("password-input").value;

  if (username === "" || password === "") return;

  // Make a POST request to the server
  const response = await fetch("/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.status === 200) {
    window.location.href = "/";
  } else {
    console.log("login failed");
  }
}

$(document).ready(function () {
  // Attach event handlers to buttons
  // prevent default behavior of buttons
  $("#login-button").click(login);
});
