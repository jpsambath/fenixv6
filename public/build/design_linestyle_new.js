(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["design_linestyle_new"],{

/***/ "./assets/css/design/linestyle/new.css":
/*!*********************************************!*\
  !*** ./assets/css/design/linestyle/new.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/design/linestyle/new.js":
/*!*******************************************!*\
  !*** ./assets/js/design/linestyle/new.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _css_design_linestyle_new_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css/design/linestyle/new.css */ "./assets/css/design/linestyle/new.css");
/* harmony import */ var _css_design_linestyle_new_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_design_linestyle_new_css__WEBPACK_IMPORTED_MODULE_0__);

$(document).ready(function () {
  $('#line_style_font option').each(function () {
    $(this).css("font-family", $(this).text());
  });
  $(document).on('change', '#line_style_font', function (event) {
    $('#textsample').css("font-family", $("#line_style_font option:selected").text());
  });
  $(document).on('change', '#line_style_fontColor', function (event) {
    console.log('change : ' + $("#line_style_fontColor").val());
  });
  $(document).on('input', '#line_style_fontColor', function (event) {
    $('#textsample').css("color", $("#line_style_fontColor").val());
  });
  $(document).on('change', '#line_style_fontSize', function (event) {
    $('#textsample').css("font-size", $("#line_style_fontSize option:selected").val() + 'px');
  });
  $(document).on('change', '#line_style_majuscule', function () {
    if (this.checked) {
      $('#textsample').val(function () {
        return this.value.toUpperCase();
      });
    } else {
      $('#textsample').val(function () {
        return this.value.toLowerCase();
      });
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/design/linestyle/new.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2Rlc2lnbi9saW5lc3R5bGUvbmV3LmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZGVzaWduL2xpbmVzdHlsZS9uZXcuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJlYWNoIiwiY3NzIiwidGV4dCIsIm9uIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwidmFsIiwiY2hlY2tlZCIsInZhbHVlIiwidG9VcHBlckNhc2UiLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBRUFBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUMxQkYsR0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJHLElBQTdCLENBQWtDLFlBQVk7QUFDMUNILEtBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksR0FBUixDQUFZLGFBQVosRUFBMkJKLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUssSUFBUixFQUEzQjtBQUNILEdBRkQ7QUFJQUwsR0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUssRUFBWixDQUFlLFFBQWYsRUFBeUIsa0JBQXpCLEVBQTZDLFVBQVVDLEtBQVYsRUFBaUI7QUFDMURQLEtBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJJLEdBQWpCLENBQXFCLGFBQXJCLEVBQW9DSixDQUFDLENBQUMsa0NBQUQsQ0FBRCxDQUFzQ0ssSUFBdEMsRUFBcEM7QUFDSCxHQUZEO0FBS0FMLEdBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlLLEVBQVosQ0FBZSxRQUFmLEVBQXlCLHVCQUF6QixFQUFrRCxVQUFVQyxLQUFWLEVBQWlCO0FBQy9EQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFZVCxDQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQlUsR0FBM0IsRUFBeEI7QUFDSCxHQUZEO0FBSUFWLEdBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlLLEVBQVosQ0FBZSxPQUFmLEVBQXdCLHVCQUF4QixFQUFpRCxVQUFVQyxLQUFWLEVBQWlCO0FBQzlEUCxLQUFDLENBQUMsYUFBRCxDQUFELENBQWlCSSxHQUFqQixDQUFxQixPQUFyQixFQUE4QkosQ0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkJVLEdBQTNCLEVBQTlCO0FBQ0gsR0FGRDtBQUlBVixHQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZSyxFQUFaLENBQWUsUUFBZixFQUF5QixzQkFBekIsRUFBaUQsVUFBVUMsS0FBVixFQUFpQjtBQUM5RFAsS0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQkksR0FBakIsQ0FBcUIsV0FBckIsRUFBa0NKLENBQUMsQ0FBQyxzQ0FBRCxDQUFELENBQTBDVSxHQUExQyxLQUFnRCxJQUFsRjtBQUNILEdBRkQ7QUFJQVYsR0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUssRUFBWixDQUFlLFFBQWYsRUFBeUIsdUJBQXpCLEVBQWtELFlBQVc7QUFDekQsUUFBRyxLQUFLSyxPQUFSLEVBQWlCO0FBQ2JYLE9BQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJVLEdBQWpCLENBQXNCLFlBQVk7QUFDOUIsZUFBTyxLQUFLRSxLQUFMLENBQVdDLFdBQVgsRUFBUDtBQUNILE9BRkQ7QUFHSCxLQUpELE1BSUs7QUFDRGIsT0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQlUsR0FBakIsQ0FBc0IsWUFBWTtBQUM5QixlQUFPLEtBQUtFLEtBQUwsQ0FBV0UsV0FBWCxFQUFQO0FBQ0gsT0FGRDtBQUdIO0FBQ0osR0FWRDtBQWNILENBcENELEUiLCJmaWxlIjoiZGVzaWduX2xpbmVzdHlsZV9uZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4uLy4uLy4uL2Nzcy9kZXNpZ24vbGluZXN0eWxlL25ldy5jc3MnO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI2xpbmVfc3R5bGVfZm9udCBvcHRpb24nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLmNzcyhcImZvbnQtZmFtaWx5XCIsICQodGhpcykudGV4dCgpKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnI2xpbmVfc3R5bGVfZm9udCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICQoJyN0ZXh0c2FtcGxlJykuY3NzKFwiZm9udC1mYW1pbHlcIiwgJChcIiNsaW5lX3N0eWxlX2ZvbnQgb3B0aW9uOnNlbGVjdGVkXCIpLnRleHQoKSlcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2hhbmdlJywgJyNsaW5lX3N0eWxlX2ZvbnRDb2xvcicsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGFuZ2UgOiAnKyQoXCIjbGluZV9zdHlsZV9mb250Q29sb3JcIikudmFsKCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2lucHV0JywgJyNsaW5lX3N0eWxlX2ZvbnRDb2xvcicsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICQoJyN0ZXh0c2FtcGxlJykuY3NzKFwiY29sb3JcIiwgJChcIiNsaW5lX3N0eWxlX2ZvbnRDb2xvclwiKS52YWwoKSlcclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnI2xpbmVfc3R5bGVfZm9udFNpemUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAkKCcjdGV4dHNhbXBsZScpLmNzcyhcImZvbnQtc2l6ZVwiLCAkKFwiI2xpbmVfc3R5bGVfZm9udFNpemUgb3B0aW9uOnNlbGVjdGVkXCIpLnZhbCgpKydweCcpXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2hhbmdlJywgJyNsaW5lX3N0eWxlX21hanVzY3VsZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmKHRoaXMuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAkKCcjdGV4dHNhbXBsZScpLnZhbCAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUudG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgJCgnI3RleHRzYW1wbGUnKS52YWwgKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=