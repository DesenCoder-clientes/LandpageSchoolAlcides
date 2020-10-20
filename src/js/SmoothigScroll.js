const menuItems = document.querySelectorAll('nav a[href^="#"]');
const sections = document.querySelectorAll("section");

menuItems.forEach((item) => {
  item.addEventListener("click", function onClick(event) {
    event.preventDefault();

    spaceTop();

    console.log(event);

    const top = document.querySelector(event.target.getAttribute("href"))
      .offsetTop;

    window.scroll({
      top,
      behavior: "smooth",
    });
  });
});

const spaceTop = function () {
  console.log("clicou");
  sections.forEach((items) => {
    items.style.paddingTop = "80px";
  });
};
