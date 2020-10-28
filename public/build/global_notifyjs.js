(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["global_notifyjs"],{

/***/ "./assets/js/global/notify.js":
/*!************************************!*\
  !*** ./assets/js/global/notify.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* Notify.js - http://notifyjs.com/ Copyright (c) 2015 MIT */
(function (factory) {
  // UMD start
  // https://github.com/umdjs/umd/blob/master/jqueryPluginCommonjs.js
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  //IE8 indexOf polyfill
  var indexOf = [].indexOf || function (item) {
    for (var i = 0, l = this.length; i < l; i++) {
      if (i in this && this[i] === item) {
        return i;
      }
    }

    return -1;
  };

  var pluginName = "notify";
  var pluginClassName = pluginName + "js";
  var blankFieldName = pluginName + "!blank";
  var positions = {
    t: "top",
    m: "middle",
    b: "bottom",
    l: "left",
    c: "center",
    r: "right"
  };
  var hAligns = ["l", "c", "r"];
  var vAligns = ["t", "m", "b"];
  var mainPositions = ["t", "b", "l", "r"];
  var opposites = {
    t: "b",
    m: null,
    b: "t",
    l: "r",
    c: null,
    r: "l"
  };

  var parsePosition = function parsePosition(str) {
    var pos;
    pos = [];
    $.each(str.split(/\W+/), function (i, word) {
      var w;
      w = word.toLowerCase().charAt(0);

      if (positions[w]) {
        return pos.push(w);
      }
    });
    return pos;
  };

  var styles = {};
  var coreStyle = {
    name: "core",
    html: "<div class=\"" + pluginClassName + "-wrapper\">\n	<div class=\"" + pluginClassName + "-arrow\"></div>\n	<div class=\"" + pluginClassName + "-container\"></div>\n</div>",
    css: "." + pluginClassName + "-corner {\n	position: fixed;\n	margin: 5px;\n	z-index: 1050;\n}\n\n." + pluginClassName + "-corner ." + pluginClassName + "-wrapper,\n." + pluginClassName + "-corner ." + pluginClassName + "-container {\n	position: relative;\n	display: block;\n	height: inherit;\n	width: inherit;\n	margin: 3px;\n}\n\n." + pluginClassName + "-wrapper {\n	z-index: 1;\n	position: absolute;\n	display: inline-block;\n	height: 0;\n	width: 0;\n}\n\n." + pluginClassName + "-container {\n	display: none;\n	z-index: 1;\n	position: absolute;\n}\n\n." + pluginClassName + "-hidable {\n	cursor: pointer;\n}\n\n[data-notify-text],[data-notify-html] {\n	position: relative;\n}\n\n." + pluginClassName + "-arrow {\n	position: absolute;\n	z-index: 2;\n	width: 0;\n	height: 0;\n}"
  };
  var stylePrefixes = {
    "border-radius": ["-webkit-", "-moz-"]
  };

  var getStyle = function getStyle(name) {
    return styles[name];
  };

  var removeStyle = function removeStyle(name) {
    if (!name) {
      throw "Missing Style name";
    }

    if (styles[name]) {
      delete styles[name];
    }
  };

  var addStyle = function addStyle(name, def) {
    if (!name) {
      throw "Missing Style name";
    }

    if (!def) {
      throw "Missing Style definition";
    }

    if (!def.html) {
      throw "Missing Style HTML";
    } //remove existing style


    var existing = styles[name];

    if (existing && existing.cssElem) {
      if (window.console) {
        console.warn(pluginName + ": overwriting style '" + name + "'");
      }

      styles[name].cssElem.remove();
    }

    def.name = name;
    styles[name] = def;
    var cssText = "";

    if (def.classes) {
      $.each(def.classes, function (className, props) {
        cssText += "." + pluginClassName + "-" + def.name + "-" + className + " {\n";
        $.each(props, function (name, val) {
          if (stylePrefixes[name]) {
            $.each(stylePrefixes[name], function (i, prefix) {
              return cssText += "	" + prefix + name + ": " + val + ";\n";
            });
          }

          return cssText += "	" + name + ": " + val + ";\n";
        });
        return cssText += "}\n";
      });
    }

    if (def.css) {
      cssText += "/* styles for " + def.name + " */\n" + def.css;
    }

    if (cssText) {
      def.cssElem = insertCSS(cssText);
      def.cssElem.attr("id", "notify-" + def.name);
    }

    var fields = {};
    var elem = $(def.html);
    findFields("html", elem, fields);
    findFields("text", elem, fields);
    def.fields = fields;
  };

  var insertCSS = function insertCSS(cssText) {
    var e, elem, error;
    elem = createElem("style");
    elem.attr("type", 'text/css');
    $("head").append(elem);

    try {
      elem.html(cssText);
    } catch (_) {
      elem[0].styleSheet.cssText = cssText;
    }

    return elem;
  };

  var findFields = function findFields(type, elem, fields) {
    var attr;

    if (type !== "html") {
      type = "text";
    }

    attr = "data-notify-" + type;
    return find(elem, "[" + attr + "]").each(function () {
      var name;
      name = $(this).attr(attr);

      if (!name) {
        name = blankFieldName;
      }

      fields[name] = type;
    });
  };

  var find = function find(elem, selector) {
    if (elem.is(selector)) {
      return elem;
    } else {
      return elem.find(selector);
    }
  };

  var pluginOptions = {
    clickToHide: true,
    autoHide: true,
    autoHideDelay: 5000,
    arrowShow: true,
    arrowSize: 5,
    breakNewLines: true,
    elementPosition: "bottom",
    globalPosition: "top right",
    style: "bootstrap",
    className: "error",
    showAnimation: "slideDown",
    showDuration: 400,
    hideAnimation: "slideUp",
    hideDuration: 200,
    gap: 5
  };

  var inherit = function inherit(a, b) {
    var F;

    F = function F() {};

    F.prototype = a;
    return $.extend(true, new F(), b);
  };

  var defaults = function defaults(opts) {
    return $.extend(pluginOptions, opts);
  };

  var createElem = function createElem(tag) {
    return $("<" + tag + "></" + tag + ">");
  };

  var globalAnchors = {};

  var getAnchorElement = function getAnchorElement(element) {
    var radios;

    if (element.is('[type=radio]')) {
      radios = element.parents('form:first').find('[type=radio]').filter(function (i, e) {
        return $(e).attr("name") === element.attr("name");
      });
      element = radios.first();
    }

    return element;
  };

  var incr = function incr(obj, pos, val) {
    var opp, temp;

    if (typeof val === "string") {
      val = parseInt(val, 10);
    } else if (typeof val !== "number") {
      return;
    }

    if (isNaN(val)) {
      return;
    }

    opp = positions[opposites[pos.charAt(0)]];
    temp = pos;

    if (obj[opp] !== undefined) {
      pos = positions[opp.charAt(0)];
      val = -val;
    }

    if (obj[pos] === undefined) {
      obj[pos] = val;
    } else {
      obj[pos] += val;
    }

    return null;
  };

  var realign = function realign(alignment, inner, outer) {
    if (alignment === "l" || alignment === "t") {
      return 0;
    } else if (alignment === "c" || alignment === "m") {
      return outer / 2 - inner / 2;
    } else if (alignment === "r" || alignment === "b") {
      return outer - inner;
    }

    throw "Invalid alignment";
  };

  var encode = function encode(text) {
    encode.e = encode.e || createElem("div");
    return encode.e.text(text).html();
  };

  function Notification(elem, data, options) {
    if (typeof options === "string") {
      options = {
        className: options
      };
    }

    this.options = inherit(pluginOptions, $.isPlainObject(options) ? options : {});
    this.loadHTML();
    this.wrapper = $(coreStyle.html);

    if (this.options.clickToHide) {
      this.wrapper.addClass(pluginClassName + "-hidable");
    }

    this.wrapper.data(pluginClassName, this);
    this.arrow = this.wrapper.find("." + pluginClassName + "-arrow");
    this.container = this.wrapper.find("." + pluginClassName + "-container");
    this.container.append(this.userContainer);

    if (elem && elem.length) {
      this.elementType = elem.attr("type");
      this.originalElement = elem;
      this.elem = getAnchorElement(elem);
      this.elem.data(pluginClassName, this);
      this.elem.before(this.wrapper);
    }

    this.container.hide();
    this.run(data);
  }

  Notification.prototype.loadHTML = function () {
    var style;
    style = this.getStyle();
    this.userContainer = $(style.html);
    this.userFields = style.fields;
  };

  Notification.prototype.show = function (show, userCallback) {
    var args, callback, elems, fn, hidden;

    callback = function (_this) {
      return function () {
        if (!show && !_this.elem) {
          _this.destroy();
        }

        if (userCallback) {
          return userCallback();
        }
      };
    }(this);

    hidden = this.container.parent().parents(':hidden').length > 0;
    elems = this.container.add(this.arrow);
    args = [];

    if (hidden && show) {
      fn = "show";
    } else if (hidden && !show) {
      fn = "hide";
    } else if (!hidden && show) {
      fn = this.options.showAnimation;
      args.push(this.options.showDuration);
    } else if (!hidden && !show) {
      fn = this.options.hideAnimation;
      args.push(this.options.hideDuration);
    } else {
      return callback();
    }

    args.push(callback);
    return elems[fn].apply(elems, args);
  };

  Notification.prototype.setGlobalPosition = function () {
    var p = this.getPosition();
    var pMain = p[0];
    var pAlign = p[1];
    var main = positions[pMain];
    var align = positions[pAlign];
    var key = pMain + "|" + pAlign;
    var anchor = globalAnchors[key];

    if (!anchor || !document.body.contains(anchor[0])) {
      anchor = globalAnchors[key] = createElem("div");
      var css = {};
      css[main] = 0;

      if (align === "middle") {
        css.top = '45%';
      } else if (align === "center") {
        css.left = '45%';
      } else {
        css[align] = 0;
      }

      anchor.css(css).addClass(pluginClassName + "-corner");
      $("body").append(anchor);
    }

    return anchor.prepend(this.wrapper);
  };

  Notification.prototype.setElementPosition = function () {
    var arrowColor, arrowCss, arrowSize, color, contH, contW, css, elemH, elemIH, elemIW, elemPos, elemW, gap, j, k, len, len1, mainFull, margin, opp, oppFull, pAlign, pArrow, pMain, pos, posFull, position, ref, wrapPos;
    position = this.getPosition();
    pMain = position[0];
    pAlign = position[1];
    pArrow = position[2];
    elemPos = this.elem.position();
    elemH = this.elem.outerHeight();
    elemW = this.elem.outerWidth();
    elemIH = this.elem.innerHeight();
    elemIW = this.elem.innerWidth();
    wrapPos = this.wrapper.position();
    contH = this.container.height();
    contW = this.container.width();
    mainFull = positions[pMain];
    opp = opposites[pMain];
    oppFull = positions[opp];
    css = {};
    css[oppFull] = pMain === "b" ? elemH : pMain === "r" ? elemW : 0;
    incr(css, "top", elemPos.top - wrapPos.top);
    incr(css, "left", elemPos.left - wrapPos.left);
    ref = ["top", "left"];

    for (j = 0, len = ref.length; j < len; j++) {
      pos = ref[j];
      margin = parseInt(this.elem.css("margin-" + pos), 10);

      if (margin) {
        incr(css, pos, margin);
      }
    }

    gap = Math.max(0, this.options.gap - (this.options.arrowShow ? arrowSize : 0));
    incr(css, oppFull, gap);

    if (!this.options.arrowShow) {
      this.arrow.hide();
    } else {
      arrowSize = this.options.arrowSize;
      arrowCss = $.extend({}, css);
      arrowColor = this.userContainer.css("border-color") || this.userContainer.css("border-top-color") || this.userContainer.css("background-color") || "white";

      for (k = 0, len1 = mainPositions.length; k < len1; k++) {
        pos = mainPositions[k];
        posFull = positions[pos];

        if (pos === opp) {
          continue;
        }

        color = posFull === mainFull ? arrowColor : "transparent";
        arrowCss["border-" + posFull] = arrowSize + "px solid " + color;
      }

      incr(css, positions[opp], arrowSize);

      if (indexOf.call(mainPositions, pAlign) >= 0) {
        incr(arrowCss, positions[pAlign], arrowSize * 2);
      }
    }

    if (indexOf.call(vAligns, pMain) >= 0) {
      incr(css, "left", realign(pAlign, contW, elemW));

      if (arrowCss) {
        incr(arrowCss, "left", realign(pAlign, arrowSize, elemIW));
      }
    } else if (indexOf.call(hAligns, pMain) >= 0) {
      incr(css, "top", realign(pAlign, contH, elemH));

      if (arrowCss) {
        incr(arrowCss, "top", realign(pAlign, arrowSize, elemIH));
      }
    }

    if (this.container.is(":visible")) {
      css.display = "block";
    }

    this.container.removeAttr("style").css(css);

    if (arrowCss) {
      return this.arrow.removeAttr("style").css(arrowCss);
    }
  };

  Notification.prototype.getPosition = function () {
    var pos, ref, ref1, ref2, ref3, ref4, ref5, text;
    text = this.options.position || (this.elem ? this.options.elementPosition : this.options.globalPosition);
    pos = parsePosition(text);

    if (pos.length === 0) {
      pos[0] = "b";
    }

    if (ref = pos[0], indexOf.call(mainPositions, ref) < 0) {
      throw "Must be one of [" + mainPositions + "]";
    }

    if (pos.length === 1 || (ref1 = pos[0], indexOf.call(vAligns, ref1) >= 0) && (ref2 = pos[1], indexOf.call(hAligns, ref2) < 0) || (ref3 = pos[0], indexOf.call(hAligns, ref3) >= 0) && (ref4 = pos[1], indexOf.call(vAligns, ref4) < 0)) {
      pos[1] = (ref5 = pos[0], indexOf.call(hAligns, ref5) >= 0) ? "m" : "l";
    }

    if (pos.length === 2) {
      pos[2] = pos[1];
    }

    return pos;
  };

  Notification.prototype.getStyle = function (name) {
    var style;

    if (!name) {
      name = this.options.style;
    }

    if (!name) {
      name = "default";
    }

    style = styles[name];

    if (!style) {
      throw "Missing style: " + name;
    }

    return style;
  };

  Notification.prototype.updateClasses = function () {
    var classes, style;
    classes = ["base"];

    if ($.isArray(this.options.className)) {
      classes = classes.concat(this.options.className);
    } else if (this.options.className) {
      classes.push(this.options.className);
    }

    style = this.getStyle();
    classes = $.map(classes, function (n) {
      return pluginClassName + "-" + style.name + "-" + n;
    }).join(" ");
    return this.userContainer.attr("class", classes);
  };

  Notification.prototype.run = function (data, options) {
    var d, datas, name, type, value;

    if ($.isPlainObject(options)) {
      $.extend(this.options, options);
    } else if ($.type(options) === "string") {
      this.options.className = options;
    }

    if (this.container && !data) {
      this.show(false);
      return;
    } else if (!this.container && !data) {
      return;
    }

    datas = {};

    if ($.isPlainObject(data)) {
      datas = data;
    } else {
      datas[blankFieldName] = data;
    }

    for (name in datas) {
      d = datas[name];
      type = this.userFields[name];

      if (!type) {
        continue;
      }

      if (type === "text") {
        d = encode(d);

        if (this.options.breakNewLines) {
          d = d.replace(/\n/g, '<br/>');
        }
      }

      value = name === blankFieldName ? '' : '=' + name;
      find(this.userContainer, "[data-notify-" + type + value + "]").html(d);
    }

    this.updateClasses();

    if (this.elem) {
      this.setElementPosition();
    } else {
      this.setGlobalPosition();
    }

    this.show(true);

    if (this.options.autoHide) {
      clearTimeout(this.autohideTimer);
      this.autohideTimer = setTimeout(this.show.bind(this, false), this.options.autoHideDelay);
    }
  };

  Notification.prototype.destroy = function () {
    this.wrapper.data(pluginClassName, null);
    this.wrapper.remove();
  };

  $[pluginName] = function (elem, data, options) {
    if (elem && elem.nodeName || elem.jquery) {
      $(elem)[pluginName](data, options);
    } else {
      options = data;
      data = elem;
      new Notification(null, data, options);
    }

    return elem;
  };

  $.fn[pluginName] = function (data, options) {
    $(this).each(function () {
      var prev = getAnchorElement($(this)).data(pluginClassName);

      if (prev) {
        prev.destroy();
      }

      var curr = new Notification($(this), data, options);
    });
    return this;
  };

  $.extend($[pluginName], {
    defaults: defaults,
    addStyle: addStyle,
    removeStyle: removeStyle,
    pluginOptions: pluginOptions,
    getStyle: getStyle,
    insertCSS: insertCSS
  }); //always include the default bootstrap style

  addStyle("bootstrap", {
    html: "<div>\n<span data-notify-text></span>\n</div>",
    classes: {
      base: {
        "font-weight": "bold",
        "padding": "8px 15px 8px 14px",
        "text-shadow": "0 1px 0 rgba(255, 255, 255, 0.5)",
        "background-color": "#fcf8e3",
        "border": "1px solid #fbeed5",
        "border-radius": "4px",
        "white-space": "nowrap",
        "padding-left": "25px",
        "background-repeat": "no-repeat",
        "background-position": "3px 7px"
      },
      error: {
        "color": "#B94A48",
        "background-color": "#F2DEDE",
        "border-color": "#EED3D7",
        "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAtRJREFUeNqkVc1u00AQHq+dOD+0poIQfkIjalW0SEGqRMuRnHos3DjwAH0ArlyQeANOOSMeAA5VjyBxKBQhgSpVUKKQNGloFdw4cWw2jtfMOna6JOUArDTazXi/b3dm55socPqQhFka++aHBsI8GsopRJERNFlY88FCEk9Yiwf8RhgRyaHFQpPHCDmZG5oX2ui2yilkcTT1AcDsbYC1NMAyOi7zTX2Agx7A9luAl88BauiiQ/cJaZQfIpAlngDcvZZMrl8vFPK5+XktrWlx3/ehZ5r9+t6e+WVnp1pxnNIjgBe4/6dAysQc8dsmHwPcW9C0h3fW1hans1ltwJhy0GxK7XZbUlMp5Ww2eyan6+ft/f2FAqXGK4CvQk5HueFz7D6GOZtIrK+srupdx1GRBBqNBtzc2AiMr7nPplRdKhb1q6q6zjFhrklEFOUutoQ50xcX86ZlqaZpQrfbBdu2R6/G19zX6XSgh6RX5ubyHCM8nqSID6ICrGiZjGYYxojEsiw4PDwMSL5VKsC8Yf4VRYFzMzMaxwjlJSlCyAQ9l0CW44PBADzXhe7xMdi9HtTrdYjFYkDQL0cn4Xdq2/EAE+InCnvADTf2eah4Sx9vExQjkqXT6aAERICMewd/UAp/IeYANM2joxt+q5VI+ieq2i0Wg3l6DNzHwTERPgo1ko7XBXj3vdlsT2F+UuhIhYkp7u7CarkcrFOCtR3H5JiwbAIeImjT/YQKKBtGjRFCU5IUgFRe7fF4cCNVIPMYo3VKqxwjyNAXNepuopyqnld602qVsfRpEkkz+GFL1wPj6ySXBpJtWVa5xlhpcyhBNwpZHmtX8AGgfIExo0ZpzkWVTBGiXCSEaHh62/PoR0p/vHaczxXGnj4bSo+G78lELU80h1uogBwWLf5YlsPmgDEd4M236xjm+8nm4IuE/9u+/PH2JXZfbwz4zw1WbO+SQPpXfwG/BBgAhCNZiSb/pOQAAAAASUVORK5CYII=)"
      },
      success: {
        "color": "#468847",
        "background-color": "#DFF0D8",
        "border-color": "#D6E9C6",
        "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAutJREFUeNq0lctPE0Ecx38zu/RFS1EryqtgJFA08YCiMZIAQQ4eRG8eDGdPJiYeTIwHTfwPiAcvXIwXLwoXPaDxkWgQ6islKlJLSQWLUraPLTv7Gme32zoF9KSTfLO7v53vZ3d/M7/fIth+IO6INt2jjoA7bjHCJoAlzCRw59YwHYjBnfMPqAKWQYKjGkfCJqAF0xwZjipQtA3MxeSG87VhOOYegVrUCy7UZM9S6TLIdAamySTclZdYhFhRHloGYg7mgZv1Zzztvgud7V1tbQ2twYA34LJmF4p5dXF1KTufnE+SxeJtuCZNsLDCQU0+RyKTF27Unw101l8e6hns3u0PBalORVVVkcaEKBJDgV3+cGM4tKKmI+ohlIGnygKX00rSBfszz/n2uXv81wd6+rt1orsZCHRdr1Imk2F2Kob3hutSxW8thsd8AXNaln9D7CTfA6O+0UgkMuwVvEFFUbbAcrkcTA8+AtOk8E6KiQiDmMFSDqZItAzEVQviRkdDdaFgPp8HSZKAEAL5Qh7Sq2lIJBJwv2scUqkUnKoZgNhcDKhKg5aH+1IkcouCAdFGAQsuWZYhOjwFHQ96oagWgRoUov1T9kRBEODAwxM2QtEUl+Wp+Ln9VRo6BcMw4ErHRYjH4/B26AlQoQQTRdHWwcd9AH57+UAXddvDD37DmrBBV34WfqiXPl61g+vr6xA9zsGeM9gOdsNXkgpEtTwVvwOklXLKm6+/p5ezwk4B+j6droBs2CsGa/gNs6RIxazl4Tc25mpTgw/apPR1LYlNRFAzgsOxkyXYLIM1V8NMwyAkJSctD1eGVKiq5wWjSPdjmeTkiKvVW4f2YPHWl3GAVq6ymcyCTgovM3FzyRiDe2TaKcEKsLpJvNHjZgPNqEtyi6mZIm4SRFyLMUsONSSdkPeFtY1n0mczoY3BHTLhwPRy9/lzcziCw9ACI+yql0VLzcGAZbYSM5CCSZg1/9oc/nn7+i8N9p/8An4JMADxhH+xHfuiKwAAAABJRU5ErkJggg==)"
      },
      info: {
        "color": "#3A87AD",
        "background-color": "#D9EDF7",
        "border-color": "#BCE8F1",
        "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QYFAhkSsdes/QAAA8dJREFUOMvVlGtMW2UYx//POaWHXg6lLaW0ypAtw1UCgbniNOLcVOLmAjHZolOYlxmTGXVZdAnRfXQm+7SoU4mXaOaiZsEpC9FkiQs6Z6bdCnNYruM6KNBw6YWewzl9z+sHImEWv+vz7XmT95f/+3/+7wP814v+efDOV3/SoX3lHAA+6ODeUFfMfjOWMADgdk+eEKz0pF7aQdMAcOKLLjrcVMVX3xdWN29/GhYP7SvnP0cWfS8caSkfHZsPE9Fgnt02JNutQ0QYHB2dDz9/pKX8QjjuO9xUxd/66HdxTeCHZ3rojQObGQBcuNjfplkD3b19Y/6MrimSaKgSMmpGU5WevmE/swa6Oy73tQHA0Rdr2Mmv/6A1n9w9suQ7097Z9lM4FlTgTDrzZTu4StXVfpiI48rVcUDM5cmEksrFnHxfpTtU/3BFQzCQF/2bYVoNbH7zmItbSoMj40JSzmMyX5qDvriA7QdrIIpA+3cdsMpu0nXI8cV0MtKXCPZev+gCEM1S2NHPvWfP/hL+7FSr3+0p5RBEyhEN5JCKYr8XnASMT0xBNyzQGQeI8fjsGD39RMPk7se2bd5ZtTyoFYXftF6y37gx7NeUtJJOTFlAHDZLDuILU3j3+H5oOrD3yWbIztugaAzgnBKJuBLpGfQrS8wO4FZgV+c1IxaLgWVU0tMLEETCos4xMzEIv9cJXQcyagIwigDGwJgOAtHAwAhisQUjy0ORGERiELgG4iakkzo4MYAxcM5hAMi1WWG1yYCJIcMUaBkVRLdGeSU2995TLWzcUAzONJ7J6FBVBYIggMzmFbvdBV44Corg8vjhzC+EJEl8U1kJtgYrhCzgc/vvTwXKSib1paRFVRVORDAJAsw5FuTaJEhWM2SHB3mOAlhkNxwuLzeJsGwqWzf5TFNdKgtY5qHp6ZFf67Y/sAVadCaVY5YACDDb3Oi4NIjLnWMw2QthCBIsVhsUTU9tvXsjeq9+X1d75/KEs4LNOfcdf/+HthMnvwxOD0wmHaXr7ZItn2wuH2SnBzbZAbPJwpPx+VQuzcm7dgRCB57a1uBzUDRL4bfnI0RE0eaXd9W89mpjqHZnUI5Hh2l2dkZZUhOqpi2qSmpOmZ64Tuu9qlz/SEXo6MEHa3wOip46F1n7633eekV8ds8Wxjn37Wl63VVa+ej5oeEZ/82ZBETJjpJ1Rbij2D3Z/1trXUvLsblCK0XfOx0SX2kMsn9dX+d+7Kf6h8o4AIykuffjT8L20LU+w4AZd5VvEPY+XpWqLV327HR7DzXuDnD8r+ovkBehJ8i+y8YAAAAASUVORK5CYII=)"
      },
      warn: {
        "color": "#C09853",
        "background-color": "#FCF8E3",
        "border-color": "#FBEED5",
        "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAABJlBMVEXr6eb/2oD/wi7/xjr/0mP/ykf/tQD/vBj/3o7/uQ//vyL/twebhgD/4pzX1K3z8e349vK6tHCilCWbiQymn0jGworr6dXQza3HxcKkn1vWvV/5uRfk4dXZ1bD18+/52YebiAmyr5S9mhCzrWq5t6ufjRH54aLs0oS+qD751XqPhAybhwXsujG3sm+Zk0PTwG6Shg+PhhObhwOPgQL4zV2nlyrf27uLfgCPhRHu7OmLgAafkyiWkD3l49ibiAfTs0C+lgCniwD4sgDJxqOilzDWowWFfAH08uebig6qpFHBvH/aw26FfQTQzsvy8OyEfz20r3jAvaKbhgG9q0nc2LbZxXanoUu/u5WSggCtp1anpJKdmFz/zlX/1nGJiYmuq5Dx7+sAAADoPUZSAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfdBgUBGhh4aah5AAAAlklEQVQY02NgoBIIE8EUcwn1FkIXM1Tj5dDUQhPU502Mi7XXQxGz5uVIjGOJUUUW81HnYEyMi2HVcUOICQZzMMYmxrEyMylJwgUt5BljWRLjmJm4pI1hYp5SQLGYxDgmLnZOVxuooClIDKgXKMbN5ggV1ACLJcaBxNgcoiGCBiZwdWxOETBDrTyEFey0jYJ4eHjMGWgEAIpRFRCUt08qAAAAAElFTkSuQmCC)"
      }
    }
  });
  $(function () {
    insertCSS(coreStyle.css).attr("id", "core-notify");
    $(document).on("click", "." + pluginClassName + "-hidable", function (e) {
      $(this).trigger("notify-hide");
    });
    $(document).on("notify-hide", "." + pluginClassName + "-wrapper", function (e) {
      var elem = $(this).data(pluginClassName);

      if (elem) {
        elem.show(false);
      }
    });
  });
});

/***/ }),

