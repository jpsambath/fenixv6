(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["design_design_index"],{

/***/ "./assets/css/design/design/index.css":
/*!********************************************!*\
  !*** ./assets/css/design/design/index.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/design/design/index.js":
/*!******************************************!*\
  !*** ./assets/js/design/design/index.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, jQuery) {/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _css_design_design_index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../css/design/design/index.css */ "./assets/css/design/design/index.css");
/* harmony import */ var _css_design_design_index_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_design_design_index_css__WEBPACK_IMPORTED_MODULE_9__);










$(document).ready(function () {
  $(document).on('click', '.unlinktagfromselectionbtn', function (event) {
    console.log($(this).attr('href'));
    $.ajax({
      url: $(this).attr('href'),
      type: 'POST',
      data: {
        designs: JSON.stringify($("#table").bootstrapTable('getSelections'))
      },
      success: function success(data, status) {
        $("#menu_area").notify("Tag Successfully Deleted", {
          position: "bottom right",
          className: "success"
        });
        $.each(JSON.parse(data), function (key, design) {
          var taglist = "";
          $.each(design.tags, function (t, tag) {
            taglist += "<span class='taglabel'><span href='/design/design/ajaxunlinktag/" + design.id + "/" + tag.id + "' tagid='" + tag.id + "' tagname='" + tag.name + "' class='closebtn unlinktagbtn'>×</span>" + tag.name + "</span>";
          });
          $('#table').bootstrapTable('updateCellByUniqueId', {
            id: design.id,
            field: 'tags',
            value: taglist
          });
          majactivetags();
        }); // $('#table tbody').find('.selected').remove();
        // $('#table tbody').prepend(data);
        // $('#table').bootstrapTable('refresh');
      },
      error: function error(data, status, message) {
        $("#menu_area").notify("Tag Deletion Failed", {
          position: "bottom right",
          className: "error"
        });
      }
    });
  });
  $(document).on('click', '.unlinktagbtn', function (event) {
    $.ajax({
      url: $(this).attr('href'),
      type: 'POST',
      success: function success(data, status) {
        $("#menu_area").notify("Tag Successfully Deleted", {
          position: "bottom right",
          className: "success"
        });
        var design = JSON.parse(data); //$('#table').bootstrapTable('removeByUniqueId', design.id);

        var taglist = "";
        $.each(design.tags, function (t, tag) {
          taglist += "<span class='taglabel'><span href='/design/design/ajaxunlinktag/" + design.id + "/" + tag.id + "' tagid='" + tag.id + "' tagname='" + tag.name + "' class='closebtn unlinktagbtn'>×</span>" + tag.name + "</span>";
        });
        $('#table').bootstrapTable('updateCellByUniqueId', {
          id: design.id,
          field: 'tags',
          value: taglist
        });
        majactivetags();
      },
      error: function error(data, status, message) {
        $("#menu_area").notify("Tag Deletion Failed", {
          position: "bottom right",
          className: "error"
        });
      }
    });
  });
  $("#applytag").on('click', function () {
    console.log('tags:' + JSON.stringify($("#selecttag").val()));
    console.log('designs:' + JSON.stringify($("#table").bootstrapTable('getSelections')));
    $.ajax({
      url: "/design/design/ajaxaddtag",
      type: 'POST',
      data: {
        tags: JSON.stringify($("#selecttag").val()),
        designs: JSON.stringify($("#table").bootstrapTable('getSelections'))
      },
      dataType: 'json',
      success: function success(data, status) {
        $("#menu_area").notify("Tags Successfully Added :  \n" + $("#selecttag option:selected").toArray().map(function (item) {
          return item.text;
        }).join('\n'), {
          position: "bottom right",
          className: "success"
        }); //Suppression des lignes précédemment cochées
        // let ids = $.map($('#table').bootstrapTable('getSelections'), function (row) {
        //     return row.id
        // })
        // $('#table').bootstrapTable('remove', {
        //     field: 'id',
        //     values: ids
        // });

        $.each(JSON.parse(data), function (key, design) {
          var taglist = "";
          $.each(design.tags, function (t, tag) {
            taglist += "<span class='taglabel'><span href='/design/design/ajaxunlinktag/" + design.id + "/" + tag.id + "' tagid='" + tag.id + "' tagname='" + tag.name + "' class='closebtn unlinktagbtn'>×</span>" + tag.name + "</span>";
          });
          $('#table').bootstrapTable('updateCellByUniqueId', {
            id: design.id,
            field: 'tags',
            value: taglist
          });
          majactivetags();
        }); // $('#table tbody').find('.selected').remove();
        // $('#table tbody').prepend(data);
        // $('#table').bootstrapTable('refresh');
      },
      error: function error(data, status, message) {
        $("#menu_area").notify("Adding Tags Failed :  \n" + $("#selecttag option:selected").toArray().map(function (item) {
          return item.text;
        }).join('\n'), {
          position: "bottom right",
          className: "error"
        });
      }
    });
  });
  $('#table').on('check.bs.table uncheck.bs.table uncheck-all.bs.table check-all.bs.table', majactivetags); //ici ajax template
});

