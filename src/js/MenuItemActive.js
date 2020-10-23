var div = document.querySelectorAll("nav ul li div");
var a = document.querySelectorAll("nav li a");

div.forEach((items, divIndex) => {
  a.forEach((items, index) => {
    items.addEventListener("click", function activeLink() {
      if (index === divIndex) {
        div[divIndex].classList.add("border-active");
        a[divIndex].classList.add("active");
      } else {
        div[divIndex].classList.remove("border-active");
        a[divIndex].classList.remove("active");
      }
    });
  });
});
