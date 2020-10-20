const menuItems = document.querySelectorAll('nav a[href^="#"]');
const sections = document.querySelectorAll("section");
const body = document.getElementsByTagName("body");

console.log(body);

window.onscroll = () => {
  console.log("..");
};

menuItems.forEach((item) => {
  item.addEventListener("click", function onClick(event) {
    event.preventDefault();

    spaceTop();

    const top = document.querySelector(event.target.getAttribute("href"))
      .offsetTop;

    window.scroll({
      top,
      behavior: "smooth",
    });
  });
});

const spaceTop = function () {
  sections.forEach((items) => {
    items.style.paddingTop = "80px";
  });
};
