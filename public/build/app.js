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

    if ($this.hasClass('btn-primary')) {
      var url = $(this).data('add-url');
      $.ajax({
        type: 'POST',
        url: url
      }).then(function (res) {
        $this.text('favorited');
        $this.removeClass('btn-primary');
        $this.addClass('btn-danger');
        console.log(res);
      });
    } else {
      var _url = $(this).data('remove-url');

      $.ajax({
        type: 'POST',
        url: _url
      }).then(function (res) {
        $this.text('favorite');
        $this.removeClass('btn-danger');
        $this.addClass('btn-primary');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2Zhdm9yaXRlLXBvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NiLWFkbWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zd2lwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3Zsb2ctbWVudS5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiJCIsImdsb2JhbCIsImpRdWVyeSIsImNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiJHRoaXMiLCJoYXNDbGFzcyIsInVybCIsImRhdGEiLCJhamF4IiwidHlwZSIsInRoZW4iLCJyZXMiLCJ0ZXh0IiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImNvbnNvbGUiLCJsb2ciLCJvbiIsInRvZ2dsZUNsYXNzIiwid2luZG93Iiwid2lkdGgiLCJlMCIsIm9yaWdpbmFsRXZlbnQiLCJkZWx0YSIsIndoZWVsRGVsdGEiLCJkZXRhaWwiLCJzY3JvbGxUb3AiLCJkb2N1bWVudCIsInNjcm9sbERpc3RhbmNlIiwiZmFkZUluIiwiZmFkZU91dCIsImV2ZW50IiwiJGFuY2hvciIsInN0b3AiLCJhbmltYXRlIiwiYXR0ciIsIm9mZnNldCIsInRvcCIsIm15U3dpcGVyIiwiU3dpcGVyIiwic3BhY2VCZXR3ZWVuIiwic2xpZGVzUGVyVmlldyIsImNlbnRlcmVkU2xpZGVzIiwibG9vcCIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7QUFPQTtBQUNBQSxtQkFBTyxDQUFDLDhDQUFELENBQVA7O0FBRUEsSUFBTUMsQ0FBQyxHQUFHRCxtQkFBTyxDQUFDLG9E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WUFBVztBQUNUQSxHQUFDLENBQUMsY0FBRCxDQUFELENBQWtCbUIsRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsWUFBWTtBQUN6Q25CLEtBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCb0IsV0FBN0IsQ0FBeUMsVUFBekM7QUFDQXBCLEtBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY29CLFdBQWQsQ0FBMEIsTUFBMUI7QUFDQSxHQUhEO0FBSUgsQ0FMQSxDQUFELEMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IHJlcXVpcmUgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5yZXF1aXJlKCcuLi9jc3MvYXBwLnNjc3MnKTtcblxuY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuZ2xvYmFsLiQgPSBnbG9iYWwualF1ZXJ5ID0gJDtcblxucmVxdWlyZSgnYm9vdHN0cmFwJyk7XG5cbi8vIGNvbnNvbGUubG9nKCdIZWxsbyBXZWJwYWNrIEVuY29yZSEgRWRpdCBtZSBpbiBhc3NldHMvanMvYXBwLmpzJyk7XG5cbi8vIGltcG9ydCAnLi95b3V0dWJlLXBsYXllcic7XG5pbXBvcnQgJy4vc2ItYWRtaW4nO1xuaW1wb3J0ICcuL3N3aXBlcic7XG5pbXBvcnQgJy4vdmxvZy1tZW51JztcbmltcG9ydCAnLi9kYXRhcGlja2VyJztcbmltcG9ydCAnLi9mYXZvcml0ZS1wb3N0JzsiLCJqUXVlcnkoZnVuY3Rpb24oJCl7XG4gICAgJChcIi5wb3N0LUl0ZW1fRmF2b3JpdGVcIikuY2xpY2soZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0ICR0aGlzID0gJCh0aGlzKTtcblxuICAgICAgICBpZiAoKCR0aGlzKS5oYXNDbGFzcygnYnRuLXByaW1hcnknKSkge1xuICAgICAgICAgICAgbGV0IHVybCA9ICQodGhpcykuZGF0YSgnYWRkLXVybCcpO1xuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzKXtcbiAgICAgICAgICAgICAgICAkdGhpcy50ZXh0KCdmYXZvcml0ZWQnKTtcbiAgICAgICAgICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygnYnRuLXByaW1hcnknKTtcbiAgICAgICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnYnRuLWRhbmdlcicpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB1cmwgPSAkKHRoaXMpLmRhdGEoJ3JlbW92ZS11cmwnKTtcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIHVybDogdXJsXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlcyl7XG4gICAgICAgICAgICAgICAgJHRoaXMudGV4dCgnZmF2b3JpdGUnKTtcbiAgICAgICAgICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygnYnRuLWRhbmdlcicpO1xuICAgICAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKCdidG4tcHJpbWFyeScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5cbiIsIihmdW5jdGlvbigkKSB7XG4gIFwidXNlIHN0cmljdFwiOyAvLyBTdGFydCBvZiB1c2Ugc3RyaWN0XG5cbiAgLy8gVG9nZ2xlIHRoZSBzaWRlIG5hdmlnYXRpb25cbiAgJChcIiNzaWRlYmFyVG9nZ2xlXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgJChcImJvZHlcIikudG9nZ2xlQ2xhc3MoXCJzaWRlYmFyLXRvZ2dsZWRcIik7XG4gICAgJChcIi5zaWRlYmFyXCIpLnRvZ2dsZUNsYXNzKFwidG9nZ2xlZFwiKTtcbiAgfSk7XG5cbiAgLy8gUHJldmVudCB0aGUgY29udGVudCB3cmFwcGVyIGZyb20gc2Nyb2xsaW5nIHdoZW4gdGhlIGZpeGVkIHNpZGUgbmF2aWdhdGlvbiBob3ZlcmVkIG92ZXJcbiAgJCgnYm9keS5maXhlZC1uYXYgLnNpZGViYXInKS5vbignbW91c2V3aGVlbCBET01Nb3VzZVNjcm9sbCB3aGVlbCcsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA3NjgpIHtcbiAgICAgIHZhciBlMCA9IGUub3JpZ2luYWxFdmVudCxcbiAgICAgICAgZGVsdGEgPSBlMC53aGVlbERlbHRhIHx8IC1lMC5kZXRhaWw7XG4gICAgICB0aGlzLnNjcm9sbFRvcCArPSAoZGVsdGEgPCAwID8gMSA6IC0xKSAqIDMwO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gU2Nyb2xsIHRvIHRvcCBidXR0b24gYXBwZWFyXG4gICQoZG9jdW1lbnQpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2Nyb2xsRGlzdGFuY2UgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xuICAgIGlmIChzY3JvbGxEaXN0YW5jZSA+IDEwMCkge1xuICAgICAgJCgnLnNjcm9sbC10by10b3AnKS5mYWRlSW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLnNjcm9sbC10by10b3AnKS5mYWRlT3V0KCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBTbW9vdGggc2Nyb2xsaW5nIHVzaW5nIGpRdWVyeSBlYXNpbmdcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ2Euc2Nyb2xsLXRvLXRvcCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyICRhbmNob3IgPSAkKHRoaXMpO1xuICAgICQoJ2h0bWwsIGJvZHknKS5zdG9wKCkuYW5pbWF0ZSh7XG4gICAgICBzY3JvbGxUb3A6ICgkKCRhbmNob3IuYXR0cignaHJlZicpKS5vZmZzZXQoKS50b3ApXG4gICAgfSwgMTAwMCwgJ2Vhc2VJbk91dEV4cG8nKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcblxufSkoalF1ZXJ5KTsgLy8gRW5kIG9mIHVzZSBzdHJpY3RcbiIsImltcG9ydCAnc3dpcGVyL2Nzcy9zd2lwZXIubWluLmNzcyc7XG5pbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlcic7XG5cbnZhciBteVN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXItY29udGFpbmVyJywgeyBcbiAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICBjZW50ZXJlZFNsaWRlczogZmFsc2UsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgICB9LFxuIH0pO1xuIiwiLy8gaW1wb3J0ICdoaXJha3UvY3NzL2hpcmFrdS5taW4uY3NzJztcbi8vIGltcG9ydCAnaGlyYWt1L2pzL2pxdWVyeS1oaXJha3UubWluLmpzJztcblxuLy8gJChcIi5qcy1vZmZjYW52YXNcIikuaGlyYWt1KHtcbi8vICAgICBidG46IFwiLmpzLW9mZmNhbnZhcy1idG5cIiwgXG4vLyAgICAgZml4ZWRIZWFkZXI6IFwiLmpzLWZpeGVkLWhlYWRlclwiLCBcbi8vICAgICBkaXJlY3Rpb246IFwibGVmdFwiIFxuLy8gfSk7XG5cbiQoZnVuY3Rpb24oKSB7XG4gICAgJCgnLm1lbnUtdG9nZ2xlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAkKCcuc3ctSGVhZGVyX01haW5OYXZJbm5lcicpLnRvZ2dsZUNsYXNzKCdvcGVuLWJ0bicpO1xuICAgICAkKCcuc3ctU2lkZScpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgfSk7XG59KTsiXSwic291cmNlUm9vdCI6IiJ9