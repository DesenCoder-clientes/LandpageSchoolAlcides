const menuItems = document.querySelectorAll('nav a[href^="#"]');
const sections = document.querySelectorAll("section");

menuItems.forEach((item) => {
  item.addEventListener("click", function onClick(event) {
    event.preventDefault();

    sections.forEach((items) => {
      items.style.paddingTop = "80px";
    });

    const top = document.querySelector(event.target.getAttribute("href"))
      .offsetTop;

    window.scroll({
      top,
      behavior: "smooth",
    });
  });
});

const scroll = function () {
  window.onscroll = () => {
    console.log("rolei");
    sections.forEach((items) => {
      items.style.paddingTop = "0";
    });
  };
};
