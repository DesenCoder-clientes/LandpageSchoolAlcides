const selectorList = document.querySelectorAll('.list');

console.log(selectorList);

// const list = selectorList.length();
selectorList.forEach((item,index)=>{
  console.log(item);
  item.addEventListener("click", function onClick(event){
    console.log(event)
  })

})






window.onscroll = function() {scrollMenuFixed()};

var header = document.getElementById('header');
var sticky = header.offsetTop;

function scrollMenuFixed() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}