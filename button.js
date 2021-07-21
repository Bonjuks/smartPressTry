const menuBtn = document.querySelector('.hamburger__btn');
const searchBtn = document.querySelector('.search__btn')
const nav = document.querySelector('.nav__main');
const searchTablet = document.querySelector('.search__tablet')
const body = document.querySelector('body');

let menuOpen = false;
let searchOpen = false;
let size;
let check;

function canU() {
    size = window.innerWidth;
    if (size<=1000)check = true;else check=false;
}

window.addEventListener('resize', canU);
nav.classList.add('transition');
menuBtn.addEventListener('click', () => {
    if (searchOpen){
        menuBtn.classList.add('open');
        body.style.cssText = 'overflow: hidden;';
        nav.style.left = `${50}%`;
        menuOpen = true;
        searchBtn.classList.remove('open');
        searchTablet.style.left = `${-50}%`;
        searchOpen = false;
    }else if(!menuOpen) {
        menuBtn.classList.add('open');
        body.style.cssText = 'overflow: hidden;';
        nav.style.left = `${50}%`;
        menuOpen = true;
    }else {
        menuBtn.classList.remove('open');
        body.style.cssText = 'overflow: visible;';
        nav.style.left = `${-50}%`;
        menuOpen = false;
    }
});

searchTablet.classList.add('transition');
searchBtn.addEventListener('click', () =>{
    if (menuOpen && check){
            searchBtn.classList.add('open');
            body.style.cssText = 'overflow: hidden;';
            searchTablet.style.left = `${50}%`;
            searchOpen = true;
            menuBtn.classList.remove('open');
            nav.style.left = `${-50}%`;
            menuOpen = false;
    }else if (!searchOpen  && check) {
        searchBtn.classList.add('open');
        body.style.cssText = 'overflow: hidden;';
        searchTablet.style.left = `${50}%`;
        searchOpen = true;
    }else {
        searchBtn.classList.remove('open');
        body.style.cssText = 'overflow: visible;';
        searchTablet.style.left = `${-50}%`;
        searchOpen = false;
    }
});