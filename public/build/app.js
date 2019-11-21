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
  slidesPerView: 3,
  spaceBetween: 0,
  loop: true,
  centeredSlides: false,
  speed: 600,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  // autoplay: {
  //     delay: 3000,
  //     disableOnInteraction: true
  // },
  breakpoints: {
    767: {
      slidesPerView: 1
    }
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2Zhdm9yaXRlLXBvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NiLWFkbWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zd2lwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3Zsb2ctbWVudS5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiJCIsImdsb2JhbCIsImpRdWVyeSIsImNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiJHRoaXMiLCJoYXNDbGFzcyIsInVybCIsImRhdGEiLCJhamF4IiwidHlwZSIsInRoZW4iLCJyZXMiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiY29uc29sZSIsImxvZyIsIm9uIiwidG9nZ2xlQ2xhc3MiLCJ3aW5kb3ciLCJ3aWR0aCIsImUwIiwib3JpZ2luYWxFdmVudCIsImRlbHRhIiwid2hlZWxEZWx0YSIsImRldGFpbCIsInNjcm9sbFRvcCIsImRvY3VtZW50Iiwic2Nyb2xsRGlzdGFuY2UiLCJmYWRlSW4iLCJmYWRlT3V0IiwiZXZlbnQiLCIkYW5jaG9yIiwic3RvcCIsImFuaW1hdGUiLCJhdHRyIiwib2Zmc2V0IiwidG9wIiwibXlTd2lwZXIiLCJTd2lwZXIiLCJzcGFjZUJldHdlZW4iLCJzbGlkZXNQZXJWaWV3IiwiY2VudGVyZWRTbGlkZXMiLCJsb29wIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7OztBQU9BO0FBQ0FBLG1CQUFPLENBQUMsOENBQUQsQ0FBUDs7QUFFQSxJQUFNQyxDQUFDLEdBQUdELG1CQUFPLENBQUMsb0RBQUQsQ0FB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QUFZO0FBQ3pDbEIsS0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJtQixXQUE3QixDQUF5QyxVQUF6QztBQUNBbkIsS0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjbUIsV0FBZCxDQUEwQixNQUExQjtBQUNBLEdBSEQ7QUFJSCxDQUxBLENBQUQsQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgcmVxdWlyZSB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbnJlcXVpcmUoJy4uL2Nzcy9hcHAuc2NzcycpO1xuXG5jb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5nbG9iYWwuJCA9IGdsb2JhbC5qUXVlcnkgPSAkO1xuXG5yZXF1aXJlKCdib290c3RyYXAnKTtcblxuLy8gY29uc29sZS5sb2coJ0hlbGxvIFdlYnBhY2sgRW5jb3JlISBFZGl0IG1lIGluIGFzc2V0cy9qcy9hcHAuanMnKTtcblxuLy8gaW1wb3J0ICcuL3lvdXR1YmUtcGxheWVyJztcbmltcG9ydCAnLi9zYi1hZG1pbic7XG5pbXBvcnQgJy4vc3dpcGVyJztcbmltcG9ydCAnLi92bG9nLW1lbnUnO1xuaW1wb3J0ICcuL2RhdGFwaWNrZXInO1xuaW1wb3J0ICcuL2Zhdm9yaXRlLXBvc3QnOyIsImpRdWVyeShmdW5jdGlvbigkKXtcbiAgICAkKFwiLnBvc3QtSXRlbV9GYXZvcml0ZVwiKS5jbGljayhmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgJHRoaXMgPSAkKHRoaXMpO1xuXG4gICAgICAgIGlmICgoJHRoaXMpLmhhc0NsYXNzKCdwb3N0LWZhdm9yaXRlJykpIHtcbiAgICAgICAgICAgIGxldCB1cmwgPSAkKHRoaXMpLmRhdGEoJ2FkZC11cmwnKTtcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIHVybDogdXJsXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlcyl7XG4gICAgICAgICAgICAgICAgLy8gJHRoaXMudGV4dCgnZmF2b3JpdGVkJyk7XG4gICAgICAgICAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoJ3Bvc3QtZmF2b3JpdGUnKTtcbiAgICAgICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygncG9zdC1mYXZvcml0ZWQnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgdXJsID0gJCh0aGlzKS5kYXRhKCdyZW1vdmUtdXJsJyk7XG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICB1cmw6IHVybFxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXMpe1xuICAgICAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKCdwb3N0LWZhdm9yaXRlJyk7XG4gICAgICAgICAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoJ3Bvc3QtZmF2b3JpdGVkJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcblxuIiwiKGZ1bmN0aW9uKCQpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7IC8vIFN0YXJ0IG9mIHVzZSBzdHJpY3RcblxuICAvLyBUb2dnbGUgdGhlIHNpZGUgbmF2aWdhdGlvblxuICAkKFwiI3NpZGViYXJUb2dnbGVcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkKFwiYm9keVwiKS50b2dnbGVDbGFzcyhcInNpZGViYXItdG9nZ2xlZFwiKTtcbiAgICAkKFwiLnNpZGViYXJcIikudG9nZ2xlQ2xhc3MoXCJ0b2dnbGVkXCIpO1xuICB9KTtcblxuICAvLyBQcmV2ZW50IHRoZSBjb250ZW50IHdyYXBwZXIgZnJvbSBzY3JvbGxpbmcgd2hlbiB0aGUgZml4ZWQgc2lkZSBuYXZpZ2F0aW9uIGhvdmVyZWQgb3ZlclxuICAkKCdib2R5LmZpeGVkLW5hdiAuc2lkZWJhcicpLm9uKCdtb3VzZXdoZWVsIERPTU1vdXNlU2Nyb2xsIHdoZWVsJywgZnVuY3Rpb24oZSkge1xuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDc2OCkge1xuICAgICAgdmFyIGUwID0gZS5vcmlnaW5hbEV2ZW50LFxuICAgICAgICBkZWx0YSA9IGUwLndoZWVsRGVsdGEgfHwgLWUwLmRldGFpbDtcbiAgICAgIHRoaXMuc2Nyb2xsVG9wICs9IChkZWx0YSA8IDAgPyAxIDogLTEpICogMzA7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBTY3JvbGwgdG8gdG9wIGJ1dHRvbiBhcHBlYXJcbiAgJChkb2N1bWVudCkub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY3JvbGxEaXN0YW5jZSA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XG4gICAgaWYgKHNjcm9sbERpc3RhbmNlID4gMTAwKSB7XG4gICAgICAkKCcuc2Nyb2xsLXRvLXRvcCcpLmZhZGVJbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcuc2Nyb2xsLXRvLXRvcCcpLmZhZGVPdXQoKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFNtb290aCBzY3JvbGxpbmcgdXNpbmcgalF1ZXJ5IGVhc2luZ1xuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnYS5zY3JvbGwtdG8tdG9wJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgJGFuY2hvciA9ICQodGhpcyk7XG4gICAgJCgnaHRtbCwgYm9keScpLnN0b3AoKS5hbmltYXRlKHtcbiAgICAgIHNjcm9sbFRvcDogKCQoJGFuY2hvci5hdHRyKCdocmVmJykpLm9mZnNldCgpLnRvcClcbiAgICB9LCAxMDAwLCAnZWFzZUluT3V0RXhwbycpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xuXG59KShqUXVlcnkpOyAvLyBFbmQgb2YgdXNlIHN0cmljdFxuIiwiaW1wb3J0ICdzd2lwZXIvY3NzL3N3aXBlci5taW4uY3NzJztcbmltcG9ydCBTd2lwZXIgZnJvbSAnc3dpcGVyJztcblxudmFyIG15U3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXInLCB7IFxuICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxuICAgIGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcbiAgICBsb29wOiB0cnVlLFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxuICAgIH0sXG4gfSk7XG4iLCIvLyBpbXBvcnQgJ2hpcmFrdS9jc3MvaGlyYWt1Lm1pbi5jc3MnO1xuLy8gaW1wb3J0ICdoaXJha3UvanMvanF1ZXJ5LWhpcmFrdS5taW4uanMnO1xuXG4vLyAkKFwiLmpzLW9mZmNhbnZhc1wiKS5oaXJha3Uoe1xuLy8gICAgIGJ0bjogXCIuanMtb2ZmY2FudmFzLWJ0blwiLCBcbi8vICAgICBmaXhlZEhlYWRlcjogXCIuanMtZml4ZWQtaGVhZGVyXCIsIFxuLy8gICAgIGRpcmVjdGlvbjogXCJsZWZ0XCIgXG4vLyB9KTtcblxuJChmdW5jdGlvbigpIHtcbiAgICAkKCcubWVudS10b2dnbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICQoJy5zdy1IZWFkZXJfTWFpbk5hdklubmVyJykudG9nZ2xlQ2xhc3MoJ29wZW4tYnRuJyk7XG4gICAgICQoJy5zdy1TaWRlJykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICB9KTtcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=
