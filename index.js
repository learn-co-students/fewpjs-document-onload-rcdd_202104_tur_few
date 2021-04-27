// Your code goes here
const ele = document.getElementById("text");
document.addEventListener("DOMContentLoaded", function () {
  console.log("The DOM has loaded");
  ele.textContent = "This is really cool!";
});

console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered");
