const burgerBtn = document.getElementById('burger-icon');
const  el = document.getElementById('nav-container');
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

}