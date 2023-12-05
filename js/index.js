var burger = document.querySelector(".burger");
var menu = document.querySelector(".header");
var body = document.querySelector("body");
var footer = document.querySelector("footer");
var button = document.querySelector(".contacts__button");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("menu-opened");
});
button.addEventListener("click", () => {
  footer.classList.toggle("change-bg-footer");
});
//-------------------Swiper--------------------------
const image_swiper = new Swiper(".image-slider", {
  spaceBetween: 250,
  autoplay: {
    delay: 1500,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  speed: 1000,

  loop: true,

  centeredSlides: true,
});
