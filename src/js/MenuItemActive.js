var sections = document.querySelectorAll("section");

onscroll = function () {
  var scrollPosition = document.documentElement.scrollTop;

  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
      scrollPosition <
        section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
    ) {
      var currentId = section.attributes.id.value;
      removeAllActiveClasses(currentId);
      addActiveClass(currentId);
    }
  });
};

var removeAllActiveClasses = function () {
  document.querySelectorAll("nav li a").forEach((el) => {
    el.classList.remove("active");
   });
  
   document.querySelectorAll("nav ul li div").forEach((el) => {
    el.classList.remove("border-active");
  });

};



var addActiveClass = function (id) {
  var selector = document.querySelector(`nav li a[href="#${id}"]`) ;
  var selectorTwo = document.getElementById(id + "-menu");

  selector.classList.add("active");
  selectorTwo.classList.add('border-active');


};

var navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    var currentId = e.target.attributes.href.value;
    var section = document.querySelector(currentId);
    var sectionPos = section.offsetTop - 80;


    window.scroll({
      top: sectionPos,
    });
  });
});