/***/ "./node_modules/core-js/internals/number-parse-int.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-int.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var $parseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22;

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(String(string));
  return $parseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
} : $parseInt;


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

/***/ "./node_modules/core-js/modules/es.parse-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-int.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var parseIntImplementation = __webpack_require__(/*! ../internals/number-parse-int */ "./node_modules/core-js/internals/number-parse-int.js");

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != parseIntImplementation }, {
  parseInt: parseIntImplementation
});


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


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ })

},[["./assets/js/global/notify.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZ2xvYmFsL25vdGlmeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbnVtYmVyLXBhcnNlLWludC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucGFyc2UtaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnNwbGl0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyJdLCJuYW1lcyI6WyJmYWN0b3J5IiwiZGVmaW5lIiwiJCIsImluZGV4T2YiLCJpdGVtIiwiaSIsImwiLCJsZW5ndGgiLCJwbHVnaW5OYW1lIiwicGx1Z2luQ2xhc3NOYW1lIiwiYmxhbmtGaWVsZE5hbWUiLCJwb3NpdGlvbnMiLCJ0IiwibSIsImIiLCJjIiwiciIsImhBbGlnbnMiLCJ2QWxpZ25zIiwibWFpblBvc2l0aW9ucyIsIm9wcG9zaXRlcyIsInBhcnNlUG9zaXRpb24iLCJzdHIiLCJwb3MiLCJlYWNoIiwic3BsaXQiLCJ3b3JkIiwidyIsInRvTG93ZXJDYXNlIiwiY2hhckF0IiwicHVzaCIsInN0eWxlcyIsImNvcmVTdHlsZSIsIm5hbWUiLCJodG1sIiwiY3NzIiwic3R5bGVQcmVmaXhlcyIsImdldFN0eWxlIiwicmVtb3ZlU3R5bGUiLCJhZGRTdHlsZSIsImRlZiIsImV4aXN0aW5nIiwiY3NzRWxlbSIsIndpbmRvdyIsImNvbnNvbGUiLCJ3YXJuIiwicmVtb3ZlIiwiY3NzVGV4dCIsImNsYXNzZXMiLCJjbGFzc05hbWUiLCJwcm9wcyIsInZhbCIsInByZWZpeCIsImluc2VydENTUyIsImF0dHIiLCJmaWVsZHMiLCJlbGVtIiwiZmluZEZpZWxkcyIsImUiLCJlcnJvciIsImNyZWF0ZUVsZW0iLCJhcHBlbmQiLCJfIiwic3R5bGVTaGVldCIsInR5cGUiLCJmaW5kIiwic2VsZWN0b3IiLCJpcyIsInBsdWdpbk9wdGlvbnMiLCJjbGlja1RvSGlkZSIsImF1dG9IaWRlIiwiYXV0b0hpZGVEZWxheSIsImFycm93U2hvdyIsImFycm93U2l6ZSIsImJyZWFrTmV3TGluZXMiLCJlbGVtZW50UG9zaXRpb24iLCJnbG9iYWxQb3NpdGlvbiIsInN0eWxlIiwic2hvd0FuaW1hdGlvbiIsInNob3dEdXJhdGlvbiIsImhpZGVBbmltYXRpb24iLCJoaWRlRHVyYXRpb24iLCJnYXAiLCJpbmhlcml0IiwiYSIsIkYiLCJwcm90b3R5cGUiLCJleHRlbmQiLCJkZWZhdWx0cyIsIm9wdHMiLCJ0YWciLCJnbG9iYWxBbmNob3JzIiwiZ2V0QW5jaG9yRWxlbWVudCIsImVsZW1lbnQiLCJyYWRpb3MiLCJwYXJlbnRzIiwiZmlsdGVyIiwiZmlyc3QiLCJpbmNyIiwib2JqIiwib3BwIiwidGVtcCIsInBhcnNlSW50IiwiaXNOYU4iLCJ1bmRlZmluZWQiLCJyZWFsaWduIiwiYWxpZ25tZW50IiwiaW5uZXIiLCJvdXRlciIsImVuY29kZSIsInRleHQiLCJOb3RpZmljYXRpb24iLCJkYXRhIiwib3B0aW9ucyIsImlzUGxhaW5PYmplY3QiLCJsb2FkSFRNTCIsIndyYXBwZXIiLCJhZGRDbGFzcyIsImFycm93IiwiY29udGFpbmVyIiwidXNlckNvbnRhaW5lciIsImVsZW1lbnRUeXBlIiwib3JpZ2luYWxFbGVtZW50IiwiYmVmb3JlIiwiaGlkZSIsInJ1biIsInVzZXJGaWVsZHMiLCJzaG93IiwidXNlckNhbGxiYWNrIiwiYXJncyIsImNhbGxiYWNrIiwiZWxlbXMiLCJmbiIsImhpZGRlbiIsIl90aGlzIiwiZGVzdHJveSIsInBhcmVudCIsImFkZCIsImFwcGx5Iiwic2V0R2xvYmFsUG9zaXRpb24iLCJwIiwiZ2V0UG9zaXRpb24iLCJwTWFpbiIsInBBbGlnbiIsIm1haW4iLCJhbGlnbiIsImtleSIsImFuY2hvciIsImRvY3VtZW50IiwiYm9keSIsImNvbnRhaW5zIiwidG9wIiwibGVmdCIsInByZXBlbmQiLCJzZXRFbGVtZW50UG9zaXRpb24iLCJhcnJvd0NvbG9yIiwiYXJyb3dDc3MiLCJjb2xvciIsImNvbnRIIiwiY29udFciLCJlbGVtSCIsImVsZW1JSCIsImVsZW1JVyIsImVsZW1Qb3MiLCJlbGVtVyIsImoiLCJrIiwibGVuIiwibGVuMSIsIm1haW5GdWxsIiwibWFyZ2luIiwib3BwRnVsbCIsInBBcnJvdyIsInBvc0Z1bGwiLCJwb3NpdGlvbiIsInJlZiIsIndyYXBQb3MiLCJvdXRlckhlaWdodCIsIm91dGVyV2lkdGgiLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJ3aWR0aCIsIk1hdGgiLCJtYXgiLCJjYWxsIiwiZGlzcGxheSIsInJlbW92ZUF0dHIiLCJyZWYxIiwicmVmMiIsInJlZjMiLCJyZWY0IiwicmVmNSIsInVwZGF0ZUNsYXNzZXMiLCJpc0FycmF5IiwiY29uY2F0IiwibWFwIiwibiIsImpvaW4iLCJkIiwiZGF0YXMiLCJ2YWx1ZSIsInJlcGxhY2UiLCJjbGVhclRpbWVvdXQiLCJhdXRvaGlkZVRpbWVyIiwic2V0VGltZW91dCIsImJpbmQiLCJub2RlTmFtZSIsImpxdWVyeSIsInByZXYiLCJjdXJyIiwiYmFzZSIsInN1Y2Nlc3MiLCJpbmZvIiwib24iLCJ0cmlnZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNDLFdBQVVBLE9BQVYsRUFBbUI7QUFDbkI7QUFDQTtBQUNBLE1BQUksSUFBSixFQUFnRDtBQUMvQztBQUNBQyxxQ0FBTyxDQUFDLHlFQUFELENBQUQsb0NBQWFELE9BQWI7QUFBQTtBQUFBO0FBQUEsb0dBQU47QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSx5QkFBeUIsbUJBQW1CO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDcklELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxnQkFBZ0IsbUJBQU8sQ0FBQyw2RkFBZ0M7O0FBRXhEO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLHlDQUF5QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6Imdsb2JhbF9ub3RpZnlqcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE5vdGlmeS5qcyAtIGh0dHA6Ly9ub3RpZnlqcy5jb20vIENvcHlyaWdodCAoYykgMjAxNSBNSVQgKi9cclxuKGZ1bmN0aW9uIChmYWN0b3J5KSB7XHJcblx0Ly8gVU1EIHN0YXJ0XHJcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3VtZGpzL3VtZC9ibG9iL21hc3Rlci9qcXVlcnlQbHVnaW5Db21tb25qcy5qc1xyXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcclxuXHRcdC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cclxuXHRcdGRlZmluZShbJ2pxdWVyeSddLCBmYWN0b3J5KTtcclxuXHR9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XHJcblx0XHQvLyBOb2RlL0NvbW1vbkpTXHJcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCByb290LCBqUXVlcnkgKSB7XHJcblx0XHRcdGlmICggalF1ZXJ5ID09PSB1bmRlZmluZWQgKSB7XHJcblx0XHRcdFx0Ly8gcmVxdWlyZSgnalF1ZXJ5JykgcmV0dXJucyBhIGZhY3RvcnkgdGhhdCByZXF1aXJlcyB3aW5kb3cgdG9cclxuXHRcdFx0XHQvLyBidWlsZCBhIGpRdWVyeSBpbnN0YW5jZSwgd2Ugbm9ybWFsaXplIGhvdyB3ZSB1c2UgbW9kdWxlc1xyXG5cdFx0XHRcdC8vIHRoYXQgcmVxdWlyZSB0aGlzIHBhdHRlcm4gYnV0IHRoZSB3aW5kb3cgcHJvdmlkZWQgaXMgYSBub29wXHJcblx0XHRcdFx0Ly8gaWYgaXQncyBkZWZpbmVkIChob3cganF1ZXJ5IHdvcmtzKVxyXG5cdFx0XHRcdGlmICggdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgKSB7XHJcblx0XHRcdFx0XHRqUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRqUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKShyb290KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZmFjdG9yeShqUXVlcnkpO1xyXG5cdFx0XHRyZXR1cm4galF1ZXJ5O1xyXG5cdFx0fTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Ly8gQnJvd3NlciBnbG9iYWxzXHJcblx0XHRmYWN0b3J5KGpRdWVyeSk7XHJcblx0fVxyXG59KGZ1bmN0aW9uICgkKSB7XHJcblx0Ly9JRTggaW5kZXhPZiBwb2x5ZmlsbFxyXG5cdHZhciBpbmRleE9mID0gW10uaW5kZXhPZiB8fCBmdW5jdGlvbihpdGVtKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMCwgbCA9IHRoaXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcblx0XHRcdGlmIChpIGluIHRoaXMgJiYgdGhpc1tpXSA9PT0gaXRlbSkge1xyXG5cdFx0XHRcdHJldHVybiBpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gLTE7XHJcblx0fTtcclxuXHJcblx0dmFyIHBsdWdpbk5hbWUgPSBcIm5vdGlmeVwiO1xyXG5cdHZhciBwbHVnaW5DbGFzc05hbWUgPSBwbHVnaW5OYW1lICsgXCJqc1wiO1xyXG5cdHZhciBibGFua0ZpZWxkTmFtZSA9IHBsdWdpbk5hbWUgKyBcIiFibGFua1wiO1xyXG5cclxuXHR2YXIgcG9zaXRpb25zID0ge1xyXG5cdFx0dDogXCJ0b3BcIixcclxuXHRcdG06IFwibWlkZGxlXCIsXHJcblx0XHRiOiBcImJvdHRvbVwiLFxyXG5cdFx0bDogXCJsZWZ0XCIsXHJcblx0XHRjOiBcImNlbnRlclwiLFxyXG5cdFx0cjogXCJyaWdodFwiXHJcblx0fTtcclxuXHR2YXIgaEFsaWducyA9IFtcImxcIiwgXCJjXCIsIFwiclwiXTtcclxuXHR2YXIgdkFsaWducyA9IFtcInRcIiwgXCJtXCIsIFwiYlwiXTtcclxuXHR2YXIgbWFpblBvc2l0aW9ucyA9IFtcInRcIiwgXCJiXCIsIFwibFwiLCBcInJcIl07XHJcblx0dmFyIG9wcG9zaXRlcyA9IHtcclxuXHRcdHQ6IFwiYlwiLFxyXG5cdFx0bTogbnVsbCxcclxuXHRcdGI6IFwidFwiLFxyXG5cdFx0bDogXCJyXCIsXHJcblx0XHRjOiBudWxsLFxyXG5cdFx0cjogXCJsXCJcclxuXHR9O1xyXG5cclxuXHR2YXIgcGFyc2VQb3NpdGlvbiA9IGZ1bmN0aW9uKHN0cikge1xyXG5cdFx0dmFyIHBvcztcclxuXHRcdHBvcyA9IFtdO1xyXG5cdFx0JC5lYWNoKHN0ci5zcGxpdCgvXFxXKy8pLCBmdW5jdGlvbihpLCB3b3JkKSB7XHJcblx0XHRcdHZhciB3O1xyXG5cdFx0XHR3ID0gd29yZC50b0xvd2VyQ2FzZSgpLmNoYXJBdCgwKTtcclxuXHRcdFx0aWYgKHBvc2l0aW9uc1t3XSkge1xyXG5cdFx0XHRcdHJldHVybiBwb3MucHVzaCh3KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gcG9zO1xyXG5cdH07XHJcblxyXG5cdHZhciBzdHlsZXMgPSB7fTtcclxuXHJcblx0dmFyIGNvcmVTdHlsZSA9IHtcclxuXHRcdG5hbWU6IFwiY29yZVwiLFxyXG5cdFx0aHRtbDogXCI8ZGl2IGNsYXNzPVxcXCJcIiArIHBsdWdpbkNsYXNzTmFtZSArIFwiLXdyYXBwZXJcXFwiPlxcblx0PGRpdiBjbGFzcz1cXFwiXCIgKyBwbHVnaW5DbGFzc05hbWUgKyBcIi1hcnJvd1xcXCI+PC9kaXY+XFxuXHQ8ZGl2IGNsYXNzPVxcXCJcIiArIHBsdWdpbkNsYXNzTmFtZSArIFwiLWNvbnRhaW5lclxcXCI+PC9kaXY+XFxuPC9kaXY+XCIsXHJcblx0XHRjc3M6IFwiLlwiICsgcGx1Z2luQ2xhc3NOYW1lICsgXCItY29ybmVyIHtcXG5cdHBvc2l0aW9uOiBmaXhlZDtcXG5cdG1hcmdpbjogNXB4O1xcblx0ei1pbmRleDogMTA1MDtcXG59XFxuXFxuLlwiICsgcGx1Z2luQ2xhc3NOYW1lICsgXCItY29ybmVyIC5cIiArIHBsdWdpbkNsYXNzTmFtZSArIFwiLXdyYXBwZXIsXFxuLlwiICsgcGx1Z2luQ2xhc3NOYW1lICsgXCItY29ybmVyIC5cIiArIHBsdWdpbkNsYXNzTmFtZSArIFwiLWNvbnRhaW5lciB7XFxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXHRkaXNwbGF5OiBibG9jaztcXG5cdGhlaWdodDogaW5oZXJpdDtcXG5cdHdpZHRoOiBpbmhlcml0O1xcblx0bWFyZ2luOiAzcHg7XFxufVxcblxcbi5cIiArIHBsdWdpbkNsYXNzTmFtZSArIFwiLXdyYXBwZXIge1xcblx0ei1pbmRleDogMTtcXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cdGhlaWdodDogMDtcXG5cdHdpZHRoOiAwO1xcbn1cXG5cXG4uXCIgKyBwbHVnaW5DbGFzc05hbWUgKyBcIi1jb250YWluZXIge1xcblx0ZGlzcGxheTogbm9uZTtcXG5cdHotaW5kZXg6IDE7XFxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5cIiArIHBsdWdpbkNsYXNzTmFtZSArIFwiLWhpZGFibGUge1xcblx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5bZGF0YS1ub3RpZnktdGV4dF0sW2RhdGEtbm90aWZ5LWh0bWxdIHtcXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLlwiICsgcGx1Z2luQ2xhc3NOYW1lICsgXCItYXJyb3cge1xcblx0cG9zaXRpb246IGFic29sdXRlO1xcblx0ei1pbmRleDogMjtcXG5cdHdpZHRoOiAwO1xcblx0aGVpZ2h0OiAwO1xcbn1cIlxyXG5cdH07XHJcblxyXG5cdHZhciBzdHlsZVByZWZpeGVzID0ge1xyXG5cdFx0XCJib3JkZXItcmFkaXVzXCI6IFtcIi13ZWJraXQtXCIsIFwiLW1vei1cIl1cclxuXHR9O1xyXG5cclxuXHR2YXIgZ2V0U3R5bGUgPSBmdW5jdGlvbihuYW1lKSB7XHJcblx0XHRyZXR1cm4gc3R5bGVzW25hbWVdO1xyXG5cdH07XHJcblxyXG5cdHZhciByZW1vdmVTdHlsZSA9IGZ1bmN0aW9uKG5hbWUpIHtcclxuXHRcdGlmICghbmFtZSkge1xyXG5cdFx0XHR0aHJvdyBcIk1pc3NpbmcgU3R5bGUgbmFtZVwiO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHN0eWxlc1tuYW1lXSkge1xyXG5cdFx0XHRkZWxldGUgc3R5bGVzW25hbWVdO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHZhciBhZGRTdHlsZSA9IGZ1bmN0aW9uKG5hbWUsIGRlZikge1xyXG5cdFx0aWYgKCFuYW1lKSB7XHJcblx0XHRcdHRocm93IFwiTWlzc2luZyBTdHlsZSBuYW1lXCI7XHJcblx0XHR9XHJcblx0XHRpZiAoIWRlZikge1xyXG5cdFx0XHR0aHJvdyBcIk1pc3NpbmcgU3R5bGUgZGVmaW5pdGlvblwiO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCFkZWYuaHRtbCkge1xyXG5cdFx0XHR0aHJvdyBcIk1pc3NpbmcgU3R5bGUgSFRNTFwiO1xyXG5cdFx0fVxyXG5cdFx0Ly9yZW1vdmUgZXhpc3Rpbmcgc3R5bGVcclxuXHRcdHZhciBleGlzdGluZyA9IHN0eWxlc1tuYW1lXTtcclxuXHRcdGlmIChleGlzdGluZyAmJiBleGlzdGluZy5jc3NFbGVtKSB7XHJcblx0XHRcdGlmICh3aW5kb3cuY29uc29sZSkge1xyXG5cdFx0XHRcdGNvbnNvbGUud2FybihwbHVnaW5OYW1lICsgXCI6IG92ZXJ3cml0aW5nIHN0eWxlICdcIiArIG5hbWUgKyBcIidcIik7XHJcblx0XHRcdH1cclxuXHRcdFx0c3R5bGVzW25hbWVdLmNzc0VsZW0ucmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0XHRkZWYubmFtZSA9IG5hbWU7XHJcblx0XHRzdHlsZXNbbmFtZV0gPSBkZWY7XHJcblx0XHR2YXIgY3NzVGV4dCA9IFwiXCI7XHJcblx0XHRpZiAoZGVmLmNsYXNzZXMpIHtcclxuXHRcdFx0JC5lYWNoKGRlZi5jbGFzc2VzLCBmdW5jdGlvbihjbGFzc05hbWUsIHByb3BzKSB7XHJcblx0XHRcdFx0Y3NzVGV4dCArPSBcIi5cIiArIHBsdWdpbkNsYXNzTmFtZSArIFwiLVwiICsgZGVmLm5hbWUgKyBcIi1cIiArIGNsYXNzTmFtZSArIFwiIHtcXG5cIjtcclxuXHRcdFx0XHQkLmVhY2gocHJvcHMsIGZ1bmN0aW9uKG5hbWUsIHZhbCkge1xyXG5cdFx0XHRcdFx0aWYgKHN0eWxlUHJlZml4ZXNbbmFtZV0pIHtcclxuXHRcdFx0XHRcdFx0JC5lYWNoKHN0eWxlUHJlZml4ZXNbbmFtZV0sIGZ1bmN0aW9uKGksIHByZWZpeCkge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBjc3NUZXh0ICs9IFwiXHRcIiArIHByZWZpeCArIG5hbWUgKyBcIjogXCIgKyB2YWwgKyBcIjtcXG5cIjtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXR1cm4gY3NzVGV4dCArPSBcIlx0XCIgKyBuYW1lICsgXCI6IFwiICsgdmFsICsgXCI7XFxuXCI7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0cmV0dXJuIGNzc1RleHQgKz0gXCJ9XFxuXCI7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGRlZi5jc3MpIHtcclxuXHRcdFx0Y3NzVGV4dCArPSBcIi8qIHN0eWxlcyBmb3IgXCIgKyBkZWYubmFtZSArIFwiICovXFxuXCIgKyBkZWYuY3NzO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGNzc1RleHQpIHtcclxuXHRcdFx0ZGVmLmNzc0VsZW0gPSBpbnNlcnRDU1MoY3NzVGV4dCk7XHJcblx0XHRcdGRlZi5jc3NFbGVtLmF0dHIoXCJpZFwiLCBcIm5vdGlmeS1cIiArIGRlZi5uYW1lKTtcclxuXHRcdH1cclxuXHRcdHZhciBmaWVsZHMgPSB7fTtcclxuXHRcdHZhciBlbGVtID0gJChkZWYuaHRtbCk7XHJcblx0XHRmaW5kRmllbGRzKFwiaHRtbFwiLCBlbGVtLCBmaWVsZHMpO1xyXG5cdFx0ZmluZEZpZWxkcyhcInRleHRcIiwgZWxlbSwgZmllbGRzKTtcclxuXHRcdGRlZi5maWVsZHMgPSBmaWVsZHM7XHJcblx0fTtcclxuXHJcblx0dmFyIGluc2VydENTUyA9IGZ1bmN0aW9uKGNzc1RleHQpIHtcclxuXHRcdHZhciBlLCBlbGVtLCBlcnJvcjtcclxuXHRcdGVsZW0gPSBjcmVhdGVFbGVtKFwic3R5bGVcIik7XHJcblx0XHRlbGVtLmF0dHIoXCJ0eXBlXCIsICd0ZXh0L2NzcycpO1xyXG5cdFx0JChcImhlYWRcIikuYXBwZW5kKGVsZW0pO1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0ZWxlbS5odG1sKGNzc1RleHQpO1xyXG5cdFx0fSBjYXRjaCAoXykge1xyXG5cdFx0XHRlbGVtWzBdLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1RleHQ7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZWxlbTtcclxuXHR9O1xyXG5cclxuXHR2YXIgZmluZEZpZWxkcyA9IGZ1bmN0aW9uKHR5cGUsIGVsZW0sIGZpZWxkcykge1xyXG5cdFx0dmFyIGF0dHI7XHJcblx0XHRpZiAodHlwZSAhPT0gXCJodG1sXCIpIHtcclxuXHRcdFx0dHlwZSA9IFwidGV4dFwiO1xyXG5cdFx0fVxyXG5cdFx0YXR0ciA9IFwiZGF0YS1ub3RpZnktXCIgKyB0eXBlO1xyXG5cdFx0cmV0dXJuIGZpbmQoZWxlbSwgXCJbXCIgKyBhdHRyICsgXCJdXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBuYW1lO1xyXG5cdFx0XHRuYW1lID0gJCh0aGlzKS5hdHRyKGF0dHIpO1xyXG5cdFx0XHRpZiAoIW5hbWUpIHtcclxuXHRcdFx0XHRuYW1lID0gYmxhbmtGaWVsZE5hbWU7XHJcblx0XHRcdH1cclxuXHRcdFx0ZmllbGRzW25hbWVdID0gdHlwZTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHZhciBmaW5kID0gZnVuY3Rpb24oZWxlbSwgc2VsZWN0b3IpIHtcclxuXHRcdGlmIChlbGVtLmlzKHNlbGVjdG9yKSkge1xyXG5cdFx0XHRyZXR1cm4gZWxlbTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBlbGVtLmZpbmQoc2VsZWN0b3IpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHZhciBwbHVnaW5PcHRpb25zID0ge1xyXG5cdFx0Y2xpY2tUb0hpZGU6IHRydWUsXHJcblx0XHRhdXRvSGlkZTogdHJ1ZSxcclxuXHRcdGF1dG9IaWRlRGVsYXk6IDUwMDAsXHJcblx0XHRhcnJvd1Nob3c6IHRydWUsXHJcblx0XHRhcnJvd1NpemU6IDUsXHJcblx0XHRicmVha05ld0xpbmVzOiB0cnVlLFxyXG5cdFx0ZWxlbWVudFBvc2l0aW9uOiBcImJvdHRvbVwiLFxyXG5cdFx0Z2xvYmFsUG9zaXRpb246IFwidG9wIHJpZ2h0XCIsXHJcblx0XHRzdHlsZTogXCJib290c3RyYXBcIixcclxuXHRcdGNsYXNzTmFtZTogXCJlcnJvclwiLFxyXG5cdFx0c2hvd0FuaW1hdGlvbjogXCJzbGlkZURvd25cIixcclxuXHRcdHNob3dEdXJhdGlvbjogNDAwLFxyXG5cdFx0aGlkZUFuaW1hdGlvbjogXCJzbGlkZVVwXCIsXHJcblx0XHRoaWRlRHVyYXRpb246IDIwMCxcclxuXHRcdGdhcDogNVxyXG5cdH07XHJcblxyXG5cdHZhciBpbmhlcml0ID0gZnVuY3Rpb24oYSwgYikge1xyXG5cdFx0dmFyIEY7XHJcblx0XHRGID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdEYucHJvdG90eXBlID0gYTtcclxuXHRcdHJldHVybiAkLmV4dGVuZCh0cnVlLCBuZXcgRigpLCBiKTtcclxuXHR9O1xyXG5cclxuXHR2YXIgZGVmYXVsdHMgPSBmdW5jdGlvbihvcHRzKSB7XHJcblx0XHRyZXR1cm4gJC5leHRlbmQocGx1Z2luT3B0aW9ucywgb3B0cyk7XHJcblx0fTtcclxuXHJcblx0dmFyIGNyZWF0ZUVsZW0gPSBmdW5jdGlvbih0YWcpIHtcclxuXHRcdHJldHVybiAkKFwiPFwiICsgdGFnICsgXCI+PC9cIiArIHRhZyArIFwiPlwiKTtcclxuXHR9O1xyXG5cclxuXHR2YXIgZ2xvYmFsQW5jaG9ycyA9IHt9O1xyXG5cclxuXHR2YXIgZ2V0QW5jaG9yRWxlbWVudCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRcdHZhciByYWRpb3M7XHJcblx0XHRpZiAoZWxlbWVudC5pcygnW3R5cGU9cmFkaW9dJykpIHtcclxuXHRcdFx0cmFkaW9zID0gZWxlbWVudC5wYXJlbnRzKCdmb3JtOmZpcnN0JykuZmluZCgnW3R5cGU9cmFkaW9dJykuZmlsdGVyKGZ1bmN0aW9uKGksIGUpIHtcclxuXHRcdFx0XHRyZXR1cm4gJChlKS5hdHRyKFwibmFtZVwiKSA9PT0gZWxlbWVudC5hdHRyKFwibmFtZVwiKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdGVsZW1lbnQgPSByYWRpb3MuZmlyc3QoKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBlbGVtZW50O1xyXG5cdH07XHJcblxyXG5cdHZhciBpbmNyID0gZnVuY3Rpb24ob2JqLCBwb3MsIHZhbCkge1xyXG5cdFx0dmFyIG9wcCwgdGVtcDtcclxuXHRcdGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdHZhbCA9IHBhcnNlSW50KHZhbCwgMTApO1xyXG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgdmFsICE9PSBcIm51bWJlclwiKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGlmIChpc05hTih2YWwpKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdG9wcCA9IHBvc2l0aW9uc1tvcHBvc2l0ZXNbcG9zLmNoYXJBdCgwKV1dO1xyXG5cdFx0dGVtcCA9IHBvcztcclxuXHRcdGlmIChvYmpbb3BwXSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHBvcyA9IHBvc2l0aW9uc1tvcHAuY2hhckF0KDApXTtcclxuXHRcdFx0dmFsID0gLXZhbDtcclxuXHRcdH1cclxuXHRcdGlmIChvYmpbcG9zXSA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdG9ialtwb3NdID0gdmFsO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0b2JqW3Bvc10gKz0gdmFsO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fTtcclxuXHJcblx0dmFyIHJlYWxpZ24gPSBmdW5jdGlvbihhbGlnbm1lbnQsIGlubmVyLCBvdXRlcikge1xyXG5cdFx0aWYgKGFsaWdubWVudCA9PT0gXCJsXCIgfHwgYWxpZ25tZW50ID09PSBcInRcIikge1xyXG5cdFx0XHRyZXR1cm4gMDtcclxuXHRcdH0gZWxzZSBpZiAoYWxpZ25tZW50ID09PSBcImNcIiB8fCBhbGlnbm1lbnQgPT09IFwibVwiKSB7XHJcblx0XHRcdHJldHVybiBvdXRlciAvIDIgLSBpbm5lciAvIDI7XHJcblx0XHR9IGVsc2UgaWYgKGFsaWdubWVudCA9PT0gXCJyXCIgfHwgYWxpZ25tZW50ID09PSBcImJcIikge1xyXG5cdFx0XHRyZXR1cm4gb3V0ZXIgLSBpbm5lcjtcclxuXHRcdH1cclxuXHRcdHRocm93IFwiSW52YWxpZCBhbGlnbm1lbnRcIjtcclxuXHR9O1xyXG5cclxuXHR2YXIgZW5jb2RlID0gZnVuY3Rpb24odGV4dCkge1xyXG5cdFx0ZW5jb2RlLmUgPSBlbmNvZGUuZSB8fCBjcmVhdGVFbGVtKFwiZGl2XCIpO1xyXG5cdFx0cmV0dXJuIGVuY29kZS5lLnRleHQodGV4dCkuaHRtbCgpO1xyXG5cdH07XHJcblxyXG5cdGZ1bmN0aW9uIE5vdGlmaWNhdGlvbihlbGVtLCBkYXRhLCBvcHRpb25zKSB7XHJcblx0XHRpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0b3B0aW9ucyA9IHtcclxuXHRcdFx0XHRjbGFzc05hbWU6IG9wdGlvbnNcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdHRoaXMub3B0aW9ucyA9IGluaGVyaXQocGx1Z2luT3B0aW9ucywgJC5pc1BsYWluT2JqZWN0KG9wdGlvbnMpID8gb3B0aW9ucyA6IHt9KTtcclxuXHRcdHRoaXMubG9hZEhUTUwoKTtcclxuXHRcdHRoaXMud3JhcHBlciA9ICQoY29yZVN0eWxlLmh0bWwpO1xyXG5cdFx0aWYgKHRoaXMub3B0aW9ucy5jbGlja1RvSGlkZSkge1xyXG5cdFx0XHR0aGlzLndyYXBwZXIuYWRkQ2xhc3MocGx1Z2luQ2xhc3NOYW1lICsgXCItaGlkYWJsZVwiKTtcclxuXHRcdH1cclxuXHRcdHRoaXMud3JhcHBlci5kYXRhKHBsdWdpbkNsYXNzTmFtZSwgdGhpcyk7XHJcblx0XHR0aGlzLmFycm93ID0gdGhpcy53cmFwcGVyLmZpbmQoXCIuXCIgKyBwbHVnaW5DbGFzc05hbWUgKyBcIi1hcnJvd1wiKTtcclxuXHRcdHRoaXMuY29udGFpbmVyID0gdGhpcy53cmFwcGVyLmZpbmQoXCIuXCIgKyBwbHVnaW5DbGFzc05hbWUgKyBcIi1jb250YWluZXJcIik7XHJcblx0XHR0aGlzLmNvbnRhaW5lci5hcHBlbmQodGhpcy51c2VyQ29udGFpbmVyKTtcclxuXHRcdGlmIChlbGVtICYmIGVsZW0ubGVuZ3RoKSB7XHJcblx0XHRcdHRoaXMuZWxlbWVudFR5cGUgPSBlbGVtLmF0dHIoXCJ0eXBlXCIpO1xyXG5cdFx0XHR0aGlzLm9yaWdpbmFsRWxlbWVudCA9IGVsZW07XHJcblx0XHRcdHRoaXMuZWxlbSA9IGdldEFuY2hvckVsZW1lbnQoZWxlbSk7XHJcblx0XHRcdHRoaXMuZWxlbS5kYXRhKHBsdWdpbkNsYXNzTmFtZSwgdGhpcyk7XHJcblx0XHRcdHRoaXMuZWxlbS5iZWZvcmUodGhpcy53cmFwcGVyKTtcclxuXHRcdH1cclxuXHRcdHRoaXMuY29udGFpbmVyLmhpZGUoKTtcclxuXHRcdHRoaXMucnVuKGRhdGEpO1xyXG5cdH1cclxuXHJcblx0Tm90aWZpY2F0aW9uLnByb3RvdHlwZS5sb2FkSFRNTCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIHN0eWxlO1xyXG5cdFx0c3R5bGUgPSB0aGlzLmdldFN0eWxlKCk7XHJcblx0XHR0aGlzLnVzZXJDb250YWluZXIgPSAkKHN0eWxlLmh0bWwpO1xyXG5cdFx0dGhpcy51c2VyRmllbGRzID0gc3R5bGUuZmllbGRzO1xyXG5cdH07XHJcblxyXG5cdE5vdGlmaWNhdGlvbi5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uKHNob3csIHVzZXJDYWxsYmFjaykge1xyXG5cdFx0dmFyIGFyZ3MsIGNhbGxiYWNrLCBlbGVtcywgZm4sIGhpZGRlbjtcclxuXHRcdGNhbGxiYWNrID0gKGZ1bmN0aW9uKF90aGlzKSB7XHJcblx0XHRcdHJldHVybiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiAoIXNob3cgJiYgIV90aGlzLmVsZW0pIHtcclxuXHRcdFx0XHRcdF90aGlzLmRlc3Ryb3koKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHVzZXJDYWxsYmFjaykge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHVzZXJDYWxsYmFjaygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdH0pKHRoaXMpO1xyXG5cdFx0aGlkZGVuID0gdGhpcy5jb250YWluZXIucGFyZW50KCkucGFyZW50cygnOmhpZGRlbicpLmxlbmd0aCA+IDA7XHJcblx0XHRlbGVtcyA9IHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLmFycm93KTtcclxuXHRcdGFyZ3MgPSBbXTtcclxuXHRcdGlmIChoaWRkZW4gJiYgc2hvdykge1xyXG5cdFx0XHRmbiA9IFwic2hvd1wiO1xyXG5cdFx0fSBlbHNlIGlmIChoaWRkZW4gJiYgIXNob3cpIHtcclxuXHRcdFx0Zm4gPSBcImhpZGVcIjtcclxuXHRcdH0gZWxzZSBpZiAoIWhpZGRlbiAmJiBzaG93KSB7XHJcblx0XHRcdGZuID0gdGhpcy5vcHRpb25zLnNob3dBbmltYXRpb247XHJcblx0XHRcdGFyZ3MucHVzaCh0aGlzLm9wdGlvbnMuc2hvd0R1cmF0aW9uKTtcclxuXHRcdH0gZWxzZSBpZiAoIWhpZGRlbiAmJiAhc2hvdykge1xyXG5cdFx0XHRmbiA9IHRoaXMub3B0aW9ucy5oaWRlQW5pbWF0aW9uO1xyXG5cdFx0XHRhcmdzLnB1c2godGhpcy5vcHRpb25zLmhpZGVEdXJhdGlvbik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gY2FsbGJhY2soKTtcclxuXHRcdH1cclxuXHRcdGFyZ3MucHVzaChjYWxsYmFjayk7XHJcblx0XHRyZXR1cm4gZWxlbXNbZm5dLmFwcGx5KGVsZW1zLCBhcmdzKTtcclxuXHR9O1xyXG5cclxuXHROb3RpZmljYXRpb24ucHJvdG90eXBlLnNldEdsb2JhbFBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgcCA9IHRoaXMuZ2V0UG9zaXRpb24oKTtcclxuXHRcdHZhciBwTWFpbiA9IHBbMF07XHJcblx0XHR2YXIgcEFsaWduID0gcFsxXTtcclxuXHRcdHZhciBtYWluID0gcG9zaXRpb25zW3BNYWluXTtcclxuXHRcdHZhciBhbGlnbiA9IHBvc2l0aW9uc1twQWxpZ25dO1xyXG5cdFx0dmFyIGtleSA9IHBNYWluICsgXCJ8XCIgKyBwQWxpZ247XHJcblx0XHR2YXIgYW5jaG9yID0gZ2xvYmFsQW5jaG9yc1trZXldO1xyXG5cdFx0aWYgKCFhbmNob3IgfHwgIWRvY3VtZW50LmJvZHkuY29udGFpbnMoYW5jaG9yWzBdKSkge1xyXG5cdFx0XHRhbmNob3IgPSBnbG9iYWxBbmNob3JzW2tleV0gPSBjcmVhdGVFbGVtKFwiZGl2XCIpO1xyXG5cdFx0XHR2YXIgY3NzID0ge307XHJcblx0XHRcdGNzc1ttYWluXSA9IDA7XHJcblx0XHRcdGlmIChhbGlnbiA9PT0gXCJtaWRkbGVcIikge1xyXG5cdFx0XHRcdGNzcy50b3AgPSAnNDUlJztcclxuXHRcdFx0fSBlbHNlIGlmIChhbGlnbiA9PT0gXCJjZW50ZXJcIikge1xyXG5cdFx0XHRcdGNzcy5sZWZ0ID0gJzQ1JSc7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y3NzW2FsaWduXSA9IDA7XHJcblx0XHRcdH1cclxuXHRcdFx0YW5jaG9yLmNzcyhjc3MpLmFkZENsYXNzKHBsdWdpbkNsYXNzTmFtZSArIFwiLWNvcm5lclwiKTtcclxuXHRcdFx0JChcImJvZHlcIikuYXBwZW5kKGFuY2hvcik7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gYW5jaG9yLnByZXBlbmQodGhpcy53cmFwcGVyKTtcclxuXHR9O1xyXG5cclxuXHROb3RpZmljYXRpb24ucHJvdG90eXBlLnNldEVsZW1lbnRQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIGFycm93Q29sb3IsIGFycm93Q3NzLCBhcnJvd1NpemUsIGNvbG9yLCBjb250SCwgY29udFcsIGNzcywgZWxlbUgsIGVsZW1JSCwgZWxlbUlXLCBlbGVtUG9zLCBlbGVtVywgZ2FwLCBqLCBrLCBsZW4sIGxlbjEsIG1haW5GdWxsLCBtYXJnaW4sIG9wcCwgb3BwRnVsbCwgcEFsaWduLCBwQXJyb3csIHBNYWluLCBwb3MsIHBvc0Z1bGwsIHBvc2l0aW9uLCByZWYsIHdyYXBQb3M7XHJcblx0XHRwb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKTtcclxuXHRcdHBNYWluID0gcG9zaXRpb25bMF07XHJcblx0XHRwQWxpZ24gPSBwb3NpdGlvblsxXTtcclxuXHRcdHBBcnJvdyA9IHBvc2l0aW9uWzJdO1xyXG5cdFx0ZWxlbVBvcyA9IHRoaXMuZWxlbS5wb3NpdGlvbigpO1xyXG5cdFx0ZWxlbUggPSB0aGlzLmVsZW0ub3V0ZXJIZWlnaHQoKTtcclxuXHRcdGVsZW1XID0gdGhpcy5lbGVtLm91dGVyV2lkdGgoKTtcclxuXHRcdGVsZW1JSCA9IHRoaXMuZWxlbS5pbm5lckhlaWdodCgpO1xyXG5cdFx0ZWxlbUlXID0gdGhpcy5lbGVtLmlubmVyV2lkdGgoKTtcclxuXHRcdHdyYXBQb3MgPSB0aGlzLndyYXBwZXIucG9zaXRpb24oKTtcclxuXHRcdGNvbnRIID0gdGhpcy5jb250YWluZXIuaGVpZ2h0KCk7XHJcblx0XHRjb250VyA9IHRoaXMuY29udGFpbmVyLndpZHRoKCk7XHJcblx0XHRtYWluRnVsbCA9IHBvc2l0aW9uc1twTWFpbl07XHJcblx0XHRvcHAgPSBvcHBvc2l0ZXNbcE1haW5dO1xyXG5cdFx0b3BwRnVsbCA9IHBvc2l0aW9uc1tvcHBdO1xyXG5cdFx0Y3NzID0ge307XHJcblx0XHRjc3Nbb3BwRnVsbF0gPSBwTWFpbiA9PT0gXCJiXCIgPyBlbGVtSCA6IHBNYWluID09PSBcInJcIiA/IGVsZW1XIDogMDtcclxuXHRcdGluY3IoY3NzLCBcInRvcFwiLCBlbGVtUG9zLnRvcCAtIHdyYXBQb3MudG9wKTtcclxuXHRcdGluY3IoY3NzLCBcImxlZnRcIiwgZWxlbVBvcy5sZWZ0IC0gd3JhcFBvcy5sZWZ0KTtcclxuXHRcdHJlZiA9IFtcInRvcFwiLCBcImxlZnRcIl07XHJcblx0XHRmb3IgKGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcclxuXHRcdFx0cG9zID0gcmVmW2pdO1xyXG5cdFx0XHRtYXJnaW4gPSBwYXJzZUludCh0aGlzLmVsZW0uY3NzKFwibWFyZ2luLVwiICsgcG9zKSwgMTApO1xyXG5cdFx0XHRpZiAobWFyZ2luKSB7XHJcblx0XHRcdFx0aW5jcihjc3MsIHBvcywgbWFyZ2luKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Z2FwID0gTWF0aC5tYXgoMCwgdGhpcy5vcHRpb25zLmdhcCAtICh0aGlzLm9wdGlvbnMuYXJyb3dTaG93ID8gYXJyb3dTaXplIDogMCkpO1xyXG5cdFx0aW5jcihjc3MsIG9wcEZ1bGwsIGdhcCk7XHJcblx0XHRpZiAoIXRoaXMub3B0aW9ucy5hcnJvd1Nob3cpIHtcclxuXHRcdFx0dGhpcy5hcnJvdy5oaWRlKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRhcnJvd1NpemUgPSB0aGlzLm9wdGlvbnMuYXJyb3dTaXplO1xyXG5cdFx0XHRhcnJvd0NzcyA9ICQuZXh0ZW5kKHt9LCBjc3MpO1xyXG5cdFx0XHRhcnJvd0NvbG9yID0gdGhpcy51c2VyQ29udGFpbmVyLmNzcyhcImJvcmRlci1jb2xvclwiKSB8fCB0aGlzLnVzZXJDb250YWluZXIuY3NzKFwiYm9yZGVyLXRvcC1jb2xvclwiKSB8fCB0aGlzLnVzZXJDb250YWluZXIuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiKSB8fCBcIndoaXRlXCI7XHJcblx0XHRcdGZvciAoayA9IDAsIGxlbjEgPSBtYWluUG9zaXRpb25zLmxlbmd0aDsgayA8IGxlbjE7IGsrKykge1xyXG5cdFx0XHRcdHBvcyA9IG1haW5Qb3NpdGlvbnNba107XHJcblx0XHRcdFx0cG9zRnVsbCA9IHBvc2l0aW9uc1twb3NdO1xyXG5cdFx0XHRcdGlmIChwb3MgPT09IG9wcCkge1xyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNvbG9yID0gcG9zRnVsbCA9PT0gbWFpbkZ1bGwgPyBhcnJvd0NvbG9yIDogXCJ0cmFuc3BhcmVudFwiO1xyXG5cdFx0XHRcdGFycm93Q3NzW1wiYm9yZGVyLVwiICsgcG9zRnVsbF0gPSBhcnJvd1NpemUgKyBcInB4IHNvbGlkIFwiICsgY29sb3I7XHJcblx0XHRcdH1cclxuXHRcdFx0aW5jcihjc3MsIHBvc2l0aW9uc1tvcHBdLCBhcnJvd1NpemUpO1xyXG5cdFx0XHRpZiAoaW5kZXhPZi5jYWxsKG1haW5Qb3NpdGlvbnMsIHBBbGlnbikgPj0gMCkge1xyXG5cdFx0XHRcdGluY3IoYXJyb3dDc3MsIHBvc2l0aW9uc1twQWxpZ25dLCBhcnJvd1NpemUgKiAyKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKGluZGV4T2YuY2FsbCh2QWxpZ25zLCBwTWFpbikgPj0gMCkge1xyXG5cdFx0XHRpbmNyKGNzcywgXCJsZWZ0XCIsIHJlYWxpZ24ocEFsaWduLCBjb250VywgZWxlbVcpKTtcclxuXHRcdFx0aWYgKGFycm93Q3NzKSB7XHJcblx0XHRcdFx0aW5jcihhcnJvd0NzcywgXCJsZWZ0XCIsIHJlYWxpZ24ocEFsaWduLCBhcnJvd1NpemUsIGVsZW1JVykpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKGluZGV4T2YuY2FsbChoQWxpZ25zLCBwTWFpbikgPj0gMCkge1xyXG5cdFx0XHRpbmNyKGNzcywgXCJ0b3BcIiwgcmVhbGlnbihwQWxpZ24sIGNvbnRILCBlbGVtSCkpO1xyXG5cdFx0XHRpZiAoYXJyb3dDc3MpIHtcclxuXHRcdFx0XHRpbmNyKGFycm93Q3NzLCBcInRvcFwiLCByZWFsaWduKHBBbGlnbiwgYXJyb3dTaXplLCBlbGVtSUgpKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuY29udGFpbmVyLmlzKFwiOnZpc2libGVcIikpIHtcclxuXHRcdFx0Y3NzLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblx0XHR9XHJcblx0XHR0aGlzLmNvbnRhaW5lci5yZW1vdmVBdHRyKFwic3R5bGVcIikuY3NzKGNzcyk7XHJcblx0XHRpZiAoYXJyb3dDc3MpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuYXJyb3cucmVtb3ZlQXR0cihcInN0eWxlXCIpLmNzcyhhcnJvd0Nzcyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Tm90aWZpY2F0aW9uLnByb3RvdHlwZS5nZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIHBvcywgcmVmLCByZWYxLCByZWYyLCByZWYzLCByZWY0LCByZWY1LCB0ZXh0O1xyXG5cdFx0dGV4dCA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbiB8fCAodGhpcy5lbGVtID8gdGhpcy5vcHRpb25zLmVsZW1lbnRQb3NpdGlvbiA6IHRoaXMub3B0aW9ucy5nbG9iYWxQb3NpdGlvbik7XHJcblx0XHRwb3MgPSBwYXJzZVBvc2l0aW9uKHRleHQpO1xyXG5cdFx0aWYgKHBvcy5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0cG9zWzBdID0gXCJiXCI7XHJcblx0XHR9XHJcblx0XHRpZiAocmVmID0gcG9zWzBdLCBpbmRleE9mLmNhbGwobWFpblBvc2l0aW9ucywgcmVmKSA8IDApIHtcclxuXHRcdFx0dGhyb3cgXCJNdXN0IGJlIG9uZSBvZiBbXCIgKyBtYWluUG9zaXRpb25zICsgXCJdXCI7XHJcblx0XHR9XHJcblx0XHRpZiAocG9zLmxlbmd0aCA9PT0gMSB8fCAoKHJlZjEgPSBwb3NbMF0sIGluZGV4T2YuY2FsbCh2QWxpZ25zLCByZWYxKSA+PSAwKSAmJiAocmVmMiA9IHBvc1sxXSwgaW5kZXhPZi5jYWxsKGhBbGlnbnMsIHJlZjIpIDwgMCkpIHx8ICgocmVmMyA9IHBvc1swXSwgaW5kZXhPZi5jYWxsKGhBbGlnbnMsIHJlZjMpID49IDApICYmIChyZWY0ID0gcG9zWzFdLCBpbmRleE9mLmNhbGwodkFsaWducywgcmVmNCkgPCAwKSkpIHtcclxuXHRcdFx0cG9zWzFdID0gKHJlZjUgPSBwb3NbMF0sIGluZGV4T2YuY2FsbChoQWxpZ25zLCByZWY1KSA+PSAwKSA/IFwibVwiIDogXCJsXCI7XHJcblx0XHR9XHJcblx0XHRpZiAocG9zLmxlbmd0aCA9PT0gMikge1xyXG5cdFx0XHRwb3NbMl0gPSBwb3NbMV07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcG9zO1xyXG5cdH07XHJcblxyXG5cdE5vdGlmaWNhdGlvbi5wcm90b3R5cGUuZ2V0U3R5bGUgPSBmdW5jdGlvbihuYW1lKSB7XHJcblx0XHR2YXIgc3R5bGU7XHJcblx0XHRpZiAoIW5hbWUpIHtcclxuXHRcdFx0bmFtZSA9IHRoaXMub3B0aW9ucy5zdHlsZTtcclxuXHRcdH1cclxuXHRcdGlmICghbmFtZSkge1xyXG5cdFx0XHRuYW1lID0gXCJkZWZhdWx0XCI7XHJcblx0XHR9XHJcblx0XHRzdHlsZSA9IHN0eWxlc1tuYW1lXTtcclxuXHRcdGlmICghc3R5bGUpIHtcclxuXHRcdFx0dGhyb3cgXCJNaXNzaW5nIHN0eWxlOiBcIiArIG5hbWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gc3R5bGU7XHJcblx0fTtcclxuXHJcblx0Tm90aWZpY2F0aW9uLnByb3RvdHlwZS51cGRhdGVDbGFzc2VzID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgY2xhc3Nlcywgc3R5bGU7XHJcblx0XHRjbGFzc2VzID0gW1wiYmFzZVwiXTtcclxuXHRcdGlmICgkLmlzQXJyYXkodGhpcy5vcHRpb25zLmNsYXNzTmFtZSkpIHtcclxuXHRcdFx0Y2xhc3NlcyA9IGNsYXNzZXMuY29uY2F0KHRoaXMub3B0aW9ucy5jbGFzc05hbWUpO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuY2xhc3NOYW1lKSB7XHJcblx0XHRcdGNsYXNzZXMucHVzaCh0aGlzLm9wdGlvbnMuY2xhc3NOYW1lKTtcclxuXHRcdH1cclxuXHRcdHN0eWxlID0gdGhpcy5nZXRTdHlsZSgpO1xyXG5cdFx0Y2xhc3NlcyA9ICQubWFwKGNsYXNzZXMsIGZ1bmN0aW9uKG4pIHtcclxuXHRcdFx0cmV0dXJuIHBsdWdpbkNsYXNzTmFtZSArIFwiLVwiICsgc3R5bGUubmFtZSArIFwiLVwiICsgbjtcclxuXHRcdH0pLmpvaW4oXCIgXCIpO1xyXG5cdFx0cmV0dXJuIHRoaXMudXNlckNvbnRhaW5lci5hdHRyKFwiY2xhc3NcIiwgY2xhc3Nlcyk7XHJcblx0fTtcclxuXHJcblx0Tm90aWZpY2F0aW9uLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbihkYXRhLCBvcHRpb25zKSB7XHJcblx0XHR2YXIgZCwgZGF0YXMsIG5hbWUsIHR5cGUsIHZhbHVlO1xyXG5cdFx0aWYgKCQuaXNQbGFpbk9iamVjdChvcHRpb25zKSkge1xyXG5cdFx0XHQkLmV4dGVuZCh0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xyXG5cdFx0fSBlbHNlIGlmICgkLnR5cGUob3B0aW9ucykgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0dGhpcy5vcHRpb25zLmNsYXNzTmFtZSA9IG9wdGlvbnM7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5jb250YWluZXIgJiYgIWRhdGEpIHtcclxuXHRcdFx0dGhpcy5zaG93KGZhbHNlKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fSBlbHNlIGlmICghdGhpcy5jb250YWluZXIgJiYgIWRhdGEpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0ZGF0YXMgPSB7fTtcclxuXHRcdGlmICgkLmlzUGxhaW5PYmplY3QoZGF0YSkpIHtcclxuXHRcdFx0ZGF0YXMgPSBkYXRhO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZGF0YXNbYmxhbmtGaWVsZE5hbWVdID0gZGF0YTtcclxuXHRcdH1cclxuXHRcdGZvciAobmFtZSBpbiBkYXRhcykge1xyXG5cdFx0XHRkID0gZGF0YXNbbmFtZV07XHJcblx0XHRcdHR5cGUgPSB0aGlzLnVzZXJGaWVsZHNbbmFtZV07XHJcblx0XHRcdGlmICghdHlwZSkge1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0eXBlID09PSBcInRleHRcIikge1xyXG5cdFx0XHRcdGQgPSBlbmNvZGUoZCk7XHJcblx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5icmVha05ld0xpbmVzKSB7XHJcblx0XHRcdFx0XHRkID0gZC5yZXBsYWNlKC9cXG4vZywgJzxici8+Jyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHZhbHVlID0gbmFtZSA9PT0gYmxhbmtGaWVsZE5hbWUgPyAnJyA6ICc9JyArIG5hbWU7XHJcblx0XHRcdGZpbmQodGhpcy51c2VyQ29udGFpbmVyLCBcIltkYXRhLW5vdGlmeS1cIiArIHR5cGUgKyB2YWx1ZSArIFwiXVwiKS5odG1sKGQpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy51cGRhdGVDbGFzc2VzKCk7XHJcblx0XHRpZiAodGhpcy5lbGVtKSB7XHJcblx0XHRcdHRoaXMuc2V0RWxlbWVudFBvc2l0aW9uKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnNldEdsb2JhbFBvc2l0aW9uKCk7XHJcblx0XHR9XHJcblx0XHR0aGlzLnNob3codHJ1ZSk7XHJcblx0XHRpZiAodGhpcy5vcHRpb25zLmF1dG9IaWRlKSB7XHJcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLmF1dG9oaWRlVGltZXIpO1xyXG5cdFx0XHR0aGlzLmF1dG9oaWRlVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMuc2hvdy5iaW5kKHRoaXMsIGZhbHNlKSwgdGhpcy5vcHRpb25zLmF1dG9IaWRlRGVsYXkpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdE5vdGlmaWNhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dGhpcy53cmFwcGVyLmRhdGEocGx1Z2luQ2xhc3NOYW1lLCBudWxsKTtcclxuXHRcdHRoaXMud3JhcHBlci5yZW1vdmUoKTtcclxuXHR9O1xyXG5cclxuXHQkW3BsdWdpbk5hbWVdID0gZnVuY3Rpb24oZWxlbSwgZGF0YSwgb3B0aW9ucykge1xyXG5cdFx0aWYgKChlbGVtICYmIGVsZW0ubm9kZU5hbWUpIHx8IGVsZW0uanF1ZXJ5KSB7XHJcblx0XHRcdCQoZWxlbSlbcGx1Z2luTmFtZV0oZGF0YSwgb3B0aW9ucyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRvcHRpb25zID0gZGF0YTtcclxuXHRcdFx0ZGF0YSA9IGVsZW07XHJcblx0XHRcdG5ldyBOb3RpZmljYXRpb24obnVsbCwgZGF0YSwgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZWxlbTtcclxuXHR9O1xyXG5cclxuXHQkLmZuW3BsdWdpbk5hbWVdID0gZnVuY3Rpb24oZGF0YSwgb3B0aW9ucykge1xyXG5cdFx0JCh0aGlzKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgcHJldiA9IGdldEFuY2hvckVsZW1lbnQoJCh0aGlzKSkuZGF0YShwbHVnaW5DbGFzc05hbWUpO1xyXG5cdFx0XHRpZiAocHJldikge1xyXG5cdFx0XHRcdHByZXYuZGVzdHJveSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHZhciBjdXJyID0gbmV3IE5vdGlmaWNhdGlvbigkKHRoaXMpLCBkYXRhLCBvcHRpb25zKTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHJcblx0JC5leHRlbmQoJFtwbHVnaW5OYW1lXSwge1xyXG5cdFx0ZGVmYXVsdHM6IGRlZmF1bHRzLFxyXG5cdFx0YWRkU3R5bGU6IGFkZFN0eWxlLFxyXG5cdFx0cmVtb3ZlU3R5bGU6IHJlbW92ZVN0eWxlLFxyXG5cdFx0cGx1Z2luT3B0aW9uczogcGx1Z2luT3B0aW9ucyxcclxuXHRcdGdldFN0eWxlOiBnZXRTdHlsZSxcclxuXHRcdGluc2VydENTUzogaW5zZXJ0Q1NTXHJcblx0fSk7XHJcblxyXG5cdC8vYWx3YXlzIGluY2x1ZGUgdGhlIGRlZmF1bHQgYm9vdHN0cmFwIHN0eWxlXHJcblx0YWRkU3R5bGUoXCJib290c3RyYXBcIiwge1xyXG5cdFx0aHRtbDogXCI8ZGl2PlxcbjxzcGFuIGRhdGEtbm90aWZ5LXRleHQ+PC9zcGFuPlxcbjwvZGl2PlwiLFxyXG5cdFx0Y2xhc3Nlczoge1xyXG5cdFx0XHRiYXNlOiB7XHJcblx0XHRcdFx0XCJmb250LXdlaWdodFwiOiBcImJvbGRcIixcclxuXHRcdFx0XHRcInBhZGRpbmdcIjogXCI4cHggMTVweCA4cHggMTRweFwiLFxyXG5cdFx0XHRcdFwidGV4dC1zaGFkb3dcIjogXCIwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KVwiLFxyXG5cdFx0XHRcdFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIiNmY2Y4ZTNcIixcclxuXHRcdFx0XHRcImJvcmRlclwiOiBcIjFweCBzb2xpZCAjZmJlZWQ1XCIsXHJcblx0XHRcdFx0XCJib3JkZXItcmFkaXVzXCI6IFwiNHB4XCIsXHJcblx0XHRcdFx0XCJ3aGl0ZS1zcGFjZVwiOiBcIm5vd3JhcFwiLFxyXG5cdFx0XHRcdFwicGFkZGluZy1sZWZ0XCI6IFwiMjVweFwiLFxyXG5cdFx0XHRcdFwiYmFja2dyb3VuZC1yZXBlYXRcIjogXCJuby1yZXBlYXRcIixcclxuXHRcdFx0XHRcImJhY2tncm91bmQtcG9zaXRpb25cIjogXCIzcHggN3B4XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0ZXJyb3I6IHtcclxuXHRcdFx0XHRcImNvbG9yXCI6IFwiI0I5NEE0OFwiLFxyXG5cdFx0XHRcdFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIiNGMkRFREVcIixcclxuXHRcdFx0XHRcImJvcmRlci1jb2xvclwiOiBcIiNFRUQzRDdcIixcclxuXHRcdFx0XHRcImJhY2tncm91bmQtaW1hZ2VcIjogXCJ1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCUUFBQUFVQ0FZQUFBQ05pUjBOQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUF0UkpSRUZVZU5xa1ZjMXUwMEFRSHErZE9EKzBwb0lRZmtJamFsVzBTRUdxUk11Um5Ib3MzRGp3QUgwQXJseVFlQU5PT1NNZUFBNVZqeUJ4S0JRaGdTcFZVS0tRTkdsb0ZkdzRjV3cyanRmTU9uYTZKT1VBckRUYXpYaS9iM2RtNTVzb2NQcVFoRmthKythSEJzSThHc29wUkpFUk5GbFk4OEZDRWs5WWl3ZjhSaGdSeWFIRlFwUEhDRG1aRzVvWDJ1aTJ5aWxrY1RUMUFjRHNiWUMxTk1BeU9pN3pUWDJBZ3g3QTlsdUFsODhCYXVpaVEvY0phWlFmSXBBbG5nRGN2WlpNcmw4dkZQSzUrWGt0cldseDMvZWhaNXI5K3Q2ZStXVm5wMXB4bk5JamdCZTQvNmRBeXNRYzhkc21Id1BjVzlDMGgzZlcxaGFuczFsdHdKaHkwR3hLN1haYlVsTXA1V3cyZXlhbjYrZnQvZjJGQXFYR0s0Q3ZRazVIdWVGejdENkdPWnRJcksrc3J1cGR4MUdSQkJxTkJ0emMyQWlNcjduUHBsUmRLaGIxcTZxNnpqRmhya2xFRk9VdXRvUTUweGNYODZabHFhWnBRcmZiQmR1MlI2L0cxOXpYNlhTZ2g2Ulg1dWJ5SENNOG5xU0lENklDckdpWmpHWVl4b2pFc2l3NFBEd01TTDVWS3NDOFlmNFZSWUZ6TXpNYXh3amxKU2xDeUFROWwwQ1c0NFBCQUR6WGhlN3hNZGk5SHRUcmRZakZZa0RRTDBjbjRYZHEyL0VBRStJbkNudkFEVGYyZWFoNFN4OXZFeFFqa3FYVDZhQUVSSUNNZXdkL1VBcC9JZVlBTk0yam94dCtxNVZJK2llcTJpMFdnM2w2RE56SHdURVJQZ28xa283WEJYajN2ZGxzVDJGK1V1aEloWWtwN3U3Q2Fya2NyRk9DdFIzSDVKaXdiQUllSW1qVC9ZUUtLQnRHalJGQ1U1SVVnRlJlN2ZGNGNDTlZJUE1ZbzNWS3F4d2p5TkFYTmVwdW9weXFubGQ2MDJxVnNmUnBFa2t6K0dGTDF3UGo2eVNYQnBKdFdWYTV4bGhwY3loQk53cFpIbXRYOEFHZ2ZJRXhvMFpwemtXVlRCR2lYQ1NFYUhoNjIvUG9SMHAvdkhhY3p4WEduajRiU28rRzc4bEVMVTgwaDF1b2dCd1dMZjVZbHNQbWdERWQ0TTIzNnhqbSs4bm00SXVFLzl1Ky9QSDJKWFpmYnd6NHp3MVdiTytTUVBwWGZ3Ry9CQmdBaENOWmlTYi9wT1FBQUFBQVNVVk9SSzVDWUlJPSlcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdWNjZXNzOiB7XHJcblx0XHRcdFx0XCJjb2xvclwiOiBcIiM0Njg4NDdcIixcclxuXHRcdFx0XHRcImJhY2tncm91bmQtY29sb3JcIjogXCIjREZGMEQ4XCIsXHJcblx0XHRcdFx0XCJib3JkZXItY29sb3JcIjogXCIjRDZFOUM2XCIsXHJcblx0XHRcdFx0XCJiYWNrZ3JvdW5kLWltYWdlXCI6IFwidXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVUNBWUFBQUNOaVIwTkFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBdXRKUkVGVWVOcTBsY3RQRTBFY3gzOHp1L1JGUzFFcnlxdGdKRkEwOFlDaU1aSUFRUTRlUkc4ZURHZFBKaVllVEl3SFRmd1BpQWN2WEl3WEx3b1hQYUR4a1dnUTZpc2xLbEpMU1FXTFVyYVBMVHY3R21lMzJ6b0Y5S1NUZkxPN3Y1M3ZaM2QvTTcvZkl0aCtJTzZJTnQyampvQTdiakhDSm9BbHpDUnc1OVl3SFlqQm5mTVBxQUtXUVlLakdrZkNKcUFGMHh3WmppcFF0QTNNeGVTRzg3VmhPT1llZ1ZyVUN5N1VaTTlTNlRMSWRBYW15U1RjbFpkWWhGaFJIbG9HWWc3bWdadjFaenp0dmd1ZDdWMXRiUTJ0d1lBMzRMSm1GNHA1ZFhGMUtUdWZuRStTeGVKdHVDWk5zTERDUVUwK1J5S1RGMjdVbncxMDFsOGU2aG5zM3UwUEJhbE9SVlZWa2NhRUtCSkRnVjMrY0dNNHRLS21JK29obElHbnlnS1gwMHJTQmZzenovbjJ1WHY4MXdkNitydDFvcnNaQ0hSZHIxSW1rMkYyS29iM2h1dFN4Vzh0aHNkOEFYTmFsbjlEN0NUZkE2TyswVWdrTXV3VnZFRkZVYmJBY3JrY1RBOCtBdE9rOEU2S2lRaURtTUZTRHFaSXRBekVWUXZpUmtkRGRhRmdQcDhIU1pLQUVBTDVRaDdTcTJsSUpCSnd2MnNjVXFrVW5Lb1pnTmhjREtoS2c1YUgrMUlrY291Q0FkRkdBUXN1V1pZaE9qd0ZIUTk2b2FnV2dSb1VvdjFUOWtSQkVPREF3eE0yUXRFVWwrV3ArTG45VlJvNkJjTXc0RXJIUllqSDQvQjI2QWxRb1FRVFJkSFd3Y2Q5QUg1NytVQVhkZHZERDM3RG1yQkJWMzRXZnFpWFBsNjFnK3ZyNnhBOXpzR2VNOWdPZHNOWGtncEV0VHdWdndPa2xYTEttNisvcDVlendrNEIrajZkcm9CczJDc0dhL2dOczZSSXhhemw0VGMyNW1wVGd3L2FwUFIxTFlsTlJGQXpnc094a3lYWUxJTTFWOE5Nd3lBa0pTY3REMWVHVktpcTV3V2pTUGRqbWVUa2lLdlZXNGYyWVBIV2wzR0FWcTZ5bWN5Q1Rnb3ZNM0Z6eVJpRGUyVGFLY0VLc0xwSnZOSGpaZ1BOcUV0eWk2bVpJbTRTUkZ5TE1Vc09OU1Nka1BlRnRZMW4wbWN6b1kzQkhUTGh3UFJ5OS9semN6aUN3OUFDSSt5cWwwVkx6Y0dBWmJZU001Q0NTWmcxLzlvYy9ubjcraThOOXAvOEFuNEpNQUR4aEgreEhmdWlLd0FBQUFCSlJVNUVya0pnZ2c9PSlcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRpbmZvOiB7XHJcblx0XHRcdFx0XCJjb2xvclwiOiBcIiMzQTg3QURcIixcclxuXHRcdFx0XHRcImJhY2tncm91bmQtY29sb3JcIjogXCIjRDlFREY3XCIsXHJcblx0XHRcdFx0XCJib3JkZXItY29sb3JcIjogXCIjQkNFOEYxXCIsXHJcblx0XHRcdFx0XCJiYWNrZ3JvdW5kLWltYWdlXCI6IFwidXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVUNBWUFBQUNOaVIwTkFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQjNSSlRVVUgzUVlGQWhrU3NkZXMvUUFBQThkSlJFRlVPTXZWbEd0TVcyVVl4Ly9QT2FXSFhnNmxMYVcweXBBdHcxVUNnYm5pTk9MY1ZPTG1Bakhab2xPWWx4bVRHWFZaZEFuUmZYUW0rN1NvVTRtWGFPYWlac0VwQzlGa2lRczZaNmJkQ25OWXJ1TTZLTkJ3NllXZXd6bDl6K3NISW1FV3Yrdno3WG1UOTVmLyszLys3d1A4MTR2K2VmRE9WMy9Tb1gzbEhBQSs2T0RlVUZmTWZqT1dNQURnZGsrZUVLejBwRjdhUWRNQWNPS0xManJjVk1WWDN4ZFdOMjkvR2hZUDdTdm5QMGNXZlM4Y2FTa2ZIWnNQRTlGZ250MDJKTnV0UTBRWUhCMmREejkvcEtYOFFqanVPOXhVeGQvNjZIZHhUZUNIWjNyb2pRT2JHUUJjdU5qZnBsa0QzYjE5WS82TXJpbVNhS2dTTW1wR1U1V2V2bUUvc3dhNk95NzN0UUhBMFJkcjJNbXYvNkExbjl3OXN1UTcwOTdaOWxNNEZsVGdURHJ6WlR1NFN0WFZmcGlJNDhyVmNVRE01Y21Fa3NyRm5IeGZwVHRVLzNCRlF6Q1FGLzJiWVZvTmJIN3ptSXRiU29NajQwSlN6bU15WDVxRHZyaUE3UWRySUlwQSszY2RzTXB1MG5YSThjVjBNdEtYQ1BaZXYrZ0NFTTFTMk5IUHZXZlAvaEwrN0ZTcjMrMHA1UkJFeWhFTjVKQ0tZcjhYbkFTTVQweEJOeXpRR1FlSThmanNHRDM5Uk1QazdzZTJiZDVadFR5b0ZZWGZ0RjZ5MzdneDdOZVV0SkpPVEZsQUhEWkxEdUlMVTNqMytINW9PckQzeVdiSXp0dWdhQXpnbkJLSnVCTHBHZlFyUzh3TzRGWmdWK2MxSXhhTGdXVlUwdE1MRUVUQ29zNHhNekVJdjljSlhRY3lhZ0l3aWdER3dKZ09BdEhBd0FoaXNRVWp5ME9SR0VSaUVMZ0c0aWFra3pvNE1ZQXhjTTVoQU1pMVdXRzF5WUNKSWNNVWFCa1ZSTGRHZVNVMjk5NVRMV3pjVUF6T05KN0o2RkJWQllJZ2dNem1GYnZkQlY0NENvcmc4dmpoekMrRUpFbDhVMWtKdGdZcmhDemdjL3Z2VHdYS1NpYjFwYVJGVlJWT1JEQUpBc3c1RnVUYUpFaFdNMlNIQjNtT0FsaGtOeHd1THplSnNHd3FXemY1VEZOZEtndFk1cUhwNlpGZjY3WS9zQVZhZENhVlk1WUFDRERiM09pNE5JakxuV013MlF0aENCSXNWaHNVVFU5dHZYc2plcTkrWDFkNzUvS0VzNExOT2ZjZGYvK0h0aE1udnd4T0Qwd21IYVhyN1pJdG4yd3VIMlNuQnpiWkFiUEp3cFB4K1ZRdXpjbTdkZ1JDQjU3YTF1QnpVRFJMNGJmbkkwUkUwZWFYZDlXODltcGpxSFpuVUk1SGgybDJka1paVWhPcXBpMnFTbXBPbVo2NFR1dTlxbHovU0VYbzZNRUhhM3dPaXA0NkYxbjc2MzNlZWtWOGRzOFd4am4zN1dsNjNWVmErZWo1b2VFWi84MlpCRVRKanBKMVJiaWoyRDNaLzF0clhVdkxzYmxDSzBYZk94MFNYMmtNc245ZFgrZCs3S2Y2aDhvNEFJeWt1ZmZqVDhMMjBMVSt3NEFaZDVWdkVQWStYcFdxTFYzMjdIUjdEelh1RG5EOHIrb3ZrQmVoSjhpK3k4WUFBQUFBU1VWT1JLNUNZSUk9KVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHdhcm46IHtcclxuXHRcdFx0XHRcImNvbG9yXCI6IFwiI0MwOTg1M1wiLFxyXG5cdFx0XHRcdFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIiNGQ0Y4RTNcIixcclxuXHRcdFx0XHRcImJvcmRlci1jb2xvclwiOiBcIiNGQkVFRDVcIixcclxuXHRcdFx0XHRcImJhY2tncm91bmQtaW1hZ2VcIjogXCJ1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCUUFBQUFVQ0FNQUFBQzZWKzAvQUFBQkpsQk1WRVhyNmViLzJvRC93aTcveGpyLzBtUC95a2YvdFFEL3ZCai8zbzcvdVEvL3Z5TC90d2ViaGdELzRwelgxSzN6OGUzNDl2SzZ0SENpbENXYmlReW1uMGpHd29ycjZkWFF6YTNIeGNLa24xdld2Vi81dVJmazRkWFoxYkQxOCsvNTJZZWJpQW15cjVTOW1oQ3pyV3E1dDZ1ZmpSSDU0YUxzMG9TK3FENzUxWHFQaEF5Ymh3WHN1akczc20rWmswUFR3RzZTaGcrUGhoT2Jod09QZ1FMNHpWMm5seXJmMjd1TGZnQ1BoUkh1N09tTGdBYWZreWlXa0QzbDQ5aWJpQWZUczBDK2xnQ25pd0Q0c2dESnhxT2lsekRXb3dXRmZBSDA4dWViaWc2cXBGSEJ2SC9hdzI2RmZRVFF6c3Z5OE95RWZ6MjByM2pBdmFLYmhnRzlxMG5jMkxiWnhYYW5vVXUvdTVXU2dnQ3RwMWFucEpLZG1Gei96bFgvMW5HSmlZbXVxNUR4NytzQUFBRG9QVVpTQUFBQUFYUlNUbE1BUU9iWVpnQUFBQUZpUzBkRUFJZ0ZIVWdBQUFBSmNFaFpjd0FBQ3hNQUFBc1RBUUNhbkJnQUFBQUhkRWxOUlFmZEJnVUJHaGg0YWFoNUFBQUFsa2xFUVZRWTAyTmdvQklJRThFVWN3bjFGa0lYTTFUajVkRFVRaFBVNTAyTWk3WFhReEd6NXVWSWpHT0pVVVVXODFIbllFeU1pMkhWY1VPSUNRWnpNTVlteHJFeU15bEp3Z1V0NUJsaldSTGptSm00cEkxaFlwNVNRTEdZeERnbUxuWk9WeHVvb0NsSURLZ1hLTWJONWdnVjFBQ0xKY2FCeE5nY29pR0NCaVp3ZFd4T0VUQkRyVHlFRmV5MGpZSjRlSGpNR1dnRUFJcFJGUkNVdDA4cUFBQUFBRWxGVGtTdVFtQ0MpXCJcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHQkKGZ1bmN0aW9uKCkge1xyXG5cdFx0aW5zZXJ0Q1NTKGNvcmVTdHlsZS5jc3MpLmF0dHIoXCJpZFwiLCBcImNvcmUtbm90aWZ5XCIpO1xyXG5cdFx0JChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5cIiArIHBsdWdpbkNsYXNzTmFtZSArIFwiLWhpZGFibGVcIiwgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHQkKHRoaXMpLnRyaWdnZXIoXCJub3RpZnktaGlkZVwiKTtcclxuXHRcdH0pO1xyXG5cdFx0JChkb2N1bWVudCkub24oXCJub3RpZnktaGlkZVwiLCBcIi5cIiArIHBsdWdpbkNsYXNzTmFtZSArIFwiLXdyYXBwZXJcIiwgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHR2YXIgZWxlbSA9ICQodGhpcykuZGF0YShwbHVnaW5DbGFzc05hbWUpO1xyXG5cdFx0XHRpZihlbGVtKSB7XHJcblx0XHRcdFx0ZWxlbS5zaG93KGZhbHNlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSk7XHJcblxyXG59KSk7XHJcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdHJpbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbScpLnRyaW07XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyICRwYXJzZUludCA9IGdsb2JhbC5wYXJzZUludDtcbnZhciBoZXggPSAvXlsrLV0/MFtYeF0vO1xudmFyIEZPUkNFRCA9ICRwYXJzZUludCh3aGl0ZXNwYWNlcyArICcwOCcpICE9PSA4IHx8ICRwYXJzZUludCh3aGl0ZXNwYWNlcyArICcweDE2JykgIT09IDIyO1xuXG4vLyBgcGFyc2VJbnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcGFyc2VpbnQtc3RyaW5nLXJhZGl4XG5tb2R1bGUuZXhwb3J0cyA9IEZPUkNFRCA/IGZ1bmN0aW9uIHBhcnNlSW50KHN0cmluZywgcmFkaXgpIHtcbiAgdmFyIFMgPSB0cmltKFN0cmluZyhzdHJpbmcpKTtcbiAgcmV0dXJuICRwYXJzZUludChTLCAocmFkaXggPj4+IDApIHx8IChoZXgudGVzdChTKSA/IDE2IDogMTApKTtcbn0gOiAkcGFyc2VJbnQ7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkZmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maW5kO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgYXJyYXlNZXRob2RVc2VzVG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLXVzZXMtdG8tbGVuZ3RoJyk7XG5cbnZhciBGSU5EID0gJ2ZpbmQnO1xudmFyIFNLSVBTX0hPTEVTID0gdHJ1ZTtcblxudmFyIFVTRVNfVE9fTEVOR1RIID0gYXJyYXlNZXRob2RVc2VzVG9MZW5ndGgoRklORCk7XG5cbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG5pZiAoRklORCBpbiBbXSkgQXJyYXkoMSlbRklORF0oZnVuY3Rpb24gKCkgeyBTS0lQU19IT0xFUyA9IGZhbHNlOyB9KTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBTS0lQU19IT0xFUyB8fCAhVVNFU19UT19MRU5HVEggfSwge1xuICBmaW5kOiBmdW5jdGlvbiBmaW5kKGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XG4gICAgcmV0dXJuICRmaW5kKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5hZGRUb1Vuc2NvcGFibGVzKEZJTkQpO1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBGdW5jdGlvblByb3RvdHlwZVRvU3RyaW5nID0gRnVuY3Rpb25Qcm90b3R5cGUudG9TdHJpbmc7XG52YXIgbmFtZVJFID0gL15cXHMqZnVuY3Rpb24gKFteIChdKikvO1xudmFyIE5BTUUgPSAnbmFtZSc7XG5cbi8vIEZ1bmN0aW9uIGluc3RhbmNlcyBgLm5hbWVgIHByb3BlcnR5XG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1mdW5jdGlvbi1pbnN0YW5jZXMtbmFtZVxuaWYgKERFU0NSSVBUT1JTICYmICEoTkFNRSBpbiBGdW5jdGlvblByb3RvdHlwZSkpIHtcbiAgZGVmaW5lUHJvcGVydHkoRnVuY3Rpb25Qcm90b3R5cGUsIE5BTUUsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gRnVuY3Rpb25Qcm90b3R5cGVUb1N0cmluZy5jYWxsKHRoaXMpLm1hdGNoKG5hbWVSRSlbMV07XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHBhcnNlSW50SW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbnVtYmVyLXBhcnNlLWludCcpO1xuXG4vLyBgcGFyc2VJbnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcGFyc2VpbnQtc3RyaW5nLXJhZGl4XG4kKHsgZ2xvYmFsOiB0cnVlLCBmb3JjZWQ6IHBhcnNlSW50ICE9IHBhcnNlSW50SW1wbGVtZW50YXRpb24gfSwge1xuICBwYXJzZUludDogcGFyc2VJbnRJbXBsZW1lbnRhdGlvblxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYycpO1xudmFyIGlzUmVnRXhwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXJlZ2V4cCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciBhZHZhbmNlU3RyaW5nSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWR2YW5jZS1zdHJpbmctaW5kZXgnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciBjYWxsUmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG52YXIgYXJyYXlQdXNoID0gW10ucHVzaDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbnZhciBNQVhfVUlOVDMyID0gMHhGRkZGRkZGRjtcblxuLy8gYmFiZWwtbWluaWZ5IHRyYW5zcGlsZXMgUmVnRXhwKCd4JywgJ3knKSAtPiAveC95IGFuZCBpdCBjYXVzZXMgU3ludGF4RXJyb3JcbnZhciBTVVBQT1JUU19ZID0gIWZhaWxzKGZ1bmN0aW9uICgpIHsgcmV0dXJuICFSZWdFeHAoTUFYX1VJTlQzMiwgJ3knKTsgfSk7XG5cbi8vIEBAc3BsaXQgbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdzcGxpdCcsIDIsIGZ1bmN0aW9uIChTUExJVCwgbmF0aXZlU3BsaXQsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICB2YXIgaW50ZXJuYWxTcGxpdDtcbiAgaWYgKFxuICAgICdhYmJjJy5zcGxpdCgvKGIpKi8pWzFdID09ICdjJyB8fFxuICAgICd0ZXN0Jy5zcGxpdCgvKD86KS8sIC0xKS5sZW5ndGggIT0gNCB8fFxuICAgICdhYicuc3BsaXQoLyg/OmFiKSovKS5sZW5ndGggIT0gMiB8fFxuICAgICcuJy5zcGxpdCgvKC4/KSguPykvKS5sZW5ndGggIT0gNCB8fFxuICAgICcuJy5zcGxpdCgvKCkoKS8pLmxlbmd0aCA+IDEgfHxcbiAgICAnJy5zcGxpdCgvLj8vKS5sZW5ndGhcbiAgKSB7XG4gICAgLy8gYmFzZWQgb24gZXM1LXNoaW0gaW1wbGVtZW50YXRpb24sIG5lZWQgdG8gcmV3b3JrIGl0XG4gICAgaW50ZXJuYWxTcGxpdCA9IGZ1bmN0aW9uIChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcykpO1xuICAgICAgdmFyIGxpbSA9IGxpbWl0ID09PSB1bmRlZmluZWQgPyBNQVhfVUlOVDMyIDogbGltaXQgPj4+IDA7XG4gICAgICBpZiAobGltID09PSAwKSByZXR1cm4gW107XG4gICAgICBpZiAoc2VwYXJhdG9yID09PSB1bmRlZmluZWQpIHJldHVybiBbc3RyaW5nXTtcbiAgICAgIC8vIElmIGBzZXBhcmF0b3JgIGlzIG5vdCBhIHJlZ2V4LCB1c2UgbmF0aXZlIHNwbGl0XG4gICAgICBpZiAoIWlzUmVnRXhwKHNlcGFyYXRvcikpIHtcbiAgICAgICAgcmV0dXJuIG5hdGl2ZVNwbGl0LmNhbGwoc3RyaW5nLCBzZXBhcmF0b3IsIGxpbSk7XG4gICAgICB9XG4gICAgICB2YXIgb3V0cHV0ID0gW107XG4gICAgICB2YXIgZmxhZ3MgPSAoc2VwYXJhdG9yLmlnbm9yZUNhc2UgPyAnaScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci5tdWx0aWxpbmUgPyAnbScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci51bmljb2RlID8gJ3UnIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3Iuc3RpY2t5ID8gJ3knIDogJycpO1xuICAgICAgdmFyIGxhc3RMYXN0SW5kZXggPSAwO1xuICAgICAgLy8gTWFrZSBgZ2xvYmFsYCBhbmQgYXZvaWQgYGxhc3RJbmRleGAgaXNzdWVzIGJ5IHdvcmtpbmcgd2l0aCBhIGNvcHlcbiAgICAgIHZhciBzZXBhcmF0b3JDb3B5ID0gbmV3IFJlZ0V4cChzZXBhcmF0b3Iuc291cmNlLCBmbGFncyArICdnJyk7XG4gICAgICB2YXIgbWF0Y2gsIGxhc3RJbmRleCwgbGFzdExlbmd0aDtcbiAgICAgIHdoaWxlIChtYXRjaCA9IHJlZ2V4cEV4ZWMuY2FsbChzZXBhcmF0b3JDb3B5LCBzdHJpbmcpKSB7XG4gICAgICAgIGxhc3RJbmRleCA9IHNlcGFyYXRvckNvcHkubGFzdEluZGV4O1xuICAgICAgICBpZiAobGFzdEluZGV4ID4gbGFzdExhc3RJbmRleCkge1xuICAgICAgICAgIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4LCBtYXRjaC5pbmRleCkpO1xuICAgICAgICAgIGlmIChtYXRjaC5sZW5ndGggPiAxICYmIG1hdGNoLmluZGV4IDwgc3RyaW5nLmxlbmd0aCkgYXJyYXlQdXNoLmFwcGx5KG91dHB1dCwgbWF0Y2guc2xpY2UoMSkpO1xuICAgICAgICAgIGxhc3RMZW5ndGggPSBtYXRjaFswXS5sZW5ndGg7XG4gICAgICAgICAgbGFzdExhc3RJbmRleCA9IGxhc3RJbmRleDtcbiAgICAgICAgICBpZiAob3V0cHV0Lmxlbmd0aCA+PSBsaW0pIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZXBhcmF0b3JDb3B5Lmxhc3RJbmRleCA9PT0gbWF0Y2guaW5kZXgpIHNlcGFyYXRvckNvcHkubGFzdEluZGV4Kys7IC8vIEF2b2lkIGFuIGluZmluaXRlIGxvb3BcbiAgICAgIH1cbiAgICAgIGlmIChsYXN0TGFzdEluZGV4ID09PSBzdHJpbmcubGVuZ3RoKSB7XG4gICAgICAgIGlmIChsYXN0TGVuZ3RoIHx8ICFzZXBhcmF0b3JDb3B5LnRlc3QoJycpKSBvdXRwdXQucHVzaCgnJyk7XG4gICAgICB9IGVsc2Ugb3V0cHV0LnB1c2goc3RyaW5nLnNsaWNlKGxhc3RMYXN0SW5kZXgpKTtcbiAgICAgIHJldHVybiBvdXRwdXQubGVuZ3RoID4gbGltID8gb3V0cHV0LnNsaWNlKDAsIGxpbSkgOiBvdXRwdXQ7XG4gICAgfTtcbiAgLy8gQ2hha3JhLCBWOFxuICB9IGVsc2UgaWYgKCcwJy5zcGxpdCh1bmRlZmluZWQsIDApLmxlbmd0aCkge1xuICAgIGludGVybmFsU3BsaXQgPSBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgcmV0dXJuIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkICYmIGxpbWl0ID09PSAwID8gW10gOiBuYXRpdmVTcGxpdC5jYWxsKHRoaXMsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgIH07XG4gIH0gZWxzZSBpbnRlcm5hbFNwbGl0ID0gbmF0aXZlU3BsaXQ7XG5cbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5zcGxpdGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zcGxpdFxuICAgIGZ1bmN0aW9uIHNwbGl0KHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgIHZhciBzcGxpdHRlciA9IHNlcGFyYXRvciA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZXBhcmF0b3JbU1BMSVRdO1xuICAgICAgcmV0dXJuIHNwbGl0dGVyICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBzcGxpdHRlci5jYWxsKHNlcGFyYXRvciwgTywgbGltaXQpXG4gICAgICAgIDogaW50ZXJuYWxTcGxpdC5jYWxsKFN0cmluZyhPKSwgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHNwbGl0XWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNwbGl0XG4gICAgLy9cbiAgICAvLyBOT1RFOiBUaGlzIGNhbm5vdCBiZSBwcm9wZXJseSBwb2x5ZmlsbGVkIGluIGVuZ2luZXMgdGhhdCBkb24ndCBzdXBwb3J0XG4gICAgLy8gdGhlICd5JyBmbGFnLlxuICAgIGZ1bmN0aW9uIChyZWdleHAsIGxpbWl0KSB7XG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKGludGVybmFsU3BsaXQsIHJlZ2V4cCwgdGhpcywgbGltaXQsIGludGVybmFsU3BsaXQgIT09IG5hdGl2ZVNwbGl0KTtcbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QocmVnZXhwKTtcbiAgICAgIHZhciBTID0gU3RyaW5nKHRoaXMpO1xuICAgICAgdmFyIEMgPSBzcGVjaWVzQ29uc3RydWN0b3IocngsIFJlZ0V4cCk7XG5cbiAgICAgIHZhciB1bmljb2RlTWF0Y2hpbmcgPSByeC51bmljb2RlO1xuICAgICAgdmFyIGZsYWdzID0gKHJ4Lmlnbm9yZUNhc2UgPyAnaScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHJ4Lm11bHRpbGluZSA/ICdtJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAocngudW5pY29kZSA/ICd1JyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoU1VQUE9SVFNfWSA/ICd5JyA6ICdnJyk7XG5cbiAgICAgIC8vIF4oPyArIHJ4ICsgKSBpcyBuZWVkZWQsIGluIGNvbWJpbmF0aW9uIHdpdGggc29tZSBTIHNsaWNpbmcsIHRvXG4gICAgICAvLyBzaW11bGF0ZSB0aGUgJ3knIGZsYWcuXG4gICAgICB2YXIgc3BsaXR0ZXIgPSBuZXcgQyhTVVBQT1JUU19ZID8gcnggOiAnXig/OicgKyByeC5zb3VyY2UgKyAnKScsIGZsYWdzKTtcbiAgICAgIHZhciBsaW0gPSBsaW1pdCA9PT0gdW5kZWZpbmVkID8gTUFYX1VJTlQzMiA6IGxpbWl0ID4+PiAwO1xuICAgICAgaWYgKGxpbSA9PT0gMCkgcmV0dXJuIFtdO1xuICAgICAgaWYgKFMubGVuZ3RoID09PSAwKSByZXR1cm4gY2FsbFJlZ0V4cEV4ZWMoc3BsaXR0ZXIsIFMpID09PSBudWxsID8gW1NdIDogW107XG4gICAgICB2YXIgcCA9IDA7XG4gICAgICB2YXIgcSA9IDA7XG4gICAgICB2YXIgQSA9IFtdO1xuICAgICAgd2hpbGUgKHEgPCBTLmxlbmd0aCkge1xuICAgICAgICBzcGxpdHRlci5sYXN0SW5kZXggPSBTVVBQT1JUU19ZID8gcSA6IDA7XG4gICAgICAgIHZhciB6ID0gY2FsbFJlZ0V4cEV4ZWMoc3BsaXR0ZXIsIFNVUFBPUlRTX1kgPyBTIDogUy5zbGljZShxKSk7XG4gICAgICAgIHZhciBlO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgeiA9PT0gbnVsbCB8fFxuICAgICAgICAgIChlID0gbWluKHRvTGVuZ3RoKHNwbGl0dGVyLmxhc3RJbmRleCArIChTVVBQT1JUU19ZID8gMCA6IHEpKSwgUy5sZW5ndGgpKSA9PT0gcFxuICAgICAgICApIHtcbiAgICAgICAgICBxID0gYWR2YW5jZVN0cmluZ0luZGV4KFMsIHEsIHVuaWNvZGVNYXRjaGluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgQS5wdXNoKFMuc2xpY2UocCwgcSkpO1xuICAgICAgICAgIGlmIChBLmxlbmd0aCA9PT0gbGltKSByZXR1cm4gQTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8PSB6Lmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgQS5wdXNoKHpbaV0pO1xuICAgICAgICAgICAgaWYgKEEubGVuZ3RoID09PSBsaW0pIHJldHVybiBBO1xuICAgICAgICAgIH1cbiAgICAgICAgICBxID0gcCA9IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEEucHVzaChTLnNsaWNlKHApKTtcbiAgICAgIHJldHVybiBBO1xuICAgIH1cbiAgXTtcbn0sICFTVVBQT1JUU19ZKTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcblxudmFyIHNsaWNlID0gW10uc2xpY2U7XG52YXIgTVNJRSA9IC9NU0lFIC5cXC4vLnRlc3QodXNlckFnZW50KTsgLy8gPC0gZGlydHkgaWU5LSBjaGVja1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChoYW5kbGVyLCB0aW1lb3V0IC8qICwgLi4uYXJndW1lbnRzICovKSB7XG4gICAgdmFyIGJvdW5kQXJncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICAgIHZhciBhcmdzID0gYm91bmRBcmdzID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBzY2hlZHVsZXIoYm91bmRBcmdzID8gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgICAodHlwZW9mIGhhbmRsZXIgPT0gJ2Z1bmN0aW9uJyA/IGhhbmRsZXIgOiBGdW5jdGlvbihoYW5kbGVyKSkuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfSA6IGhhbmRsZXIsIHRpbWVvdXQpO1xuICB9O1xufTtcblxuLy8gaWU5LSBzZXRUaW1lb3V0ICYgc2V0SW50ZXJ2YWwgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCN0aW1lcnNcbiQoeyBnbG9iYWw6IHRydWUsIGJpbmQ6IHRydWUsIGZvcmNlZDogTVNJRSB9LCB7XG4gIC8vIGBzZXRUaW1lb3V0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0dGltZW91dFxuICBzZXRUaW1lb3V0OiB3cmFwKGdsb2JhbC5zZXRUaW1lb3V0KSxcbiAgLy8gYHNldEludGVydmFsYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0aW50ZXJ2YWxcbiAgc2V0SW50ZXJ2YWw6IHdyYXAoZ2xvYmFsLnNldEludGVydmFsKVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9