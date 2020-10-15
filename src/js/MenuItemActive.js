const menuItems2 = document.querySelectorAll("nav li a");

menuItems2.forEach((item) => {
  item.addEventListener("click", function onClick() {
    const id = item.getAttribute("id");

    menuItems2.forEach((item) => {
      if (id !== item.getAttribute("id")) {
        item.classList.remove("active");
      } else {
        item.classList.add("active");
      }
    });
  });
});