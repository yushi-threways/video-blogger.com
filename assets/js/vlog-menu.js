// import 'hiraku/css/hiraku.min.css';
// import 'hiraku/js/jquery-hiraku.min.js';

// $(".js-offcanvas").hiraku({
//     btn: ".js-offcanvas-btn", 
//     fixedHeader: ".js-fixed-header", 
//     direction: "left" 
// });

$(function() {
    $('.menu-toggle').on('click', function () {
        $('html').toggleClass('menu-opend');
        $('.sw-Header_MainNavInner').toggleClass('open-btn');
        $('.sw-Side').toggleClass('open');
    });
});