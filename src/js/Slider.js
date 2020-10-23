let time = 5000;
let currentImageIndex = 0;
let images = document.querySelectorAll("#carousel img");
let indicator = document.querySelectorAll("#contentIndicators div");
let max = images.length;
let next = document.getElementById("next");
let prev = document.getElementById("prev");

function nextImage() {
  images[currentImageIndex].classList.remove("selected");
  indicator[currentImageIndex].classList.remove("actived");
  currentImageIndex++;
  if (currentImageIndex >= max) currentImageIndex = 0;
  images[currentImageIndex].classList.add("selected");
  indicator[currentImageIndex].classList.add("actived");
}

function start() {
  setInterval(() => {
    nextImage();
  }, time);
}

next.onclick = function () {
  images[currentImageIndex].classList.remove("selected");
  indicator[currentImageIndex].classList.remove("actived");
  currentImageIndex++;
  if (currentImageIndex >= max) currentImageIndex = 0;
  images[currentImageIndex].classList.add("selected");
  indicator[currentImageIndex].classList.add("actived");
  console.log("next");
};

prev.onclick = function () {
  images[currentImageIndex].classList.remove("selected");
  indicator[currentImageIndex].classList.remove("actived");
  currentImageIndex--;
  if (currentImageIndex <= 0) currentImageIndex = 3;
  images[currentImageIndex].classList.add("selected");
  indicator[currentImageIndex].classList.add("actived");
  console.log("prev");
};

window.addEventListener("load", start);
