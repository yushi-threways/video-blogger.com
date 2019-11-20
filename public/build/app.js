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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2Zhdm9yaXRlLXBvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NiLWFkbWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zd2lwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3Zsb2ctbWVudS5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiJCIsImdsb2JhbCIsImpRdWVyeSIsImNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiJHRoaXMiLCJoYXNDbGFzcyIsInVybCIsImRhdGEiLCJhamF4IiwidHlwZSIsInRoZW4iLCJyZXMiLCJ0ZXh0IiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImNvbnNvbGUiLCJsb2ciLCJvbiIsInRvZ2dsZUNsYXNzIiwid2luZG93Iiwid2lkdGgiLCJlMCIsIm9yaWdpbmFsRXZlbnQiLCJkZWx0YSIsIndoZWVsRGVsdGEiLCJkZXRhaWwiLCJzY3JvbGxUb3AiLCJkb2N1bWVudCIsInNjcm9sbERpc3RhbmNlIiwiZmFkZUluIiwiZmFkZU91dCIsImV2ZW50IiwiJGFuY2hvciIsInN0b3AiLCJhbmltYXRlIiwiYXR0ciIsIm9mZnNldCIsInRvcCIsIm15U3dpcGVyIiwiU3dpcGVyIiwic3BhY2VCZXR3ZWVuIiwic2xpZGVzUGVyVmlldyIsImNlbnRlcmVkU2xpZGVzIiwibG9vcCIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJzcGVlZCIsImJyZWFrcG9pbnRzIiwicGFnaW5hdGlvbiIsImVsIiwiY2xpY2thYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7O0FBT0E7QUFDQUEsbUJBQU8s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QUFRLEdBQUcsSUFBSUMsOENBQUosQ0FBVyx1QkFBWCxFQUFvQztBQUNoREUsZUFBYSxFQUFFLENBRGlDO0FBRWhERCxjQUFZLEVBQUUsQ0FGa0M7QUFHaERHLE1BQUksRUFBRSxJQUgwQztBQUloREQsZ0JBQWMsRUFBRyxLQUorQjtBQUtoREssT0FBSyxFQUFFLEdBTHlDO0FBTWhESCxZQUFVLEVBQUU7QUFDUkMsVUFBTSxFQUFFLHFCQURBO0FBRVJDLFVBQU0sRUFBRTtBQUZBLEdBTm9DO0FBVWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0FFLGFBQVcsRUFBRTtBQUNULFNBQUs7QUFDSFAsbUJBQWEsRUFBRTtBQURaO0FBREksR0FkbUM7QUFtQmhEUSxZQUFVLEVBQUU7QUFDUkMsTUFBRSxFQUFFLG9CQURJO0FBRVJ6QyxRQUFJLEVBQUUsU0FGRTtBQUdSMEMsYUFBUyxFQUFFO0FBSEg7QUFuQm9DLENBQXBDLENBQWYsQzs7Ozs7Ozs7Ozs7QUNkRDtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBckQsQ0FBQyxDQUFDLFlBQVc7QUFDVEEsR0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQm1CLEVBQWxCLENBQXFCLE9BQXJCLEVBQThCLFlBQVk7QUFDdENuQixLQUFDLENBQUMsTUFBRCxDQUFELENBQVVvQixXQUFWLENBQXNCLFlBQXRCO0FBQ0FwQixLQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2Qm9CLFdBQTdCLENBQXlDLFVBQXpDO0FBQ0FwQixLQUFDLENBQUMsVUFBRCxDQUFELENBQWNvQixXQUFkLENBQTBCLE1BQTFCO0FBQ0gsR0FKRDtBQUtILENBTkEsQ0FBRCxDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSByZXF1aXJlIHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxucmVxdWlyZSgnLi4vY3NzL2FwcC5zY3NzJyk7XG5cbmNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbmdsb2JhbC4kID0gZ2xvYmFsLmpRdWVyeSA9ICQ7XG5cbnJlcXVpcmUoJ2Jvb3RzdHJhcCcpO1xuXG4vLyBjb25zb2xlLmxvZygnSGVsbG8gV2VicGFjayBFbmNvcmUhIEVkaXQgbWUgaW4gYXNzZXRzL2pzL2FwcC5qcycpO1xuXG4vLyBpbXBvcnQgJy4veW91dHViZS1wbGF5ZXInO1xuaW1wb3J0ICcuL3NiLWFkbWluJztcbmltcG9ydCAnLi9zd2lwZXInO1xuaW1wb3J0ICcuL3Zsb2ctbWVudSc7XG5pbXBvcnQgJy4vZGF0YXBpY2tlcic7XG5pbXBvcnQgJy4vZmF2b3JpdGUtcG9zdCc7IiwialF1ZXJ5KGZ1bmN0aW9uKCQpe1xuICAgICQoXCIucG9zdC1JdGVtX0Zhdm9yaXRlXCIpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCAkdGhpcyA9ICQodGhpcyk7XG5cbiAgICAgICAgaWYgKCgkdGhpcykuaGFzQ2xhc3MoJ2J0bi1wcmltYXJ5JykpIHtcbiAgICAgICAgICAgIGxldCB1cmwgPSAkKHRoaXMpLmRhdGEoJ2FkZC11cmwnKTtcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIHVybDogdXJsXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlcyl7XG4gICAgICAgICAgICAgICAgJHRoaXMudGV4dCgnZmF2b3JpdGVkJyk7XG4gICAgICAgICAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoJ2J0bi1wcmltYXJ5Jyk7XG4gICAgICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ2J0bi1kYW5nZXInKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgdXJsID0gJCh0aGlzKS5kYXRhKCdyZW1vdmUtdXJsJyk7XG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICB1cmw6IHVybFxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXMpe1xuICAgICAgICAgICAgICAgICR0aGlzLnRleHQoJ2Zhdm9yaXRlJyk7XG4gICAgICAgICAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoJ2J0bi1kYW5nZXInKTtcbiAgICAgICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnYnRuLXByaW1hcnknKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuXG4iLCIoZnVuY3Rpb24oJCkge1xuICBcInVzZSBzdHJpY3RcIjsgLy8gU3RhcnQgb2YgdXNlIHN0cmljdFxuXG4gIC8vIFRvZ2dsZSB0aGUgc2lkZSBuYXZpZ2F0aW9uXG4gICQoXCIjc2lkZWJhclRvZ2dsZVwiKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoXCJib2R5XCIpLnRvZ2dsZUNsYXNzKFwic2lkZWJhci10b2dnbGVkXCIpO1xuICAgICQoXCIuc2lkZWJhclwiKS50b2dnbGVDbGFzcyhcInRvZ2dsZWRcIik7XG4gIH0pO1xuXG4gIC8vIFByZXZlbnQgdGhlIGNvbnRlbnQgd3JhcHBlciBmcm9tIHNjcm9sbGluZyB3aGVuIHRoZSBmaXhlZCBzaWRlIG5hdmlnYXRpb24gaG92ZXJlZCBvdmVyXG4gICQoJ2JvZHkuZml4ZWQtbmF2IC5zaWRlYmFyJykub24oJ21vdXNld2hlZWwgRE9NTW91c2VTY3JvbGwgd2hlZWwnLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gNzY4KSB7XG4gICAgICB2YXIgZTAgPSBlLm9yaWdpbmFsRXZlbnQsXG4gICAgICAgIGRlbHRhID0gZTAud2hlZWxEZWx0YSB8fCAtZTAuZGV0YWlsO1xuICAgICAgdGhpcy5zY3JvbGxUb3AgKz0gKGRlbHRhIDwgMCA/IDEgOiAtMSkgKiAzMDtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFNjcm9sbCB0byB0b3AgYnV0dG9uIGFwcGVhclxuICAkKGRvY3VtZW50KS5vbignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjcm9sbERpc3RhbmNlID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcbiAgICBpZiAoc2Nyb2xsRGlzdGFuY2UgPiAxMDApIHtcbiAgICAgICQoJy5zY3JvbGwtdG8tdG9wJykuZmFkZUluKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5zY3JvbGwtdG8tdG9wJykuZmFkZU91dCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gU21vb3RoIHNjcm9sbGluZyB1c2luZyBqUXVlcnkgZWFzaW5nXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdhLnNjcm9sbC10by10b3AnLCBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciAkYW5jaG9yID0gJCh0aGlzKTtcbiAgICAkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xuICAgICAgc2Nyb2xsVG9wOiAoJCgkYW5jaG9yLmF0dHIoJ2hyZWYnKSkub2Zmc2V0KCkudG9wKVxuICAgIH0sIDEwMDAsICdlYXNlSW5PdXRFeHBvJyk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG5cbn0pKGpRdWVyeSk7IC8vIEVuZCBvZiB1c2Ugc3RyaWN0XG4iLCJpbXBvcnQgJ3N3aXBlci9jc3Mvc3dpcGVyLm1pbi5jc3MnO1xuaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXInO1xuXG52YXIgbXlTd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lcicsIHsgXG4gICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgY2VudGVyZWRTbGlkZXM6IGZhbHNlLFxuICAgIGxvb3A6IHRydWUsXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXG4gICAgfSxcbiB9KTtcblxuIHZhciBteVN3aXBlciA9IG5ldyBTd2lwZXIoJy50b3Atc3dpcGVyLWNvbnRhaW5lcicsIHsgXG4gICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICBzcGFjZUJldHdlZW46IDAsXG4gICAgbG9vcDogdHJ1ZSwgICBcbiAgICBjZW50ZXJlZFNsaWRlcyA6IGZhbHNlLFxuICAgIHNwZWVkOiA2MDAsXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXG4gICAgfSxcbiAgICAvLyBhdXRvcGxheToge1xuICAgIC8vICAgICBkZWxheTogMzAwMCxcbiAgICAvLyAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IHRydWVcbiAgICAvLyB9LFxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgIDc2Nzoge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuICAgICAgICB0eXBlOiAnYnVsbGV0cycsXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICB9LFxuIH0pOyIsIi8vIGltcG9ydCAnaGlyYWt1L2Nzcy9oaXJha3UubWluLmNzcyc7XG4vLyBpbXBvcnQgJ2hpcmFrdS9qcy9qcXVlcnktaGlyYWt1Lm1pbi5qcyc7XG5cbi8vICQoXCIuanMtb2ZmY2FudmFzXCIpLmhpcmFrdSh7XG4vLyAgICAgYnRuOiBcIi5qcy1vZmZjYW52YXMtYnRuXCIsIFxuLy8gICAgIGZpeGVkSGVhZGVyOiBcIi5qcy1maXhlZC1oZWFkZXJcIiwgXG4vLyAgICAgZGlyZWN0aW9uOiBcImxlZnRcIiBcbi8vIH0pO1xuXG4kKGZ1bmN0aW9uKCkge1xuICAgICQoJy5tZW51LXRvZ2dsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnaHRtbCcpLnRvZ2dsZUNsYXNzKCdtZW51LW9wZW5kJyk7XG4gICAgICAgICQoJy5zdy1IZWFkZXJfTWFpbk5hdklubmVyJykudG9nZ2xlQ2xhc3MoJ29wZW4tYnRuJyk7XG4gICAgICAgICQoJy5zdy1TaWRlJykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICB9KTtcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=