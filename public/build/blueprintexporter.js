(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blueprintexporter"],{

/***/ "./assets/css/printify/blueprintselector.css":
/*!***************************************************!*\
  !*** ./assets/css/printify/blueprintselector.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/printify/blueprintexporter.js":
/*!*************************************************!*\
  !*** ./assets/js/printify/blueprintexporter.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_printify_blueprintselector_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../css/printify/blueprintselector.css */ "./assets/css/printify/blueprintselector.css");
/* harmony import */ var _css_printify_blueprintselector_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_printify_blueprintselector_css__WEBPACK_IMPORTED_MODULE_6__);







Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, /*! tableexport */ "./node_modules/tableexport/dist/js/tableexport.js", 7));
$(document).ready(function () {
  $('#blueprintselection').on('change', function () {
    var imagelist = '';
    var providerlist = '<div class="col-6"><div class="form-group"><label for="providerselection">2. Choose a provider</label><select class="form-control" id="providerselection">';
    $.each(shop.blueprints, function (i, obj) {
      if (obj.id == $('#blueprintselection option:selected').val()) {
        $.each(obj.images, function (j, img) {
          imagelist += '<img src="' + img + '" style="width:33%"/>';
        });
        $("#blueprintdescription").empty();
        $("#blueprintdescription").append('Brand : ' + obj.brand + '<br>');
        $("#blueprintdescription").append('Model : ' + obj.model + '<br><br>');
        $("#blueprintdescription").append('<p>' + obj.description + '</p>');
        $.each(obj.providers, function (k, prov) {
          providerlist += '<option value="' + prov.id + '">' + prov.title + '</option>';
        });
        providerlist += '</select></div><div id="providerdescription"></div></div><div id="providervariant" class="col-6"></div>';
      }
    });
    $("#blueprintimages").empty();
    $("#blueprintimages").prepend(imagelist);
    $("#providerchoice").empty();
    $("#providerchoice").append(providerlist);
    $("#providervariant").empty();
    $("#exportchoice").empty();
    $('#providerselection').on('change', function () {
      var variantlist = '<select multiple size="10" id="variantselection" style="width:100%">';
      var shipping = '';
      $.each(shop.blueprints, function (i, obj) {
        if (obj.id == $('#blueprintselection option:selected').val()) {
          $.each(obj.variants, function (j, variant) {
            if (variant.provider.id == $('#providerselection option:selected').val()) {
              variantlist += '<option value="' + variant.id + '">' + variant.title + '</option>';
            }
          });
          variantlist += '</select>';
          console.log(variantlist);
          $.each(obj.shippings, function (j, shipping) {
            if (shipping.provider.id == $('#providerselection option:selected').val()) {
              $("#providerdescription").empty();
              $("#providerdescription").append('Handling time : ' + shipping.handling_time.value + ' ' + shipping.handling_time.unit + '<br>');
            }
          });
        }
      });
      $("#providervariant").empty();
      $("#providervariant").append(variantlist);
      $("#exportchoice").empty();
      $('#variantselection').on('change', function () {
        var exporttable = '<table class="table table-hover table-sm">\n' + '  <thead>\n' + '    <tr>\n' + '      <th scope="col" title="Product Id (Integer)">Product Id</th>\n' + '      <th scope="col">Blueprint Id</th>\n' + '      <th scope="col">Provider Id</th>\n' + '      <th scope="col">Variant Id</th>\n' + '      <th scope="col">Variant Title</th>\n' + '      <th scope="col" title="Product Title (Max 255 Characters)">Product Title</th>\n' + '      <th scope="col" title="Product Description (Text feel free ;) + HTML ?)">Product Description</th>\n' + '      <th scope="col" title="Variant Price (Integer without comma, i.e 29,00€ => 2900)">Variant Price</th>\n' + '      <th scope="col">Variant Is_Enabled</th>\n' + '      <th scope="col" title="Print Area Id (should be only one Print Area Id per Product Id, two if black and white)">Print Area Id</th>\n' + '      <th scope="col">Placeholder Id</th>\n' + '      <th scope="col">Placeholder Height</th>\n' + '      <th scope="col">Placeholder Width</th>\n' + '      <th scope="col">Position</th>\n' + '      <th scope="col">Image Path</th>\n' + '      <th scope="col">Tags</th>\n' + '    </tr>\n' + '  </thead><tbody>';
        console.log($('#variantselection').val());
        var placeholderid = 0;
        $.each(shop.blueprints, function (index, blueprint) {
          if (blueprint.id == $('#blueprintselection option:selected').val()) {
            console.log(blueprint);
            $.each(blueprint.variants, function (index, variant) {
              if ($.inArray(variant.id.toString(), $('#variantselection').val()) !== -1 && blueprint.id == $('#blueprintselection option:selected').val() && variant.provider.id == $('#providerselection option:selected').val()) {
                $.each(variant.placeholders, function (index, placeholder) {
                  placeholderid += 1;
                  exporttable += '<tr>' + '<td>User Input</td>' + '<td>' + blueprint.id + '</td>' + '<td>' + variant.provider.id + '</td>' + '<td>' + variant.id + '</td>' + '<td>' + variant.title + '</td>' + '<td>User Input</td>' + '<td>User Input</td>' + '<td>User Input</td>' + '<td>1</td>' + '<td>User Input</td>' + '<td>' + placeholder.id + '</td>' + '<td>' + placeholder.position + '</td>' + '<td>' + placeholder.height + '</td>' + '<td>' + placeholder.width + '</td>' + '<td>Image Path</td>' + '<td>Tags</td>' + '</tr>';
                });
              }
            });
          }
        });
        exporttable += '</tbody></table>';
        $("#exportchoice").empty();
        $("#exportchoice").append(exporttable);
        $("#exportchoice").append('<a id="exporttotable" class="btn btn-primary">Export</a>');
        $('#exporttotable').on('click', function () {
          // Character set (character encoding) of the HTML.
          $.fn.tableExport.charset = "charset=utf-8";
          $.fn.tableExport.defaultFileName = "myTemplate"; // Class applied to each export button element.

          $.fn.tableExport.defaultButton = "button-default"; // <a href="https://www.jqueryscript.net/tags.php?/Bootstrap/">Bootstrap</a> configuration classes ["base", "theme", "container"].

          $.fn.tableExport.bootstrap = ["btn", "btn-default", "btn-toolbar"];
          $("#exportchoice").tableExport({
            // Displays table headers (th or td elements) in the <thead>
            headers: true,
            // Displays table footers (th or td elements) in the <tfoot>
            footers: true,
            // Filetype(s) for the export
            formats: ["xls", "csv", "txt"],
            // Filename for the downloaded file
            fileName: "myTemplate",
            // Style buttons using bootstrap framework
            bootstrap: false,
            // Automatically generates the built-in export buttons for each of the specified formats
            exportButtons: true,
            // Position of the caption element relative to table
            position: "bottom",
            // (Number, Number[]), Row indices to exclude from the exported file(s)
            ignoreRows: null,
            // (Number, Number[]), column indices to exclude from the exported file(s)
            ignoreCols: null,
            // Removes all leading/trailing newlines, spaces, and tabs from cell text in the exported file(s)
            trimWhitespace: false,
            // (Boolean), set direction of the worksheet to right-to-left (default: false)
            RTL: false,
            // (id, String), sheet name for the exported spreadsheet, (default: 'id')
            sheetname: "template"
          });
        });
      });
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-ios.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-ios.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),

/***/ "./node_modules/core-js/internals/host-report-errors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/host-report-errors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterate.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/iterate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, next, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};


/***/ }),

/***/ "./node_modules/core-js/internals/microtask.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/microtask.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var macrotask = __webpack_require__(/*! ../internals/task */ "./node_modules/core-js/internals/task.js").set;
var IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ "./node_modules/core-js/internals/engine-is-ios.js");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var IS_NODE = classof(process) == 'process';
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  } else if (MutationObserver && !IS_IOS) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ "./node_modules/core-js/internals/native-promise-constructor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/native-promise-constructor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global.Promise;


/***/ }),

