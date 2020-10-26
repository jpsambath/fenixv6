(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["design_template_new"],{

/***/ "./assets/css/design/template/new.css":
/*!********************************************!*\
  !*** ./assets/css/design/template/new.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/design/template/new.js":
/*!******************************************!*\
  !*** ./assets/js/design/template/new.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_design_template_new_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../css/design/template/new.css */ "./assets/css/design/template/new.css");
/* harmony import */ var _css_design_template_new_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_design_template_new_css__WEBPACK_IMPORTED_MODULE_5__);






$(document).ready(function () {
  $(document).on('click', '.add_new_linestyle', function (event) {
    var wrapper = $('#linestyles_wrapper');

    if (wrapper.data('index') < 5) {
      // Try to find the counter of the list or use the length of the list
      var index = wrapper.data('index') + 1; // grab the prototype template

      var prototype = wrapper.data('prototype'); // get the new index

      var newForm = prototype.replace(/__name__label__/g, index).replace(/__name__/g, index);
      var temp = $('<div>').html(newForm); // modify attributes

      temp.find('input').attr('linenumber', index);
      temp.find('select').attr('linenumber', index); //$(newForm).attr('linenumber', index);
      // Increase the counter

      wrapper.data('index', index); // And store it, the length cannot be used if deleting widgets is allowed

      wrapper.append(temp);
      $('#template_lineStyles_' + index + '_font option').each(function () {
        $(this).css("font-family", $(this).text());
      });
      $('#template_linecount').val(index);
      $("#menu_area").notify("New Line Style Added", {
        position: "bottom right",
        className: "success"
      }); // create a new list element and add it to the list
      // var newElem = $(list.attr('data-widget-tags')).html(newWidget);
      // newElem.appendTo(list);
    } else {
      $("#menu_area").notify("Maximum Linestyles Reached", {
        position: "bottom right",
        className: "error"
      });
    }
  });
  $('.template_linestyle_font option').each(function () {
    $(this).css("font-family", $(this).text());
  });
  var str = $('#textsample').val();
  str = str.replace(/<br>/g, "\r\n");
  $('#textsample').val(str);
  var arrayOfLines = $('#textsample').val().trim().split('\n');
  var linenumber;
  $.each(arrayOfLines, function (index, item) {
    linenumber = index + 1;
    $('#line' + linenumber).text(item);
    $('#line' + linenumber).attr('data-origin', item);
  }); //Changement du texte

  $(document).on('keyup', '#textsample', function (event) {
    $('#line1').text("");
    $('#line2').text("");
    $('#line3').text("");
    $('#line4').text("");
    $('#line5').text("");
    var arrayOfLines = $('#textsample').val().trim().split('\n');
    var linenumber;
    $.each(arrayOfLines, function (index, item) {
      linenumber = index + 1;
      $('#line' + linenumber).text(item);
      $('#line' + linenumber).attr('data-origin', item);
    });
  }); //Changement de la police

  $(document).on('change', '.template_linestyle_font', function (event) {
    var linenumber = $(this).attr('linenumber');
    $('#line' + linenumber).css("font-family", $("option:selected", this).text());
  }); //Changement de la couleur

  $(document).on('input', '.template_linestyle_fontcolor', function (event) {
    var linenumber = $(this).attr('linenumber');
    $('#line' + linenumber).css("color", $(this).val());
  }); //Changement de la couleur

  $(document).on('change', '.template_linestyle_fontcolor', function (event) {
    var linenumber = $(this).attr('linenumber');
    $('#line' + linenumber).css("color", $(this).val());
  }); //Changement de la taille

  $(document).on('change', '.template_linestyle_fontsize', function (event) {
    var linenumber = $(this).attr('linenumber');
    $('#line' + linenumber).css("font-size", $("option:selected", this).val() + 'px');
  }); //Changement uppercase

  $(document).on('change', '.template_linestyle_uppercase', function () {
    var linenumber = $(this).attr('linenumber');

    if (this.checked) {
      $('#template_lineStyles_' + linenumber + '_capitalize').prop("checked", false);
      $('#template_lineStyles_' + linenumber + '_lowercase').prop("checked", false);
      $('#line' + linenumber).css('textTransform', 'uppercase');
    } else {
      $('#line' + linenumber).css('textTransform', '');
    }
  }); //Changement lowercase

  $(document).on('change', '.template_linestyle_lowercase', function () {
    var linenumber = $(this).attr('linenumber');

    if (this.checked) {
      $('#template_lineStyles_' + linenumber + '_capitalize').prop("checked", false);
      $('#template_lineStyles_' + linenumber + '_uppercase').prop("checked", false);
      $('#line' + linenumber).css('textTransform', 'lowercase');
    } else {
      $('#line' + linenumber).css('textTransform', '');
    }
  }); //Changement capitalize

  $(document).on('change', '.template_linestyle_capitalize', function () {
    var linenumber = $(this).attr('linenumber');

    if (this.checked) {
      $('#template_lineStyles_' + linenumber + '_uppercase').prop("checked", false);
      $('#template_lineStyles_' + linenumber + '_lowercase').prop("checked", false);
      $('#line' + linenumber).css('textTransform', 'capitalize');
    } else {
      $('#line' + linenumber).css('textTransform', '');
    }
  }); //Changement bold

  $(document).on('change', '.template_linestyle_bold', function () {
    var linenumber = $(this).attr('linenumber');

    if (this.checked) {
      $('#line' + linenumber).css('font-weight', 'Bold');
    } else {
      $('#line' + linenumber).css('font-weight', '');
    }
  }); //Changement italic

  $(document).on('change', '.template_linestyle_italic', function () {
    var linenumber = $(this).attr('linenumber');

    if (this.checked) {
      $('#line' + linenumber).css('font-style', 'italic');
    } else {
      $('#line' + linenumber).css('font-style', '');
    }
  }); //Changement underline

  $(document).on('change', '.template_linestyle_underline', function () {
    var linenumber = $(this).attr('linenumber');

    if (this.checked) {
      $('#template_lineStyles_' + linenumber + '_linethrough').prop("checked", false);
      $('#line' + linenumber).css('text-decoration', 'underline');
    } else {
      $('#line' + linenumber).css('text-decoration', '');
    }
  }); //Changement linethrough

  $(document).on('change', '.template_linestyle_linethrough', function () {
    var linenumber = $(this).attr('linenumber');

    if (this.checked) {
      $('#template_lineStyles_' + linenumber + '_underline').prop("checked", false);
      $('#line' + linenumber).css('text-decoration', 'line-through');
    } else {
      $('#line' + linenumber).css('text-decoration', '');
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $find = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var FIND = 'find';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND);

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.github.io/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.split.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.split.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var callRegExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ })

},[["./assets/js/design/template/new.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2Rlc2lnbi90ZW1wbGF0ZS9uZXcuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9kZXNpZ24vdGVtcGxhdGUvbmV3LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5zcGxpdC5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIm9uIiwiZXZlbnQiLCJ3cmFwcGVyIiwiZGF0YSIsImluZGV4IiwicHJvdG90eXBlIiwibmV3Rm9ybSIsInJlcGxhY2UiLCJ0ZW1wIiwiaHRtbCIsImZpbmQiLCJhdHRyIiwiYXBwZW5kIiwiZWFjaCIsImNzcyIsInRleHQiLCJ2YWwiLCJub3RpZnkiLCJwb3NpdGlvbiIsImNsYXNzTmFtZSIsInN0ciIsImFycmF5T2ZMaW5lcyIsInRyaW0iLCJzcGxpdCIsImxpbmVudW1iZXIiLCJpdGVtIiwiY2hlY2tlZCIsInByb3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUVBQSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVk7QUFFMUJGLEdBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlFLEVBQVosQ0FBZSxPQUFmLEVBQXdCLG9CQUF4QixFQUE4QyxVQUFVQyxLQUFWLEVBQWlCO0FBQzNELFFBQUlDLE9BQU8sR0FBR0wsQ0FBQyxDQUFDLHFCQUFELENBQWY7O0FBRUEsUUFBSUssT0FBTyxDQUFDQyxJQUFSLENBQWEsT0FBYixJQUF3QixDQUE1QixFQUErQjtBQUMzQjtBQUNBLFVBQUlDLEtBQUssR0FBR0YsT0FBTyxDQUFDQyxJQUFSLENBQWEsT0FBYixJQUF3QixDQUFwQyxDQUYyQixDQUkzQjs7QUFDQSxV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bl90ZW1wbGF0ZV9uZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4uLy4uLy4uL2Nzcy9kZXNpZ24vdGVtcGxhdGUvbmV3LmNzcyc7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5hZGRfbmV3X2xpbmVzdHlsZScsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGxldCB3cmFwcGVyID0gJCgnI2xpbmVzdHlsZXNfd3JhcHBlcicpO1xyXG5cclxuICAgICAgICBpZiAod3JhcHBlci5kYXRhKCdpbmRleCcpIDwgNSkge1xyXG4gICAgICAgICAgICAvLyBUcnkgdG8gZmluZCB0aGUgY291bnRlciBvZiB0aGUgbGlzdCBvciB1c2UgdGhlIGxlbmd0aCBvZiB0aGUgbGlzdFxyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSB3cmFwcGVyLmRhdGEoJ2luZGV4JykgKyAxO1xyXG5cclxuICAgICAgICAgICAgLy8gZ3JhYiB0aGUgcHJvdG90eXBlIHRlbXBsYXRlXHJcbiAgICAgICAgICAgIGxldCBwcm90b3R5cGUgPSB3cmFwcGVyLmRhdGEoJ3Byb3RvdHlwZScpO1xyXG4gICAgICAgICAgICAvLyBnZXQgdGhlIG5ldyBpbmRleFxyXG5cclxuICAgICAgICAgICAgbGV0IG5ld0Zvcm0gPSBwcm90b3R5cGUucmVwbGFjZSgvX19uYW1lX19sYWJlbF9fL2csIGluZGV4KS5yZXBsYWNlKC9fX25hbWVfXy9nLCBpbmRleCk7XHJcbiAgICAgICAgICAgIGxldCB0ZW1wID0gJCgnPGRpdj4nKS5odG1sKG5ld0Zvcm0pO1xyXG5cclxuICAgICAgICAgICAgLy8gbW9kaWZ5IGF0dHJpYnV0ZXNcclxuICAgICAgICAgICAgdGVtcC5maW5kKCdpbnB1dCcpLmF0dHIoJ2xpbmVudW1iZXInLCBpbmRleCk7XHJcbiAgICAgICAgICAgIHRlbXAuZmluZCgnc2VsZWN0JykuYXR0cignbGluZW51bWJlcicsIGluZGV4KTtcclxuICAgICAgICAgICAgLy8kKG5ld0Zvcm0pLmF0dHIoJ2xpbmVudW1iZXInLCBpbmRleCk7XHJcbiAgICAgICAgICAgIC8vIEluY3JlYXNlIHRoZSBjb3VudGVyXHJcbiAgICAgICAgICAgIHdyYXBwZXIuZGF0YSgnaW5kZXgnLCBpbmRleCk7XHJcbiAgICAgICAgICAgIC8vIEFuZCBzdG9yZSBpdCwgdGhlIGxlbmd0aCBjYW5ub3QgYmUgdXNlZCBpZiBkZWxldGluZyB3aWRnZXRzIGlzIGFsbG93ZWRcclxuICAgICAgICAgICAgd3JhcHBlci5hcHBlbmQodGVtcCk7XHJcblxyXG4gICAgICAgICAgICAkKCcjdGVtcGxhdGVfbGluZVN0eWxlc18nICsgaW5kZXggKyAnX2ZvbnQgb3B0aW9uJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcyhcImZvbnQtZmFtaWx5XCIsICQodGhpcykudGV4dCgpKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKCcjdGVtcGxhdGVfbGluZWNvdW50JykudmFsKGluZGV4KTtcclxuXHJcbiAgICAgICAgICAgICQoXCIjbWVudV9hcmVhXCIpLm5vdGlmeShcIk5ldyBMaW5lIFN0eWxlIEFkZGVkXCIsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbSByaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gY3JlYXRlIGEgbmV3IGxpc3QgZWxlbWVudCBhbmQgYWRkIGl0IHRvIHRoZSBsaXN0XHJcbiAgICAgICAgICAgIC8vIHZhciBuZXdFbGVtID0gJChsaXN0LmF0dHIoJ2RhdGEtd2lkZ2V0LXRhZ3MnKSkuaHRtbChuZXdXaWRnZXQpO1xyXG4gICAgICAgICAgICAvLyBuZXdFbGVtLmFwcGVuZFRvKGxpc3QpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjbWVudV9hcmVhXCIpLm5vdGlmeShcIk1heGltdW0gTGluZXN0eWxlcyBSZWFjaGVkXCIsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbSByaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImVycm9yXCJcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcudGVtcGxhdGVfbGluZXN0eWxlX2ZvbnQgb3B0aW9uJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jc3MoXCJmb250LWZhbWlseVwiLCAkKHRoaXMpLnRleHQoKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgc3RyID0gJCgnI3RleHRzYW1wbGUnKS52YWwoKVxyXG4gICAgc3RyID0gc3RyLnJlcGxhY2UoLzxicj4vZywgXCJcXHJcXG5cIik7XHJcbiAgICAkKCcjdGV4dHNhbXBsZScpLnZhbChzdHIpXHJcblxyXG4gICAgbGV0IGFycmF5T2ZMaW5lcyA9ICQoJyN0ZXh0c2FtcGxlJykudmFsKCkudHJpbSgpLnNwbGl0KCdcXG4nKTtcclxuICAgIGxldCBsaW5lbnVtYmVyO1xyXG4gICAgJC5lYWNoKGFycmF5T2ZMaW5lcywgZnVuY3Rpb24gKGluZGV4LCBpdGVtKSB7XHJcbiAgICAgICAgbGluZW51bWJlciA9IGluZGV4ICsgMVxyXG4gICAgICAgICQoJyNsaW5lJyArIGxpbmVudW1iZXIpLnRleHQoaXRlbSlcclxuICAgICAgICAkKCcjbGluZScgKyBsaW5lbnVtYmVyKS5hdHRyKCdkYXRhLW9yaWdpbicsIGl0ZW0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9DaGFuZ2VtZW50IGR1IHRleHRlXHJcbiAgICAkKGRvY3VtZW50KS5vbigna2V5dXAnLCAnI3RleHRzYW1wbGUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAkKCcjbGluZTEnKS50ZXh0KFwiXCIpXHJcbiAgICAgICAgJCgnI2xpbmUyJykudGV4dChcIlwiKVxyXG4gICAgICAgICQoJyNsaW5lMycpLnRleHQoXCJcIilcclxuICAgICAgICAkKCcjbGluZTQnKS50ZXh0KFwiXCIpXHJcbiAgICAgICAgJCgnI2xpbmU1JykudGV4dChcIlwiKVxyXG5cclxuICAgICAgICBsZXQgYXJyYXlPZkxpbmVzID0gJCgnI3RleHRzYW1wbGUnKS52YWwoKS50cmltKCkuc3BsaXQoJ1xcbicpO1xyXG4gICAgICAgIGxldCBsaW5lbnVtYmVyO1xyXG4gICAgICAgICQuZWFjaChhcnJheU9mTGluZXMsIGZ1bmN0aW9uIChpbmRleCwgaXRlbSkge1xyXG4gICAgICAgICAgICBsaW5lbnVtYmVyID0gaW5kZXggKyAxO1xyXG4gICAgICAgICAgICAkKCcjbGluZScgKyBsaW5lbnVtYmVyKS50ZXh0KGl0ZW0pO1xyXG4gICAgICAgICAgICAkKCcjbGluZScgKyBsaW5lbnVtYmVyKS5hdHRyKCdkYXRhLW9yaWdpbicsIGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9DaGFuZ2VtZW50IGRlIGxhIHBvbGljZVxyXG4gICAgJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcudGVtcGxhdGVfbGluZXN0eWxlX2ZvbnQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBsZXQgbGluZW51bWJlciA9ICQodGhpcykuYXR0cignbGluZW51bWJlcicpO1xyXG4gICAgICAgICQoJyNsaW5lJyArIGxpbmVudW1iZXIpLmNzcyhcImZvbnQtZmFtaWx5XCIsICQoXCJvcHRpb246c2VsZWN0ZWRcIiwgdGhpcykudGV4dCgpKVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9DaGFuZ2VtZW50IGRlIGxhIGNvdWxldXJcclxuICAgICQoZG9jdW1lbnQpLm9uKCdpbnB1dCcsICcudGVtcGxhdGVfbGluZXN0eWxlX2ZvbnRjb2xvcicsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGxldCBsaW5lbnVtYmVyID0gJCh0aGlzKS5hdHRyKCdsaW5lbnVtYmVyJyk7XHJcbiAgICAgICAgJCgnI2xpbmUnICsgbGluZW51bWJlcikuY3NzKFwiY29sb3JcIiwgJCh0aGlzKS52YWwoKSlcclxuICAgIH0pO1xyXG4gICAgLy9DaGFuZ2VtZW50IGRlIGxhIGNvdWxldXJcclxuICAgICQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLnRlbXBsYXRlX2xpbmVzdHlsZV9mb250Y29sb3InLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBsZXQgbGluZW51bWJlciA9ICQodGhpcykuYXR0cignbGluZW51bWJlcicpO1xyXG4gICAgICAgICQoJyNsaW5lJyArIGxpbmVudW1iZXIpLmNzcyhcImNvbG9yXCIsICQodGhpcykudmFsKCkpXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL0NoYW5nZW1lbnQgZGUgbGEgdGFpbGxlXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy50ZW1wbGF0ZV9saW5lc3R5bGVfZm9udHNpemUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBsZXQgbGluZW51bWJlciA9ICQodGhpcykuYXR0cignbGluZW51bWJlcicpO1xyXG4gICAgICAgICQoJyNsaW5lJyArIGxpbmVudW1iZXIpLmNzcyhcImZvbnQtc2l6ZVwiLCAkKFwib3B0aW9uOnNlbGVjdGVkXCIsIHRoaXMpLnZhbCgpICsgJ3B4JylcclxuICAgIH0pO1xyXG5cclxuICAgIC8vQ2hhbmdlbWVudCB1cHBlcmNhc2VcclxuICAgICQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLnRlbXBsYXRlX2xpbmVzdHlsZV91cHBlcmNhc2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IGxpbmVudW1iZXIgPSAkKHRoaXMpLmF0dHIoJ2xpbmVudW1iZXInKTtcclxuICAgICAgICBpZiAodGhpcy5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICQoJyN0ZW1wbGF0ZV9saW5lU3R5bGVzXycrbGluZW51bWJlcisnX2NhcGl0YWxpemUnKS5wcm9wKFwiY2hlY2tlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICQoJyN0ZW1wbGF0ZV9saW5lU3R5bGVzXycrbGluZW51bWJlcisnX2xvd2VyY2FzZScpLnByb3AoXCJjaGVja2VkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgJCgnI2xpbmUnICsgbGluZW51bWJlcikuY3NzKCd0ZXh0VHJhbnNmb3JtJywgJ3VwcGVyY2FzZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJyNsaW5lJyArIGxpbmVudW1iZXIpLmNzcygndGV4dFRyYW5zZm9ybScsICcnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL0NoYW5nZW1lbnQgbG93ZXJjYXNlXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy50ZW1wbGF0ZV9saW5lc3R5bGVfbG93ZXJjYXNlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBsaW5lbnVtYmVyID0gJCh0aGlzKS5hdHRyKCdsaW5lbnVtYmVyJyk7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAkKCcjdGVtcGxhdGVfbGluZVN0eWxlc18nK2xpbmVudW1iZXIrJ19jYXBpdGFsaXplJykucHJvcChcImNoZWNrZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAkKCcjdGVtcGxhdGVfbGluZVN0eWxlc18nK2xpbmVudW1iZXIrJ191cHBlcmNhc2UnKS5wcm9wKFwiY2hlY2tlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICQoJyNsaW5lJyArIGxpbmVudW1iZXIpLmNzcygndGV4dFRyYW5zZm9ybScsICdsb3dlcmNhc2UnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcjbGluZScgKyBsaW5lbnVtYmVyKS5jc3MoJ3RleHRUcmFuc2Zvcm0nLCAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9DaGFuZ2VtZW50IGNhcGl0YWxpemVcclxuICAgICQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLnRlbXBsYXRlX2xpbmVzdHlsZV9jYXBpdGFsaXplJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBsaW5lbnVtYmVyID0gJCh0aGlzKS5hdHRyKCdsaW5lbnVtYmVyJyk7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAkKCcjdGVtcGxhdGVfbGluZVN0eWxlc18nK2xpbmVudW1iZXIrJ191cHBlcmNhc2UnKS5wcm9wKFwiY2hlY2tlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICQoJyN0ZW1wbGF0ZV9saW5lU3R5bGVzXycrbGluZW51bWJlcisnX2xvd2VyY2FzZScpLnByb3AoXCJjaGVja2VkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgJCgnI2xpbmUnICsgbGluZW51bWJlcikuY3NzKCd0ZXh0VHJhbnNmb3JtJywgJ2NhcGl0YWxpemUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcjbGluZScgKyBsaW5lbnVtYmVyKS5jc3MoJ3RleHRUcmFuc2Zvcm0nLCAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9DaGFuZ2VtZW50IGJvbGRcclxuICAgICQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLnRlbXBsYXRlX2xpbmVzdHlsZV9ib2xkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBsaW5lbnVtYmVyID0gJCh0aGlzKS5hdHRyKCdsaW5lbnVtYmVyJyk7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAkKCcjbGluZScgKyBsaW5lbnVtYmVyKS5jc3MoJ2ZvbnQtd2VpZ2h0JywnQm9sZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJyNsaW5lJyArIGxpbmVudW1iZXIpLmNzcygnZm9udC13ZWlnaHQnLCAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9DaGFuZ2VtZW50IGl0YWxpY1xyXG4gICAgJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcudGVtcGxhdGVfbGluZXN0eWxlX2l0YWxpYycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgbGluZW51bWJlciA9ICQodGhpcykuYXR0cignbGluZW51bWJlcicpO1xyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgJCgnI2xpbmUnICsgbGluZW51bWJlcikuY3NzKCdmb250LXN0eWxlJywnaXRhbGljJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnI2xpbmUnICsgbGluZW51bWJlcikuY3NzKCdmb250LXN0eWxlJywgJycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vQ2hhbmdlbWVudCB1bmRlcmxpbmVcclxuICAgICQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLnRlbXBsYXRlX2xpbmVzdHlsZV91bmRlcmxpbmUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IGxpbmVudW1iZXIgPSAkKHRoaXMpLmF0dHIoJ2xpbmVudW1iZXInKTtcclxuICAgICAgICBpZiAodGhpcy5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICQoJyN0ZW1wbGF0ZV9saW5lU3R5bGVzXycrbGluZW51bWJlcisnX2xpbmV0aHJvdWdoJykucHJvcChcImNoZWNrZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAkKCcjbGluZScgKyBsaW5lbnVtYmVyKS5jc3MoJ3RleHQtZGVjb3JhdGlvbicsJ3VuZGVybGluZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJyNsaW5lJyArIGxpbmVudW1iZXIpLmNzcygndGV4dC1kZWNvcmF0aW9uJywgJycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vQ2hhbmdlbWVudCBsaW5ldGhyb3VnaFxyXG4gICAgJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcudGVtcGxhdGVfbGluZXN0eWxlX2xpbmV0aHJvdWdoJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBsaW5lbnVtYmVyID0gJCh0aGlzKS5hdHRyKCdsaW5lbnVtYmVyJyk7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAkKCcjdGVtcGxhdGVfbGluZVN0eWxlc18nK2xpbmVudW1iZXIrJ191bmRlcmxpbmUnKS5wcm9wKFwiY2hlY2tlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICQoJyNsaW5lJyArIGxpbmVudW1iZXIpLmNzcygndGV4dC1kZWNvcmF0aW9uJywnbGluZS10aHJvdWdoJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnI2xpbmUnICsgbGluZW51bWJlcikuY3NzKCd0ZXh0LWRlY29yYXRpb24nLCAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxufSk7IiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcclxudmFyICRmaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbmQ7XHJcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xyXG52YXIgYXJyYXlNZXRob2RVc2VzVG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLXVzZXMtdG8tbGVuZ3RoJyk7XHJcblxyXG52YXIgRklORCA9ICdmaW5kJztcclxudmFyIFNLSVBTX0hPTEVTID0gdHJ1ZTtcclxuXHJcbnZhciBVU0VTX1RPX0xFTkdUSCA9IGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoKEZJTkQpO1xyXG5cclxuLy8gU2hvdWxkbid0IHNraXAgaG9sZXNcclxuaWYgKEZJTkQgaW4gW10pIEFycmF5KDEpW0ZJTkRdKGZ1bmN0aW9uICgpIHsgU0tJUFNfSE9MRVMgPSBmYWxzZTsgfSk7XHJcblxyXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbmRgIG1ldGhvZFxyXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZFxyXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBTS0lQU19IT0xFUyB8fCAhVVNFU19UT19MRU5HVEggfSwge1xyXG4gIGZpbmQ6IGZ1bmN0aW9uIGZpbmQoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcclxuICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXHJcbmFkZFRvVW5zY29wYWJsZXMoRklORCk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcclxudmFyIGlzUmVnRXhwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXJlZ2V4cCcpO1xyXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XHJcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xyXG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NwZWNpZXMtY29uc3RydWN0b3InKTtcclxudmFyIGFkdmFuY2VTdHJpbmdJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZHZhbmNlLXN0cmluZy1pbmRleCcpO1xyXG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XHJcbnZhciBjYWxsUmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xyXG52YXIgcmVnZXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYycpO1xyXG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcclxuXHJcbnZhciBhcnJheVB1c2ggPSBbXS5wdXNoO1xyXG52YXIgbWluID0gTWF0aC5taW47XHJcbnZhciBNQVhfVUlOVDMyID0gMHhGRkZGRkZGRjtcclxuXHJcbi8vIGJhYmVsLW1pbmlmeSB0cmFuc3BpbGVzIFJlZ0V4cCgneCcsICd5JykgLT4gL3gveSBhbmQgaXQgY2F1c2VzIFN5bnRheEVycm9yXHJcbnZhciBTVVBQT1JUU19ZID0gIWZhaWxzKGZ1bmN0aW9uICgpIHsgcmV0dXJuICFSZWdFeHAoTUFYX1VJTlQzMiwgJ3knKTsgfSk7XHJcblxyXG4vLyBAQHNwbGl0IGxvZ2ljXHJcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdzcGxpdCcsIDIsIGZ1bmN0aW9uIChTUExJVCwgbmF0aXZlU3BsaXQsIG1heWJlQ2FsbE5hdGl2ZSkge1xyXG4gIHZhciBpbnRlcm5hbFNwbGl0O1xyXG4gIGlmIChcclxuICAgICdhYmJjJy5zcGxpdCgvKGIpKi8pWzFdID09ICdjJyB8fFxyXG4gICAgJ3Rlc3QnLnNwbGl0KC8oPzopLywgLTEpLmxlbmd0aCAhPSA0IHx8XHJcbiAgICAnYWInLnNwbGl0KC8oPzphYikqLykubGVuZ3RoICE9IDIgfHxcclxuICAgICcuJy5zcGxpdCgvKC4/KSguPykvKS5sZW5ndGggIT0gNCB8fFxyXG4gICAgJy4nLnNwbGl0KC8oKSgpLykubGVuZ3RoID4gMSB8fFxyXG4gICAgJycuc3BsaXQoLy4/LykubGVuZ3RoXHJcbiAgKSB7XHJcbiAgICAvLyBiYXNlZCBvbiBlczUtc2hpbSBpbXBsZW1lbnRhdGlvbiwgbmVlZCB0byByZXdvcmsgaXRcclxuICAgIGludGVybmFsU3BsaXQgPSBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xyXG4gICAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcykpO1xyXG4gICAgICB2YXIgbGltID0gbGltaXQgPT09IHVuZGVmaW5lZCA/IE1BWF9VSU5UMzIgOiBsaW1pdCA+Pj4gMDtcclxuICAgICAgaWYgKGxpbSA9PT0gMCkgcmV0dXJuIFtdO1xyXG4gICAgICBpZiAoc2VwYXJhdG9yID09PSB1bmRlZmluZWQpIHJldHVybiBbc3RyaW5nXTtcclxuICAgICAgLy8gSWYgYHNlcGFyYXRvcmAgaXMgbm90IGEgcmVnZXgsIHVzZSBuYXRpdmUgc3BsaXRcclxuICAgICAgaWYgKCFpc1JlZ0V4cChzZXBhcmF0b3IpKSB7XHJcbiAgICAgICAgcmV0dXJuIG5hdGl2ZVNwbGl0LmNhbGwoc3RyaW5nLCBzZXBhcmF0b3IsIGxpbSk7XHJcbiAgICAgIH1cclxuICAgICAgdmFyIG91dHB1dCA9IFtdO1xyXG4gICAgICB2YXIgZmxhZ3MgPSAoc2VwYXJhdG9yLmlnbm9yZUNhc2UgPyAnaScgOiAnJykgK1xyXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLm11bHRpbGluZSA/ICdtJyA6ICcnKSArXHJcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IudW5pY29kZSA/ICd1JyA6ICcnKSArXHJcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3Iuc3RpY2t5ID8gJ3knIDogJycpO1xyXG4gICAgICB2YXIgbGFzdExhc3RJbmRleCA9IDA7XHJcbiAgICAgIC8vIE1ha2UgYGdsb2JhbGAgYW5kIGF2b2lkIGBsYXN0SW5kZXhgIGlzc3VlcyBieSB3b3JraW5nIHdpdGggYSBjb3B5XHJcbiAgICAgIHZhciBzZXBhcmF0b3JDb3B5ID0gbmV3IFJlZ0V4cChzZXBhcmF0b3Iuc291cmNlLCBmbGFncyArICdnJyk7XHJcbiAgICAgIHZhciBtYXRjaCwgbGFzdEluZGV4LCBsYXN0TGVuZ3RoO1xyXG4gICAgICB3aGlsZSAobWF0Y2ggPSByZWdleHBFeGVjLmNhbGwoc2VwYXJhdG9yQ29weSwgc3RyaW5nKSkge1xyXG4gICAgICAgIGxhc3RJbmRleCA9IHNlcGFyYXRvckNvcHkubGFzdEluZGV4O1xyXG4gICAgICAgIGlmIChsYXN0SW5kZXggPiBsYXN0TGFzdEluZGV4KSB7XHJcbiAgICAgICAgICBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCwgbWF0Y2guaW5kZXgpKTtcclxuICAgICAgICAgIGlmIChtYXRjaC5sZW5ndGggPiAxICYmIG1hdGNoLmluZGV4IDwgc3RyaW5nLmxlbmd0aCkgYXJyYXlQdXNoLmFwcGx5KG91dHB1dCwgbWF0Y2guc2xpY2UoMSkpO1xyXG4gICAgICAgICAgbGFzdExlbmd0aCA9IG1hdGNoWzBdLmxlbmd0aDtcclxuICAgICAgICAgIGxhc3RMYXN0SW5kZXggPSBsYXN0SW5kZXg7XHJcbiAgICAgICAgICBpZiAob3V0cHV0Lmxlbmd0aCA+PSBsaW0pIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VwYXJhdG9yQ29weS5sYXN0SW5kZXggPT09IG1hdGNoLmluZGV4KSBzZXBhcmF0b3JDb3B5Lmxhc3RJbmRleCsrOyAvLyBBdm9pZCBhbiBpbmZpbml0ZSBsb29wXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGxhc3RMYXN0SW5kZXggPT09IHN0cmluZy5sZW5ndGgpIHtcclxuICAgICAgICBpZiAobGFzdExlbmd0aCB8fCAhc2VwYXJhdG9yQ29weS50ZXN0KCcnKSkgb3V0cHV0LnB1c2goJycpO1xyXG4gICAgICB9IGVsc2Ugb3V0cHV0LnB1c2goc3RyaW5nLnNsaWNlKGxhc3RMYXN0SW5kZXgpKTtcclxuICAgICAgcmV0dXJuIG91dHB1dC5sZW5ndGggPiBsaW0gPyBvdXRwdXQuc2xpY2UoMCwgbGltKSA6IG91dHB1dDtcclxuICAgIH07XHJcbiAgLy8gQ2hha3JhLCBWOFxyXG4gIH0gZWxzZSBpZiAoJzAnLnNwbGl0KHVuZGVmaW5lZCwgMCkubGVuZ3RoKSB7XHJcbiAgICBpbnRlcm5hbFNwbGl0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciwgbGltaXQpIHtcclxuICAgICAgcmV0dXJuIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkICYmIGxpbWl0ID09PSAwID8gW10gOiBuYXRpdmVTcGxpdC5jYWxsKHRoaXMsIHNlcGFyYXRvciwgbGltaXQpO1xyXG4gICAgfTtcclxuICB9IGVsc2UgaW50ZXJuYWxTcGxpdCA9IG5hdGl2ZVNwbGl0O1xyXG5cclxuICByZXR1cm4gW1xyXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc3BsaXRgIG1ldGhvZFxyXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zcGxpdFxyXG4gICAgZnVuY3Rpb24gc3BsaXQoc2VwYXJhdG9yLCBsaW1pdCkge1xyXG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XHJcbiAgICAgIHZhciBzcGxpdHRlciA9IHNlcGFyYXRvciA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZXBhcmF0b3JbU1BMSVRdO1xyXG4gICAgICByZXR1cm4gc3BsaXR0ZXIgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgID8gc3BsaXR0ZXIuY2FsbChzZXBhcmF0b3IsIE8sIGxpbWl0KVxyXG4gICAgICAgIDogaW50ZXJuYWxTcGxpdC5jYWxsKFN0cmluZyhPKSwgc2VwYXJhdG9yLCBsaW1pdCk7XHJcbiAgICB9LFxyXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF1gIG1ldGhvZFxyXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNwbGl0XHJcbiAgICAvL1xyXG4gICAgLy8gTk9URTogVGhpcyBjYW5ub3QgYmUgcHJvcGVybHkgcG9seWZpbGxlZCBpbiBlbmdpbmVzIHRoYXQgZG9uJ3Qgc3VwcG9ydFxyXG4gICAgLy8gdGhlICd5JyBmbGFnLlxyXG4gICAgZnVuY3Rpb24gKHJlZ2V4cCwgbGltaXQpIHtcclxuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShpbnRlcm5hbFNwbGl0LCByZWdleHAsIHRoaXMsIGxpbWl0LCBpbnRlcm5hbFNwbGl0ICE9PSBuYXRpdmVTcGxpdCk7XHJcbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcclxuXHJcbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHJlZ2V4cCk7XHJcbiAgICAgIHZhciBTID0gU3RyaW5nKHRoaXMpO1xyXG4gICAgICB2YXIgQyA9IHNwZWNpZXNDb25zdHJ1Y3RvcihyeCwgUmVnRXhwKTtcclxuXHJcbiAgICAgIHZhciB1bmljb2RlTWF0Y2hpbmcgPSByeC51bmljb2RlO1xyXG4gICAgICB2YXIgZmxhZ3MgPSAocnguaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXHJcbiAgICAgICAgICAgICAgICAgIChyeC5tdWx0aWxpbmUgPyAnbScgOiAnJykgK1xyXG4gICAgICAgICAgICAgICAgICAocngudW5pY29kZSA/ICd1JyA6ICcnKSArXHJcbiAgICAgICAgICAgICAgICAgIChTVVBQT1JUU19ZID8gJ3knIDogJ2cnKTtcclxuXHJcbiAgICAgIC8vIF4oPyArIHJ4ICsgKSBpcyBuZWVkZWQsIGluIGNvbWJpbmF0aW9uIHdpdGggc29tZSBTIHNsaWNpbmcsIHRvXHJcbiAgICAgIC8vIHNpbXVsYXRlIHRoZSAneScgZmxhZy5cclxuICAgICAgdmFyIHNwbGl0dGVyID0gbmV3IEMoU1VQUE9SVFNfWSA/IHJ4IDogJ14oPzonICsgcnguc291cmNlICsgJyknLCBmbGFncyk7XHJcbiAgICAgIHZhciBsaW0gPSBsaW1pdCA9PT0gdW5kZWZpbmVkID8gTUFYX1VJTlQzMiA6IGxpbWl0ID4+PiAwO1xyXG4gICAgICBpZiAobGltID09PSAwKSByZXR1cm4gW107XHJcbiAgICAgIGlmIChTLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGNhbGxSZWdFeHBFeGVjKHNwbGl0dGVyLCBTKSA9PT0gbnVsbCA/IFtTXSA6IFtdO1xyXG4gICAgICB2YXIgcCA9IDA7XHJcbiAgICAgIHZhciBxID0gMDtcclxuICAgICAgdmFyIEEgPSBbXTtcclxuICAgICAgd2hpbGUgKHEgPCBTLmxlbmd0aCkge1xyXG4gICAgICAgIHNwbGl0dGVyLmxhc3RJbmRleCA9IFNVUFBPUlRTX1kgPyBxIDogMDtcclxuICAgICAgICB2YXIgeiA9IGNhbGxSZWdFeHBFeGVjKHNwbGl0dGVyLCBTVVBQT1JUU19ZID8gUyA6IFMuc2xpY2UocSkpO1xyXG4gICAgICAgIHZhciBlO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHogPT09IG51bGwgfHxcclxuICAgICAgICAgIChlID0gbWluKHRvTGVuZ3RoKHNwbGl0dGVyLmxhc3RJbmRleCArIChTVVBQT1JUU19ZID8gMCA6IHEpKSwgUy5sZW5ndGgpKSA9PT0gcFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgcSA9IGFkdmFuY2VTdHJpbmdJbmRleChTLCBxLCB1bmljb2RlTWF0Y2hpbmcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBBLnB1c2goUy5zbGljZShwLCBxKSk7XHJcbiAgICAgICAgICBpZiAoQS5sZW5ndGggPT09IGxpbSkgcmV0dXJuIEE7XHJcbiAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8PSB6Lmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICBBLnB1c2goeltpXSk7XHJcbiAgICAgICAgICAgIGlmIChBLmxlbmd0aCA9PT0gbGltKSByZXR1cm4gQTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHEgPSBwID0gZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgQS5wdXNoKFMuc2xpY2UocCkpO1xyXG4gICAgICByZXR1cm4gQTtcclxuICAgIH1cclxuICBdO1xyXG59LCAhU1VQUE9SVFNfWSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=