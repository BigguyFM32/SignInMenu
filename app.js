var btn = document.getElementsByClassName("btn");
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var error_message = document.getElementsByClassName("warning");

btn.addEventListener("click", submit());

function submit() {
  if (password == "password123") {
    alert("Password Submitted Successfully!");
  } else {
    error_message.style.display("block");
  }
}
