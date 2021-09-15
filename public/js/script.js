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

  if (response.status === 201) window.location.reload();
  else console.error("create post failed: ", response);
}

async function postComment(e) {
  e.preventDefault();

  const content = document.getElementById("comment-content-area").value;
  const post_id = window.location.pathname.split("/")[2];

  // Make a POST request to the server
  const response = await fetch("/api/comments", {
    method: "POST",
    body: JSON.stringify({ content, post_id }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.status === 201) window.location.reload();
  else console.error("create comment failed: ", response);
}

async function registerUser(e) {
  e.preventDefault();

  const username = document.getElementById("register-username-input").value;
  const password = document.getElementById("register-password-input").value;
  const confirmPassword = document.getElementById("password-confirm").value;
  const email = document.getElementById("register-email-input").value;

  console.log(username, password, confirmPassword, email);

  if (password !== confirmPassword) {
    // Change background color of password input
    $("#register-password-input").css("background-color", "red");
    $("#password-confirm").css("background-color", "red");
    return;
  }

  // Create a user if passwords match and it makes sense
  const response = await fetch("/api/users", {
    method: "POST",
    body: JSON.stringify({ username, password, email }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.status === 201) window.location.href = "/";
  else console.error("register user failed: ", response);
}

function toggleForm() {
  if ($("#new-post-form").is(":visible"))
    $("#make-new-post-btn").text("Make a new post");
  else $("#make-new-post-btn").text("Hide Form");
  $("#new-post-form").toggle();
}

$(document).ready(function () {
  // Attach event handlers to buttons
  $("#login-button").click(login);
  $("#create-post-btn").click(createPost);
  $("#new-post-form").hide();
  $("#make-new-post-btn").click(toggleForm);
  $("#create-comment-btn").click(postComment);
  $("#register-button").click(registerUser);
});
