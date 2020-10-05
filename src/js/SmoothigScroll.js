/* SCROLL SUAVE DO LINK ÂNCORA */
const menuItems = document.querySelectorAll('.nav-bar a[href^="#"]');

menuItems.forEach((item) => {
  item.addEventListener("click", function onClick(event) {
    event.preventDefault();

    const top = document.querySelector(event.target.getAttribute("href"))
      .offsetTop;

    window.scroll({
      top,
      behavior: "smooth",
    });
  });
});