/***/ "./node_modules/core-js/internals/new-promise-capability.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/new-promise-capability.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/internals/perform.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/perform.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/promise-resolve.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/promise-resolve.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var newPromiseCapability = __webpack_require__(/*! ../internals/new-promise-capability */ "./node_modules/core-js/internals/new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/internals/task.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/task.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ "./node_modules/core-js/internals/engine-is-ios.js");

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (classof(process) == 'process') {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts && !fails(post)) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ "./node_modules/core-js/internals/native-promise-constructor.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "./node_modules/core-js/internals/redefine-all.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/core-js/internals/set-species.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");
var task = __webpack_require__(/*! ../internals/task */ "./node_modules/core-js/internals/task.js").set;
var microtask = __webpack_require__(/*! ../internals/microtask */ "./node_modules/core-js/internals/microtask.js");
var promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ "./node_modules/core-js/internals/promise-resolve.js");
var hostReportErrors = __webpack_require__(/*! ../internals/host-report-errors */ "./node_modules/core-js/internals/host-report-errors.js");
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ "./node_modules/core-js/internals/new-promise-capability.js");
var perform = __webpack_require__(/*! ../internals/perform */ "./node_modules/core-js/internals/perform.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var IS_NODE = classof(process) == 'process';
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (V8_VERSION === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE && typeof PromiseRejectionEvent != 'function') return true;
  }
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (promise, state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(promise, state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (handler = global['on' + name]) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (promise, state) {
  task.call(global, function () {
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (promise, state) {
  task.call(global, function () {
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, promise, state, unwrap) {
  return function (value) {
    fn(promise, state, value, unwrap);
  };
};

var internalReject = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(promise, state, true);
};

var internalResolve = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, promise, wrapper, state),
            bind(internalReject, promise, wrapper, state)
          );
        } catch (error) {
          internalReject(promise, wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(promise, state, false);
    }
  } catch (error) {
    internalReject(promise, { done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, this, state), bind(internalReject, this, state));
    } catch (error) {
      internalReject(this, state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(this, state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, promise, state);
    this.reject = bind(internalReject, promise, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.github.io/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.github.io/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.github.io/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.github.io/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ })

},[["./assets/js/printify/blueprintexporter.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3ByaW50aWZ5L2JsdWVwcmludHNlbGVjdG9yLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcHJpbnRpZnkvYmx1ZXByaW50ZXhwb3J0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NhbGwtd2l0aC1zYWZlLWl0ZXJhdGlvbi1jbG9zaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtaXMtaW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9ob3N0LXJlcG9ydC1lcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21pY3JvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbmF0aXZlLXByb21pc2UtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25ldy1wcm9taXNlLWNhcGFiaWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3BlcmZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3Byb21pc2UtcmVzb2x2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnByb21pc2UuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJvbiIsImltYWdlbGlzdCIsInByb3ZpZGVybGlzdCIsImVhY2giLCJzaG9wIiwiYmx1ZXByaW50cyIsImkiLCJvYmoiLCJpZCIsInZhbCIsImltYWdlcyIsImoiLCJpbWciLCJlbXB0eSIsImFwcGVuZCIsImJyYW5kIiwibW9kZWwiLCJkZXNjcmlwdGlvbiIsInByb3ZpZGVycyIsImsiLCJwcm92IiwidGl0bGUiLCJwcmVwZW5kIiwidmFyaWFudGxpc3QiLCJzaGlwcGluZyIsInZhcmlhbnRzIiwidmFyaWFudCIsInByb3ZpZGVyIiwiY29uc29sZSIsImxvZyIsInNoaXBwaW5ncyIsImhhbmRsaW5nX3RpbWUiLCJ2YWx1ZSIsInVuaXQiLCJleHBvcnR0YWJsZSIsInBsYWNlaG9sZGVyaWQiLCJpbmRleCIsImJsdWVwcmludCIsImluQXJyYXkiLCJ0b1N0cmluZyIsInBsYWNlaG9sZGVycyIsInBsYWNlaG9sZGVyIiwicG9zaXRpb24iLCJoZWlnaHQiLCJ3aWR0aCIsImZuIiwidGFibGVFeHBvcnQiLCJjaGFyc2V0IiwiZGVmYXVsdEZpbGVOYW1lIiwiZGVmYXVsdEJ1dHRvbiIsImJvb3RzdHJhcCIsImhlYWRlcnMiLCJmb290ZXJzIiwiZm9ybWF0cyIsImZpbGVOYW1lIiwiZXhwb3J0QnV0dG9ucyIsImlnbm9yZVJvd3MiLCJpZ25vcmVDb2xzIiwidHJpbVdoaXRlc3BhY2UiLCJSVEwiLCJzaGVldG5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBR0FBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBVztBQUV6QkYsR0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJHLEVBQXpCLENBQTRCLFFBQTVCLEVBQXNDLFlBQVU7QUFDNUMsUUFBSUMsU0FBUyxHQUFFLEVBQWY7QUFDQSxRQUFJQyxZQUFZLEdBQUUsNEpBQWxCO0FBQ0FMLEtBQUMsQ0FBQ00sSUFBRixDQUFPQyxJQUFJLENBQUNDLFVBQVosRUFBd0IsVUFBU0Ms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LCJmaWxlIjoiYmx1ZXByaW50ZXhwb3J0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4uLy4uL2Nzcy9wcmludGlmeS9ibHVlcHJpbnRzZWxlY3Rvci5jc3MnO1xyXG5pbXBvcnQoJ3RhYmxlZXhwb3J0Jyk7XHJcblxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgJCgnI2JsdWVwcmludHNlbGVjdGlvbicpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGxldCBpbWFnZWxpc3QgPScnO1xyXG4gICAgICAgIGxldCBwcm92aWRlcmxpc3QgPSc8ZGl2IGNsYXNzPVwiY29sLTZcIj48ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPjxsYWJlbCBmb3I9XCJwcm92aWRlcnNlbGVjdGlvblwiPjIuIENob29zZSBhIHByb3ZpZGVyPC9sYWJlbD48c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJwcm92aWRlcnNlbGVjdGlvblwiPic7XHJcbiAgICAgICAgJC5lYWNoKHNob3AuYmx1ZXByaW50cywgZnVuY3Rpb24oaSwgb2JqKXtcclxuICAgICAgICAgICAgaWYob2JqLmlkID09ICQoJyNibHVlcHJpbnRzZWxlY3Rpb24gb3B0aW9uOnNlbGVjdGVkJykudmFsKCkpe1xyXG5cclxuICAgICAgICAgICAgICAgICQuZWFjaChvYmouaW1hZ2VzLCBmdW5jdGlvbihqLCBpbWcpe1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlbGlzdCArPSAnPGltZyBzcmM9XCInK2ltZysnXCIgc3R5bGU9XCJ3aWR0aDozMyVcIi8+J1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2JsdWVwcmludGRlc2NyaXB0aW9uXCIpLmVtcHR5KCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2JsdWVwcmludGRlc2NyaXB0aW9uXCIpLmFwcGVuZCgnQnJhbmQgOiAnICsgb2JqLmJyYW5kICsnPGJyPicpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNibHVlcHJpbnRkZXNjcmlwdGlvblwiKS5hcHBlbmQoJ01vZGVsIDogJyArIG9iai5tb2RlbCArJzxicj48YnI+Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIiNibHVlcHJpbnRkZXNjcmlwdGlvblwiKS5hcHBlbmQoJzxwPicgKyBvYmouZGVzY3JpcHRpb24gKyAnPC9wPicpO1xyXG5cclxuICAgICAgICAgICAgICAgICQuZWFjaChvYmoucHJvdmlkZXJzLCBmdW5jdGlvbihrLCBwcm92KXtcclxuICAgICAgICAgICAgICAgICAgICBwcm92aWRlcmxpc3QgKz0gJzxvcHRpb24gdmFsdWU9XCInK3Byb3YuaWQrJ1wiPicrIHByb3YudGl0bGUgKyAnPC9vcHRpb24+J1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBwcm92aWRlcmxpc3QgKz0nPC9zZWxlY3Q+PC9kaXY+PGRpdiBpZD1cInByb3ZpZGVyZGVzY3JpcHRpb25cIj48L2Rpdj48L2Rpdj48ZGl2IGlkPVwicHJvdmlkZXJ2YXJpYW50XCIgY2xhc3M9XCJjb2wtNlwiPjwvZGl2PidcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICAkKFwiI2JsdWVwcmludGltYWdlc1wiKS5lbXB0eSgpO1xyXG4gICAgICAgICQoXCIjYmx1ZXByaW50aW1hZ2VzXCIpLnByZXBlbmQoaW1hZ2VsaXN0KTtcclxuXHJcbiAgICAgICAgJChcIiNwcm92aWRlcmNob2ljZVwiKS5lbXB0eSgpO1xyXG4gICAgICAgICQoXCIjcHJvdmlkZXJjaG9pY2VcIikuYXBwZW5kKHByb3ZpZGVybGlzdCk7XHJcblxyXG4gICAgICAgICQoXCIjcHJvdmlkZXJ2YXJpYW50XCIpLmVtcHR5KCk7XHJcblxyXG4gICAgICAgICQoXCIjZXhwb3J0Y2hvaWNlXCIpLmVtcHR5KCk7XHJcblxyXG4gICAgICAgICQoJyNwcm92aWRlcnNlbGVjdGlvbicpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBsZXQgdmFyaWFudGxpc3QgPSc8c2VsZWN0IG11bHRpcGxlIHNpemU9XCIxMFwiIGlkPVwidmFyaWFudHNlbGVjdGlvblwiIHN0eWxlPVwid2lkdGg6MTAwJVwiPic7XHJcbiAgICAgICAgICAgIGxldCBzaGlwcGluZyA9Jyc7XHJcbiAgICAgICAgICAgICQuZWFjaChzaG9wLmJsdWVwcmludHMsIGZ1bmN0aW9uKGksIG9iail7XHJcbiAgICAgICAgICAgICAgICBpZihvYmouaWQgPT0gJCgnI2JsdWVwcmludHNlbGVjdGlvbiBvcHRpb246c2VsZWN0ZWQnKS52YWwoKSl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQuZWFjaChvYmoudmFyaWFudHMsIGZ1bmN0aW9uKGosIHZhcmlhbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih2YXJpYW50LnByb3ZpZGVyLmlkID09ICQoJyNwcm92aWRlcnNlbGVjdGlvbiBvcHRpb246c2VsZWN0ZWQnKS52YWwoKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50bGlzdCArPSc8b3B0aW9uIHZhbHVlPVwiJysgdmFyaWFudC5pZCArJ1wiPicgKyB2YXJpYW50LnRpdGxlICsnPC9vcHRpb24+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnRsaXN0ICs9ICc8L3NlbGVjdD4nO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhcmlhbnRsaXN0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKG9iai5zaGlwcGluZ3MsIGZ1bmN0aW9uKGosIHNoaXBwaW5nKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2hpcHBpbmcucHJvdmlkZXIuaWQgPT0gJCgnI3Byb3ZpZGVyc2VsZWN0aW9uIG9wdGlvbjpzZWxlY3RlZCcpLnZhbCgpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjcHJvdmlkZXJkZXNjcmlwdGlvblwiKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNwcm92aWRlcmRlc2NyaXB0aW9uXCIpLmFwcGVuZCgnSGFuZGxpbmcgdGltZSA6ICcgKyBzaGlwcGluZy5oYW5kbGluZ190aW1lLnZhbHVlICsgJyAnICsgc2hpcHBpbmcuaGFuZGxpbmdfdGltZS51bml0ICsgJzxicj4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkKFwiI3Byb3ZpZGVydmFyaWFudFwiKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAkKFwiI3Byb3ZpZGVydmFyaWFudFwiKS5hcHBlbmQodmFyaWFudGxpc3QpO1xyXG5cclxuICAgICAgICAgICAgJChcIiNleHBvcnRjaG9pY2VcIikuZW1wdHkoKTtcclxuXHJcbiAgICAgICAgICAgICQoJyN2YXJpYW50c2VsZWN0aW9uJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgZXhwb3J0dGFibGUgPSAnPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtaG92ZXIgdGFibGUtc21cIj5cXG4nICtcclxuICAgICAgICAgICAgICAgICAgICAnICA8dGhlYWQ+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAgICAgJyAgICA8dHI+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAgICAgJyAgICAgIDx0aCBzY29wZT1cImNvbFwiIHRpdGxlPVwiUHJvZHVjdCBJZCAoSW50ZWdlcilcIj5Qcm9kdWN0IElkPC90aD5cXG4nICtcclxuICAgICAgICAgICAgICAgICAgICAnICAgICAgPHRoIHNjb3BlPVwiY29sXCI+Qmx1ZXByaW50IElkPC90aD5cXG4nICtcclxuICAgICAgICAgICAgICAgICAgICAnICAgICAgPHRoIHNjb3BlPVwiY29sXCI+UHJvdmlkZXIgSWQ8L3RoPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgICAgICcgICAgICA8dGggc2NvcGU9XCJjb2xcIj5WYXJpYW50IElkPC90aD5cXG4nICtcclxuICAgICAgICAgICAgICAgICAgICAnICAgICAgPHRoIHNjb3BlPVwiY29sXCI+VmFyaWFudCBUaXRsZTwvdGg+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAgICAgJyAgICAgIDx0aCBzY29wZT1cImNvbFwiIHRpdGxlPVwiUHJvZHVjdCBUaXRsZSAoTWF4IDI1NSBDaGFyYWN0ZXJzKVwiPlByb2R1Y3QgVGl0bGU8L3RoPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgICAgICcgICAgICA8dGggc2NvcGU9XCJjb2xcIiB0aXRsZT1cIlByb2R1Y3QgRGVzY3JpcHRpb24gKFRleHQgZmVlbCBmcmVlIDspICsgSFRNTCA/KVwiPlByb2R1Y3QgRGVzY3JpcHRpb248L3RoPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgICAgICcgICAgICA8dGggc2NvcGU9XCJjb2xcIiB0aXRsZT1cIlZhcmlhbnQgUHJpY2UgKEludGVnZXIgd2l0aG91dCBjb21tYSwgaS5lIDI5LDAw4oKsID0+IDI5MDApXCI+VmFyaWFudCBQcmljZTwvdGg+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAgICAgJyAgICAgIDx0aCBzY29wZT1cImNvbFwiPlZhcmlhbnQgSXNfRW5hYmxlZDwvdGg+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAgICAgJyAgICAgIDx0aCBzY29wZT1cImNvbFwiIHRpdGxlPVwiUHJpbnQgQXJlYSBJZCAoc2hvdWxkIGJlIG9ubHkgb25lIFByaW50IEFyZWEgSWQgcGVyIFByb2R1Y3QgSWQsIHR3byBpZiBibGFjayBhbmQgd2hpdGUpXCI+UHJpbnQgQXJlYSBJZDwvdGg+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAgICAgJyAgICAgIDx0aCBzY29wZT1cImNvbFwiPlBsYWNlaG9sZGVyIElkPC90aD5cXG4nICtcclxuICAgICAgICAgICAgICAgICAgICAnICAgICAgPHRoIHNjb3BlPVwiY29sXCI+UGxhY2Vob2xkZXIgSGVpZ2h0PC90aD5cXG4nICtcclxuICAgICAgICAgICAgICAgICAgICAnICAgICAgPHRoIHNjb3BlPVwiY29sXCI+UGxhY2Vob2xkZXIgV2lkdGg8L3RoPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgICAgICcgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Qb3NpdGlvbjwvdGg+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAgICAgJyAgICAgIDx0aCBzY29wZT1cImNvbFwiPkltYWdlIFBhdGg8L3RoPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgICAgICcgICAgICA8dGggc2NvcGU9XCJjb2xcIj5UYWdzPC90aD5cXG4nICtcclxuICAgICAgICAgICAgICAgICAgICAnICAgIDwvdHI+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAgICAgJyAgPC90aGVhZD48dGJvZHk+JztcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCQoJyN2YXJpYW50c2VsZWN0aW9uJykudmFsKCkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBsYWNlaG9sZGVyaWQgPSAwO1xyXG4gICAgICAgICAgICAgICAgJC5lYWNoKHNob3AuYmx1ZXByaW50cywgZnVuY3Rpb24oIGluZGV4LCBibHVlcHJpbnQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYmx1ZXByaW50LmlkID09ICQoJyNibHVlcHJpbnRzZWxlY3Rpb24gb3B0aW9uOnNlbGVjdGVkJykudmFsKCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhibHVlcHJpbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkLmVhY2goYmx1ZXByaW50LnZhcmlhbnRzLCBmdW5jdGlvbiggaW5kZXgsIHZhcmlhbnQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCQuaW5BcnJheSh2YXJpYW50LmlkLnRvU3RyaW5nKCksICQoJyN2YXJpYW50c2VsZWN0aW9uJykudmFsKCkpICE9PSAtMSAmJiBibHVlcHJpbnQuaWQgPT0gJCgnI2JsdWVwcmludHNlbGVjdGlvbiBvcHRpb246c2VsZWN0ZWQnKS52YWwoKSAmJiAgdmFyaWFudC5wcm92aWRlci5pZCA9PSAkKCcjcHJvdmlkZXJzZWxlY3Rpb24gb3B0aW9uOnNlbGVjdGVkJykudmFsKCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5lYWNoKHZhcmlhbnQucGxhY2Vob2xkZXJzLCBmdW5jdGlvbiggaW5kZXgsIHBsYWNlaG9sZGVyICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyaWQgKz0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9ydHRhYmxlICs9ICc8dHI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8dGQ+VXNlciBJbnB1dDwvdGQ+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8dGQ+JysgYmx1ZXByaW50LmlkICsnPC90ZD4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHRkPicrIHZhcmlhbnQucHJvdmlkZXIuaWQgKyc8L3RkPicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8dGQ+JysgdmFyaWFudC5pZCArJzwvdGQ+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8dGQ+JysgdmFyaWFudC50aXRsZSArJzwvdGQ+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8dGQ+VXNlciBJbnB1dDwvdGQ+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8dGQ+VXNlciBJbnB1dDwvdGQ+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8dGQ+VXNlciBJbnB1dDwvdGQ+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8dGQ+MTwvdGQ+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8dGQ+VXNlciBJbnB1dDwvdGQ+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8dGQ+JyArIHBsYWNlaG9sZGVyLmlkICsgJzwvdGQ+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8dGQ+JysgcGxhY2Vob2xkZXIucG9zaXRpb24gKyc8L3RkPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHRkPicrIHBsYWNlaG9sZGVyLmhlaWdodCArJzwvdGQ+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8dGQ+JysgcGxhY2Vob2xkZXIud2lkdGggKyc8L3RkPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHRkPkltYWdlIFBhdGg8L3RkPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHRkPlRhZ3M8L3RkPicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8L3RyPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBleHBvcnR0YWJsZSArPSAnPC90Ym9keT48L3RhYmxlPic7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2V4cG9ydGNob2ljZVwiKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNleHBvcnRjaG9pY2VcIikuYXBwZW5kKGV4cG9ydHRhYmxlKTtcclxuICAgICAgICAgICAgICAgICQoXCIjZXhwb3J0Y2hvaWNlXCIpLmFwcGVuZCgnPGEgaWQ9XCJleHBvcnR0b3RhYmxlXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5FeHBvcnQ8L2E+Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnI2V4cG9ydHRvdGFibGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIENoYXJhY3RlciBzZXQgKGNoYXJhY3RlciBlbmNvZGluZykgb2YgdGhlIEhUTUwuXHJcbiAgICAgICAgICAgICAgICAgICAgJC5mbi50YWJsZUV4cG9ydC5jaGFyc2V0ID1cImNoYXJzZXQ9dXRmLThcIjtcclxuICAgICAgICAgICAgICAgICAgICAkLmZuLnRhYmxlRXhwb3J0LmRlZmF1bHRGaWxlTmFtZSA9XCJteVRlbXBsYXRlXCI7XHJcbi8vIENsYXNzIGFwcGxpZWQgdG8gZWFjaCBleHBvcnQgYnV0dG9uIGVsZW1lbnQuXHJcbiAgICAgICAgICAgICAgICAgICAgJC5mbi50YWJsZUV4cG9ydC5kZWZhdWx0QnV0dG9uID1cImJ1dHRvbi1kZWZhdWx0XCI7XHJcbi8vIDxhIGhyZWY9XCJodHRwczovL3d3dy5qcXVlcnlzY3JpcHQubmV0L3RhZ3MucGhwPy9Cb290c3RyYXAvXCI+Qm9vdHN0cmFwPC9hPiBjb25maWd1cmF0aW9uIGNsYXNzZXMgW1wiYmFzZVwiLCBcInRoZW1lXCIsIFwiY29udGFpbmVyXCJdLlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkLmZuLnRhYmxlRXhwb3J0LmJvb3RzdHJhcCA9IFtcImJ0blwiLFwiYnRuLWRlZmF1bHRcIixcImJ0bi10b29sYmFyXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjZXhwb3J0Y2hvaWNlXCIpLnRhYmxlRXhwb3J0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGlzcGxheXMgdGFibGUgaGVhZGVycyAodGggb3IgdGQgZWxlbWVudHMpIGluIHRoZSA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6dHJ1ZSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpc3BsYXlzIHRhYmxlIGZvb3RlcnMgKHRoIG9yIHRkIGVsZW1lbnRzKSBpbiB0aGUgPHRmb290PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb290ZXJzOnRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpbGV0eXBlKHMpIGZvciB0aGUgZXhwb3J0XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXRzOiBbXCJ4bHNcIixcImNzdlwiLFwidHh0XCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGaWxlbmFtZSBmb3IgdGhlIGRvd25sb2FkZWQgZmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTpcIm15VGVtcGxhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3R5bGUgYnV0dG9ucyB1c2luZyBib290c3RyYXAgZnJhbWV3b3JrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvb3RzdHJhcDpmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXV0b21hdGljYWxseSBnZW5lcmF0ZXMgdGhlIGJ1aWx0LWluIGV4cG9ydCBidXR0b25zIGZvciBlYWNoIG9mIHRoZSBzcGVjaWZpZWQgZm9ybWF0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRCdXR0b25zOnRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBvc2l0aW9uIG9mIHRoZSBjYXB0aW9uIGVsZW1lbnQgcmVsYXRpdmUgdG8gdGFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246XCJib3R0b21cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gKE51bWJlciwgTnVtYmVyW10pLCBSb3cgaW5kaWNlcyB0byBleGNsdWRlIGZyb20gdGhlIGV4cG9ydGVkIGZpbGUocylcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlUm93czpudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAoTnVtYmVyLCBOdW1iZXJbXSksIGNvbHVtbiBpbmRpY2VzIHRvIGV4Y2x1ZGUgZnJvbSB0aGUgZXhwb3J0ZWQgZmlsZShzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmVDb2xzOm51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZXMgYWxsIGxlYWRpbmcvdHJhaWxpbmcgbmV3bGluZXMsIHNwYWNlcywgYW5kIHRhYnMgZnJvbSBjZWxsIHRleHQgaW4gdGhlIGV4cG9ydGVkIGZpbGUocylcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpbVdoaXRlc3BhY2U6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIChCb29sZWFuKSwgc2V0IGRpcmVjdGlvbiBvZiB0aGUgd29ya3NoZWV0IHRvIHJpZ2h0LXRvLWxlZnQgKGRlZmF1bHQ6IGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSVEw6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIChpZCwgU3RyaW5nKSwgc2hlZXQgbmFtZSBmb3IgdGhlIGV4cG9ydGVkIHNwcmVhZHNoZWV0LCAoZGVmYXVsdDogJ2lkJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hlZXRuYW1lOlwidGVtcGxhdGVcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgfSk7XHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxuLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgRU5UUklFUykge1xuICB0cnkge1xuICAgIHJldHVybiBFTlRSSUVTID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdmFyIHJldHVybk1ldGhvZCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0dXJuTWV0aG9kICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldHVybk1ldGhvZC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG4iLCJ2YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gLyhpcGhvbmV8aXBvZHxpcGFkKS4qYXBwbGV3ZWJraXQvaS50ZXN0KHVzZXJBZ2VudCk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gIHZhciBjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGU7XG4gIGlmIChjb25zb2xlICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gY29uc29sZS5lcnJvcihhKSA6IGNvbnNvbGUuZXJyb3IoYSwgYik7XG4gIH1cbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXNBcnJheUl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgZ2V0SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIGNhbGxXaXRoU2FmZUl0ZXJhdGlvbkNsb3NpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2FsbC13aXRoLXNhZmUtaXRlcmF0aW9uLWNsb3NpbmcnKTtcblxudmFyIFJlc3VsdCA9IGZ1bmN0aW9uIChzdG9wcGVkLCByZXN1bHQpIHtcbiAgdGhpcy5zdG9wcGVkID0gc3RvcHBlZDtcbiAgdGhpcy5yZXN1bHQgPSByZXN1bHQ7XG59O1xuXG52YXIgaXRlcmF0ZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCBmbiwgdGhhdCwgQVNfRU5UUklFUywgSVNfSVRFUkFUT1IpIHtcbiAgdmFyIGJvdW5kRnVuY3Rpb24gPSBiaW5kKGZuLCB0aGF0LCBBU19FTlRSSUVTID8gMiA6IDEpO1xuICB2YXIgaXRlcmF0b3IsIGl0ZXJGbiwgaW5kZXgsIGxlbmd0aCwgcmVzdWx0LCBuZXh0LCBzdGVwO1xuXG4gIGlmIChJU19JVEVSQVRPUikge1xuICAgIGl0ZXJhdG9yID0gaXRlcmFibGU7XG4gIH0gZWxzZSB7XG4gICAgaXRlckZuID0gZ2V0SXRlcmF0b3JNZXRob2QoaXRlcmFibGUpO1xuICAgIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcignVGFyZ2V0IGlzIG5vdCBpdGVyYWJsZScpO1xuICAgIC8vIG9wdGltaXNhdGlvbiBmb3IgYXJyYXkgaXRlcmF0b3JzXG4gICAgaWYgKGlzQXJyYXlJdGVyYXRvck1ldGhvZChpdGVyRm4pKSB7XG4gICAgICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgcmVzdWx0ID0gQVNfRU5UUklFU1xuICAgICAgICAgID8gYm91bmRGdW5jdGlvbihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSlcbiAgICAgICAgICA6IGJvdW5kRnVuY3Rpb24oaXRlcmFibGVbaW5kZXhdKTtcbiAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQgaW5zdGFuY2VvZiBSZXN1bHQpIHJldHVybiByZXN1bHQ7XG4gICAgICB9IHJldHVybiBuZXcgUmVzdWx0KGZhbHNlKTtcbiAgICB9XG4gICAgaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7XG4gIH1cblxuICBuZXh0ID0gaXRlcmF0b3IubmV4dDtcbiAgd2hpbGUgKCEoc3RlcCA9IG5leHQuY2FsbChpdGVyYXRvcikpLmRvbmUpIHtcbiAgICByZXN1bHQgPSBjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nKGl0ZXJhdG9yLCBib3VuZEZ1bmN0aW9uLCBzdGVwLnZhbHVlLCBBU19FTlRSSUVTKTtcbiAgICBpZiAodHlwZW9mIHJlc3VsdCA9PSAnb2JqZWN0JyAmJiByZXN1bHQgJiYgcmVzdWx0IGluc3RhbmNlb2YgUmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuICB9IHJldHVybiBuZXcgUmVzdWx0KGZhbHNlKTtcbn07XG5cbml0ZXJhdGUuc3RvcCA9IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgcmV0dXJuIG5ldyBSZXN1bHQodHJ1ZSwgcmVzdWx0KTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgbWFjcm90YXNrID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Rhc2snKS5zZXQ7XG52YXIgSVNfSU9TID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS1pcy1pb3MnKTtcblxudmFyIE11dGF0aW9uT2JzZXJ2ZXIgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlO1xudmFyIElTX05PREUgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJztcbi8vIE5vZGUuanMgMTEgc2hvd3MgRXhwZXJpbWVudGFsV2FybmluZyBvbiBnZXR0aW5nIGBxdWV1ZU1pY3JvdGFza2BcbnZhciBxdWV1ZU1pY3JvdGFza0Rlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZ2xvYmFsLCAncXVldWVNaWNyb3Rhc2snKTtcbnZhciBxdWV1ZU1pY3JvdGFzayA9IHF1ZXVlTWljcm90YXNrRGVzY3JpcHRvciAmJiBxdWV1ZU1pY3JvdGFza0Rlc2NyaXB0b3IudmFsdWU7XG5cbnZhciBmbHVzaCwgaGVhZCwgbGFzdCwgbm90aWZ5LCB0b2dnbGUsIG5vZGUsIHByb21pc2UsIHRoZW47XG5cbi8vIG1vZGVybiBlbmdpbmVzIGhhdmUgcXVldWVNaWNyb3Rhc2sgbWV0aG9kXG5pZiAoIXF1ZXVlTWljcm90YXNrKSB7XG4gIGZsdXNoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmIChJU19OT0RFICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpIHBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUgKGhlYWQpIHtcbiAgICAgIGZuID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKGhlYWQpIG5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZiAocGFyZW50KSBwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmIChJU19OT0RFKSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyLCBleGNlcHQgaU9TIC0gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzMzOVxuICB9IGVsc2UgaWYgKE11dGF0aW9uT2JzZXJ2ZXIgJiYgIUlTX0lPUykge1xuICAgIHRvZ2dsZSA9IHRydWU7XG4gICAgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgTXV0YXRpb25PYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7IGNoYXJhY3RlckRhdGE6IHRydWUgfSk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYgKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKSB7XG4gICAgLy8gUHJvbWlzZS5yZXNvbHZlIHdpdGhvdXQgYW4gYXJndW1lbnQgdGhyb3dzIGFuIGVycm9yIGluIExHIFdlYk9TIDJcbiAgICBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgdGhlbiA9IHByb21pc2UudGhlbjtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGVuLmNhbGwocHJvbWlzZSwgZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcXVldWVNaWNyb3Rhc2sgfHwgZnVuY3Rpb24gKGZuKSB7XG4gIHZhciB0YXNrID0geyBmbjogZm4sIG5leHQ6IHVuZGVmaW5lZCB9O1xuICBpZiAobGFzdCkgbGFzdC5uZXh0ID0gdGFzaztcbiAgaWYgKCFoZWFkKSB7XG4gICAgaGVhZCA9IHRhc2s7XG4gICAgbm90aWZ5KCk7XG4gIH0gbGFzdCA9IHRhc2s7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnbG9iYWwuUHJvbWlzZTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1mdW5jdGlvbicpO1xuXG52YXIgUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoQykge1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbiAoJCRyZXNvbHZlLCAkJHJlamVjdCkge1xuICAgIGlmIChyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCA9IGFGdW5jdGlvbihyZWplY3QpO1xufTtcblxuLy8gMjUuNC4xLjUgTmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiAoQykge1xuICByZXR1cm4gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4geyBlcnJvcjogZmFsc2UsIHZhbHVlOiBleGVjKCkgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBlcnJvcjogdHJ1ZSwgdmFsdWU6IGVycm9yIH07XG4gIH1cbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDLCB4KSB7XG4gIGFuT2JqZWN0KEMpO1xuICBpZiAoaXNPYmplY3QoeCkgJiYgeC5jb25zdHJ1Y3RvciA9PT0gQykgcmV0dXJuIHg7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYoQyk7XG4gIHZhciByZXNvbHZlID0gcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgcmVzb2x2ZSh4KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dCcpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaHRtbCcpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcbnZhciBJU19JT1MgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLWlzLWlvcycpO1xuXG52YXIgbG9jYXRpb24gPSBnbG9iYWwubG9jYXRpb247XG52YXIgc2V0ID0gZ2xvYmFsLnNldEltbWVkaWF0ZTtcbnZhciBjbGVhciA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZTtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgTWVzc2FnZUNoYW5uZWwgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWw7XG52YXIgRGlzcGF0Y2ggPSBnbG9iYWwuRGlzcGF0Y2g7XG52YXIgY291bnRlciA9IDA7XG52YXIgcXVldWUgPSB7fTtcbnZhciBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcbnZhciBkZWZlciwgY2hhbm5lbCwgcG9ydDtcblxudmFyIHJ1biA9IGZ1bmN0aW9uIChpZCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gIGlmIChxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xuXG52YXIgcnVubmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcnVuKGlkKTtcbiAgfTtcbn07XG5cbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICBydW4oZXZlbnQuZGF0YSk7XG59O1xuXG52YXIgcG9zdCA9IGZ1bmN0aW9uIChpZCkge1xuICAvLyBvbGQgZW5naW5lcyBoYXZlIG5vdCBsb2NhdGlvbi5vcmlnaW5cbiAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsIGxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGxvY2F0aW9uLmhvc3QpO1xufTtcblxuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYgKCFzZXQgfHwgIWNsZWFyKSB7XG4gIHNldCA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbikge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgdmFyIGkgPSAxO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgICAodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSkuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhciA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKSB7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmIChjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKHJ1bm5lcihpZCkpO1xuICAgIH07XG4gIC8vIFNwaGVyZSAoSlMgZ2FtZSBlbmdpbmUpIERpc3BhdGNoIEFQSVxuICB9IGVsc2UgaWYgKERpc3BhdGNoICYmIERpc3BhdGNoLm5vdykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBEaXNwYXRjaC5ub3cocnVubmVyKGlkKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICAvLyBleGNlcHQgaU9TIC0gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzYyNFxuICB9IGVsc2UgaWYgKE1lc3NhZ2VDaGFubmVsICYmICFJU19JT1MpIHtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgcG9ydCA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGJpbmQocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cyAmJiAhZmFpbHMocG9zdCkpIHtcbiAgICBkZWZlciA9IHBvc3Q7XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZiAoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bihpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHNldFRpbWVvdXQocnVubmVyKGlkKSwgMCk7XG4gICAgfTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXQsXG4gIGNsZWFyOiBjbGVhclxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIE5hdGl2ZVByb21pc2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXByb21pc2UtY29uc3RydWN0b3InKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lLWFsbCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgc2V0U3BlY2llcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtc3BlY2llcycpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1pbnN0YW5jZScpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlJyk7XG52YXIgaXRlcmF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRlJyk7XG52YXIgY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NoZWNrLWNvcnJlY3RuZXNzLW9mLWl0ZXJhdGlvbicpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgdGFzayA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90YXNrJykuc2V0O1xudmFyIG1pY3JvdGFzayA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9taWNyb3Rhc2snKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wcm9taXNlLXJlc29sdmUnKTtcbnZhciBob3N0UmVwb3J0RXJyb3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hvc3QtcmVwb3J0LWVycm9ycycpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3BlcmZvcm0nKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xudmFyIFBST01JU0UgPSAnUHJvbWlzZSc7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0O1xudmFyIHNldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLnNldDtcbnZhciBnZXRJbnRlcm5hbFByb21pc2VTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0dGVyRm9yKFBST01JU0UpO1xudmFyIFByb21pc2VDb25zdHJ1Y3RvciA9IE5hdGl2ZVByb21pc2U7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcbnZhciBkb2N1bWVudCA9IGdsb2JhbC5kb2N1bWVudDtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgJGZldGNoID0gZ2V0QnVpbHRJbignZmV0Y2gnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmY7XG52YXIgbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHk7XG52YXIgSVNfTk9ERSA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xudmFyIERJU1BBVENIX0VWRU5UID0gISEoZG9jdW1lbnQgJiYgZG9jdW1lbnQuY3JlYXRlRXZlbnQgJiYgZ2xvYmFsLmRpc3BhdGNoRXZlbnQpO1xudmFyIFVOSEFORExFRF9SRUpFQ1RJT04gPSAndW5oYW5kbGVkcmVqZWN0aW9uJztcbnZhciBSRUpFQ1RJT05fSEFORExFRCA9ICdyZWplY3Rpb25oYW5kbGVkJztcbnZhciBQRU5ESU5HID0gMDtcbnZhciBGVUxGSUxMRUQgPSAxO1xudmFyIFJFSkVDVEVEID0gMjtcbnZhciBIQU5ETEVEID0gMTtcbnZhciBVTkhBTkRMRUQgPSAyO1xudmFyIEludGVybmFsLCBPd25Qcm9taXNlQ2FwYWJpbGl0eSwgUHJvbWlzZVdyYXBwZXIsIG5hdGl2ZVRoZW47XG5cbnZhciBGT1JDRUQgPSBpc0ZvcmNlZChQUk9NSVNFLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBHTE9CQUxfQ09SRV9KU19QUk9NSVNFID0gaW5zcGVjdFNvdXJjZShQcm9taXNlQ29uc3RydWN0b3IpICE9PSBTdHJpbmcoUHJvbWlzZUNvbnN0cnVjdG9yKTtcbiAgaWYgKCFHTE9CQUxfQ09SRV9KU19QUk9NSVNFKSB7XG4gICAgLy8gVjggNi42IChOb2RlIDEwIGFuZCBDaHJvbWUgNjYpIGhhdmUgYSBidWcgd2l0aCByZXNvbHZpbmcgY3VzdG9tIHRoZW5hYmxlc1xuICAgIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTgzMDU2NVxuICAgIC8vIFdlIGNhbid0IGRldGVjdCBpdCBzeW5jaHJvbm91c2x5LCBzbyBqdXN0IGNoZWNrIHZlcnNpb25zXG4gICAgaWYgKFY4X1ZFUlNJT04gPT09IDY2KSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBVbmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgaWYgKCFJU19OT0RFICYmIHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgIT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHRydWU7XG4gIH1cbiAgLy8gV2UgbmVlZCBQcm9taXNlI2ZpbmFsbHkgaW4gdGhlIHB1cmUgdmVyc2lvbiBmb3IgcHJldmVudGluZyBwcm90b3R5cGUgcG9sbHV0aW9uXG4gIGlmIChJU19QVVJFICYmICFQcm9taXNlQ29uc3RydWN0b3IucHJvdG90eXBlWydmaW5hbGx5J10pIHJldHVybiB0cnVlO1xuICAvLyBXZSBjYW4ndCB1c2UgQEBzcGVjaWVzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuICAvLyBkZW9wdGltaXphdGlvbiBhbmQgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3OVxuICBpZiAoVjhfVkVSU0lPTiA+PSA1MSAmJiAvbmF0aXZlIGNvZGUvLnRlc3QoUHJvbWlzZUNvbnN0cnVjdG9yKSkgcmV0dXJuIGZhbHNlO1xuICAvLyBEZXRlY3QgY29ycmVjdG5lc3Mgb2Ygc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICB2YXIgcHJvbWlzZSA9IFByb21pc2VDb25zdHJ1Y3Rvci5yZXNvbHZlKDEpO1xuICB2YXIgRmFrZVByb21pc2UgPSBmdW5jdGlvbiAoZXhlYykge1xuICAgIGV4ZWMoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pO1xuICB9O1xuICB2YXIgY29uc3RydWN0b3IgPSBwcm9taXNlLmNvbnN0cnVjdG9yID0ge307XG4gIGNvbnN0cnVjdG9yW1NQRUNJRVNdID0gRmFrZVByb21pc2U7XG4gIHJldHVybiAhKHByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pIGluc3RhbmNlb2YgRmFrZVByb21pc2UpO1xufSk7XG5cbnZhciBJTkNPUlJFQ1RfSVRFUkFUSU9OID0gRk9SQ0VEIHx8ICFjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24oZnVuY3Rpb24gKGl0ZXJhYmxlKSB7XG4gIFByb21pc2VDb25zdHJ1Y3Rvci5hbGwoaXRlcmFibGUpWydjYXRjaCddKGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSk7XG59KTtcblxuLy8gaGVscGVyc1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG5cbnZhciBub3RpZnkgPSBmdW5jdGlvbiAocHJvbWlzZSwgc3RhdGUsIGlzUmVqZWN0KSB7XG4gIGlmIChzdGF0ZS5ub3RpZmllZCkgcmV0dXJuO1xuICBzdGF0ZS5ub3RpZmllZCA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHN0YXRlLnJlYWN0aW9ucztcbiAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBzdGF0ZS52YWx1ZTtcbiAgICB2YXIgb2sgPSBzdGF0ZS5zdGF0ZSA9PSBGVUxGSUxMRUQ7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHdoaWxlIChjaGFpbi5sZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFyIHJlYWN0aW9uID0gY2hhaW5baW5kZXgrK107XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsO1xuICAgICAgdmFyIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlO1xuICAgICAgdmFyIHJlamVjdCA9IHJlYWN0aW9uLnJlamVjdDtcbiAgICAgIHZhciBkb21haW4gPSByZWFjdGlvbi5kb21haW47XG4gICAgICB2YXIgcmVzdWx0LCB0aGVuLCBleGl0ZWQ7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgIGlmICghb2spIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5yZWplY3Rpb24gPT09IFVOSEFORExFRCkgb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSwgc3RhdGUpO1xuICAgICAgICAgICAgc3RhdGUucmVqZWN0aW9uID0gSEFORExFRDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhbmRsZXIgPT09IHRydWUpIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRvbWFpbikgZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTsgLy8gY2FuIHRocm93XG4gICAgICAgICAgICBpZiAoZG9tYWluKSB7XG4gICAgICAgICAgICAgIGRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgICAgIGV4aXRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2UpIHtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKGRvbWFpbiAmJiAhZXhpdGVkKSBkb21haW4uZXhpdCgpO1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgICBzdGF0ZS5yZWFjdGlvbnMgPSBbXTtcbiAgICBzdGF0ZS5ub3RpZmllZCA9IGZhbHNlO1xuICAgIGlmIChpc1JlamVjdCAmJiAhc3RhdGUucmVqZWN0aW9uKSBvblVuaGFuZGxlZChwcm9taXNlLCBzdGF0ZSk7XG4gIH0pO1xufTtcblxudmFyIGRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiAobmFtZSwgcHJvbWlzZSwgcmVhc29uKSB7XG4gIHZhciBldmVudCwgaGFuZGxlcjtcbiAgaWYgKERJU1BBVENIX0VWRU5UKSB7XG4gICAgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICBldmVudC5wcm9taXNlID0gcHJvbWlzZTtcbiAgICBldmVudC5yZWFzb24gPSByZWFzb247XG4gICAgZXZlbnQuaW5pdEV2ZW50KG5hbWUsIGZhbHNlLCB0cnVlKTtcbiAgICBnbG9iYWwuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIH0gZWxzZSBldmVudCA9IHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiByZWFzb24gfTtcbiAgaWYgKGhhbmRsZXIgPSBnbG9iYWxbJ29uJyArIG5hbWVdKSBoYW5kbGVyKGV2ZW50KTtcbiAgZWxzZSBpZiAobmFtZSA9PT0gVU5IQU5ETEVEX1JFSkVDVElPTikgaG9zdFJlcG9ydEVycm9ycygnVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgcmVhc29uKTtcbn07XG5cbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlLCBzdGF0ZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gc3RhdGUudmFsdWU7XG4gICAgdmFyIElTX1VOSEFORExFRCA9IGlzVW5oYW5kbGVkKHN0YXRlKTtcbiAgICB2YXIgcmVzdWx0O1xuICAgIGlmIChJU19VTkhBTkRMRUQpIHtcbiAgICAgIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoSVNfTk9ERSkge1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgZGlzcGF0Y2hFdmVudChVTkhBTkRMRURfUkVKRUNUSU9OLCBwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBzdGF0ZS5yZWplY3Rpb24gPSBJU19OT0RFIHx8IGlzVW5oYW5kbGVkKHN0YXRlKSA/IFVOSEFORExFRCA6IEhBTkRMRUQ7XG4gICAgICBpZiAocmVzdWx0LmVycm9yKSB0aHJvdyByZXN1bHQudmFsdWU7XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICByZXR1cm4gc3RhdGUucmVqZWN0aW9uICE9PSBIQU5ETEVEICYmICFzdGF0ZS5wYXJlbnQ7XG59O1xuXG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSwgc3RhdGUpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChJU19OT0RFKSB7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgZGlzcGF0Y2hFdmVudChSRUpFQ1RJT05fSEFORExFRCwgcHJvbWlzZSwgc3RhdGUudmFsdWUpO1xuICB9KTtcbn07XG5cbnZhciBiaW5kID0gZnVuY3Rpb24gKGZuLCBwcm9taXNlLCBzdGF0ZSwgdW53cmFwKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBmbihwcm9taXNlLCBzdGF0ZSwgdmFsdWUsIHVud3JhcCk7XG4gIH07XG59O1xuXG52YXIgaW50ZXJuYWxSZWplY3QgPSBmdW5jdGlvbiAocHJvbWlzZSwgc3RhdGUsIHZhbHVlLCB1bndyYXApIHtcbiAgaWYgKHN0YXRlLmRvbmUpIHJldHVybjtcbiAgc3RhdGUuZG9uZSA9IHRydWU7XG4gIGlmICh1bndyYXApIHN0YXRlID0gdW53cmFwO1xuICBzdGF0ZS52YWx1ZSA9IHZhbHVlO1xuICBzdGF0ZS5zdGF0ZSA9IFJFSkVDVEVEO1xuICBub3RpZnkocHJvbWlzZSwgc3RhdGUsIHRydWUpO1xufTtcblxudmFyIGludGVybmFsUmVzb2x2ZSA9IGZ1bmN0aW9uIChwcm9taXNlLCBzdGF0ZSwgdmFsdWUsIHVud3JhcCkge1xuICBpZiAoc3RhdGUuZG9uZSkgcmV0dXJuO1xuICBzdGF0ZS5kb25lID0gdHJ1ZTtcbiAgaWYgKHVud3JhcCkgc3RhdGUgPSB1bndyYXA7XG4gIHRyeSB7XG4gICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICB2YXIgdGhlbiA9IGlzVGhlbmFibGUodmFsdWUpO1xuICAgIGlmICh0aGVuKSB7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd3JhcHBlciA9IHsgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsXG4gICAgICAgICAgICBiaW5kKGludGVybmFsUmVzb2x2ZSwgcHJvbWlzZSwgd3JhcHBlciwgc3RhdGUpLFxuICAgICAgICAgICAgYmluZChpbnRlcm5hbFJlamVjdCwgcHJvbWlzZSwgd3JhcHBlciwgc3RhdGUpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBpbnRlcm5hbFJlamVjdChwcm9taXNlLCB3cmFwcGVyLCBlcnJvciwgc3RhdGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHN0YXRlLnN0YXRlID0gRlVMRklMTEVEO1xuICAgICAgbm90aWZ5KHByb21pc2UsIHN0YXRlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGludGVybmFsUmVqZWN0KHByb21pc2UsIHsgZG9uZTogZmFsc2UgfSwgZXJyb3IsIHN0YXRlKTtcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmIChGT1JDRUQpIHtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgUHJvbWlzZUNvbnN0cnVjdG9yID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIGFuSW5zdGFuY2UodGhpcywgUHJvbWlzZUNvbnN0cnVjdG9yLCBQUk9NSVNFKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoYmluZChpbnRlcm5hbFJlc29sdmUsIHRoaXMsIHN0YXRlKSwgYmluZChpbnRlcm5hbFJlamVjdCwgdGhpcywgc3RhdGUpKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaW50ZXJuYWxSZWplY3QodGhpcywgc3RhdGUsIGVycm9yKTtcbiAgICB9XG4gIH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICBzZXRJbnRlcm5hbFN0YXRlKHRoaXMsIHtcbiAgICAgIHR5cGU6IFBST01JU0UsXG4gICAgICBkb25lOiBmYWxzZSxcbiAgICAgIG5vdGlmaWVkOiBmYWxzZSxcbiAgICAgIHBhcmVudDogZmFsc2UsXG4gICAgICByZWFjdGlvbnM6IFtdLFxuICAgICAgcmVqZWN0aW9uOiBmYWxzZSxcbiAgICAgIHN0YXRlOiBQRU5ESU5HLFxuICAgICAgdmFsdWU6IHVuZGVmaW5lZFxuICAgIH0pO1xuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZWRlZmluZUFsbChQcm9taXNlQ29uc3RydWN0b3IucHJvdG90eXBlLCB7XG4gICAgLy8gYFByb21pc2UucHJvdG90eXBlLnRoZW5gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXByb21pc2UucHJvdG90eXBlLnRoZW5cbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFByb21pc2VTdGF0ZSh0aGlzKTtcbiAgICAgIHZhciByZWFjdGlvbiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCBQcm9taXNlQ29uc3RydWN0b3IpKTtcbiAgICAgIHJlYWN0aW9uLm9rID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gSVNfTk9ERSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgc3RhdGUucGFyZW50ID0gdHJ1ZTtcbiAgICAgIHN0YXRlLnJlYWN0aW9ucy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmIChzdGF0ZS5zdGF0ZSAhPSBQRU5ESU5HKSBub3RpZnkodGhpcywgc3RhdGUsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gYFByb21pc2UucHJvdG90eXBlLmNhdGNoYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wcm9taXNlLnByb3RvdHlwZS5jYXRjaFxuICAgICdjYXRjaCc6IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgT3duUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgSW50ZXJuYWwoKTtcbiAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHByb21pc2UpO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gYmluZChpbnRlcm5hbFJlc29sdmUsIHByb21pc2UsIHN0YXRlKTtcbiAgICB0aGlzLnJlamVjdCA9IGJpbmQoaW50ZXJuYWxSZWplY3QsIHByb21pc2UsIHN0YXRlKTtcbiAgfTtcbiAgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKEMpIHtcbiAgICByZXR1cm4gQyA9PT0gUHJvbWlzZUNvbnN0cnVjdG9yIHx8IEMgPT09IFByb21pc2VXcmFwcGVyXG4gICAgICA/IG5ldyBPd25Qcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgOiBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gIH07XG5cbiAgaWYgKCFJU19QVVJFICYmIHR5cGVvZiBOYXRpdmVQcm9taXNlID09ICdmdW5jdGlvbicpIHtcbiAgICBuYXRpdmVUaGVuID0gTmF0aXZlUHJvbWlzZS5wcm90b3R5cGUudGhlbjtcblxuICAgIC8vIHdyYXAgbmF0aXZlIFByb21pc2UjdGhlbiBmb3IgbmF0aXZlIGFzeW5jIGZ1bmN0aW9uc1xuICAgIHJlZGVmaW5lKE5hdGl2ZVByb21pc2UucHJvdG90eXBlLCAndGhlbicsIGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZUNvbnN0cnVjdG9yKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgbmF0aXZlVGhlbi5jYWxsKHRoYXQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKTtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjQwXG4gICAgfSwgeyB1bnNhZmU6IHRydWUgfSk7XG5cbiAgICAvLyB3cmFwIGZldGNoIHJlc3VsdFxuICAgIGlmICh0eXBlb2YgJGZldGNoID09ICdmdW5jdGlvbicpICQoeyBnbG9iYWw6IHRydWUsIGVudW1lcmFibGU6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgIGZldGNoOiBmdW5jdGlvbiBmZXRjaChpbnB1dCAvKiAsIGluaXQgKi8pIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKFByb21pc2VDb25zdHJ1Y3RvciwgJGZldGNoLmFwcGx5KGdsb2JhbCwgYXJndW1lbnRzKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuJCh7IGdsb2JhbDogdHJ1ZSwgd3JhcDogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICBQcm9taXNlOiBQcm9taXNlQ29uc3RydWN0b3Jcbn0pO1xuXG5zZXRUb1N0cmluZ1RhZyhQcm9taXNlQ29uc3RydWN0b3IsIFBST01JU0UsIGZhbHNlLCB0cnVlKTtcbnNldFNwZWNpZXMoUFJPTUlTRSk7XG5cblByb21pc2VXcmFwcGVyID0gZ2V0QnVpbHRJbihQUk9NSVNFKTtcblxuLy8gc3RhdGljc1xuJCh7IHRhcmdldDogUFJPTUlTRSwgc3RhdDogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICAvLyBgUHJvbWlzZS5yZWplY3RgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wcm9taXNlLnJlamVjdFxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKSB7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKTtcbiAgICBjYXBhYmlsaXR5LnJlamVjdC5jYWxsKHVuZGVmaW5lZCwgcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG5cbiQoeyB0YXJnZXQ6IFBST01JU0UsIHN0YXQ6IHRydWUsIGZvcmNlZDogSVNfUFVSRSB8fCBGT1JDRUQgfSwge1xuICAvLyBgUHJvbWlzZS5yZXNvbHZlYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcHJvbWlzZS5yZXNvbHZlXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCkge1xuICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShJU19QVVJFICYmIHRoaXMgPT09IFByb21pc2VXcmFwcGVyID8gUHJvbWlzZUNvbnN0cnVjdG9yIDogdGhpcywgeCk7XG4gIH1cbn0pO1xuXG4kKHsgdGFyZ2V0OiBQUk9NSVNFLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IElOQ09SUkVDVF9JVEVSQVRJT04gfSwge1xuICAvLyBgUHJvbWlzZS5hbGxgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wcm9taXNlLmFsbFxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZXNvbHZlID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHByb21pc2VSZXNvbHZlID0gYUZ1bmN0aW9uKEMucmVzb2x2ZSk7XG4gICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICB2YXIgY291bnRlciA9IDA7XG4gICAgICB2YXIgcmVtYWluaW5nID0gMTtcbiAgICAgIGl0ZXJhdGUoaXRlcmFibGUsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIHZhciBpbmRleCA9IGNvdW50ZXIrKztcbiAgICAgICAgdmFyIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgICRwcm9taXNlUmVzb2x2ZS5jYWxsKEMsIHByb21pc2UpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGFscmVhZHlDYWxsZWQpIHJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lcnJvcikgcmVqZWN0KHJlc3VsdC52YWx1ZSk7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gYFByb21pc2UucmFjZWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXByb21pc2UucmFjZVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkcHJvbWlzZVJlc29sdmUgPSBhRnVuY3Rpb24oQy5yZXNvbHZlKTtcbiAgICAgIGl0ZXJhdGUoaXRlcmFibGUsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgICRwcm9taXNlUmVzb2x2ZS5jYWxsKEMsIHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lcnJvcikgcmVqZWN0KHJlc3VsdC52YWx1ZSk7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9