function cleantags(mystring) {
  var res = mystring.replace(/(<([^>]+)>)/ig, "").replace(/\n|\r|(\n\r)/g, "").split("×");
  var cleanres = [];
  $.each(res, function () {
    cleanres.push($.trim(this));
  });
  return cleanres.filter(function (cleanres) {
    return cleanres !== '×' && cleanres !== '';
  });
}

function unique(array) {
  return $.grep(array, function (el, index) {
    return index === $.inArray(el, array);
  });
}

function majactivetags() {
  var rowlist = $('#table').bootstrapTable('getSelections');
  var taglist = '';
  var tags = [];
  $.each(rowlist, function (r, row) {
    //        $.merge(tags, cleantags(row.tags));
    $.each($(row.tags).find('.unlinktagbtn'), function (s, span) {
      if (jQuery.inArray($(span).attr('tagname'), tags) === -1) {
        tags.push($(span).attr('tagname'));
        taglist += "<span class='taglabel'><span href='/design/design/ajaxunlinktagfromselection/" + $(span).attr('tagid') + "' tagid='" + $(span).attr('tagid') + "' tagname='" + $(span).attr('tagname') + "' class='closebtn unlinktagfromselectionbtn'>×</span>" + $(span).attr('tagname') + "</span>";
      } //console.log(span.attr('tagid'));
      // console.log($(span).attr('tagid') + ' ' + $(span).attr('tagname'));

    });
  }); //console.log(taglist);
  // tags = unique(tags);
  // console.log(tags)
  //
  // $.each(tags, function (t, tag) {
  //     taglist += "<span class='taglabel'><span href='/design/design/ajaxunlinktagfromselection/" + tag.id + "' tagid='" + tag.id + "' tagname='" + tag.name + "' class='closebtn unlinktagfromselectionbtn'>×</span>" + tag + "</span>";
  // })

  $('#activetags').html(taglist);
}

