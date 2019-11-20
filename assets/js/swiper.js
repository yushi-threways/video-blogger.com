import 'swiper/css/swiper.min.css';
import Swiper from 'swiper';

var mySwiper = new Swiper('.swiper-container', { 
    spaceBetween: 10,
    slidesPerView: 'auto',
    centeredSlides: false,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
 });

 var mySwiper = new Swiper('.top-swiper-container', { 
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,   
    centeredSlides : false,
    speed: 600,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: true
    // },
    breakpoints: {
        767: {
          slidesPerView: 1,
        }
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
 });