(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.scss":
/*!*****************************!*\
  !*** ./assets/css/app.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _sb_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sb-admin */ "./assets/js/sb-admin.js");
/* harmony import */ var _sb_admin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sb_admin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swiper */ "./assets/js/swiper.js");
/* harmony import */ var _vlog_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vlog-menu */ "./assets/js/vlog-menu.js");
/* harmony import */ var _vlog_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vlog_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _datapicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datapicker */ "./assets/js/datapicker.js");
/* harmony import */ var _datapicker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_datapicker__WEBPACK_IMPORTED_MODULE_3__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you require will output into a single css file (app.css in this case)
__webpack_require__(/*! ../css/app.scss */ "./assets/css/app.scss");

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

global.$ = global.jQuery = $;

__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js"); // console.log('Hello Webpack Encore! Edit me in assets/js/app.js');
// import './youtube-player';






/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./assets/js/datapicker.js":
/*!*********************************!*\
  !*** ./assets/js/datapicker.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./assets/js/sb-admin.js":
/*!*******************************!*\
  !*** ./assets/js/sb-admin.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {(function ($) {
  "use strict"; // Start of use strict
  // Toggle the side navigation

  $("#sidebarToggle").on('click', function (e) {
    e.preventDefault();
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
  }); // Prevent the content wrapper from scrolling when the fixed side navigation hovered over

  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function (e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
          delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  }); // Scroll to top button appear

  $(document).on('scroll', function () {
    var scrollDistance = $(this).scrollTop();

    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  }); // Smooth scrolling using jQuery easing

  $(document).on('click', 'a.scroll-to-top', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1000, 'easeInOutExpo');
    event.preventDefault();
  });
})(jQuery); // End of use strict
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/swiper.js":
/*!*****************************!*\
  !*** ./assets/js/swiper.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/css/swiper.min.css */ "./node_modules/swiper/css/swiper.min.css");
/* harmony import */ var swiper_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");


var mySwiper = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"]('.swiper-container', {
  spaceBetween: 10,
  slidesPerView: 'auto',
  centeredSlides: false,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

/***/ }),

