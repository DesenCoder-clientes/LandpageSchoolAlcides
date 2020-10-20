var menu = document.querySelectorAll('nav a[href^="#"]');
var ul = document.querySelectorAll("nav ul");
var btn = document.getElementById("check");

btn.addEventListener("click", function onClick(event) {
  if (ul[0].style.left === "-100%" || ul[0].style.left === "") {
    ul[0].style.left = "0";
    console.log("entrei");
  } else {
    ul[0].style.left = "-100%";
  }
});

menu.forEach((item) => {
  item.addEventListener("click", function onClick(event) {
    if (ul[0].style.left === "-100%") {
      ul[0].style.left = "0";
    } else {
      ul[0].style.left = "-100%";
    }
  });
});
