let time = 5000;
let currentImageIndex = 0;
let images = document.querySelectorAll("#carousel img");
let max = images.length;
let next = document.getElementById("next");
let prev = document.getElementById("prev");

function nextImage() {
  images[currentImageIndex].classList.remove("selected");
  currentImageIndex++;
  if (currentImageIndex >= max) currentImageIndex = 0;
  images[currentImageIndex].classList.add("selected");
}

function start() {
  setInterval(() => {
    nextImage();
  }, time);
}

next.onclick = function () {
  images[currentImageIndex].classList.remove("selected");
  currentImageIndex++;
  if (currentImageIndex >= max) currentImageIndex = 0;
  images[currentImageIndex].classList.add("selected");
  console.log("next");
};

prev.onclick = function () {
  images[currentImageIndex].classList.remove("selected");
  currentImageIndex--;
  if (currentImageIndex <= 0) currentImageIndex = 3;
  images[currentImageIndex].classList.add("selected");
  console.log("prev");
};

window.addEventListener("load", start);
