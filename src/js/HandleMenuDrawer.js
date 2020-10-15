const button = document.getElementById('btn-menu')
const menuDrawer = document.getElementById('buttons')

button.addEventListener("click", (e) => toggle(e))

menuItems2.forEach((item) => {
	if(window.matchMedia("(max-width: 500px)").matches){
		item.addEventListener("click", (e) => toggle(e));
	}
});

function toggle(e){
	e.preventDefault()
	if(menuDrawer.style.transform === 'translateX(100%)'){
		menuDrawer.style.transform = 'translateX(0)'
	}else{
		menuDrawer.style.transform = 'translateX(100%)'
	} 
}