/***/ "./assets/js/vlog-menu.js":
/*!********************************!*\
  !*** ./assets/js/vlog-menu.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {// import 'hiraku/css/hiraku.min.css';
// import 'hiraku/js/jquery-hiraku.min.js';
// $(".js-offcanvas").hiraku({
//     btn: ".js-offcanvas-btn", 
//     fixedHeader: ".js-fixed-header", 
//     direction: "left" 
// });
$(function () {
  $('.menu-toggle').on('click', function () {
    $('.sw-Header_MainNavInner').toggleClass('open-btn');
    $('.sw-Side').toggleClass('open');
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NiLWFkbWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zd2lwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3Zsb2ctbWVudS5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiJCIsImdsb2JhbCIsImpRdWVyeSIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwidG9nZ2xlQ2xhc3MiLCJ3aW5kb3ciLCJ3aWR0aCIsImUwIiwib3JpZ2luYWxFdmVudCIsImRlbHRhIiwid2hlZWxEZWx0YSIsImRldGFpbCIsInNjcm9sbFRvcCIsImRvY3VtZW50Iiwic2Nyb2xsRGlzdGFuY2UiLCJmYWRlSW4iLCJmYWRlT3V0IiwiZXZlbnQiLCIkYW5jaG9yIiwic3RvcCIsImFuaW1hdGUiLCJhdHRyIiwib2Zmc2V0IiwidG9wIiwibXlTd2lwZXIiLCJTd2lwZXIiLCJzcGFjZUJldHdlZW4iLCJzbGlkZXNQZXJWaWV3IiwiY2VudGVyZWRTbGlkZXMiLCJsb29wIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7O0FBT0E7QUFDQUEsbUJBQU8sQ0FBQyw4Q0FBRCxDQUFQOztBQUVBLElBQU1DLENBQUMsR0FBR0QsbUJBQU8sQ0FBQyxvREFBRCxDQUFqQjs7QUFDQUUsTUFBTSxDQUFDRCxDQUFQLEdBQVdDLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQkYsQ0FBM0I7O0FBRUFELG1CQUFPLENBQUMsZ0VBQUQsQ0FBUCxDLENBRUE7QUFFQTs7O0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsK0NBQUMsVUFBU0Ms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QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgcmVxdWlyZSB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbnJlcXVpcmUoJy4uL2Nzcy9hcHAuc2NzcycpO1xuXG5jb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5nbG9iYWwuJCA9IGdsb2JhbC5qUXVlcnkgPSAkO1xuXG5yZXF1aXJlKCdib290c3RyYXAnKTtcblxuLy8gY29uc29sZS5sb2coJ0hlbGxvIFdlYnBhY2sgRW5jb3JlISBFZGl0IG1lIGluIGFzc2V0cy9qcy9hcHAuanMnKTtcblxuLy8gaW1wb3J0ICcuL3lvdXR1YmUtcGxheWVyJztcbmltcG9ydCAnLi9zYi1hZG1pbic7XG5pbXBvcnQgJy4vc3dpcGVyJztcbmltcG9ydCAnLi92bG9nLW1lbnUnO1xuaW1wb3J0ICcuL2RhdGFwaWNrZXInOyIsIihmdW5jdGlvbigkKSB7XG4gIFwidXNlIHN0cmljdFwiOyAvLyBTdGFydCBvZiB1c2Ugc3RyaWN0XG5cbiAgLy8gVG9nZ2xlIHRoZSBzaWRlIG5hdmlnYXRpb25cbiAgJChcIiNzaWRlYmFyVG9nZ2xlXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgJChcImJvZHlcIikudG9nZ2xlQ2xhc3MoXCJzaWRlYmFyLXRvZ2dsZWRcIik7XG4gICAgJChcIi5zaWRlYmFyXCIpLnRvZ2dsZUNsYXNzKFwidG9nZ2xlZFwiKTtcbiAgfSk7XG5cbiAgLy8gUHJldmVudCB0aGUgY29udGVudCB3cmFwcGVyIGZyb20gc2Nyb2xsaW5nIHdoZW4gdGhlIGZpeGVkIHNpZGUgbmF2aWdhdGlvbiBob3ZlcmVkIG92ZXJcbiAgJCgnYm9keS5maXhlZC1uYXYgLnNpZGViYXInKS5vbignbW91c2V3aGVlbCBET01Nb3VzZVNjcm9sbCB3aGVlbCcsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA3NjgpIHtcbiAgICAgIHZhciBlMCA9IGUub3JpZ2luYWxFdmVudCxcbiAgICAgICAgZGVsdGEgPSBlMC53aGVlbERlbHRhIHx8IC1lMC5kZXRhaWw7XG4gICAgICB0aGlzLnNjcm9sbFRvcCArPSAoZGVsdGEgPCAwID8gMSA6IC0xKSAqIDMwO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gU2Nyb2xsIHRvIHRvcCBidXR0b24gYXBwZWFyXG4gICQoZG9jdW1lbnQpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2Nyb2xsRGlzdGFuY2UgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xuICAgIGlmIChzY3JvbGxEaXN0YW5jZSA+IDEwMCkge1xuICAgICAgJCgnLnNjcm9sbC10by10b3AnKS5mYWRlSW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLnNjcm9sbC10by10b3AnKS5mYWRlT3V0KCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBTbW9vdGggc2Nyb2xsaW5nIHVzaW5nIGpRdWVyeSBlYXNpbmdcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ2Euc2Nyb2xsLXRvLXRvcCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyICRhbmNob3IgPSAkKHRoaXMpO1xuICAgICQoJ2h0bWwsIGJvZHknKS5zdG9wKCkuYW5pbWF0ZSh7XG4gICAgICBzY3JvbGxUb3A6ICgkKCRhbmNob3IuYXR0cignaHJlZicpKS5vZmZzZXQoKS50b3ApXG4gICAgfSwgMTAwMCwgJ2Vhc2VJbk91dEV4cG8nKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcblxufSkoalF1ZXJ5KTsgLy8gRW5kIG9mIHVzZSBzdHJpY3RcbiIsImltcG9ydCAnc3dpcGVyL2Nzcy9zd2lwZXIubWluLmNzcyc7XG5pbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlcic7XG5cbnZhciBteVN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXItY29udGFpbmVyJywgeyBcbiAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICBjZW50ZXJlZFNsaWRlczogZmFsc2UsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgICB9LFxuIH0pO1xuIiwiLy8gaW1wb3J0ICdoaXJha3UvY3NzL2hpcmFrdS5taW4uY3NzJztcbi8vIGltcG9ydCAnaGlyYWt1L2pzL2pxdWVyeS1oaXJha3UubWluLmpzJztcblxuLy8gJChcIi5qcy1vZmZjYW52YXNcIikuaGlyYWt1KHtcbi8vICAgICBidG46IFwiLmpzLW9mZmNhbnZhcy1idG5cIiwgXG4vLyAgICAgZml4ZWRIZWFkZXI6IFwiLmpzLWZpeGVkLWhlYWRlclwiLCBcbi8vICAgICBkaXJlY3Rpb246IFwibGVmdFwiIFxuLy8gfSk7XG5cbiQoZnVuY3Rpb24oKSB7XG4gICAgJCgnLm1lbnUtdG9nZ2xlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAkKCcuc3ctSGVhZGVyX01haW5OYXZJbm5lcicpLnRvZ2dsZUNsYXNzKCdvcGVuLWJ0bicpO1xuICAgICAkKCcuc3ctU2lkZScpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgfSk7XG59KTsiXSwic291cmNlUm9vdCI6IiJ9