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
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    centeredSlides : true,
    speed: 600,
    autoplay: {
        delay: 4000,
        disableOnInteraction: true
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
    },
    breakpoints: {
        767: {
            slidesPerView: 3,
            loop: true,   
            centeredSlides : true,
            speed: 600,
            autoplay: {
                delay: 4000,
                disableOnInteraction: true
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets'
            },
        },
    },
 });