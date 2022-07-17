let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.header__menu');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('menu-active');
})