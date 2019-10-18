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
