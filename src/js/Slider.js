let time = 2000,
  currentImageIndex = 0;

    images = document.querySelectorAll("#carousel img");

    max = images.length;

    console.log(max)


function nextImage() {
  images[currentImageIndex].classList.remove("selected");
  console.log(images[currentImageIndex])

  currentImageIndex++;

  if (currentImageIndex >= max)
    currentImageIndex = 0;
  
  images[currentImageIndex].classList.add("selected");

}

function start() {
  setTimeout(() => {
    nextImage();
  }, time);
}

window.addEventListener("load", start);
