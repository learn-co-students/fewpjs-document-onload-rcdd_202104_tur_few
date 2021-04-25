// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    let result = document.getElementById("text").innerHTML = "This is really cool!";
    return result
  });
  console.log(document.getElementById("text").innerText)
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );