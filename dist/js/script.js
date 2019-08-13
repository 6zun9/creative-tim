const burgerBtn = document.getElementById('burger-icon');
const  el = document.getElementById('nav-container');
const header = document.querySelector('.header');
burgerBtn.addEventListener('click',showMenu);

function showMenu (){
el.classList.toggle('header__nav-container--open');
burgerBtn.classList.toggle('header__menu-btn--open');
}

//remove the sidebar other than mobiles
window.addEventListener('resize',windowResize);

function windowResize(){
    if(window.innerWidth > 576){
        el.classList.remove('header__nav-container--open');
    }
    //removes header background if browser resizes to mobile device
    // if(window.innerWidth < 768){
    //     if(header.classList.contains('header--scroll')){
    //         header.classList.remove('header--scroll');
    //     }
    // }



}

window.onscroll = function() {changeHeaderColor()}; //adds  background white on scroll to fixed header

function changeHeaderColor() {
        if (document.documentElement.scrollTop > header.style.height) {
            header.classList.add('header--scroll');
        }
        else {
            header.classList.remove('header--scroll');
        }
}