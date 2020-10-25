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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3ByaW50aWZ5L2JsdWVwcmludHNlbGVjdG9yLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcHJpbnRpZnkvYmx1ZXByaW50ZXhwb3J0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NhbGwtd2l0aC1zYWZlLWl0ZXJhdGlvbi1jbG9zaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtaXMtaW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9ob3N0LXJlcG9ydC1lcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21pY3JvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbmF0aXZlLXByb21pc2UtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25ldy1wcm9taXNlLWNhcGFiaWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3BlcmZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3Byb21pc2UtcmVzb2x2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnByb21pc2UuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJvbiIsImltYWdlbGlzdCIsInByb3ZpZGVybGlzdCIsImVhY2giLCJzaG9wIiwiYmx1ZXByaW50cyIsImkiLCJvYmoiLCJpZCIsInZhbCIsImltYWdlcyIsImoiLCJpbWciLCJlbXB0eSIsImFwcGVuZCIsImJyYW5kIiwibW9kZWwiLCJkZXNjcmlwdGlvbiIsInByb3ZpZGVycyIsImsiLCJwcm92IiwidGl0bGUiLCJwcmVwZW5kIiwidmFyaWFudGxpc3QiLCJzaGlwcGluZyIsInZhcmlhbnRzIiwidmFyaWFudCIsInByb3ZpZGVyIiwiY29uc29sZSIsImxvZyIsInNoaXBwaW5ncyIsImhhbmRsaW5nX3RpbWUiLCJ2YWx1ZSIsInVuaXQiLCJleHBvcnR0YWJsZSIsInBsYWNlaG9sZGVyaWQiLCJpbmRleCIsImJsdWVwcmludCIsImluQXJyYXkiLCJ0b1N0cmluZyIsInBsYWNlaG9sZGVycyIsInBsYWNlaG9sZGVyIiwicG9zaXRpb24iLCJoZWlnaHQiLCJ3aWR0aCIsImZuIiwidGFibGVFeHBvcnQiLCJjaGFyc2V0IiwiZGVmYXVsdEZpbGVOYW1lIiwiZGVmYXVsdEJ1dHRvbiIsImJvb3RzdHJhcCIsImhlYWRlcnMiLCJmb290ZXJzIiwiZm9ybWF0cyIsImZpbGVOYW1lIiwiZXhwb3J0QnV0dG9ucyIsImlnbm9yZVJvd3MiLCJpZ25vcmVDb2xzIiwidHJpbVdoaXRlc3BhY2UiLCJSVEwiLCJzaGVldG5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBR0FBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBVztBQUV6QkYsR0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJHLEVBQXpCLENBQTRCLFFBQTVCLEVBQXNDLFlBQVU7QUFDNUMsUUFBSUMsU0FBUyxHQUFFLEVBQWY7QUFDQSxRQUFJQyxZQUFZLEdBQUUsNEpBQWxCO0FBQ0FMLEtBQUMsQ0FBQ00sSUFBRixDQUFPQyxJQUFJLENBQUNDLFVBQVosRUFBd0IsVUFBU0Ms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LCJmaWxlIjoiYmx1ZXByaW50ZXhwb3J0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4uLy4uL2Nzcy9wcmludGlmeS9ibHVlcHJpbnRzZWxlY3Rvci5jc3MnO1xyXG5pbXBvcnQoJ3RhYmxlZXhwb3J0Jyk7XHJcblxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgJCgnI2JsdWVwcmludHNlbGVjdGlvbicpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGxldCBpbWFnZWxpc3QgPScnO1xyXG4gICAgICAgIGxldCBwcm92aWRlcmxpc3QgPSc8ZGl2IGNsYXNzPVwiY29sLTZcIj48ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPjxsYWJlbCBmb3I9XCJwcm92aWRlcnNlbGVjdGlvblwiPjIuIENob29zZSBhIHByb3ZpZGVyPC9sYWJlbD48c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJwcm92aWRlcnNlbGVjdGlvblwiPic7XHJcbiAgICAgICAgJC5lYWNoKHNob3AuYmx1ZXByaW50cywgZnVuY3Rpb24oaSwgb2JqKXtcclxuICAgICAgICAgICAgaWYob2JqLmlkID09ICQoJyNibHVlcHJpbnRzZWxlY3Rpb24gb3B0aW9uOnNlbGVjdGVkJykudmFsKCkpe1xyXG5cclxuICAgICAgICAgICAgICAgICQuZWFjaChvYmouaW1hZ2VzLCBmdW5jdGlvbihqLCBpbWcpe1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlbGlzdCArPSAnPGltZyBzcmM9XCInK2ltZysnXCIgc3R5bGU9XCJ3aWR0aDozMyVcIi8+J1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2JsdWVwcmludGRlc2NyaXB0aW9uXCIpLmVtcHR5KCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2JsdWVwcmludGRlc2NyaXB0aW9uXCIpLmFwcGVuZCgnQnJhbmQgOiAnICsgb2JqLmJyYW5kICsnPGJyPicpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNibHVlcHJpbnRkZXNjcmlwdGlvblwiKS5hcHBlbmQoJ01vZGVsIDogJyArIG9iai5tb2RlbCArJzxicj48YnI+Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIiNibHVlcHJpbnRkZXNjcmlwdGlvblwiKS5hcHBlbmQoJzxwPicgKyBvYmouZGVzY3JpcHRpb24gKyAnPC9wPicpO1xyXG5cclxuICAgICAgICAgICAgICAgICQuZWFjaChvYmoucHJvdmlkZXJzLCBmdW5jdGlvbihrLCBwcm92KXtcclxuICAgICAgICAgICAgICAgICAgICBwcm92aWRlcmxpc3QgKz0gJzxvcHRpb24gdmFsdWU9XCInK3Byb3YuaWQrJ1wiPicrIHByb3YudGl0bGUgKyAnPC9vcHRpb24+J1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBwcm92aWRlcmxpc3QgKz0nPC9zZWxlY3Q+PC9kaXY+PGRpdiBpZD1cInByb3ZpZGVyZGVzY3JpcHRpb25cIj48L2Rpdj48L2Rpdj48ZGl2IGlkPVwicHJvdmlkZXJ2YXJpYW50XCIgY2xhc3M9XCJjb2wtNlwiPjwvZGl2PidcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICAkKFwiI2JsdWVwcmludGltYWdlc1wiKS5lbXB0eSgpO1xyXG4gICAgICAgICQoXCIjYmx1ZXByaW50aW1hZ2VzXCIpLnByZXBlbmQoaW1hZ2VsaXN0KTtcclxuXHJcbiAgICAgICAgJChcIiNwcm92aWRlcmNob2ljZVwiKS5lbXB0eSgpO1xyXG4gICAgICAgICQoXCIjcHJvdmlkZXJjaG9pY2VcIikuYXBwZW5kKHByb3ZpZGVybGlzdCk7XHJcblxyXG4gICAgICAgICQoXCIjcHJvdmlkZXJ2YXJpYW50XCIpLmVtcHR5KCk7XHJcblxyXG4gICAgICAgICQoXCIjZXhwb3J0Y2hvaWNlXCIpLmVtcHR5KCk7XHJcblxyXG4gICAgICAgICQoJyNwcm92aWRlcnNlbGVjdGlvbicpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBsZXQgdmFyaWFudGxpc3QgPSc8c2VsZWN0IG11bHRpcGxlIHNpemU9XCIxMFwiIGlkPVwidmFyaWFudHNlbGVjdGlvblwiIHN0eWxlPVwid2lkdGg6MTAwJVwiPic7XHJcbiAgICAgICAgICAgIGxldCBzaGlwcGluZyA9Jyc7XHJcbiAgICAgICAgICAgICQuZWFjaChzaG9wLmJsdWVwcmludHMsIGZ1bmN0aW9uKGksIG9iail7XHJcbiAgICAgICAgICAgICAgICBpZihvYmouaWQgPT0gJCgnI2JsdWVwcmludHNlbGVjdGlvbiBvcHRpb246c2VsZWN0ZWQnKS52YWwoKSl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQuZWFjaChvYmoudmFyaWFudHMsIGZ1bmN0aW9uKGosIHZhcmlhbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih2YXJpYW50LnByb3ZpZGVyLmlkID09ICQoJyNwcm92aWRlcnNlbGVjdGlvbiBvcHRpb246c2VsZWN0ZWQnKS52YWwoKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50bGlzdCArPSc8b3B0aW9uIHZhbHVlPVwiJysgdmFyaWFudC5pZCArJ1wiPicgKyB2YXJpYW50LnRpdGxlICsnPC9vcHRpb24+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnRsaXN0ICs9ICc8L3NlbGVjdD4nO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhcmlhbnRsaXN0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKG9iai5zaGlwcGluZ3MsIGZ1bmN0aW9uKGosIHNoaXBwaW5nKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2hpcHBpbmcucHJvdmlkZXIuaWQgPT0gJCgnI3Byb3ZpZGVyc2VsZWN0aW9uIG9wdGlvbjpzZWxlY3RlZCcpLnZhbCgpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjcHJvdmlkZXJkZXNjcmlwdGlvblwiKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNwcm92aWRlcmRlc2NyaXB0aW9uXCIpLmFwcGVuZCgnSGFuZGxpbmcgdGltZSA6ICcgKyBzaGlwcGluZy5oYW5kbGluZ190aW1lLnZhbHVlICsgJyAnICsgc2hpcHBpbmcuaGFuZGxpbmdfdGltZS51bml0ICsgJzxicj4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkKFwiI3Byb3ZpZGVydmFyaWFudFwiKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAkKFwiI3Byb3ZpZGVydmFyaWFudFwiKS5hcHBlbmQodmFyaWFudGxpc3QpO1xyXG5cclxuICAgICAgICAgICAgJChcIiNleHBvcnRjaG9pY2VcIikuZW1wdHkoKTtcclxuXHJcbiAgICAgICAgICAgICQoJyN2YXJpYW50c2VsZWN0aW9uJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgZXhwb3J0dGFibGUgPSAnPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtaG92ZXIgdGFibGUtc21cIj5cXG4nICtcclxuICAgICAgICAgICAgICAgICAgICAnICA8dGhlYWQ+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAgICAgJyAgICA8dHI+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAgICAgJyAgICAgIDx0aCBzY29wZT1cImNvbFwiIHRpdGxlPVwiUHJvZHVjdCBJZCAoSW50ZWdlcilcIj5Qcm9kdWN0IElkPC90aD5cXG4nICtcclxuICAgICAgICAgICAgICAgICAgICAnICAgICAgPHRoIHNjb3BlPVwiY29sXCI+Qmx1ZXByaW50IElkPC90aD5cXG4nICtcclxuICAgICAgICAgICAgICAgICAgICAnICAgICAgPHRoIHNjb3BlPVwiY29sXCI+UHJvdmlkZXIgSWQ8L3RoPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgICAgICcgICAgICA8dGggc2NvcGU9XCJjb2xcIj5WYXJpYW50IElkPC90aD5cXG4nICtcclxuICAgICAgICAgICAgICAgICAgICAnICAgICAgPHRoIHNjb3BlPVwiY29sXCI+VmFyaWFudCBUaXRsZTwvdGg+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAgICAgJyAgICAgIDx0aCBzY29wZT1cImNvbFwiIHRpdGxlPVwiUHJvZHVjdCBUaXRsZSAoTWF4IDI1NSBDaGFyYWN0ZXJzKVwiPlByb2R1Y3QgVGl0bGU8L3RoPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgICAgICcgICAgICA8dGggc2NvcGU9XCJjb2xcIiB0aXRsZT1cIlByb2R1Y3QgRGVzY3JpcHRpb24gKFRleHQgZmVlbCBmcmVlIDspICsgSFRNTCA/KVwiPlByb2R1Y3QgRGVzY3JpcHRpb248L3RoPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgICAgICcgICAgICA8dGggc2NvcGU9XCJjb2xcIiB0aXRsZT1cIlZhcmlhbnQgUHJpY2UgKEludGVnZXIgd2l0aG91dCBjb21tYSwgaS5lIDI5LDAw4oKsID0+IDI5MDApXCI+VmFyaWFudCBQcmljZTwvdGg+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAgICAgJyAgICAgIDx0aCBzY29wZT1cImNvbFwiPlZhcmlhbnQgSXNfRW5hYmxlZDwvdGg+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAgICAgJyAgICAgIDx0aCBzY29wZT1cImNvbFwiIHRpdGxlPVwiUHJpbnQgQXJlYSBJZCAoc2hvdWxkIGJlIG9ubHkgb25lIFByaW50IEFyZWEgSWQgcGVyIFByb2R1Y3QgSWQsIHR3byBpZiBibGFjayBhbmQgd2hpdGUpXCI+UHJpbnQgQXJlYSBJZDwvdGg+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAgICAgJyAgICAgIDx0aCBzY29wZT1cImNvbFwiPlBsYWNlaG9sZGVyIElkPC90aD5cXG4nICtcclxuICAgICAgICAgICAgICAgICAgICAnICAgICAgPHRoIHNjb3BlPVwiY29sXCI+UGxhY2Vob2xkZXIgSGVpZ2h0PC90aD5cXG4nICtcclxuICAgICAgICAgICAgICAgICAgICAnICAgICAgPHRoIHNjb3BlPVwiY29sXCI+UGxhY2Vob2xkZXIgV2lkdGg8L3RoPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgICAgICcgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Qb3NpdGlvbjwvdGg+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAgICAgJyAgICAgIDx0aCBzY29wZT1cImNvbFwiPkltYWdlIFBhdGg8L3RoPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgICAgICcgICAgICA8dGggc2NvcGU9XCJjb2xcIj5UYWdzPC90aD5cXG4nICtcclxuICAgICAgICAgICAgICAgICAgICAnICAgIDwvdHI+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAgICAgJyAgPC90aGVhZD48dGJvZHk+JztcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCQoJyN2YXJpYW50c2VsZWN0aW9uJykudmFsKCkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBsYWNlaG9sZGVyaWQgPSAwO1xyXG4gICAgICAgICAgICAgICAgJC5lYWNoKHNob3AuYmx1ZXByaW50cywgZnVuY3Rpb24oIGluZGV4LCBibHVlcHJpbnQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYmx1ZXByaW50LmlkID09ICQoJyNibHVlcHJpbnRzZWxlY3Rpb24gb3B0aW9uOnNlbGVjdGVkJykudmFsKCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhibHVlcHJpbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkLmVhY2goYmx1ZXByaW50LnZhcmlhbnRzLCBmdW5jdGlvbiggaW5kZXgsIHZhcmlhbnQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCQuaW5BcnJheSh2YXJpYW50LmlkLnRvU3RyaW5nKCksICQoJyN2YXJpYW50c2VsZWN0aW9uJykudmFsKCkpICE9PSAtMSAmJiBibHVlcHJpbnQuaWQgPT0gJCgnI2JsdWVwcmludHNlbGVjdGlvbiBvcHRpb246c2VsZWN0ZWQnKS52YWwoKSAmJiAgdmFyaWFudC5wcm92aWRlci5pZCA9PSAkKCcjcHJvdmlkZXJzZWxlY3Rpb24gb3B0aW9uOnNlbGVjdGVkJykudmFsKCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5lYWNoKHZhcmlhbnQucGxhY2Vob2xkZXJzLCBmdW5jdGlvbiggaW5kZXgsIHBsYWNlaG9sZGVyICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyaWQgKz0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9ydHRhYmxlICs9ICc8dHI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8dGQ+VXNlciBJbnB1dDwvdGQ+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8dGQ+JysgYmx1ZXByaW50LmlkICsnPC90ZD4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHRkPicrIHZhcmlhbnQucHJvdmlkZXIuaWQgKyc8L3RkPicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8dGQ+JysgdmFyaWFudC5pZCArJzwvdGQ+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8dGQ+JysgdmFyaWFudC50aXRsZSArJzwvdGQ+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8dGQ+VXNlciBJbnB1dDwvdGQ+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8dGQ+VXNlciBJbnB1dDwvdGQ+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8dGQ+VXNlciBJbnB1dDwvdGQ+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8dGQ+MTwvdGQ+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8dGQ+VXNlciBJbnB1dDwvdGQ+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8dGQ+JyArIHBsYWNlaG9sZGVyLmlkICsgJzwvdGQ+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8dGQ+JysgcGxhY2Vob2xkZXIucG9zaXRpb24gKyc8L3RkPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHRkPicrIHBsYWNlaG9sZGVyLmhlaWdodCArJzwvdGQ+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8dGQ+JysgcGxhY2Vob2xkZXIud2lkdGggKyc8L3RkPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHRkPkltYWdlIFBhdGg8L3RkPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHRkPlRhZ3M8L3RkPicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8L3RyPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBleHBvcnR0YWJsZSArPSAnPC90Ym9keT48L3RhYmxlPic7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2V4cG9ydGNob2ljZVwiKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNleHBvcnRjaG9pY2VcIikuYXBwZW5kKGV4cG9ydHRhYmxlKTtcclxuICAgICAgICAgICAgICAgICQoXCIjZXhwb3J0Y2hvaWNlXCIpLmFwcGVuZCgnPGEgaWQ9XCJleHBvcnR0b3RhYmxlXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5FeHBvcnQ8L2E+Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnI2V4cG9ydHRvdGFibGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIENoYXJhY3RlciBzZXQgKGNoYXJhY3RlciBlbmNvZGluZykgb2YgdGhlIEhUTUwuXHJcbiAgICAgICAgICAgICAgICAgICAgJC5mbi50YWJsZUV4cG9ydC5jaGFyc2V0ID1cImNoYXJzZXQ9dXRmLThcIjtcclxuICAgICAgICAgICAgICAgICAgICAkLmZuLnRhYmxlRXhwb3J0LmRlZmF1bHRGaWxlTmFtZSA9XCJteVRlbXBsYXRlXCI7XHJcbi8vIENsYXNzIGFwcGxpZWQgdG8gZWFjaCBleHBvcnQgYnV0dG9uIGVsZW1lbnQuXHJcbiAgICAgICAgICAgICAgICAgICAgJC5mbi50YWJsZUV4cG9ydC5kZWZhdWx0QnV0dG9uID1cImJ1dHRvbi1kZWZhdWx0XCI7XHJcbi8vIDxhIGhyZWY9XCJodHRwczovL3d3dy5qcXVlcnlzY3JpcHQubmV0L3RhZ3MucGhwPy9Cb290c3RyYXAvXCI+Qm9vdHN0cmFwPC9hPiBjb25maWd1cmF0aW9uIGNsYXNzZXMgW1wiYmFzZVwiLCBcInRoZW1lXCIsIFwiY29udGFpbmVyXCJdLlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkLmZuLnRhYmxlRXhwb3J0LmJvb3RzdHJhcCA9IFtcImJ0blwiLFwiYnRuLWRlZmF1bHRcIixcImJ0bi10b29sYmFyXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjZXhwb3J0Y2hvaWNlXCIpLnRhYmxlRXhwb3J0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGlzcGxheXMgdGFibGUgaGVhZGVycyAodGggb3IgdGQgZWxlbWVudHMpIGluIHRoZSA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6dHJ1ZSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpc3BsYXlzIHRhYmxlIGZvb3RlcnMgKHRoIG9yIHRkIGVsZW1lbnRzKSBpbiB0aGUgPHRmb290PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb290ZXJzOnRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpbGV0eXBlKHMpIGZvciB0aGUgZXhwb3J0XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXRzOiBbXCJ4bHNcIixcImNzdlwiLFwidHh0XCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGaWxlbmFtZSBmb3IgdGhlIGRvd25sb2FkZWQgZmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTpcIm15VGVtcGxhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3R5bGUgYnV0dG9ucyB1c2luZyBib290c3RyYXAgZnJhbWV3b3JrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvb3RzdHJhcDpmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXV0b21hdGljYWxseSBnZW5lcmF0ZXMgdGhlIGJ1aWx0LWluIGV4cG9ydCBidXR0b25zIGZvciBlYWNoIG9mIHRoZSBzcGVjaWZpZWQgZm9ybWF0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRCdXR0b25zOnRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBvc2l0aW9uIG9mIHRoZSBjYXB0aW9uIGVsZW1lbnQgcmVsYXRpdmUgdG8gdGFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246XCJib3R0b21cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gKE51bWJlciwgTnVtYmVyW10pLCBSb3cgaW5kaWNlcyB0byBleGNsdWRlIGZyb20gdGhlIGV4cG9ydGVkIGZpbGUocylcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlUm93czpudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAoTnVtYmVyLCBOdW1iZXJbXSksIGNvbHVtbiBpbmRpY2VzIHRvIGV4Y2x1ZGUgZnJvbSB0aGUgZXhwb3J0ZWQgZmlsZShzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmVDb2xzOm51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZXMgYWxsIGxlYWRpbmcvdHJhaWxpbmcgbmV3bGluZXMsIHNwYWNlcywgYW5kIHRhYnMgZnJvbSBjZWxsIHRleHQgaW4gdGhlIGV4cG9ydGVkIGZpbGUocylcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpbVdoaXRlc3BhY2U6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIChCb29sZWFuKSwgc2V0IGRpcmVjdGlvbiBvZiB0aGUgd29ya3NoZWV0IHRvIHJpZ2h0LXRvLWxlZnQgKGRlZmF1bHQ6IGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSVEw6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIChpZCwgU3RyaW5nKSwgc2hlZXQgbmFtZSBmb3IgdGhlIGV4cG9ydGVkIHNwcmVhZHNoZWV0LCAoZGVmYXVsdDogJ2lkJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hlZXRuYW1lOlwidGVtcGxhdGVcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgfSk7XHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcclxuXHJcbi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgRU5UUklFUykge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gRU5UUklFUyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xyXG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHZhciByZXR1cm5NZXRob2QgPSBpdGVyYXRvclsncmV0dXJuJ107XHJcbiAgICBpZiAocmV0dXJuTWV0aG9kICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldHVybk1ldGhvZC5jYWxsKGl0ZXJhdG9yKSk7XHJcbiAgICB0aHJvdyBlcnJvcjtcclxuICB9XHJcbn07XHJcbiIsInZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gLyhpcGhvbmV8aXBvZHxpcGFkKS4qYXBwbGV3ZWJraXQvaS50ZXN0KHVzZXJBZ2VudCk7XHJcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgdmFyIGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZTtcclxuICBpZiAoY29uc29sZSAmJiBjb25zb2xlLmVycm9yKSB7XHJcbiAgICBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gY29uc29sZS5lcnJvcihhKSA6IGNvbnNvbGUuZXJyb3IoYSwgYik7XHJcbiAgfVxyXG59O1xyXG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XHJcbnZhciBpc0FycmF5SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXktaXRlcmF0b3ItbWV0aG9kJyk7XHJcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcclxudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XHJcbnZhciBnZXRJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XHJcbnZhciBjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NhbGwtd2l0aC1zYWZlLWl0ZXJhdGlvbi1jbG9zaW5nJyk7XHJcblxyXG52YXIgUmVzdWx0ID0gZnVuY3Rpb24gKHN0b3BwZWQsIHJlc3VsdCkge1xyXG4gIHRoaXMuc3RvcHBlZCA9IHN0b3BwZWQ7XHJcbiAgdGhpcy5yZXN1bHQgPSByZXN1bHQ7XHJcbn07XHJcblxyXG52YXIgaXRlcmF0ZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCBmbiwgdGhhdCwgQVNfRU5UUklFUywgSVNfSVRFUkFUT1IpIHtcclxuICB2YXIgYm91bmRGdW5jdGlvbiA9IGJpbmQoZm4sIHRoYXQsIEFTX0VOVFJJRVMgPyAyIDogMSk7XHJcbiAgdmFyIGl0ZXJhdG9yLCBpdGVyRm4sIGluZGV4LCBsZW5ndGgsIHJlc3VsdCwgbmV4dCwgc3RlcDtcclxuXHJcbiAgaWYgKElTX0lURVJBVE9SKSB7XHJcbiAgICBpdGVyYXRvciA9IGl0ZXJhYmxlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpdGVyRm4gPSBnZXRJdGVyYXRvck1ldGhvZChpdGVyYWJsZSk7XHJcbiAgICBpZiAodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoJ1RhcmdldCBpcyBub3QgaXRlcmFibGUnKTtcclxuICAgIC8vIG9wdGltaXNhdGlvbiBmb3IgYXJyYXkgaXRlcmF0b3JzXHJcbiAgICBpZiAoaXNBcnJheUl0ZXJhdG9yTWV0aG9kKGl0ZXJGbikpIHtcclxuICAgICAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gQVNfRU5UUklFU1xyXG4gICAgICAgICAgPyBib3VuZEZ1bmN0aW9uKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKVxyXG4gICAgICAgICAgOiBib3VuZEZ1bmN0aW9uKGl0ZXJhYmxlW2luZGV4XSk7XHJcbiAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQgaW5zdGFuY2VvZiBSZXN1bHQpIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH0gcmV0dXJuIG5ldyBSZXN1bHQoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7XHJcbiAgfVxyXG5cclxuICBuZXh0ID0gaXRlcmF0b3IubmV4dDtcclxuICB3aGlsZSAoIShzdGVwID0gbmV4dC5jYWxsKGl0ZXJhdG9yKSkuZG9uZSkge1xyXG4gICAgcmVzdWx0ID0gY2FsbFdpdGhTYWZlSXRlcmF0aW9uQ2xvc2luZyhpdGVyYXRvciwgYm91bmRGdW5jdGlvbiwgc3RlcC52YWx1ZSwgQVNfRU5UUklFUyk7XHJcbiAgICBpZiAodHlwZW9mIHJlc3VsdCA9PSAnb2JqZWN0JyAmJiByZXN1bHQgJiYgcmVzdWx0IGluc3RhbmNlb2YgUmVzdWx0KSByZXR1cm4gcmVzdWx0O1xyXG4gIH0gcmV0dXJuIG5ldyBSZXN1bHQoZmFsc2UpO1xyXG59O1xyXG5cclxuaXRlcmF0ZS5zdG9wID0gZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gIHJldHVybiBuZXcgUmVzdWx0KHRydWUsIHJlc3VsdCk7XHJcbn07XHJcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XHJcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XHJcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XHJcbnZhciBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdGFzaycpLnNldDtcclxudmFyIElTX0lPUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtaXMtaW9zJyk7XHJcblxyXG52YXIgTXV0YXRpb25PYnNlcnZlciA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xyXG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xyXG52YXIgUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlO1xyXG52YXIgSVNfTk9ERSA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xyXG4vLyBOb2RlLmpzIDExIHNob3dzIEV4cGVyaW1lbnRhbFdhcm5pbmcgb24gZ2V0dGluZyBgcXVldWVNaWNyb3Rhc2tgXHJcbnZhciBxdWV1ZU1pY3JvdGFza0Rlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZ2xvYmFsLCAncXVldWVNaWNyb3Rhc2snKTtcclxudmFyIHF1ZXVlTWljcm90YXNrID0gcXVldWVNaWNyb3Rhc2tEZXNjcmlwdG9yICYmIHF1ZXVlTWljcm90YXNrRGVzY3JpcHRvci52YWx1ZTtcclxuXHJcbnZhciBmbHVzaCwgaGVhZCwgbGFzdCwgbm90aWZ5LCB0b2dnbGUsIG5vZGUsIHByb21pc2UsIHRoZW47XHJcblxyXG4vLyBtb2Rlcm4gZW5naW5lcyBoYXZlIHF1ZXVlTWljcm90YXNrIG1ldGhvZFxyXG5pZiAoIXF1ZXVlTWljcm90YXNrKSB7XHJcbiAgZmx1c2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcGFyZW50LCBmbjtcclxuICAgIGlmIChJU19OT0RFICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpIHBhcmVudC5leGl0KCk7XHJcbiAgICB3aGlsZSAoaGVhZCkge1xyXG4gICAgICBmbiA9IGhlYWQuZm47XHJcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgZm4oKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBpZiAoaGVhZCkgbm90aWZ5KCk7XHJcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICB9XHJcbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XHJcbiAgICBpZiAocGFyZW50KSBwYXJlbnQuZW50ZXIoKTtcclxuICB9O1xyXG5cclxuICAvLyBOb2RlLmpzXHJcbiAgaWYgKElTX05PREUpIHtcclxuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XHJcbiAgICB9O1xyXG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlciwgZXhjZXB0IGlPUyAtIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8zMzlcclxuICB9IGVsc2UgaWYgKE11dGF0aW9uT2JzZXJ2ZXIgJiYgIUlTX0lPUykge1xyXG4gICAgdG9nZ2xlID0gdHJ1ZTtcclxuICAgIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XHJcbiAgICBuZXcgTXV0YXRpb25PYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7IGNoYXJhY3RlckRhdGE6IHRydWUgfSk7XHJcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XHJcbiAgICB9O1xyXG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXHJcbiAgfSBlbHNlIGlmIChQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xyXG4gICAgLy8gUHJvbWlzZS5yZXNvbHZlIHdpdGhvdXQgYW4gYXJndW1lbnQgdGhyb3dzIGFuIGVycm9yIGluIExHIFdlYk9TIDJcclxuICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcclxuICAgIHRoZW4gPSBwcm9taXNlLnRoZW47XHJcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoZW4uY2FsbChwcm9taXNlLCBmbHVzaCk7XHJcbiAgICB9O1xyXG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XHJcbiAgLy8gLSBzZXRJbW1lZGlhdGVcclxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXHJcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xyXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXHJcbiAgLy8gLSBzZXRUaW1lb3V0XHJcbiAgfSBlbHNlIHtcclxuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxyXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHF1ZXVlTWljcm90YXNrIHx8IGZ1bmN0aW9uIChmbikge1xyXG4gIHZhciB0YXNrID0geyBmbjogZm4sIG5leHQ6IHVuZGVmaW5lZCB9O1xyXG4gIGlmIChsYXN0KSBsYXN0Lm5leHQgPSB0YXNrO1xyXG4gIGlmICghaGVhZCkge1xyXG4gICAgaGVhZCA9IHRhc2s7XHJcbiAgICBub3RpZnkoKTtcclxuICB9IGxhc3QgPSB0YXNrO1xyXG59O1xyXG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnbG9iYWwuUHJvbWlzZTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcclxuXHJcbnZhciBQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XHJcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcclxuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbiAoJCRyZXNvbHZlLCAkJHJlamVjdCkge1xyXG4gICAgaWYgKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xyXG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcclxuICAgIHJlamVjdCA9ICQkcmVqZWN0O1xyXG4gIH0pO1xyXG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcclxuICB0aGlzLnJlamVjdCA9IGFGdW5jdGlvbihyZWplY3QpO1xyXG59O1xyXG5cclxuLy8gMjUuNC4xLjUgTmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcclxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIChDKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKTtcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4geyBlcnJvcjogZmFsc2UsIHZhbHVlOiBleGVjKCkgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgZXJyb3I6IHRydWUsIHZhbHVlOiBlcnJvciB9O1xyXG4gIH1cclxufTtcclxuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xyXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XHJcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDLCB4KSB7XHJcbiAgYW5PYmplY3QoQyk7XHJcbiAgaWYgKGlzT2JqZWN0KHgpICYmIHguY29uc3RydWN0b3IgPT09IEMpIHJldHVybiB4O1xyXG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYoQyk7XHJcbiAgdmFyIHJlc29sdmUgPSBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlO1xyXG4gIHJlc29sdmUoeCk7XHJcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XHJcbn07XHJcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XHJcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xyXG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xyXG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQnKTtcclxudmFyIGh0bWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaHRtbCcpO1xyXG52YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xyXG52YXIgSVNfSU9TID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS1pcy1pb3MnKTtcclxuXHJcbnZhciBsb2NhdGlvbiA9IGdsb2JhbC5sb2NhdGlvbjtcclxudmFyIHNldCA9IGdsb2JhbC5zZXRJbW1lZGlhdGU7XHJcbnZhciBjbGVhciA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZTtcclxudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcclxudmFyIE1lc3NhZ2VDaGFubmVsID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsO1xyXG52YXIgRGlzcGF0Y2ggPSBnbG9iYWwuRGlzcGF0Y2g7XHJcbnZhciBjb3VudGVyID0gMDtcclxudmFyIHF1ZXVlID0ge307XHJcbnZhciBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcclxudmFyIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xyXG5cclxudmFyIHJ1biA9IGZ1bmN0aW9uIChpZCkge1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcclxuICBpZiAocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKSB7XHJcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XHJcbiAgICBkZWxldGUgcXVldWVbaWRdO1xyXG4gICAgZm4oKTtcclxuICB9XHJcbn07XHJcblxyXG52YXIgcnVubmVyID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgIHJ1bihpZCk7XHJcbiAgfTtcclxufTtcclxuXHJcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gIHJ1bihldmVudC5kYXRhKTtcclxufTtcclxuXHJcbnZhciBwb3N0ID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgLy8gb2xkIGVuZ2luZXMgaGF2ZSBub3QgbG9jYXRpb24ub3JpZ2luXHJcbiAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsIGxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGxvY2F0aW9uLmhvc3QpO1xyXG59O1xyXG5cclxuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxyXG5pZiAoIXNldCB8fCAhY2xlYXIpIHtcclxuICBzZXQgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pIHtcclxuICAgIHZhciBhcmdzID0gW107XHJcbiAgICB2YXIgaSA9IDE7XHJcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XHJcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcclxuICAgICAgKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbikpLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XHJcbiAgICB9O1xyXG4gICAgZGVmZXIoY291bnRlcik7XHJcbiAgICByZXR1cm4gY291bnRlcjtcclxuICB9O1xyXG4gIGNsZWFyID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpIHtcclxuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XHJcbiAgfTtcclxuICAvLyBOb2RlLmpzIDAuOC1cclxuICBpZiAoY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2VzcycpIHtcclxuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgIHByb2Nlc3MubmV4dFRpY2socnVubmVyKGlkKSk7XHJcbiAgICB9O1xyXG4gIC8vIFNwaGVyZSAoSlMgZ2FtZSBlbmdpbmUpIERpc3BhdGNoIEFQSVxyXG4gIH0gZWxzZSBpZiAoRGlzcGF0Y2ggJiYgRGlzcGF0Y2gubm93KSB7XHJcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICBEaXNwYXRjaC5ub3cocnVubmVyKGlkKSk7XHJcbiAgICB9O1xyXG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcclxuICAvLyBleGNlcHQgaU9TIC0gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzYyNFxyXG4gIH0gZWxzZSBpZiAoTWVzc2FnZUNoYW5uZWwgJiYgIUlTX0lPUykge1xyXG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xyXG4gICAgcG9ydCA9IGNoYW5uZWwucG9ydDI7XHJcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xyXG4gICAgZGVmZXIgPSBiaW5kKHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xyXG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xyXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXHJcbiAgfSBlbHNlIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMgJiYgIWZhaWxzKHBvc3QpKSB7XHJcbiAgICBkZWZlciA9IHBvc3Q7XHJcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XHJcbiAgLy8gSUU4LVxyXG4gIH0gZWxzZSBpZiAoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpKSB7XHJcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XHJcbiAgICAgICAgcnVuKGlkKTtcclxuICAgICAgfTtcclxuICAgIH07XHJcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcclxuICB9IGVsc2Uge1xyXG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgc2V0VGltZW91dChydW5uZXIoaWQpLCAwKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBzZXQ6IHNldCxcclxuICBjbGVhcjogY2xlYXJcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcclxudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xyXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xyXG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcclxudmFyIE5hdGl2ZVByb21pc2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXByb21pc2UtY29uc3RydWN0b3InKTtcclxudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XHJcbnZhciByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZS1hbGwnKTtcclxudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnJyk7XHJcbnZhciBzZXRTcGVjaWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1zcGVjaWVzJyk7XHJcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcclxudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XHJcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLWluc3RhbmNlJyk7XHJcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XHJcbnZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlJyk7XHJcbnZhciBpdGVyYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdGUnKTtcclxudmFyIGNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jaGVjay1jb3JyZWN0bmVzcy1vZi1pdGVyYXRpb24nKTtcclxudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XHJcbnZhciB0YXNrID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Rhc2snKS5zZXQ7XHJcbnZhciBtaWNyb3Rhc2sgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWljcm90YXNrJyk7XHJcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wcm9taXNlLXJlc29sdmUnKTtcclxudmFyIGhvc3RSZXBvcnRFcnJvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaG9zdC1yZXBvcnQtZXJyb3JzJyk7XHJcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XHJcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3BlcmZvcm0nKTtcclxudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcclxudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xyXG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XHJcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XHJcblxyXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xyXG52YXIgUFJPTUlTRSA9ICdQcm9taXNlJztcclxudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcclxudmFyIHNldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLnNldDtcclxudmFyIGdldEludGVybmFsUHJvbWlzZVN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXR0ZXJGb3IoUFJPTUlTRSk7XHJcbnZhciBQcm9taXNlQ29uc3RydWN0b3IgPSBOYXRpdmVQcm9taXNlO1xyXG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcclxudmFyIGRvY3VtZW50ID0gZ2xvYmFsLmRvY3VtZW50O1xyXG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xyXG52YXIgJGZldGNoID0gZ2V0QnVpbHRJbignZmV0Y2gnKTtcclxudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZjtcclxudmFyIG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5O1xyXG52YXIgSVNfTk9ERSA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xyXG52YXIgRElTUEFUQ0hfRVZFTlQgPSAhIShkb2N1bWVudCAmJiBkb2N1bWVudC5jcmVhdGVFdmVudCAmJiBnbG9iYWwuZGlzcGF0Y2hFdmVudCk7XHJcbnZhciBVTkhBTkRMRURfUkVKRUNUSU9OID0gJ3VuaGFuZGxlZHJlamVjdGlvbic7XHJcbnZhciBSRUpFQ1RJT05fSEFORExFRCA9ICdyZWplY3Rpb25oYW5kbGVkJztcclxudmFyIFBFTkRJTkcgPSAwO1xyXG52YXIgRlVMRklMTEVEID0gMTtcclxudmFyIFJFSkVDVEVEID0gMjtcclxudmFyIEhBTkRMRUQgPSAxO1xyXG52YXIgVU5IQU5ETEVEID0gMjtcclxudmFyIEludGVybmFsLCBPd25Qcm9taXNlQ2FwYWJpbGl0eSwgUHJvbWlzZVdyYXBwZXIsIG5hdGl2ZVRoZW47XHJcblxyXG52YXIgRk9SQ0VEID0gaXNGb3JjZWQoUFJPTUlTRSwgZnVuY3Rpb24gKCkge1xyXG4gIHZhciBHTE9CQUxfQ09SRV9KU19QUk9NSVNFID0gaW5zcGVjdFNvdXJjZShQcm9taXNlQ29uc3RydWN0b3IpICE9PSBTdHJpbmcoUHJvbWlzZUNvbnN0cnVjdG9yKTtcclxuICBpZiAoIUdMT0JBTF9DT1JFX0pTX1BST01JU0UpIHtcclxuICAgIC8vIFY4IDYuNiAoTm9kZSAxMCBhbmQgQ2hyb21lIDY2KSBoYXZlIGEgYnVnIHdpdGggcmVzb2x2aW5nIGN1c3RvbSB0aGVuYWJsZXNcclxuICAgIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTgzMDU2NVxyXG4gICAgLy8gV2UgY2FuJ3QgZGV0ZWN0IGl0IHN5bmNocm9ub3VzbHksIHNvIGp1c3QgY2hlY2sgdmVyc2lvbnNcclxuICAgIGlmIChWOF9WRVJTSU9OID09PSA2NikgcmV0dXJuIHRydWU7XHJcbiAgICAvLyBVbmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XHJcbiAgICBpZiAoIUlTX05PREUgJiYgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCAhPSAnZnVuY3Rpb24nKSByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgLy8gV2UgbmVlZCBQcm9taXNlI2ZpbmFsbHkgaW4gdGhlIHB1cmUgdmVyc2lvbiBmb3IgcHJldmVudGluZyBwcm90b3R5cGUgcG9sbHV0aW9uXHJcbiAgaWYgKElTX1BVUkUgJiYgIVByb21pc2VDb25zdHJ1Y3Rvci5wcm90b3R5cGVbJ2ZpbmFsbHknXSkgcmV0dXJuIHRydWU7XHJcbiAgLy8gV2UgY2FuJ3QgdXNlIEBAc3BlY2llcyBmZWF0dXJlIGRldGVjdGlvbiBpbiBWOCBzaW5jZSBpdCBjYXVzZXNcclxuICAvLyBkZW9wdGltaXphdGlvbiBhbmQgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cclxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjc5XHJcbiAgaWYgKFY4X1ZFUlNJT04gPj0gNTEgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KFByb21pc2VDb25zdHJ1Y3RvcikpIHJldHVybiBmYWxzZTtcclxuICAvLyBEZXRlY3QgY29ycmVjdG5lc3Mgb2Ygc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxyXG4gIHZhciBwcm9taXNlID0gUHJvbWlzZUNvbnN0cnVjdG9yLnJlc29sdmUoMSk7XHJcbiAgdmFyIEZha2VQcm9taXNlID0gZnVuY3Rpb24gKGV4ZWMpIHtcclxuICAgIGV4ZWMoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pO1xyXG4gIH07XHJcbiAgdmFyIGNvbnN0cnVjdG9yID0gcHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9O1xyXG4gIGNvbnN0cnVjdG9yW1NQRUNJRVNdID0gRmFrZVByb21pc2U7XHJcbiAgcmV0dXJuICEocHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZSk7XHJcbn0pO1xyXG5cclxudmFyIElOQ09SUkVDVF9JVEVSQVRJT04gPSBGT1JDRUQgfHwgIWNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbihmdW5jdGlvbiAoaXRlcmFibGUpIHtcclxuICBQcm9taXNlQ29uc3RydWN0b3IuYWxsKGl0ZXJhYmxlKVsnY2F0Y2gnXShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pO1xyXG59KTtcclxuXHJcbi8vIGhlbHBlcnNcclxudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbiAoaXQpIHtcclxuICB2YXIgdGhlbjtcclxuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XHJcbn07XHJcblxyXG52YXIgbm90aWZ5ID0gZnVuY3Rpb24gKHByb21pc2UsIHN0YXRlLCBpc1JlamVjdCkge1xyXG4gIGlmIChzdGF0ZS5ub3RpZmllZCkgcmV0dXJuO1xyXG4gIHN0YXRlLm5vdGlmaWVkID0gdHJ1ZTtcclxuICB2YXIgY2hhaW4gPSBzdGF0ZS5yZWFjdGlvbnM7XHJcbiAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB2YWx1ZSA9IHN0YXRlLnZhbHVlO1xyXG4gICAgdmFyIG9rID0gc3RhdGUuc3RhdGUgPT0gRlVMRklMTEVEO1xyXG4gICAgdmFyIGluZGV4ID0gMDtcclxuICAgIC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXHJcbiAgICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaW5kZXgpIHtcclxuICAgICAgdmFyIHJlYWN0aW9uID0gY2hhaW5baW5kZXgrK107XHJcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWw7XHJcbiAgICAgIHZhciByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZTtcclxuICAgICAgdmFyIHJlamVjdCA9IHJlYWN0aW9uLnJlamVjdDtcclxuICAgICAgdmFyIGRvbWFpbiA9IHJlYWN0aW9uLmRvbWFpbjtcclxuICAgICAgdmFyIHJlc3VsdCwgdGhlbiwgZXhpdGVkO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGlmIChoYW5kbGVyKSB7XHJcbiAgICAgICAgICBpZiAoIW9rKSB7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5yZWplY3Rpb24gPT09IFVOSEFORExFRCkgb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSwgc3RhdGUpO1xyXG4gICAgICAgICAgICBzdGF0ZS5yZWplY3Rpb24gPSBIQU5ETEVEO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGhhbmRsZXIgPT09IHRydWUpIHJlc3VsdCA9IHZhbHVlO1xyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5lbnRlcigpO1xyXG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTsgLy8gY2FuIHRocm93XHJcbiAgICAgICAgICAgIGlmIChkb21haW4pIHtcclxuICAgICAgICAgICAgICBkb21haW4uZXhpdCgpO1xyXG4gICAgICAgICAgICAgIGV4aXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2UpIHtcclxuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSkge1xyXG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xyXG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBpZiAoZG9tYWluICYmICFleGl0ZWQpIGRvbWFpbi5leGl0KCk7XHJcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhdGUucmVhY3Rpb25zID0gW107XHJcbiAgICBzdGF0ZS5ub3RpZmllZCA9IGZhbHNlO1xyXG4gICAgaWYgKGlzUmVqZWN0ICYmICFzdGF0ZS5yZWplY3Rpb24pIG9uVW5oYW5kbGVkKHByb21pc2UsIHN0YXRlKTtcclxuICB9KTtcclxufTtcclxuXHJcbnZhciBkaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24gKG5hbWUsIHByb21pc2UsIHJlYXNvbikge1xyXG4gIHZhciBldmVudCwgaGFuZGxlcjtcclxuICBpZiAoRElTUEFUQ0hfRVZFTlQpIHtcclxuICAgIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XHJcbiAgICBldmVudC5wcm9taXNlID0gcHJvbWlzZTtcclxuICAgIGV2ZW50LnJlYXNvbiA9IHJlYXNvbjtcclxuICAgIGV2ZW50LmluaXRFdmVudChuYW1lLCBmYWxzZSwgdHJ1ZSk7XHJcbiAgICBnbG9iYWwuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgfSBlbHNlIGV2ZW50ID0geyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHJlYXNvbiB9O1xyXG4gIGlmIChoYW5kbGVyID0gZ2xvYmFsWydvbicgKyBuYW1lXSkgaGFuZGxlcihldmVudCk7XHJcbiAgZWxzZSBpZiAobmFtZSA9PT0gVU5IQU5ETEVEX1JFSkVDVElPTikgaG9zdFJlcG9ydEVycm9ycygnVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgcmVhc29uKTtcclxufTtcclxuXHJcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlLCBzdGF0ZSkge1xyXG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB2YWx1ZSA9IHN0YXRlLnZhbHVlO1xyXG4gICAgdmFyIElTX1VOSEFORExFRCA9IGlzVW5oYW5kbGVkKHN0YXRlKTtcclxuICAgIHZhciByZXN1bHQ7XHJcbiAgICBpZiAoSVNfVU5IQU5ETEVEKSB7XHJcbiAgICAgIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChJU19OT0RFKSB7XHJcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcclxuICAgICAgICB9IGVsc2UgZGlzcGF0Y2hFdmVudChVTkhBTkRMRURfUkVKRUNUSU9OLCBwcm9taXNlLCB2YWx1ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxyXG4gICAgICBzdGF0ZS5yZWplY3Rpb24gPSBJU19OT0RFIHx8IGlzVW5oYW5kbGVkKHN0YXRlKSA/IFVOSEFORExFRCA6IEhBTkRMRUQ7XHJcbiAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHRocm93IHJlc3VsdC52YWx1ZTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uIChzdGF0ZSkge1xyXG4gIHJldHVybiBzdGF0ZS5yZWplY3Rpb24gIT09IEhBTkRMRUQgJiYgIXN0YXRlLnBhcmVudDtcclxufTtcclxuXHJcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlLCBzdGF0ZSkge1xyXG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChJU19OT0RFKSB7XHJcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xyXG4gICAgfSBlbHNlIGRpc3BhdGNoRXZlbnQoUkVKRUNUSU9OX0hBTkRMRUQsIHByb21pc2UsIHN0YXRlLnZhbHVlKTtcclxuICB9KTtcclxufTtcclxuXHJcbnZhciBiaW5kID0gZnVuY3Rpb24gKGZuLCBwcm9taXNlLCBzdGF0ZSwgdW53cmFwKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgZm4ocHJvbWlzZSwgc3RhdGUsIHZhbHVlLCB1bndyYXApO1xyXG4gIH07XHJcbn07XHJcblxyXG52YXIgaW50ZXJuYWxSZWplY3QgPSBmdW5jdGlvbiAocHJvbWlzZSwgc3RhdGUsIHZhbHVlLCB1bndyYXApIHtcclxuICBpZiAoc3RhdGUuZG9uZSkgcmV0dXJuO1xyXG4gIHN0YXRlLmRvbmUgPSB0cnVlO1xyXG4gIGlmICh1bndyYXApIHN0YXRlID0gdW53cmFwO1xyXG4gIHN0YXRlLnZhbHVlID0gdmFsdWU7XHJcbiAgc3RhdGUuc3RhdGUgPSBSRUpFQ1RFRDtcclxuICBub3RpZnkocHJvbWlzZSwgc3RhdGUsIHRydWUpO1xyXG59O1xyXG5cclxudmFyIGludGVybmFsUmVzb2x2ZSA9IGZ1bmN0aW9uIChwcm9taXNlLCBzdGF0ZSwgdmFsdWUsIHVud3JhcCkge1xyXG4gIGlmIChzdGF0ZS5kb25lKSByZXR1cm47XHJcbiAgc3RhdGUuZG9uZSA9IHRydWU7XHJcbiAgaWYgKHVud3JhcCkgc3RhdGUgPSB1bndyYXA7XHJcbiAgdHJ5IHtcclxuICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkgdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XHJcbiAgICB2YXIgdGhlbiA9IGlzVGhlbmFibGUodmFsdWUpO1xyXG4gICAgaWYgKHRoZW4pIHtcclxuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgd3JhcHBlciA9IHsgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLFxyXG4gICAgICAgICAgICBiaW5kKGludGVybmFsUmVzb2x2ZSwgcHJvbWlzZSwgd3JhcHBlciwgc3RhdGUpLFxyXG4gICAgICAgICAgICBiaW5kKGludGVybmFsUmVqZWN0LCBwcm9taXNlLCB3cmFwcGVyLCBzdGF0ZSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGludGVybmFsUmVqZWN0KHByb21pc2UsIHdyYXBwZXIsIGVycm9yLCBzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0YXRlLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgIHN0YXRlLnN0YXRlID0gRlVMRklMTEVEO1xyXG4gICAgICBub3RpZnkocHJvbWlzZSwgc3RhdGUsIGZhbHNlKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgaW50ZXJuYWxSZWplY3QocHJvbWlzZSwgeyBkb25lOiBmYWxzZSB9LCBlcnJvciwgc3RhdGUpO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXHJcbmlmIChGT1JDRUQpIHtcclxuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxyXG4gIFByb21pc2VDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcclxuICAgIGFuSW5zdGFuY2UodGhpcywgUHJvbWlzZUNvbnN0cnVjdG9yLCBQUk9NSVNFKTtcclxuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XHJcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xyXG4gICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGV4ZWN1dG9yKGJpbmQoaW50ZXJuYWxSZXNvbHZlLCB0aGlzLCBzdGF0ZSksIGJpbmQoaW50ZXJuYWxSZWplY3QsIHRoaXMsIHN0YXRlKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBpbnRlcm5hbFJlamVjdCh0aGlzLCBzdGF0ZSwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXHJcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XHJcbiAgICBzZXRJbnRlcm5hbFN0YXRlKHRoaXMsIHtcclxuICAgICAgdHlwZTogUFJPTUlTRSxcclxuICAgICAgZG9uZTogZmFsc2UsXHJcbiAgICAgIG5vdGlmaWVkOiBmYWxzZSxcclxuICAgICAgcGFyZW50OiBmYWxzZSxcclxuICAgICAgcmVhY3Rpb25zOiBbXSxcclxuICAgICAgcmVqZWN0aW9uOiBmYWxzZSxcclxuICAgICAgc3RhdGU6IFBFTkRJTkcsXHJcbiAgICAgIHZhbHVlOiB1bmRlZmluZWRcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVkZWZpbmVBbGwoUHJvbWlzZUNvbnN0cnVjdG9yLnByb3RvdHlwZSwge1xyXG4gICAgLy8gYFByb21pc2UucHJvdG90eXBlLnRoZW5gIG1ldGhvZFxyXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcHJvbWlzZS5wcm90b3R5cGUudGhlblxyXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xyXG4gICAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFByb21pc2VTdGF0ZSh0aGlzKTtcclxuICAgICAgdmFyIHJlYWN0aW9uID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsIFByb21pc2VDb25zdHJ1Y3RvcikpO1xyXG4gICAgICByZWFjdGlvbi5vayA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xyXG4gICAgICByZWFjdGlvbi5mYWlsID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xyXG4gICAgICByZWFjdGlvbi5kb21haW4gPSBJU19OT0RFID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XHJcbiAgICAgIHN0YXRlLnBhcmVudCA9IHRydWU7XHJcbiAgICAgIHN0YXRlLnJlYWN0aW9ucy5wdXNoKHJlYWN0aW9uKTtcclxuICAgICAgaWYgKHN0YXRlLnN0YXRlICE9IFBFTkRJTkcpIG5vdGlmeSh0aGlzLCBzdGF0ZSwgZmFsc2UpO1xyXG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcclxuICAgIH0sXHJcbiAgICAvLyBgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2hgIG1ldGhvZFxyXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcHJvbWlzZS5wcm90b3R5cGUuY2F0Y2hcclxuICAgICdjYXRjaCc6IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcclxuICAgIH1cclxuICB9KTtcclxuICBPd25Qcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBwcm9taXNlID0gbmV3IEludGVybmFsKCk7XHJcbiAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHByb21pc2UpO1xyXG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcclxuICAgIHRoaXMucmVzb2x2ZSA9IGJpbmQoaW50ZXJuYWxSZXNvbHZlLCBwcm9taXNlLCBzdGF0ZSk7XHJcbiAgICB0aGlzLnJlamVjdCA9IGJpbmQoaW50ZXJuYWxSZWplY3QsIHByb21pc2UsIHN0YXRlKTtcclxuICB9O1xyXG4gIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmYgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XHJcbiAgICByZXR1cm4gQyA9PT0gUHJvbWlzZUNvbnN0cnVjdG9yIHx8IEMgPT09IFByb21pc2VXcmFwcGVyXHJcbiAgICAgID8gbmV3IE93blByb21pc2VDYXBhYmlsaXR5KEMpXHJcbiAgICAgIDogbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xyXG4gIH07XHJcblxyXG4gIGlmICghSVNfUFVSRSAmJiB0eXBlb2YgTmF0aXZlUHJvbWlzZSA9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBuYXRpdmVUaGVuID0gTmF0aXZlUHJvbWlzZS5wcm90b3R5cGUudGhlbjtcclxuXHJcbiAgICAvLyB3cmFwIG5hdGl2ZSBQcm9taXNlI3RoZW4gZm9yIG5hdGl2ZSBhc3luYyBmdW5jdGlvbnNcclxuICAgIHJlZGVmaW5lKE5hdGl2ZVByb21pc2UucHJvdG90eXBlLCAndGhlbicsIGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcclxuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2VDb25zdHJ1Y3RvcihmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgbmF0aXZlVGhlbi5jYWxsKHRoYXQsIHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICAgIH0pLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpO1xyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY0MFxyXG4gICAgfSwgeyB1bnNhZmU6IHRydWUgfSk7XHJcblxyXG4gICAgLy8gd3JhcCBmZXRjaCByZXN1bHRcclxuICAgIGlmICh0eXBlb2YgJGZldGNoID09ICdmdW5jdGlvbicpICQoeyBnbG9iYWw6IHRydWUsIGVudW1lcmFibGU6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XHJcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gICAgICBmZXRjaDogZnVuY3Rpb24gZmV0Y2goaW5wdXQgLyogLCBpbml0ICovKSB7XHJcbiAgICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKFByb21pc2VDb25zdHJ1Y3RvciwgJGZldGNoLmFwcGx5KGdsb2JhbCwgYXJndW1lbnRzKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuJCh7IGdsb2JhbDogdHJ1ZSwgd3JhcDogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xyXG4gIFByb21pc2U6IFByb21pc2VDb25zdHJ1Y3RvclxyXG59KTtcclxuXHJcbnNldFRvU3RyaW5nVGFnKFByb21pc2VDb25zdHJ1Y3RvciwgUFJPTUlTRSwgZmFsc2UsIHRydWUpO1xyXG5zZXRTcGVjaWVzKFBST01JU0UpO1xyXG5cclxuUHJvbWlzZVdyYXBwZXIgPSBnZXRCdWlsdEluKFBST01JU0UpO1xyXG5cclxuLy8gc3RhdGljc1xyXG4kKHsgdGFyZ2V0OiBQUk9NSVNFLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XHJcbiAgLy8gYFByb21pc2UucmVqZWN0YCBtZXRob2RcclxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wcm9taXNlLnJlamVjdFxyXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpIHtcclxuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcyk7XHJcbiAgICBjYXBhYmlsaXR5LnJlamVjdC5jYWxsKHVuZGVmaW5lZCwgcik7XHJcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xyXG4gIH1cclxufSk7XHJcblxyXG4kKHsgdGFyZ2V0OiBQUk9NSVNFLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IElTX1BVUkUgfHwgRk9SQ0VEIH0sIHtcclxuICAvLyBgUHJvbWlzZS5yZXNvbHZlYCBtZXRob2RcclxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wcm9taXNlLnJlc29sdmVcclxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpIHtcclxuICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShJU19QVVJFICYmIHRoaXMgPT09IFByb21pc2VXcmFwcGVyID8gUHJvbWlzZUNvbnN0cnVjdG9yIDogdGhpcywgeCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbiQoeyB0YXJnZXQ6IFBST01JU0UsIHN0YXQ6IHRydWUsIGZvcmNlZDogSU5DT1JSRUNUX0lURVJBVElPTiB9LCB7XHJcbiAgLy8gYFByb21pc2UuYWxsYCBtZXRob2RcclxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wcm9taXNlLmFsbFxyXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKSB7XHJcbiAgICB2YXIgQyA9IHRoaXM7XHJcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xyXG4gICAgdmFyIHJlc29sdmUgPSBjYXBhYmlsaXR5LnJlc29sdmU7XHJcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XHJcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciAkcHJvbWlzZVJlc29sdmUgPSBhRnVuY3Rpb24oQy5yZXNvbHZlKTtcclxuICAgICAgdmFyIHZhbHVlcyA9IFtdO1xyXG4gICAgICB2YXIgY291bnRlciA9IDA7XHJcbiAgICAgIHZhciByZW1haW5pbmcgPSAxO1xyXG4gICAgICBpdGVyYXRlKGl0ZXJhYmxlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IGNvdW50ZXIrKztcclxuICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XHJcbiAgICAgICAgcmVtYWluaW5nKys7XHJcbiAgICAgICAgJHByb21pc2VSZXNvbHZlLmNhbGwoQywgcHJvbWlzZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgIGlmIChhbHJlYWR5Q2FsbGVkKSByZXR1cm47XHJcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcclxuICAgICAgICAgIHZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcclxuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcclxuICAgICAgICB9LCByZWplY3QpO1xyXG4gICAgICB9KTtcclxuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xyXG4gICAgfSk7XHJcbiAgICBpZiAocmVzdWx0LmVycm9yKSByZWplY3QocmVzdWx0LnZhbHVlKTtcclxuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XHJcbiAgfSxcclxuICAvLyBgUHJvbWlzZS5yYWNlYCBtZXRob2RcclxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wcm9taXNlLnJhY2VcclxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKSB7XHJcbiAgICB2YXIgQyA9IHRoaXM7XHJcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xyXG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xyXG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgJHByb21pc2VSZXNvbHZlID0gYUZ1bmN0aW9uKEMucmVzb2x2ZSk7XHJcbiAgICAgIGl0ZXJhdGUoaXRlcmFibGUsIGZ1bmN0aW9uIChwcm9taXNlKSB7XHJcbiAgICAgICAgJHByb21pc2VSZXNvbHZlLmNhbGwoQywgcHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBpZiAocmVzdWx0LmVycm9yKSByZWplY3QocmVzdWx0LnZhbHVlKTtcclxuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XHJcbiAgfVxyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==