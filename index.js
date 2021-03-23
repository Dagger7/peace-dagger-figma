import "./css/reset.css";
import "./css/style.scss";

import 'swiper/swiper-bundle.css';

import Flickity from "flickity";

new Flickity('#news', {
    cellSelector: '.news__item',
    cellAlign: "left",
    draggable: '>1',
    prevNextButtons: false,
    pageDots: false,
    contain: true,
});

const menu = document.querySelector(".menu");
const menuHidden = document.querySelectorAll(".menu--hidden");
const burger = document.querySelector(".header__burger");

window.addEventListener("load", () => checkWinSize());
window.addEventListener("resize", () => checkWinSize());

burger.addEventListener("click", () => {
    menu.classList.toggle("menu--hidden");
    menuHidden.forEach(elem => {
        elem.classList.toggle("menu--hidden");
    });
});

function checkWinSize() {
    const windowWidth = window.innerWidth;
    
    if (windowWidth <= 1130)
        menu.classList.add("menu--hidden");
    else {
        menu.classList.remove("menu--hidden");
    }
};