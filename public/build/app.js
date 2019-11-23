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
/* harmony import */ var _favorite_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./favorite-post */ "./assets/js/favorite-post.js");
/* harmony import */ var _favorite_post__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_favorite_post__WEBPACK_IMPORTED_MODULE_4__);
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

/***/ "./assets/js/favorite-post.js":
/*!************************************!*\
  !*** ./assets/js/favorite-post.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {jQuery(function ($) {
  $(".post-Item_Favorite").click(function (e) {
    e.preventDefault();
    var $this = $(this);

    if ($this.hasClass('post-favorite')) {
      var url = $(this).data('add-url');
      $.ajax({
        type: 'POST',
        url: url
      }).then(function (res) {
        // $this.text('favorited');
        $this.removeClass('post-favorite');
        $this.addClass('post-favorited');
        console.log(res);
      });
    } else {
      var _url = $(this).data('remove-url');

      $.ajax({
        type: 'POST',
        url: _url
      }).then(function (res) {
        $this.addClass('post-favorite');
        $this.removeClass('post-favorited');
        console.log(res);
      });
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

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
var mySwiper = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"]('.top-swiper-container', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  centeredSlides: true,
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
      centeredSlides: true,
      speed: 600,
      autoplay: {
        delay: 4000,
        disableOnInteraction: true
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
      }
    }
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
    $('html').toggleClass('menu-opend');
    $('.sw-Header_MainNavInner').toggleClass('open-btn');
    $('.sw-Side').toggleClass('open');
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2Zhdm9yaXRlLXBvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NiLWFkbWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zd2lwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3Zsb2ctbWVudS5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiJCIsImdsb2JhbCIsImpRdWVyeSIsImNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiJHRoaXMiLCJoYXNDbGFzcyIsInVybCIsImRhdGEiLCJhamF4IiwidHlwZSIsInRoZW4iLCJyZXMiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiY29uc29sZSIsImxvZyIsIm9uIiwidG9nZ2xlQ2xhc3MiLCJ3aW5kb3ciLCJ3aWR0aCIsImUwIiwib3JpZ2luYWxFdmVudCIsImRlbHRhIiwid2hlZWxEZWx0YSIsImRldGFpbCIsInNjcm9sbFRvcCIsImRvY3VtZW50Iiwic2Nyb2xsRGlzdGFuY2UiLCJmYWRlSW4iLCJmYWRlT3V0IiwiZXZlbnQiLCIkYW5jaG9yIiwic3RvcCIsImFuaW1hdGUiLCJhdHRyIiwib2Zmc2V0IiwidG9wIiwibXlTd2lwZXIiLCJTd2lwZXIiLCJzcGFjZUJldHdlZW4iLCJzbGlkZXNQZXJWaWV3IiwiY2VudGVyZWRTbGlkZXMiLCJsb29wIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsInNwZWVkIiwiYXV0b3BsYXkiLCJkZWxheSIsImRpc2FibGVPbkludGVyYWN0aW9uIiwicGFnaW5hdGlvbiIsImVsIiwiYnJlYWtwb2ludHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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ZXh0cmFjdC1wbHVnaW4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgcmVxdWlyZSB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbnJlcXVpcmUoJy4uL2Nzcy9hcHAuc2NzcycpO1xuXG5jb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5nbG9iYWwuJCA9IGdsb2JhbC5qUXVlcnkgPSAkO1xuXG5yZXF1aXJlKCdib290c3RyYXAnKTtcblxuLy8gY29uc29sZS5sb2coJ0hlbGxvIFdlYnBhY2sgRW5jb3JlISBFZGl0IG1lIGluIGFzc2V0cy9qcy9hcHAuanMnKTtcblxuLy8gaW1wb3J0ICcuL3lvdXR1YmUtcGxheWVyJztcbmltcG9ydCAnLi9zYi1hZG1pbic7XG5pbXBvcnQgJy4vc3dpcGVyJztcbmltcG9ydCAnLi92bG9nLW1lbnUnO1xuaW1wb3J0ICcuL2RhdGFwaWNrZXInO1xuaW1wb3J0ICcuL2Zhdm9yaXRlLXBvc3QnOyIsImpRdWVyeShmdW5jdGlvbigkKXtcbiAgICAkKFwiLnBvc3QtSXRlbV9GYXZvcml0ZVwiKS5jbGljayhmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgJHRoaXMgPSAkKHRoaXMpO1xuXG4gICAgICAgIGlmICgoJHRoaXMpLmhhc0NsYXNzKCdwb3N0LWZhdm9yaXRlJykpIHtcbiAgICAgICAgICAgIGxldCB1cmwgPSAkKHRoaXMpLmRhdGEoJ2FkZC11cmwnKTtcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIHVybDogdXJsXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlcyl7XG4gICAgICAgICAgICAgICAgLy8gJHRoaXMudGV4dCgnZmF2b3JpdGVkJyk7XG4gICAgICAgICAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoJ3Bvc3QtZmF2b3JpdGUnKTtcbiAgICAgICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygncG9zdC1mYXZvcml0ZWQnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgdXJsID0gJCh0aGlzKS5kYXRhKCdyZW1vdmUtdXJsJyk7XG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICB1cmw6IHVybFxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXMpe1xuICAgICAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKCdwb3N0LWZhdm9yaXRlJyk7XG4gICAgICAgICAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoJ3Bvc3QtZmF2b3JpdGVkJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcblxuIiwiKGZ1bmN0aW9uKCQpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7IC8vIFN0YXJ0IG9mIHVzZSBzdHJpY3RcblxuICAvLyBUb2dnbGUgdGhlIHNpZGUgbmF2aWdhdGlvblxuICAkKFwiI3NpZGViYXJUb2dnbGVcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkKFwiYm9keVwiKS50b2dnbGVDbGFzcyhcInNpZGViYXItdG9nZ2xlZFwiKTtcbiAgICAkKFwiLnNpZGViYXJcIikudG9nZ2xlQ2xhc3MoXCJ0b2dnbGVkXCIpO1xuICB9KTtcblxuICAvLyBQcmV2ZW50IHRoZSBjb250ZW50IHdyYXBwZXIgZnJvbSBzY3JvbGxpbmcgd2hlbiB0aGUgZml4ZWQgc2lkZSBuYXZpZ2F0aW9uIGhvdmVyZWQgb3ZlclxuICAkKCdib2R5LmZpeGVkLW5hdiAuc2lkZWJhcicpLm9uKCdtb3VzZXdoZWVsIERPTU1vdXNlU2Nyb2xsIHdoZWVsJywgZnVuY3Rpb24oZSkge1xuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDc2OCkge1xuICAgICAgdmFyIGUwID0gZS5vcmlnaW5hbEV2ZW50LFxuICAgICAgICBkZWx0YSA9IGUwLndoZWVsRGVsdGEgfHwgLWUwLmRldGFpbDtcbiAgICAgIHRoaXMuc2Nyb2xsVG9wICs9IChkZWx0YSA8IDAgPyAxIDogLTEpICogMzA7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBTY3JvbGwgdG8gdG9wIGJ1dHRvbiBhcHBlYXJcbiAgJChkb2N1bWVudCkub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY3JvbGxEaXN0YW5jZSA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XG4gICAgaWYgKHNjcm9sbERpc3RhbmNlID4gMTAwKSB7XG4gICAgICAkKCcuc2Nyb2xsLXRvLXRvcCcpLmZhZGVJbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcuc2Nyb2xsLXRvLXRvcCcpLmZhZGVPdXQoKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFNtb290aCBzY3JvbGxpbmcgdXNpbmcgalF1ZXJ5IGVhc2luZ1xuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnYS5zY3JvbGwtdG8tdG9wJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgJGFuY2hvciA9ICQodGhpcyk7XG4gICAgJCgnaHRtbCwgYm9keScpLnN0b3AoKS5hbmltYXRlKHtcbiAgICAgIHNjcm9sbFRvcDogKCQoJGFuY2hvci5hdHRyKCdocmVmJykpLm9mZnNldCgpLnRvcClcbiAgICB9LCAxMDAwLCAnZWFzZUluT3V0RXhwbycpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xuXG59KShqUXVlcnkpOyAvLyBFbmQgb2YgdXNlIHN0cmljdFxuIiwiaW1wb3J0ICdzd2lwZXIvY3NzL3N3aXBlci5taW4uY3NzJztcbmltcG9ydCBTd2lwZXIgZnJvbSAnc3dpcGVyJztcblxudmFyIG15U3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXInLCB7IFxuICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxuICAgIGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcbiAgICBsb29wOiB0cnVlLFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxuICAgIH0sXG4gfSk7XG5cbiB2YXIgbXlTd2lwZXIgPSBuZXcgU3dpcGVyKCcudG9wLXN3aXBlci1jb250YWluZXInLCB7IFxuICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgc3BhY2VCZXR3ZWVuOiAwLFxuICAgIGxvb3A6IHRydWUsXG4gICAgY2VudGVyZWRTbGlkZXMgOiB0cnVlLFxuICAgIHNwZWVkOiA2MDAsXG4gICAgYXV0b3BsYXk6IHtcbiAgICAgICAgZGVsYXk6IDQwMDAsXG4gICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiB0cnVlXG4gICAgfSxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcbiAgICAgICAgdHlwZTogJ2J1bGxldHMnXG4gICAgfSxcbiAgICBicmVha3BvaW50czoge1xuICAgICAgICA3Njc6IHtcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgICAgICBsb29wOiB0cnVlLCAgIFxuICAgICAgICAgICAgY2VudGVyZWRTbGlkZXMgOiB0cnVlLFxuICAgICAgICAgICAgc3BlZWQ6IDYwMCxcbiAgICAgICAgICAgIGF1dG9wbGF5OiB7XG4gICAgICAgICAgICAgICAgZGVsYXk6IDQwMDAsXG4gICAgICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdidWxsZXRzJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuIH0pOyIsIi8vIGltcG9ydCAnaGlyYWt1L2Nzcy9oaXJha3UubWluLmNzcyc7XG4vLyBpbXBvcnQgJ2hpcmFrdS9qcy9qcXVlcnktaGlyYWt1Lm1pbi5qcyc7XG5cbi8vICQoXCIuanMtb2ZmY2FudmFzXCIpLmhpcmFrdSh7XG4vLyAgICAgYnRuOiBcIi5qcy1vZmZjYW52YXMtYnRuXCIsIFxuLy8gICAgIGZpeGVkSGVhZGVyOiBcIi5qcy1maXhlZC1oZWFkZXJcIiwgXG4vLyAgICAgZGlyZWN0aW9uOiBcImxlZnRcIiBcbi8vIH0pO1xuXG4kKGZ1bmN0aW9uKCkge1xuICAgICQoJy5tZW51LXRvZ2dsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnaHRtbCcpLnRvZ2dsZUNsYXNzKCdtZW51LW9wZW5kJyk7XG4gICAgICAgICQoJy5zdy1IZWFkZXJfTWFpbk5hdklubmVyJykudG9nZ2xlQ2xhc3MoJ29wZW4tYnRuJyk7XG4gICAgICAgICQoJy5zdy1TaWRlJykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICB9KTtcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=