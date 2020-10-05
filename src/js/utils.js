window.onscroll = function () {
  scrollMenuFixed();
};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function scrollMenuFixed() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
