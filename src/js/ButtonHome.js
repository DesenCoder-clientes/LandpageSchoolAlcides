var image = document.querySelectorAll("label .logo");

image.forEach((item) => {
  item.addEventListener("click", function onClick(event) {
    event.preventDefault();

    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });
});