function htmlToElements(html) {
  var template = document.createElement('template');
  template.innerHTML = html;
  return template.content.childNodes;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

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

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


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

},[["./assets/js/design/design/index.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2Rlc2lnbi9kZXNpZ24vaW5kZXguY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9kZXNpZ24vZGVzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmZ1bmN0aW9uLm5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuc3BsaXQuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJvbiIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImF0dHIiLCJhamF4IiwidXJsIiwidHlwZSIsImRhdGEiLCJkZXNpZ25zIiwiSlNPTiIsInN0cmluZ2lmeSIsImJvb3RzdHJhcFRhYmxlIiwic3VjY2VzcyIsInN0YXR1cyIsIm5vdGlmeSIsInBvc2l0aW9uIiwiY2xhc3NOYW1lIiwiZWFjaCIsInBhcnNlIiwia2V5IiwiZGVzaWduIiwidGFnbGlzdCIsInRhZ3MiLCJ0IiwidGFnIiwiaWQiLCJuYW1lIiwiZmllbGQiLCJ2YWx1ZSIsIm1hamFjdGl2ZXRhZ3MiLCJlcnJvciIsIm1lc3NhZ2UiLCJ2YWwiLCJkYXRhVHlwZSIsInRvQXJyYXkiLCJtYXAiLCJpdGVtIiwidGV4dCIsImpvaW4iLCJjbGVhbnRhZ3MiLCJteXN0cmluZyIsInJlcyIsInJlcGxhY2UiLCJzcGxpdCIsImNsZWFucmVzIiwicHVzaCIsInRyaW0iLCJmaWx0ZXIiLCJ1bmlxdWUiLCJhcnJheSIsImdyZXAiLCJlbCIsImluZGV4IiwiaW5BcnJheSIsInJvd2xpc3QiLCJyIiwicm93IiwiZmluZCIsInMiLCJzcGFuIiwialF1ZXJ5IiwiaHRtbCIsImh0bWxUb0VsZW1lbnRzIiwidGVtcGxhdGUiLCJjcmVhdGVFbGVtZW50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QUFFOztBQUV4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0U7QUFDL0U7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EseUJBQXlCLG1CQUFtQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiZGVzaWduX2Rlc2lnbl9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi4vLi4vLi4vY3NzL2Rlc2lnbi9kZXNpZ24vaW5kZXguY3NzJztcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnVubGlua3RhZ2Zyb21zZWxlY3Rpb25idG4nLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJCh0aGlzKS5hdHRyKCdocmVmJykpO1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogJCh0aGlzKS5hdHRyKCdocmVmJyksXHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgZGVzaWduczogSlNPTi5zdHJpbmdpZnkoJChcIiN0YWJsZVwiKS5ib290c3RyYXBUYWJsZSgnZ2V0U2VsZWN0aW9ucycpKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSwgc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI21lbnVfYXJlYVwiKS5ub3RpZnkoXCJUYWcgU3VjY2Vzc2Z1bGx5IERlbGV0ZWRcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbSByaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJzdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICQuZWFjaChKU09OLnBhcnNlKGRhdGEpLCBmdW5jdGlvbiAoa2V5LCBkZXNpZ24pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhZ2xpc3QgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkLmVhY2goZGVzaWduLnRhZ3MsIGZ1bmN0aW9uICh0LCB0YWcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnbGlzdCArPSBcIjxzcGFuIGNsYXNzPSd0YWdsYWJlbCc+PHNwYW4gaHJlZj0nL2Rlc2lnbi9kZXNpZ24vYWpheHVubGlua3RhZy9cIiArIGRlc2lnbi5pZCArIFwiL1wiICsgdGFnLmlkICsgXCInIHRhZ2lkPSdcIiArIHRhZy5pZCArIFwiJyB0YWduYW1lPSdcIiArIHRhZy5uYW1lICsgXCInIGNsYXNzPSdjbG9zZWJ0biB1bmxpbmt0YWdidG4nPsOXPC9zcGFuPlwiICsgdGFnLm5hbWUgKyBcIjwvc3Bhbj5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI3RhYmxlJykuYm9vdHN0cmFwVGFibGUoJ3VwZGF0ZUNlbGxCeVVuaXF1ZUlkJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogZGVzaWduLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ3RhZ3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGFnbGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBtYWphY3RpdmV0YWdzKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vICQoJyN0YWJsZSB0Ym9keScpLmZpbmQoJy5zZWxlY3RlZCcpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gJCgnI3RhYmxlIHRib2R5JykucHJlcGVuZChkYXRhKTtcclxuICAgICAgICAgICAgICAgIC8vICQoJyN0YWJsZScpLmJvb3RzdHJhcFRhYmxlKCdyZWZyZXNoJyk7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjpcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMsIG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI21lbnVfYXJlYVwiKS5ub3RpZnkoXCJUYWcgRGVsZXRpb24gRmFpbGVkXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYm90dG9tIHJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJlcnJvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy51bmxpbmt0YWdidG4nLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICQodGhpcykuYXR0cignaHJlZicpLFxyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjbWVudV9hcmVhXCIpLm5vdGlmeShcIlRhZyBTdWNjZXNzZnVsbHkgRGVsZXRlZFwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYm90dG9tIHJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGRlc2lnbiA9IEpTT04ucGFyc2UoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8kKCcjdGFibGUnKS5ib290c3RyYXBUYWJsZSgncmVtb3ZlQnlVbmlxdWVJZCcsIGRlc2lnbi5pZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRhZ2xpc3QgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICQuZWFjaChkZXNpZ24udGFncywgZnVuY3Rpb24gKHQsIHRhZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhZ2xpc3QgKz0gXCI8c3BhbiBjbGFzcz0ndGFnbGFiZWwnPjxzcGFuIGhyZWY9Jy9kZXNpZ24vZGVzaWduL2FqYXh1bmxpbmt0YWcvXCIgKyBkZXNpZ24uaWQgKyBcIi9cIiArIHRhZy5pZCArIFwiJyB0YWdpZD0nXCIgKyB0YWcuaWQgKyBcIicgdGFnbmFtZT0nXCIgKyB0YWcubmFtZSArIFwiJyBjbGFzcz0nY2xvc2VidG4gdW5saW5rdGFnYnRuJz7Dlzwvc3Bhbj5cIiArIHRhZy5uYW1lICsgXCI8L3NwYW4+XCI7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkKCcjdGFibGUnKS5ib290c3RyYXBUYWJsZSgndXBkYXRlQ2VsbEJ5VW5pcXVlSWQnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGRlc2lnbi5pZCxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ3RhZ3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0YWdsaXN0XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBtYWphY3RpdmV0YWdzKCk7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjpcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMsIG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI21lbnVfYXJlYVwiKS5ub3RpZnkoXCJUYWcgRGVsZXRpb24gRmFpbGVkXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYm90dG9tIHJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJlcnJvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIiNhcHBseXRhZ1wiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RhZ3M6JytKU09OLnN0cmluZ2lmeSgkKFwiI3NlbGVjdHRhZ1wiKS52YWwoKSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkZXNpZ25zOicrSlNPTi5zdHJpbmdpZnkoJChcIiN0YWJsZVwiKS5ib290c3RyYXBUYWJsZSgnZ2V0U2VsZWN0aW9ucycpKSlcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiL2Rlc2lnbi9kZXNpZ24vYWpheGFkZHRhZ1wiLFxyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHRhZ3M6IEpTT04uc3RyaW5naWZ5KCQoXCIjc2VsZWN0dGFnXCIpLnZhbCgpKSxcclxuICAgICAgICAgICAgICAgIGRlc2lnbnM6IEpTT04uc3RyaW5naWZ5KCQoXCIjdGFibGVcIikuYm9vdHN0cmFwVGFibGUoJ2dldFNlbGVjdGlvbnMnKSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjbWVudV9hcmVhXCIpLm5vdGlmeShcIlRhZ3MgU3VjY2Vzc2Z1bGx5IEFkZGVkIDogIFxcblwiICsgJChcIiNzZWxlY3R0YWcgb3B0aW9uOnNlbGVjdGVkXCIpLnRvQXJyYXkoKS5tYXAoaXRlbSA9PiBpdGVtLnRleHQpLmpvaW4oJ1xcbicpLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYm90dG9tIHJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9TdXBwcmVzc2lvbiBkZXMgbGlnbmVzIHByw6ljw6lkZW1tZW50IGNvY2jDqWVzXHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgaWRzID0gJC5tYXAoJCgnI3RhYmxlJykuYm9vdHN0cmFwVGFibGUoJ2dldFNlbGVjdGlvbnMnKSwgZnVuY3Rpb24gKHJvdykge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiByb3cuaWRcclxuICAgICAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgICAgICAvLyAkKCcjdGFibGUnKS5ib290c3RyYXBUYWJsZSgncmVtb3ZlJywge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGZpZWxkOiAnaWQnLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHZhbHVlczogaWRzXHJcbiAgICAgICAgICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAkLmVhY2goSlNPTi5wYXJzZShkYXRhKSwgZnVuY3Rpb24gKGtleSwgZGVzaWduKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0YWdsaXN0ID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGRlc2lnbi50YWdzLCBmdW5jdGlvbiAodCwgdGFnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ2xpc3QgKz0gXCI8c3BhbiBjbGFzcz0ndGFnbGFiZWwnPjxzcGFuIGhyZWY9Jy9kZXNpZ24vZGVzaWduL2FqYXh1bmxpbmt0YWcvXCIgKyBkZXNpZ24uaWQgKyBcIi9cIiArIHRhZy5pZCArIFwiJyB0YWdpZD0nXCIgKyB0YWcuaWQgKyBcIicgdGFnbmFtZT0nXCIgKyB0YWcubmFtZSArIFwiJyBjbGFzcz0nY2xvc2VidG4gdW5saW5rdGFnYnRuJz7Dlzwvc3Bhbj5cIiArIHRhZy5uYW1lICsgXCI8L3NwYW4+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoJyN0YWJsZScpLmJvb3RzdHJhcFRhYmxlKCd1cGRhdGVDZWxsQnlVbmlxdWVJZCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGRlc2lnbi5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICd0YWdzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRhZ2xpc3RcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWFqYWN0aXZldGFncygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyAkKCcjdGFibGUgdGJvZHknKS5maW5kKCcuc2VsZWN0ZWQnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIC8vICQoJyN0YWJsZSB0Ym9keScpLnByZXBlbmQoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAvLyAkKCcjdGFibGUnKS5ib290c3RyYXBUYWJsZSgncmVmcmVzaCcpO1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGRhdGEsIHN0YXR1cywgbWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjbWVudV9hcmVhXCIpLm5vdGlmeShcIkFkZGluZyBUYWdzIEZhaWxlZCA6ICBcXG5cIiArICQoXCIjc2VsZWN0dGFnIG9wdGlvbjpzZWxlY3RlZFwiKS50b0FycmF5KCkubWFwKGl0ZW0gPT4gaXRlbS50ZXh0KS5qb2luKCdcXG4nKSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJib3R0b20gcmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImVycm9yXCJcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI3RhYmxlJykub24oJ2NoZWNrLmJzLnRhYmxlIHVuY2hlY2suYnMudGFibGUgdW5jaGVjay1hbGwuYnMudGFibGUgY2hlY2stYWxsLmJzLnRhYmxlJywgbWFqYWN0aXZldGFncyk7XHJcblxyXG4gICAgLy9pY2kgYWpheCB0ZW1wbGF0ZVxyXG5cclxufSk7XHJcblxyXG5cclxuZnVuY3Rpb24gY2xlYW50YWdzKG15c3RyaW5nKSB7XHJcbiAgICBsZXQgcmVzID0gbXlzdHJpbmcucmVwbGFjZSgvKDwoW14+XSspPikvaWcsIFwiXCIpLnJlcGxhY2UoL1xcbnxcXHJ8KFxcblxccikvZywgXCJcIikuc3BsaXQoXCLDl1wiKTtcclxuICAgIGxldCBjbGVhbnJlcyA9IFtdO1xyXG5cclxuICAgICQuZWFjaChyZXMsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjbGVhbnJlcy5wdXNoKCQudHJpbSh0aGlzKSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBjbGVhbnJlcy5maWx0ZXIoZnVuY3Rpb24gKGNsZWFucmVzKSB7XHJcbiAgICAgICAgcmV0dXJuIGNsZWFucmVzICE9PSAnw5cnICYmIGNsZWFucmVzICE9PSAnJztcclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gdW5pcXVlKGFycmF5KSB7XHJcbiAgICByZXR1cm4gJC5ncmVwKGFycmF5LCBmdW5jdGlvbiAoZWwsIGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4ID09PSAkLmluQXJyYXkoZWwsIGFycmF5KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbWFqYWN0aXZldGFncygpIHtcclxuICAgIGxldCByb3dsaXN0ID0gJCgnI3RhYmxlJykuYm9vdHN0cmFwVGFibGUoJ2dldFNlbGVjdGlvbnMnKTtcclxuICAgIGxldCB0YWdsaXN0ID0gJyc7XHJcbiAgICBsZXQgdGFncyA9IFtdO1xyXG5cclxuICAgICQuZWFjaChyb3dsaXN0LCBmdW5jdGlvbiAociwgcm93KSB7XHJcbi8vICAgICAgICAkLm1lcmdlKHRhZ3MsIGNsZWFudGFncyhyb3cudGFncykpO1xyXG5cclxuICAgICAgICAkLmVhY2goJChyb3cudGFncykuZmluZCgnLnVubGlua3RhZ2J0bicpLCBmdW5jdGlvbihzLHNwYW4pe1xyXG4gICAgICAgICAgICBpZihqUXVlcnkuaW5BcnJheSgkKHNwYW4pLmF0dHIoJ3RhZ25hbWUnKSx0YWdzKSA9PT0gLTEpe1xyXG5cclxuICAgICAgICAgICAgICAgIHRhZ3MucHVzaCgkKHNwYW4pLmF0dHIoJ3RhZ25hbWUnKSk7XHJcbiAgICAgICAgICAgICAgICB0YWdsaXN0ICs9IFwiPHNwYW4gY2xhc3M9J3RhZ2xhYmVsJz48c3BhbiBocmVmPScvZGVzaWduL2Rlc2lnbi9hamF4dW5saW5rdGFnZnJvbXNlbGVjdGlvbi9cIiArICQoc3BhbikuYXR0cigndGFnaWQnKSArIFwiJyB0YWdpZD0nXCIgKyAkKHNwYW4pLmF0dHIoJ3RhZ2lkJykgKyBcIicgdGFnbmFtZT0nXCIgKyAkKHNwYW4pLmF0dHIoJ3RhZ25hbWUnKSArIFwiJyBjbGFzcz0nY2xvc2VidG4gdW5saW5rdGFnZnJvbXNlbGVjdGlvbmJ0bic+w5c8L3NwYW4+XCIgKyAkKHNwYW4pLmF0dHIoJ3RhZ25hbWUnKSArIFwiPC9zcGFuPlwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgIC8vY29uc29sZS5sb2coc3Bhbi5hdHRyKCd0YWdpZCcpKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJChzcGFuKS5hdHRyKCd0YWdpZCcpICsgJyAnICsgJChzcGFuKS5hdHRyKCd0YWduYW1lJykpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIC8vY29uc29sZS5sb2codGFnbGlzdCk7XHJcbiAgICAvLyB0YWdzID0gdW5pcXVlKHRhZ3MpO1xyXG4gICAgLy8gY29uc29sZS5sb2codGFncylcclxuICAgIC8vXHJcbiAgICAvLyAkLmVhY2godGFncywgZnVuY3Rpb24gKHQsIHRhZykge1xyXG4gICAgLy8gICAgIHRhZ2xpc3QgKz0gXCI8c3BhbiBjbGFzcz0ndGFnbGFiZWwnPjxzcGFuIGhyZWY9Jy9kZXNpZ24vZGVzaWduL2FqYXh1bmxpbmt0YWdmcm9tc2VsZWN0aW9uL1wiICsgdGFnLmlkICsgXCInIHRhZ2lkPSdcIiArIHRhZy5pZCArIFwiJyB0YWduYW1lPSdcIiArIHRhZy5uYW1lICsgXCInIGNsYXNzPSdjbG9zZWJ0biB1bmxpbmt0YWdmcm9tc2VsZWN0aW9uYnRuJz7Dlzwvc3Bhbj5cIiArIHRhZyArIFwiPC9zcGFuPlwiO1xyXG4gICAgLy8gfSlcclxuXHJcbiAgICAkKCcjYWN0aXZldGFncycpLmh0bWwodGFnbGlzdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGh0bWxUb0VsZW1lbnRzKGh0bWwpIHtcclxuICAgIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XHJcbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgcmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuY2hpbGROb2RlcztcclxufSIsIid1c2Ugc3RyaWN0JztcclxudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XHJcbnZhciAkZmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maW5kO1xyXG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcclxudmFyIGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC11c2VzLXRvLWxlbmd0aCcpO1xyXG5cclxudmFyIEZJTkQgPSAnZmluZCc7XHJcbnZhciBTS0lQU19IT0xFUyA9IHRydWU7XHJcblxyXG52YXIgVVNFU19UT19MRU5HVEggPSBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aChGSU5EKTtcclxuXHJcbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXHJcbmlmIChGSU5EIGluIFtdKSBBcnJheSgxKVtGSU5EXShmdW5jdGlvbiAoKSB7IFNLSVBTX0hPTEVTID0gZmFsc2U7IH0pO1xyXG5cclxuLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2RcclxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRcclxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogU0tJUFNfSE9MRVMgfHwgIVVTRVNfVE9fTEVOR1RIIH0sIHtcclxuICBmaW5kOiBmdW5jdGlvbiBmaW5kKGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XHJcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xyXG5hZGRUb1Vuc2NvcGFibGVzKEZJTkQpO1xyXG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcclxudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xyXG5cclxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xyXG52YXIgRnVuY3Rpb25Qcm90b3R5cGVUb1N0cmluZyA9IEZ1bmN0aW9uUHJvdG90eXBlLnRvU3RyaW5nO1xyXG52YXIgbmFtZVJFID0gL15cXHMqZnVuY3Rpb24gKFteIChdKikvO1xyXG52YXIgTkFNRSA9ICduYW1lJztcclxuXHJcbi8vIEZ1bmN0aW9uIGluc3RhbmNlcyBgLm5hbWVgIHByb3BlcnR5XHJcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLWluc3RhbmNlcy1uYW1lXHJcbmlmIChERVNDUklQVE9SUyAmJiAhKE5BTUUgaW4gRnVuY3Rpb25Qcm90b3R5cGUpKSB7XHJcbiAgZGVmaW5lUHJvcGVydHkoRnVuY3Rpb25Qcm90b3R5cGUsIE5BTUUsIHtcclxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBGdW5jdGlvblByb3RvdHlwZVRvU3RyaW5nLmNhbGwodGhpcykubWF0Y2gobmFtZVJFKVsxXTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCIndXNlIHN0cmljdCc7XHJcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XHJcbnZhciBpc1JlZ0V4cCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1yZWdleHAnKTtcclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xyXG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcclxudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XHJcbnZhciBhZHZhbmNlU3RyaW5nSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWR2YW5jZS1zdHJpbmctaW5kZXgnKTtcclxudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xyXG52YXIgY2FsbFJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcclxudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMnKTtcclxudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XHJcblxyXG52YXIgYXJyYXlQdXNoID0gW10ucHVzaDtcclxudmFyIG1pbiA9IE1hdGgubWluO1xyXG52YXIgTUFYX1VJTlQzMiA9IDB4RkZGRkZGRkY7XHJcblxyXG4vLyBiYWJlbC1taW5pZnkgdHJhbnNwaWxlcyBSZWdFeHAoJ3gnLCAneScpIC0+IC94L3kgYW5kIGl0IGNhdXNlcyBTeW50YXhFcnJvclxyXG52YXIgU1VQUE9SVFNfWSA9ICFmYWlscyhmdW5jdGlvbiAoKSB7IHJldHVybiAhUmVnRXhwKE1BWF9VSU5UMzIsICd5Jyk7IH0pO1xyXG5cclxuLy8gQEBzcGxpdCBsb2dpY1xyXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygnc3BsaXQnLCAyLCBmdW5jdGlvbiAoU1BMSVQsIG5hdGl2ZVNwbGl0LCBtYXliZUNhbGxOYXRpdmUpIHtcclxuICB2YXIgaW50ZXJuYWxTcGxpdDtcclxuICBpZiAoXHJcbiAgICAnYWJiYycuc3BsaXQoLyhiKSovKVsxXSA9PSAnYycgfHxcclxuICAgICd0ZXN0Jy5zcGxpdCgvKD86KS8sIC0xKS5sZW5ndGggIT0gNCB8fFxyXG4gICAgJ2FiJy5zcGxpdCgvKD86YWIpKi8pLmxlbmd0aCAhPSAyIHx8XHJcbiAgICAnLicuc3BsaXQoLyguPykoLj8pLykubGVuZ3RoICE9IDQgfHxcclxuICAgICcuJy5zcGxpdCgvKCkoKS8pLmxlbmd0aCA+IDEgfHxcclxuICAgICcnLnNwbGl0KC8uPy8pLmxlbmd0aFxyXG4gICkge1xyXG4gICAgLy8gYmFzZWQgb24gZXM1LXNoaW0gaW1wbGVtZW50YXRpb24sIG5lZWQgdG8gcmV3b3JrIGl0XHJcbiAgICBpbnRlcm5hbFNwbGl0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciwgbGltaXQpIHtcclxuICAgICAgdmFyIHN0cmluZyA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpKTtcclxuICAgICAgdmFyIGxpbSA9IGxpbWl0ID09PSB1bmRlZmluZWQgPyBNQVhfVUlOVDMyIDogbGltaXQgPj4+IDA7XHJcbiAgICAgIGlmIChsaW0gPT09IDApIHJldHVybiBbXTtcclxuICAgICAgaWYgKHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkKSByZXR1cm4gW3N0cmluZ107XHJcbiAgICAgIC8vIElmIGBzZXBhcmF0b3JgIGlzIG5vdCBhIHJlZ2V4LCB1c2UgbmF0aXZlIHNwbGl0XHJcbiAgICAgIGlmICghaXNSZWdFeHAoc2VwYXJhdG9yKSkge1xyXG4gICAgICAgIHJldHVybiBuYXRpdmVTcGxpdC5jYWxsKHN0cmluZywgc2VwYXJhdG9yLCBsaW0pO1xyXG4gICAgICB9XHJcbiAgICAgIHZhciBvdXRwdXQgPSBbXTtcclxuICAgICAgdmFyIGZsYWdzID0gKHNlcGFyYXRvci5pZ25vcmVDYXNlID8gJ2knIDogJycpICtcclxuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci5tdWx0aWxpbmUgPyAnbScgOiAnJykgK1xyXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLnVuaWNvZGUgPyAndScgOiAnJykgK1xyXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLnN0aWNreSA/ICd5JyA6ICcnKTtcclxuICAgICAgdmFyIGxhc3RMYXN0SW5kZXggPSAwO1xyXG4gICAgICAvLyBNYWtlIGBnbG9iYWxgIGFuZCBhdm9pZCBgbGFzdEluZGV4YCBpc3N1ZXMgYnkgd29ya2luZyB3aXRoIGEgY29weVxyXG4gICAgICB2YXIgc2VwYXJhdG9yQ29weSA9IG5ldyBSZWdFeHAoc2VwYXJhdG9yLnNvdXJjZSwgZmxhZ3MgKyAnZycpO1xyXG4gICAgICB2YXIgbWF0Y2gsIGxhc3RJbmRleCwgbGFzdExlbmd0aDtcclxuICAgICAgd2hpbGUgKG1hdGNoID0gcmVnZXhwRXhlYy5jYWxsKHNlcGFyYXRvckNvcHksIHN0cmluZykpIHtcclxuICAgICAgICBsYXN0SW5kZXggPSBzZXBhcmF0b3JDb3B5Lmxhc3RJbmRleDtcclxuICAgICAgICBpZiAobGFzdEluZGV4ID4gbGFzdExhc3RJbmRleCkge1xyXG4gICAgICAgICAgb3V0cHV0LnB1c2goc3RyaW5nLnNsaWNlKGxhc3RMYXN0SW5kZXgsIG1hdGNoLmluZGV4KSk7XHJcbiAgICAgICAgICBpZiAobWF0Y2gubGVuZ3RoID4gMSAmJiBtYXRjaC5pbmRleCA8IHN0cmluZy5sZW5ndGgpIGFycmF5UHVzaC5hcHBseShvdXRwdXQsIG1hdGNoLnNsaWNlKDEpKTtcclxuICAgICAgICAgIGxhc3RMZW5ndGggPSBtYXRjaFswXS5sZW5ndGg7XHJcbiAgICAgICAgICBsYXN0TGFzdEluZGV4ID0gbGFzdEluZGV4O1xyXG4gICAgICAgICAgaWYgKG91dHB1dC5sZW5ndGggPj0gbGltKSBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlcGFyYXRvckNvcHkubGFzdEluZGV4ID09PSBtYXRjaC5pbmRleCkgc2VwYXJhdG9yQ29weS5sYXN0SW5kZXgrKzsgLy8gQXZvaWQgYW4gaW5maW5pdGUgbG9vcFxyXG4gICAgICB9XHJcbiAgICAgIGlmIChsYXN0TGFzdEluZGV4ID09PSBzdHJpbmcubGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKGxhc3RMZW5ndGggfHwgIXNlcGFyYXRvckNvcHkudGVzdCgnJykpIG91dHB1dC5wdXNoKCcnKTtcclxuICAgICAgfSBlbHNlIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4KSk7XHJcbiAgICAgIHJldHVybiBvdXRwdXQubGVuZ3RoID4gbGltID8gb3V0cHV0LnNsaWNlKDAsIGxpbSkgOiBvdXRwdXQ7XHJcbiAgICB9O1xyXG4gIC8vIENoYWtyYSwgVjhcclxuICB9IGVsc2UgaWYgKCcwJy5zcGxpdCh1bmRlZmluZWQsIDApLmxlbmd0aCkge1xyXG4gICAgaW50ZXJuYWxTcGxpdCA9IGZ1bmN0aW9uIChzZXBhcmF0b3IsIGxpbWl0KSB7XHJcbiAgICAgIHJldHVybiBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCAmJiBsaW1pdCA9PT0gMCA/IFtdIDogbmF0aXZlU3BsaXQuY2FsbCh0aGlzLCBzZXBhcmF0b3IsIGxpbWl0KTtcclxuICAgIH07XHJcbiAgfSBlbHNlIGludGVybmFsU3BsaXQgPSBuYXRpdmVTcGxpdDtcclxuXHJcbiAgcmV0dXJuIFtcclxuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnNwbGl0YCBtZXRob2RcclxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc3BsaXRcclxuICAgIGZ1bmN0aW9uIHNwbGl0KHNlcGFyYXRvciwgbGltaXQpIHtcclxuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xyXG4gICAgICB2YXIgc3BsaXR0ZXIgPSBzZXBhcmF0b3IgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VwYXJhdG9yW1NQTElUXTtcclxuICAgICAgcmV0dXJuIHNwbGl0dGVyICE9PSB1bmRlZmluZWRcclxuICAgICAgICA/IHNwbGl0dGVyLmNhbGwoc2VwYXJhdG9yLCBPLCBsaW1pdClcclxuICAgICAgICA6IGludGVybmFsU3BsaXQuY2FsbChTdHJpbmcoTyksIHNlcGFyYXRvciwgbGltaXQpO1xyXG4gICAgfSxcclxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAc3BsaXRdYCBtZXRob2RcclxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBzcGxpdFxyXG4gICAgLy9cclxuICAgIC8vIE5PVEU6IFRoaXMgY2Fubm90IGJlIHByb3Blcmx5IHBvbHlmaWxsZWQgaW4gZW5naW5lcyB0aGF0IGRvbid0IHN1cHBvcnRcclxuICAgIC8vIHRoZSAneScgZmxhZy5cclxuICAgIGZ1bmN0aW9uIChyZWdleHAsIGxpbWl0KSB7XHJcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUoaW50ZXJuYWxTcGxpdCwgcmVnZXhwLCB0aGlzLCBsaW1pdCwgaW50ZXJuYWxTcGxpdCAhPT0gbmF0aXZlU3BsaXQpO1xyXG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XHJcblxyXG4gICAgICB2YXIgcnggPSBhbk9iamVjdChyZWdleHApO1xyXG4gICAgICB2YXIgUyA9IFN0cmluZyh0aGlzKTtcclxuICAgICAgdmFyIEMgPSBzcGVjaWVzQ29uc3RydWN0b3IocngsIFJlZ0V4cCk7XHJcblxyXG4gICAgICB2YXIgdW5pY29kZU1hdGNoaW5nID0gcngudW5pY29kZTtcclxuICAgICAgdmFyIGZsYWdzID0gKHJ4Lmlnbm9yZUNhc2UgPyAnaScgOiAnJykgK1xyXG4gICAgICAgICAgICAgICAgICAocngubXVsdGlsaW5lID8gJ20nIDogJycpICtcclxuICAgICAgICAgICAgICAgICAgKHJ4LnVuaWNvZGUgPyAndScgOiAnJykgK1xyXG4gICAgICAgICAgICAgICAgICAoU1VQUE9SVFNfWSA/ICd5JyA6ICdnJyk7XHJcblxyXG4gICAgICAvLyBeKD8gKyByeCArICkgaXMgbmVlZGVkLCBpbiBjb21iaW5hdGlvbiB3aXRoIHNvbWUgUyBzbGljaW5nLCB0b1xyXG4gICAgICAvLyBzaW11bGF0ZSB0aGUgJ3knIGZsYWcuXHJcbiAgICAgIHZhciBzcGxpdHRlciA9IG5ldyBDKFNVUFBPUlRTX1kgPyByeCA6ICdeKD86JyArIHJ4LnNvdXJjZSArICcpJywgZmxhZ3MpO1xyXG4gICAgICB2YXIgbGltID0gbGltaXQgPT09IHVuZGVmaW5lZCA/IE1BWF9VSU5UMzIgOiBsaW1pdCA+Pj4gMDtcclxuICAgICAgaWYgKGxpbSA9PT0gMCkgcmV0dXJuIFtdO1xyXG4gICAgICBpZiAoUy5sZW5ndGggPT09IDApIHJldHVybiBjYWxsUmVnRXhwRXhlYyhzcGxpdHRlciwgUykgPT09IG51bGwgPyBbU10gOiBbXTtcclxuICAgICAgdmFyIHAgPSAwO1xyXG4gICAgICB2YXIgcSA9IDA7XHJcbiAgICAgIHZhciBBID0gW107XHJcbiAgICAgIHdoaWxlIChxIDwgUy5sZW5ndGgpIHtcclxuICAgICAgICBzcGxpdHRlci5sYXN0SW5kZXggPSBTVVBQT1JUU19ZID8gcSA6IDA7XHJcbiAgICAgICAgdmFyIHogPSBjYWxsUmVnRXhwRXhlYyhzcGxpdHRlciwgU1VQUE9SVFNfWSA/IFMgOiBTLnNsaWNlKHEpKTtcclxuICAgICAgICB2YXIgZTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICB6ID09PSBudWxsIHx8XHJcbiAgICAgICAgICAoZSA9IG1pbih0b0xlbmd0aChzcGxpdHRlci5sYXN0SW5kZXggKyAoU1VQUE9SVFNfWSA/IDAgOiBxKSksIFMubGVuZ3RoKSkgPT09IHBcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHEgPSBhZHZhbmNlU3RyaW5nSW5kZXgoUywgcSwgdW5pY29kZU1hdGNoaW5nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgQS5wdXNoKFMuc2xpY2UocCwgcSkpO1xyXG4gICAgICAgICAgaWYgKEEubGVuZ3RoID09PSBsaW0pIHJldHVybiBBO1xyXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gei5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgQS5wdXNoKHpbaV0pO1xyXG4gICAgICAgICAgICBpZiAoQS5sZW5ndGggPT09IGxpbSkgcmV0dXJuIEE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBxID0gcCA9IGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIEEucHVzaChTLnNsaWNlKHApKTtcclxuICAgICAgcmV0dXJuIEE7XHJcbiAgICB9XHJcbiAgXTtcclxufSwgIVNVUFBPUlRTX1kpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9