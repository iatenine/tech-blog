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

async function createPost(e) {
  e.preventDefault();
  const title = document.getElementById("post-title-area").value;
  const content = document.getElementById("post-content-area").value;

  // Make a POST request to the server
  const response = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({ title, content }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.status === 201) window.location.href = "/";
  else console.error("create post failed: ", response);
}

$(document).ready(function () {
  // Attach event handlers to buttons
  $("#login-button").click(login);
  $("#create-post-btn").click(createPost);
});
