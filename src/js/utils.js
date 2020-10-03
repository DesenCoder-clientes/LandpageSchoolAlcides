const selectorList = document.querySelectorAll('.list');

console.log(selectorList);

// const list = selectorList.length();
selectorList.forEach((item,index)=>{
  console.log(item);
  item.addEventListener("click", function onClick(event){
    console.log(event)
  })

})
