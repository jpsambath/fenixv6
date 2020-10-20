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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZ2xvYmFsL25vdGlmeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbnVtYmVyLXBhcnNlLWludC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucGFyc2UtaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnNwbGl0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyJdLCJuYW1lcyI6WyJmYWN0b3J5IiwiZGVmaW5lIiwiJCIsImluZGV4T2YiLCJpdGVtIiwiaSIsImwiLCJsZW5ndGgiLCJwbHVnaW5OYW1lIiwicGx1Z2luQ2xhc3NOYW1lIiwiYmxhbmtGaWVsZE5hbWUiLCJwb3NpdGlvbnMiLCJ0IiwibSIsImIiLCJjIiwiciIsImhBbGlnbnMiLCJ2QWxpZ25zIiwibWFpblBvc2l0aW9ucyIsIm9wcG9zaXRlcyIsInBhcnNlUG9zaXRpb24iLCJzdHIiLCJwb3MiLCJlYWNoIiwic3BsaXQiLCJ3b3JkIiwidyIsInRvTG93ZXJDYXNlIiwiY2hhckF0IiwicHVzaCIsInN0eWxlcyIsImNvcmVTdHlsZSIsIm5hbWUiLCJodG1sIiwiY3NzIiwic3R5bGVQcmVmaXhlcyIsImdldFN0eWxlIiwicmVtb3ZlU3R5bGUiLCJhZGRTdHlsZSIsImRlZiIsImV4aXN0aW5nIiwiY3NzRWxlbSIsIndpbmRvdyIsImNvbnNvbGUiLCJ3YXJuIiwicmVtb3ZlIiwiY3NzVGV4dCIsImNsYXNzZXMiLCJjbGFzc05hbWUiLCJwcm9wcyIsInZhbCIsInByZWZpeCIsImluc2VydENTUyIsImF0dHIiLCJmaWVsZHMiLCJlbGVtIiwiZmluZEZpZWxkcyIsImUiLCJlcnJvciIsImNyZWF0ZUVsZW0iLCJhcHBlbmQiLCJfIiwic3R5bGVTaGVldCIsInR5cGUiLCJmaW5kIiwic2VsZWN0b3IiLCJpcyIsInBsdWdpbk9wdGlvbnMiLCJjbGlja1RvSGlkZSIsImF1dG9IaWRlIiwiYXV0b0hpZGVEZWxheSIsImFycm93U2hvdyIsImFycm93U2l6ZSIsImJyZWFrTmV3TGluZXMiLCJlbGVtZW50UG9zaXRpb24iLCJnbG9iYWxQb3NpdGlvbiIsInN0eWxlIiwic2hvd0FuaW1hdGlvbiIsInNob3dEdXJhdGlvbiIsImhpZGVBbmltYXRpb24iLCJoaWRlRHVyYXRpb24iLCJnYXAiLCJpbmhlcml0IiwiYSIsIkYiLCJwcm90b3R5cGUiLCJleHRlbmQiLCJkZWZhdWx0cyIsIm9wdHMiLCJ0YWciLCJnbG9iYWxBbmNob3JzIiwiZ2V0QW5jaG9yRWxlbWVudCIsImVsZW1lbnQiLCJyYWRpb3MiLCJwYXJlbnRzIiwiZmlsdGVyIiwiZmlyc3QiLCJpbmNyIiwib2JqIiwib3BwIiwidGVtcCIsInBhcnNlSW50IiwiaXNOYU4iLCJ1bmRlZmluZWQiLCJyZWFsaWduIiwiYWxpZ25tZW50IiwiaW5uZXIiLCJvdXRlciIsImVuY29kZSIsInRleHQiLCJOb3RpZmljYXRpb24iLCJkYXRhIiwib3B0aW9ucyIsImlzUGxhaW5PYmplY3QiLCJsb2FkSFRNTCIsIndyYXBwZXIiLCJhZGRDbGFzcyIsImFycm93IiwiY29udGFpbmVyIiwidXNlckNvbnRhaW5lciIsImVsZW1lbnRUeXBlIiwib3JpZ2luYWxFbGVtZW50IiwiYmVmb3JlIiwiaGlkZSIsInJ1biIsInVzZXJGaWVsZHMiLCJzaG93IiwidXNlckNhbGxiYWNrIiwiYXJncyIsImNhbGxiYWNrIiwiZWxlbXMiLCJmbiIsImhpZGRlbiIsIl90aGlzIiwiZGVzdHJveSIsInBhcmVudCIsImFkZCIsImFwcGx5Iiwic2V0R2xvYmFsUG9zaXRpb24iLCJwIiwiZ2V0UG9zaXRpb24iLCJwTWFpbiIsInBBbGlnbiIsIm1haW4iLCJhbGlnbiIsImtleSIsImFuY2hvciIsImRvY3VtZW50IiwiYm9keSIsImNvbnRhaW5zIiwidG9wIiwibGVmdCIsInByZXBlbmQiLCJzZXRFbGVtZW50UG9zaXRpb24iLCJhcnJvd0NvbG9yIiwiYXJyb3dDc3MiLCJjb2xvciIsImNvbnRIIiwiY29udFciLCJlbGVtSCIsImVsZW1JSCIsImVsZW1JVyIsImVsZW1Qb3MiLCJlbGVtVyIsImoiLCJrIiwibGVuIiwibGVuMSIsIm1haW5GdWxsIiwibWFyZ2luIiwib3BwRnVsbCIsInBBcnJvdyIsInBvc0Z1bGwiLCJwb3NpdGlvbiIsInJlZiIsIndyYXBQb3MiLCJvdXRlckhlaWdodCIsIm91dGVyV2lkdGgiLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJ3aWR0aCIsIk1hdGgiLCJtYXgiLCJjYWxsIiwiZGlzcGxheSIsInJlbW92ZUF0dHIiLCJyZWYxIiwicmVmMiIsInJlZjMiLCJyZWY0IiwicmVmNSIsInVwZGF0ZUNsYXNzZXMiLCJpc0FycmF5IiwiY29uY2F0IiwibWFwIiwibiIsImpvaW4iLCJkIiwiZGF0YXMiLCJ2YWx1ZSIsInJlcGxhY2UiLCJjbGVhclRpbWVvdXQiLCJhdXRvaGlkZVRpbWVyIiwic2V0VGltZW91dCIsImJpbmQiLCJub2RlTmFtZSIsImpxdWVyeSIsInByZXYiLCJjdXJyIiwiYmFzZSIsInN1Y2Nlc3MiLCJpbmZvIiwib24iLCJ0cmlnZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNDLFdBQVVBLE9BQVYsRUFBbUI7QUFDbkI7QUFDQTtBQUNBLE1BQUksSUFBSixFQUFnRDtBQUMvQztBQUNBQyxxQ0FBTyxDQUFDLHlFQUFELENBQUQsb0NBQWFELE9BQWI7QUFBQTtBQUFBO0FBQUEsb0dBQU47QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSx5QkFBeUIsbUJBQW1CO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDcklELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxnQkFBZ0IsbUJBQU8sQ0FBQyw2RkFBZ0M7O0FBRXhEO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLHlDQUF5QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6Imdsb2JhbF9ub3RpZnlqcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE5vdGlmeS5qcyAtIGh0dHA6Ly9ub3RpZnlqcy5jb20vIENvcHlyaWdodCAoYykgMjAxNSBNSVQgKi9cbihmdW5jdGlvbiAoZmFjdG9yeSkge1xuXHQvLyBVTUQgc3RhcnRcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3VtZGpzL3VtZC9ibG9iL21hc3Rlci9qcXVlcnlQbHVnaW5Db21tb25qcy5qc1xuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuXHRcdGRlZmluZShbJ2pxdWVyeSddLCBmYWN0b3J5KTtcblx0fSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdC8vIE5vZGUvQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCByb290LCBqUXVlcnkgKSB7XG5cdFx0XHRpZiAoIGpRdWVyeSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHQvLyByZXF1aXJlKCdqUXVlcnknKSByZXR1cm5zIGEgZmFjdG9yeSB0aGF0IHJlcXVpcmVzIHdpbmRvdyB0b1xuXHRcdFx0XHQvLyBidWlsZCBhIGpRdWVyeSBpbnN0YW5jZSwgd2Ugbm9ybWFsaXplIGhvdyB3ZSB1c2UgbW9kdWxlc1xuXHRcdFx0XHQvLyB0aGF0IHJlcXVpcmUgdGhpcyBwYXR0ZXJuIGJ1dCB0aGUgd2luZG93IHByb3ZpZGVkIGlzIGEgbm9vcFxuXHRcdFx0XHQvLyBpZiBpdCdzIGRlZmluZWQgKGhvdyBqcXVlcnkgd29ya3MpXG5cdFx0XHRcdGlmICggdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRcdFx0alF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0alF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jykocm9vdCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGZhY3RvcnkoalF1ZXJ5KTtcblx0XHRcdHJldHVybiBqUXVlcnk7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHQvLyBCcm93c2VyIGdsb2JhbHNcblx0XHRmYWN0b3J5KGpRdWVyeSk7XG5cdH1cbn0oZnVuY3Rpb24gKCQpIHtcblx0Ly9JRTggaW5kZXhPZiBwb2x5ZmlsbFxuXHR2YXIgaW5kZXhPZiA9IFtdLmluZGV4T2YgfHwgZnVuY3Rpb24oaXRlbSkge1xuXHRcdGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0XHRcdGlmIChpIGluIHRoaXMgJiYgdGhpc1tpXSA9PT0gaXRlbSkge1xuXHRcdFx0XHRyZXR1cm4gaTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIC0xO1xuXHR9O1xuXG5cdHZhciBwbHVnaW5OYW1lID0gXCJub3RpZnlcIjtcblx0dmFyIHBsdWdpbkNsYXNzTmFtZSA9IHBsdWdpbk5hbWUgKyBcImpzXCI7XG5cdHZhciBibGFua0ZpZWxkTmFtZSA9IHBsdWdpbk5hbWUgKyBcIiFibGFua1wiO1xuXG5cdHZhciBwb3NpdGlvbnMgPSB7XG5cdFx0dDogXCJ0b3BcIixcblx0XHRtOiBcIm1pZGRsZVwiLFxuXHRcdGI6IFwiYm90dG9tXCIsXG5cdFx0bDogXCJsZWZ0XCIsXG5cdFx0YzogXCJjZW50ZXJcIixcblx0XHRyOiBcInJpZ2h0XCJcblx0fTtcblx0dmFyIGhBbGlnbnMgPSBbXCJsXCIsIFwiY1wiLCBcInJcIl07XG5cdHZhciB2QWxpZ25zID0gW1widFwiLCBcIm1cIiwgXCJiXCJdO1xuXHR2YXIgbWFpblBvc2l0aW9ucyA9IFtcInRcIiwgXCJiXCIsIFwibFwiLCBcInJcIl07XG5cdHZhciBvcHBvc2l0ZXMgPSB7XG5cdFx0dDogXCJiXCIsXG5cdFx0bTogbnVsbCxcblx0XHRiOiBcInRcIixcblx0XHRsOiBcInJcIixcblx0XHRjOiBudWxsLFxuXHRcdHI6IFwibFwiXG5cdH07XG5cblx0dmFyIHBhcnNlUG9zaXRpb24gPSBmdW5jdGlvbihzdHIpIHtcblx0XHR2YXIgcG9zO1xuXHRcdHBvcyA9IFtdO1xuXHRcdCQuZWFjaChzdHIuc3BsaXQoL1xcVysvKSwgZnVuY3Rpb24oaSwgd29yZCkge1xuXHRcdFx0dmFyIHc7XG5cdFx0XHR3ID0gd29yZC50b0xvd2VyQ2FzZSgpLmNoYXJBdCgwKTtcblx0XHRcdGlmIChwb3NpdGlvbnNbd10pIHtcblx0XHRcdFx0cmV0dXJuIHBvcy5wdXNoKHcpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHJldHVybiBwb3M7XG5cdH07XG5cblx0dmFyIHN0eWxlcyA9IHt9O1xuXG5cdHZhciBjb3JlU3R5bGUgPSB7XG5cdFx0bmFtZTogXCJjb3JlXCIsXG5cdFx0aHRtbDogXCI8ZGl2IGNsYXNzPVxcXCJcIiArIHBsdWdpbkNsYXNzTmFtZSArIFwiLXdyYXBwZXJcXFwiPlxcblx0PGRpdiBjbGFzcz1cXFwiXCIgKyBwbHVnaW5DbGFzc05hbWUgKyBcIi1hcnJvd1xcXCI+PC9kaXY+XFxuXHQ8ZGl2IGNsYXNzPVxcXCJcIiArIHBsdWdpbkNsYXNzTmFtZSArIFwiLWNvbnRhaW5lclxcXCI+PC9kaXY+XFxuPC9kaXY+XCIsXG5cdFx0Y3NzOiBcIi5cIiArIHBsdWdpbkNsYXNzTmFtZSArIFwiLWNvcm5lciB7XFxuXHRwb3NpdGlvbjogZml4ZWQ7XFxuXHRtYXJnaW46IDVweDtcXG5cdHotaW5kZXg6IDEwNTA7XFxufVxcblxcbi5cIiArIHBsdWdpbkNsYXNzTmFtZSArIFwiLWNvcm5lciAuXCIgKyBwbHVnaW5DbGFzc05hbWUgKyBcIi13cmFwcGVyLFxcbi5cIiArIHBsdWdpbkNsYXNzTmFtZSArIFwiLWNvcm5lciAuXCIgKyBwbHVnaW5DbGFzc05hbWUgKyBcIi1jb250YWluZXIge1xcblx0cG9zaXRpb246IHJlbGF0aXZlO1xcblx0ZGlzcGxheTogYmxvY2s7XFxuXHRoZWlnaHQ6IGluaGVyaXQ7XFxuXHR3aWR0aDogaW5oZXJpdDtcXG5cdG1hcmdpbjogM3B4O1xcbn1cXG5cXG4uXCIgKyBwbHVnaW5DbGFzc05hbWUgKyBcIi13cmFwcGVyIHtcXG5cdHotaW5kZXg6IDE7XFxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXHRoZWlnaHQ6IDA7XFxuXHR3aWR0aDogMDtcXG59XFxuXFxuLlwiICsgcGx1Z2luQ2xhc3NOYW1lICsgXCItY29udGFpbmVyIHtcXG5cdGRpc3BsYXk6IG5vbmU7XFxuXHR6LWluZGV4OiAxO1xcblx0cG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uXCIgKyBwbHVnaW5DbGFzc05hbWUgKyBcIi1oaWRhYmxlIHtcXG5cdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuW2RhdGEtbm90aWZ5LXRleHRdLFtkYXRhLW5vdGlmeS1odG1sXSB7XFxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5cIiArIHBsdWdpbkNsYXNzTmFtZSArIFwiLWFycm93IHtcXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cdHotaW5kZXg6IDI7XFxuXHR3aWR0aDogMDtcXG5cdGhlaWdodDogMDtcXG59XCJcblx0fTtcblxuXHR2YXIgc3R5bGVQcmVmaXhlcyA9IHtcblx0XHRcImJvcmRlci1yYWRpdXNcIjogW1wiLXdlYmtpdC1cIiwgXCItbW96LVwiXVxuXHR9O1xuXG5cdHZhciBnZXRTdHlsZSA9IGZ1bmN0aW9uKG5hbWUpIHtcblx0XHRyZXR1cm4gc3R5bGVzW25hbWVdO1xuXHR9O1xuXG5cdHZhciByZW1vdmVTdHlsZSA9IGZ1bmN0aW9uKG5hbWUpIHtcblx0XHRpZiAoIW5hbWUpIHtcblx0XHRcdHRocm93IFwiTWlzc2luZyBTdHlsZSBuYW1lXCI7XG5cdFx0fVxuXHRcdGlmIChzdHlsZXNbbmFtZV0pIHtcblx0XHRcdGRlbGV0ZSBzdHlsZXNbbmFtZV07XG5cdFx0fVxuXHR9O1xuXG5cdHZhciBhZGRTdHlsZSA9IGZ1bmN0aW9uKG5hbWUsIGRlZikge1xuXHRcdGlmICghbmFtZSkge1xuXHRcdFx0dGhyb3cgXCJNaXNzaW5nIFN0eWxlIG5hbWVcIjtcblx0XHR9XG5cdFx0aWYgKCFkZWYpIHtcblx0XHRcdHRocm93IFwiTWlzc2luZyBTdHlsZSBkZWZpbml0aW9uXCI7XG5cdFx0fVxuXHRcdGlmICghZGVmLmh0bWwpIHtcblx0XHRcdHRocm93IFwiTWlzc2luZyBTdHlsZSBIVE1MXCI7XG5cdFx0fVxuXHRcdC8vcmVtb3ZlIGV4aXN0aW5nIHN0eWxlXG5cdFx0dmFyIGV4aXN0aW5nID0gc3R5bGVzW25hbWVdO1xuXHRcdGlmIChleGlzdGluZyAmJiBleGlzdGluZy5jc3NFbGVtKSB7XG5cdFx0XHRpZiAod2luZG93LmNvbnNvbGUpIHtcblx0XHRcdFx0Y29uc29sZS53YXJuKHBsdWdpbk5hbWUgKyBcIjogb3ZlcndyaXRpbmcgc3R5bGUgJ1wiICsgbmFtZSArIFwiJ1wiKTtcblx0XHRcdH1cblx0XHRcdHN0eWxlc1tuYW1lXS5jc3NFbGVtLnJlbW92ZSgpO1xuXHRcdH1cblx0XHRkZWYubmFtZSA9IG5hbWU7XG5cdFx0c3R5bGVzW25hbWVdID0gZGVmO1xuXHRcdHZhciBjc3NUZXh0ID0gXCJcIjtcblx0XHRpZiAoZGVmLmNsYXNzZXMpIHtcblx0XHRcdCQuZWFjaChkZWYuY2xhc3NlcywgZnVuY3Rpb24oY2xhc3NOYW1lLCBwcm9wcykge1xuXHRcdFx0XHRjc3NUZXh0ICs9IFwiLlwiICsgcGx1Z2luQ2xhc3NOYW1lICsgXCItXCIgKyBkZWYubmFtZSArIFwiLVwiICsgY2xhc3NOYW1lICsgXCIge1xcblwiO1xuXHRcdFx0XHQkLmVhY2gocHJvcHMsIGZ1bmN0aW9uKG5hbWUsIHZhbCkge1xuXHRcdFx0XHRcdGlmIChzdHlsZVByZWZpeGVzW25hbWVdKSB7XG5cdFx0XHRcdFx0XHQkLmVhY2goc3R5bGVQcmVmaXhlc1tuYW1lXSwgZnVuY3Rpb24oaSwgcHJlZml4KSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBjc3NUZXh0ICs9IFwiXHRcIiArIHByZWZpeCArIG5hbWUgKyBcIjogXCIgKyB2YWwgKyBcIjtcXG5cIjtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gY3NzVGV4dCArPSBcIlx0XCIgKyBuYW1lICsgXCI6IFwiICsgdmFsICsgXCI7XFxuXCI7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm4gY3NzVGV4dCArPSBcIn1cXG5cIjtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRpZiAoZGVmLmNzcykge1xuXHRcdFx0Y3NzVGV4dCArPSBcIi8qIHN0eWxlcyBmb3IgXCIgKyBkZWYubmFtZSArIFwiICovXFxuXCIgKyBkZWYuY3NzO1xuXHRcdH1cblx0XHRpZiAoY3NzVGV4dCkge1xuXHRcdFx0ZGVmLmNzc0VsZW0gPSBpbnNlcnRDU1MoY3NzVGV4dCk7XG5cdFx0XHRkZWYuY3NzRWxlbS5hdHRyKFwiaWRcIiwgXCJub3RpZnktXCIgKyBkZWYubmFtZSk7XG5cdFx0fVxuXHRcdHZhciBmaWVsZHMgPSB7fTtcblx0XHR2YXIgZWxlbSA9ICQoZGVmLmh0bWwpO1xuXHRcdGZpbmRGaWVsZHMoXCJodG1sXCIsIGVsZW0sIGZpZWxkcyk7XG5cdFx0ZmluZEZpZWxkcyhcInRleHRcIiwgZWxlbSwgZmllbGRzKTtcblx0XHRkZWYuZmllbGRzID0gZmllbGRzO1xuXHR9O1xuXG5cdHZhciBpbnNlcnRDU1MgPSBmdW5jdGlvbihjc3NUZXh0KSB7XG5cdFx0dmFyIGUsIGVsZW0sIGVycm9yO1xuXHRcdGVsZW0gPSBjcmVhdGVFbGVtKFwic3R5bGVcIik7XG5cdFx0ZWxlbS5hdHRyKFwidHlwZVwiLCAndGV4dC9jc3MnKTtcblx0XHQkKFwiaGVhZFwiKS5hcHBlbmQoZWxlbSk7XG5cdFx0dHJ5IHtcblx0XHRcdGVsZW0uaHRtbChjc3NUZXh0KTtcblx0XHR9IGNhdGNoIChfKSB7XG5cdFx0XHRlbGVtWzBdLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1RleHQ7XG5cdFx0fVxuXHRcdHJldHVybiBlbGVtO1xuXHR9O1xuXG5cdHZhciBmaW5kRmllbGRzID0gZnVuY3Rpb24odHlwZSwgZWxlbSwgZmllbGRzKSB7XG5cdFx0dmFyIGF0dHI7XG5cdFx0aWYgKHR5cGUgIT09IFwiaHRtbFwiKSB7XG5cdFx0XHR0eXBlID0gXCJ0ZXh0XCI7XG5cdFx0fVxuXHRcdGF0dHIgPSBcImRhdGEtbm90aWZ5LVwiICsgdHlwZTtcblx0XHRyZXR1cm4gZmluZChlbGVtLCBcIltcIiArIGF0dHIgKyBcIl1cIikuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuYW1lO1xuXHRcdFx0bmFtZSA9ICQodGhpcykuYXR0cihhdHRyKTtcblx0XHRcdGlmICghbmFtZSkge1xuXHRcdFx0XHRuYW1lID0gYmxhbmtGaWVsZE5hbWU7XG5cdFx0XHR9XG5cdFx0XHRmaWVsZHNbbmFtZV0gPSB0eXBlO1xuXHRcdH0pO1xuXHR9O1xuXG5cdHZhciBmaW5kID0gZnVuY3Rpb24oZWxlbSwgc2VsZWN0b3IpIHtcblx0XHRpZiAoZWxlbS5pcyhzZWxlY3RvcikpIHtcblx0XHRcdHJldHVybiBlbGVtO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZWxlbS5maW5kKHNlbGVjdG9yKTtcblx0XHR9XG5cdH07XG5cblx0dmFyIHBsdWdpbk9wdGlvbnMgPSB7XG5cdFx0Y2xpY2tUb0hpZGU6IHRydWUsXG5cdFx0YXV0b0hpZGU6IHRydWUsXG5cdFx0YXV0b0hpZGVEZWxheTogNTAwMCxcblx0XHRhcnJvd1Nob3c6IHRydWUsXG5cdFx0YXJyb3dTaXplOiA1LFxuXHRcdGJyZWFrTmV3TGluZXM6IHRydWUsXG5cdFx0ZWxlbWVudFBvc2l0aW9uOiBcImJvdHRvbVwiLFxuXHRcdGdsb2JhbFBvc2l0aW9uOiBcInRvcCByaWdodFwiLFxuXHRcdHN0eWxlOiBcImJvb3RzdHJhcFwiLFxuXHRcdGNsYXNzTmFtZTogXCJlcnJvclwiLFxuXHRcdHNob3dBbmltYXRpb246IFwic2xpZGVEb3duXCIsXG5cdFx0c2hvd0R1cmF0aW9uOiA0MDAsXG5cdFx0aGlkZUFuaW1hdGlvbjogXCJzbGlkZVVwXCIsXG5cdFx0aGlkZUR1cmF0aW9uOiAyMDAsXG5cdFx0Z2FwOiA1XG5cdH07XG5cblx0dmFyIGluaGVyaXQgPSBmdW5jdGlvbihhLCBiKSB7XG5cdFx0dmFyIEY7XG5cdFx0RiA9IGZ1bmN0aW9uKCkge307XG5cdFx0Ri5wcm90b3R5cGUgPSBhO1xuXHRcdHJldHVybiAkLmV4dGVuZCh0cnVlLCBuZXcgRigpLCBiKTtcblx0fTtcblxuXHR2YXIgZGVmYXVsdHMgPSBmdW5jdGlvbihvcHRzKSB7XG5cdFx0cmV0dXJuICQuZXh0ZW5kKHBsdWdpbk9wdGlvbnMsIG9wdHMpO1xuXHR9O1xuXG5cdHZhciBjcmVhdGVFbGVtID0gZnVuY3Rpb24odGFnKSB7XG5cdFx0cmV0dXJuICQoXCI8XCIgKyB0YWcgKyBcIj48L1wiICsgdGFnICsgXCI+XCIpO1xuXHR9O1xuXG5cdHZhciBnbG9iYWxBbmNob3JzID0ge307XG5cblx0dmFyIGdldEFuY2hvckVsZW1lbnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG5cdFx0dmFyIHJhZGlvcztcblx0XHRpZiAoZWxlbWVudC5pcygnW3R5cGU9cmFkaW9dJykpIHtcblx0XHRcdHJhZGlvcyA9IGVsZW1lbnQucGFyZW50cygnZm9ybTpmaXJzdCcpLmZpbmQoJ1t0eXBlPXJhZGlvXScpLmZpbHRlcihmdW5jdGlvbihpLCBlKSB7XG5cdFx0XHRcdHJldHVybiAkKGUpLmF0dHIoXCJuYW1lXCIpID09PSBlbGVtZW50LmF0dHIoXCJuYW1lXCIpO1xuXHRcdFx0fSk7XG5cdFx0XHRlbGVtZW50ID0gcmFkaW9zLmZpcnN0KCk7XG5cdFx0fVxuXHRcdHJldHVybiBlbGVtZW50O1xuXHR9O1xuXG5cdHZhciBpbmNyID0gZnVuY3Rpb24ob2JqLCBwb3MsIHZhbCkge1xuXHRcdHZhciBvcHAsIHRlbXA7XG5cdFx0aWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdHZhbCA9IHBhcnNlSW50KHZhbCwgMTApO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIHZhbCAhPT0gXCJudW1iZXJcIikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoaXNOYU4odmFsKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRvcHAgPSBwb3NpdGlvbnNbb3Bwb3NpdGVzW3Bvcy5jaGFyQXQoMCldXTtcblx0XHR0ZW1wID0gcG9zO1xuXHRcdGlmIChvYmpbb3BwXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRwb3MgPSBwb3NpdGlvbnNbb3BwLmNoYXJBdCgwKV07XG5cdFx0XHR2YWwgPSAtdmFsO1xuXHRcdH1cblx0XHRpZiAob2JqW3Bvc10gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0b2JqW3Bvc10gPSB2YWw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG9ialtwb3NdICs9IHZhbDtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH07XG5cblx0dmFyIHJlYWxpZ24gPSBmdW5jdGlvbihhbGlnbm1lbnQsIGlubmVyLCBvdXRlcikge1xuXHRcdGlmIChhbGlnbm1lbnQgPT09IFwibFwiIHx8IGFsaWdubWVudCA9PT0gXCJ0XCIpIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH0gZWxzZSBpZiAoYWxpZ25tZW50ID09PSBcImNcIiB8fCBhbGlnbm1lbnQgPT09IFwibVwiKSB7XG5cdFx0XHRyZXR1cm4gb3V0ZXIgLyAyIC0gaW5uZXIgLyAyO1xuXHRcdH0gZWxzZSBpZiAoYWxpZ25tZW50ID09PSBcInJcIiB8fCBhbGlnbm1lbnQgPT09IFwiYlwiKSB7XG5cdFx0XHRyZXR1cm4gb3V0ZXIgLSBpbm5lcjtcblx0XHR9XG5cdFx0dGhyb3cgXCJJbnZhbGlkIGFsaWdubWVudFwiO1xuXHR9O1xuXG5cdHZhciBlbmNvZGUgPSBmdW5jdGlvbih0ZXh0KSB7XG5cdFx0ZW5jb2RlLmUgPSBlbmNvZGUuZSB8fCBjcmVhdGVFbGVtKFwiZGl2XCIpO1xuXHRcdHJldHVybiBlbmNvZGUuZS50ZXh0KHRleHQpLmh0bWwoKTtcblx0fTtcblxuXHRmdW5jdGlvbiBOb3RpZmljYXRpb24oZWxlbSwgZGF0YSwgb3B0aW9ucykge1xuXHRcdGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0b3B0aW9ucyA9IHtcblx0XHRcdFx0Y2xhc3NOYW1lOiBvcHRpb25zXG5cdFx0XHR9O1xuXHRcdH1cblx0XHR0aGlzLm9wdGlvbnMgPSBpbmhlcml0KHBsdWdpbk9wdGlvbnMsICQuaXNQbGFpbk9iamVjdChvcHRpb25zKSA/IG9wdGlvbnMgOiB7fSk7XG5cdFx0dGhpcy5sb2FkSFRNTCgpO1xuXHRcdHRoaXMud3JhcHBlciA9ICQoY29yZVN0eWxlLmh0bWwpO1xuXHRcdGlmICh0aGlzLm9wdGlvbnMuY2xpY2tUb0hpZGUpIHtcblx0XHRcdHRoaXMud3JhcHBlci5hZGRDbGFzcyhwbHVnaW5DbGFzc05hbWUgKyBcIi1oaWRhYmxlXCIpO1xuXHRcdH1cblx0XHR0aGlzLndyYXBwZXIuZGF0YShwbHVnaW5DbGFzc05hbWUsIHRoaXMpO1xuXHRcdHRoaXMuYXJyb3cgPSB0aGlzLndyYXBwZXIuZmluZChcIi5cIiArIHBsdWdpbkNsYXNzTmFtZSArIFwiLWFycm93XCIpO1xuXHRcdHRoaXMuY29udGFpbmVyID0gdGhpcy53cmFwcGVyLmZpbmQoXCIuXCIgKyBwbHVnaW5DbGFzc05hbWUgKyBcIi1jb250YWluZXJcIik7XG5cdFx0dGhpcy5jb250YWluZXIuYXBwZW5kKHRoaXMudXNlckNvbnRhaW5lcik7XG5cdFx0aWYgKGVsZW0gJiYgZWxlbS5sZW5ndGgpIHtcblx0XHRcdHRoaXMuZWxlbWVudFR5cGUgPSBlbGVtLmF0dHIoXCJ0eXBlXCIpO1xuXHRcdFx0dGhpcy5vcmlnaW5hbEVsZW1lbnQgPSBlbGVtO1xuXHRcdFx0dGhpcy5lbGVtID0gZ2V0QW5jaG9yRWxlbWVudChlbGVtKTtcblx0XHRcdHRoaXMuZWxlbS5kYXRhKHBsdWdpbkNsYXNzTmFtZSwgdGhpcyk7XG5cdFx0XHR0aGlzLmVsZW0uYmVmb3JlKHRoaXMud3JhcHBlcik7XG5cdFx0fVxuXHRcdHRoaXMuY29udGFpbmVyLmhpZGUoKTtcblx0XHR0aGlzLnJ1bihkYXRhKTtcblx0fVxuXG5cdE5vdGlmaWNhdGlvbi5wcm90b3R5cGUubG9hZEhUTUwgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgc3R5bGU7XG5cdFx0c3R5bGUgPSB0aGlzLmdldFN0eWxlKCk7XG5cdFx0dGhpcy51c2VyQ29udGFpbmVyID0gJChzdHlsZS5odG1sKTtcblx0XHR0aGlzLnVzZXJGaWVsZHMgPSBzdHlsZS5maWVsZHM7XG5cdH07XG5cblx0Tm90aWZpY2F0aW9uLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24oc2hvdywgdXNlckNhbGxiYWNrKSB7XG5cdFx0dmFyIGFyZ3MsIGNhbGxiYWNrLCBlbGVtcywgZm4sIGhpZGRlbjtcblx0XHRjYWxsYmFjayA9IChmdW5jdGlvbihfdGhpcykge1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoIXNob3cgJiYgIV90aGlzLmVsZW0pIHtcblx0XHRcdFx0XHRfdGhpcy5kZXN0cm95KCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHVzZXJDYWxsYmFjaykge1xuXHRcdFx0XHRcdHJldHVybiB1c2VyQ2FsbGJhY2soKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9KSh0aGlzKTtcblx0XHRoaWRkZW4gPSB0aGlzLmNvbnRhaW5lci5wYXJlbnQoKS5wYXJlbnRzKCc6aGlkZGVuJykubGVuZ3RoID4gMDtcblx0XHRlbGVtcyA9IHRoaXMuY29udGFpbmVyLmFkZCh0aGlzLmFycm93KTtcblx0XHRhcmdzID0gW107XG5cdFx0aWYgKGhpZGRlbiAmJiBzaG93KSB7XG5cdFx0XHRmbiA9IFwic2hvd1wiO1xuXHRcdH0gZWxzZSBpZiAoaGlkZGVuICYmICFzaG93KSB7XG5cdFx0XHRmbiA9IFwiaGlkZVwiO1xuXHRcdH0gZWxzZSBpZiAoIWhpZGRlbiAmJiBzaG93KSB7XG5cdFx0XHRmbiA9IHRoaXMub3B0aW9ucy5zaG93QW5pbWF0aW9uO1xuXHRcdFx0YXJncy5wdXNoKHRoaXMub3B0aW9ucy5zaG93RHVyYXRpb24pO1xuXHRcdH0gZWxzZSBpZiAoIWhpZGRlbiAmJiAhc2hvdykge1xuXHRcdFx0Zm4gPSB0aGlzLm9wdGlvbnMuaGlkZUFuaW1hdGlvbjtcblx0XHRcdGFyZ3MucHVzaCh0aGlzLm9wdGlvbnMuaGlkZUR1cmF0aW9uKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGNhbGxiYWNrKCk7XG5cdFx0fVxuXHRcdGFyZ3MucHVzaChjYWxsYmFjayk7XG5cdFx0cmV0dXJuIGVsZW1zW2ZuXS5hcHBseShlbGVtcywgYXJncyk7XG5cdH07XG5cblx0Tm90aWZpY2F0aW9uLnByb3RvdHlwZS5zZXRHbG9iYWxQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBwID0gdGhpcy5nZXRQb3NpdGlvbigpO1xuXHRcdHZhciBwTWFpbiA9IHBbMF07XG5cdFx0dmFyIHBBbGlnbiA9IHBbMV07XG5cdFx0dmFyIG1haW4gPSBwb3NpdGlvbnNbcE1haW5dO1xuXHRcdHZhciBhbGlnbiA9IHBvc2l0aW9uc1twQWxpZ25dO1xuXHRcdHZhciBrZXkgPSBwTWFpbiArIFwifFwiICsgcEFsaWduO1xuXHRcdHZhciBhbmNob3IgPSBnbG9iYWxBbmNob3JzW2tleV07XG5cdFx0aWYgKCFhbmNob3IgfHwgIWRvY3VtZW50LmJvZHkuY29udGFpbnMoYW5jaG9yWzBdKSkge1xuXHRcdFx0YW5jaG9yID0gZ2xvYmFsQW5jaG9yc1trZXldID0gY3JlYXRlRWxlbShcImRpdlwiKTtcblx0XHRcdHZhciBjc3MgPSB7fTtcblx0XHRcdGNzc1ttYWluXSA9IDA7XG5cdFx0XHRpZiAoYWxpZ24gPT09IFwibWlkZGxlXCIpIHtcblx0XHRcdFx0Y3NzLnRvcCA9ICc0NSUnO1xuXHRcdFx0fSBlbHNlIGlmIChhbGlnbiA9PT0gXCJjZW50ZXJcIikge1xuXHRcdFx0XHRjc3MubGVmdCA9ICc0NSUnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3NzW2FsaWduXSA9IDA7XG5cdFx0XHR9XG5cdFx0XHRhbmNob3IuY3NzKGNzcykuYWRkQ2xhc3MocGx1Z2luQ2xhc3NOYW1lICsgXCItY29ybmVyXCIpO1xuXHRcdFx0JChcImJvZHlcIikuYXBwZW5kKGFuY2hvcik7XG5cdFx0fVxuXHRcdHJldHVybiBhbmNob3IucHJlcGVuZCh0aGlzLndyYXBwZXIpO1xuXHR9O1xuXG5cdE5vdGlmaWNhdGlvbi5wcm90b3R5cGUuc2V0RWxlbWVudFBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGFycm93Q29sb3IsIGFycm93Q3NzLCBhcnJvd1NpemUsIGNvbG9yLCBjb250SCwgY29udFcsIGNzcywgZWxlbUgsIGVsZW1JSCwgZWxlbUlXLCBlbGVtUG9zLCBlbGVtVywgZ2FwLCBqLCBrLCBsZW4sIGxlbjEsIG1haW5GdWxsLCBtYXJnaW4sIG9wcCwgb3BwRnVsbCwgcEFsaWduLCBwQXJyb3csIHBNYWluLCBwb3MsIHBvc0Z1bGwsIHBvc2l0aW9uLCByZWYsIHdyYXBQb3M7XG5cdFx0cG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKCk7XG5cdFx0cE1haW4gPSBwb3NpdGlvblswXTtcblx0XHRwQWxpZ24gPSBwb3NpdGlvblsxXTtcblx0XHRwQXJyb3cgPSBwb3NpdGlvblsyXTtcblx0XHRlbGVtUG9zID0gdGhpcy5lbGVtLnBvc2l0aW9uKCk7XG5cdFx0ZWxlbUggPSB0aGlzLmVsZW0ub3V0ZXJIZWlnaHQoKTtcblx0XHRlbGVtVyA9IHRoaXMuZWxlbS5vdXRlcldpZHRoKCk7XG5cdFx0ZWxlbUlIID0gdGhpcy5lbGVtLmlubmVySGVpZ2h0KCk7XG5cdFx0ZWxlbUlXID0gdGhpcy5lbGVtLmlubmVyV2lkdGgoKTtcblx0XHR3cmFwUG9zID0gdGhpcy53cmFwcGVyLnBvc2l0aW9uKCk7XG5cdFx0Y29udEggPSB0aGlzLmNvbnRhaW5lci5oZWlnaHQoKTtcblx0XHRjb250VyA9IHRoaXMuY29udGFpbmVyLndpZHRoKCk7XG5cdFx0bWFpbkZ1bGwgPSBwb3NpdGlvbnNbcE1haW5dO1xuXHRcdG9wcCA9IG9wcG9zaXRlc1twTWFpbl07XG5cdFx0b3BwRnVsbCA9IHBvc2l0aW9uc1tvcHBdO1xuXHRcdGNzcyA9IHt9O1xuXHRcdGNzc1tvcHBGdWxsXSA9IHBNYWluID09PSBcImJcIiA/IGVsZW1IIDogcE1haW4gPT09IFwiclwiID8gZWxlbVcgOiAwO1xuXHRcdGluY3IoY3NzLCBcInRvcFwiLCBlbGVtUG9zLnRvcCAtIHdyYXBQb3MudG9wKTtcblx0XHRpbmNyKGNzcywgXCJsZWZ0XCIsIGVsZW1Qb3MubGVmdCAtIHdyYXBQb3MubGVmdCk7XG5cdFx0cmVmID0gW1widG9wXCIsIFwibGVmdFwiXTtcblx0XHRmb3IgKGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcblx0XHRcdHBvcyA9IHJlZltqXTtcblx0XHRcdG1hcmdpbiA9IHBhcnNlSW50KHRoaXMuZWxlbS5jc3MoXCJtYXJnaW4tXCIgKyBwb3MpLCAxMCk7XG5cdFx0XHRpZiAobWFyZ2luKSB7XG5cdFx0XHRcdGluY3IoY3NzLCBwb3MsIG1hcmdpbik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGdhcCA9IE1hdGgubWF4KDAsIHRoaXMub3B0aW9ucy5nYXAgLSAodGhpcy5vcHRpb25zLmFycm93U2hvdyA/IGFycm93U2l6ZSA6IDApKTtcblx0XHRpbmNyKGNzcywgb3BwRnVsbCwgZ2FwKTtcblx0XHRpZiAoIXRoaXMub3B0aW9ucy5hcnJvd1Nob3cpIHtcblx0XHRcdHRoaXMuYXJyb3cuaGlkZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhcnJvd1NpemUgPSB0aGlzLm9wdGlvbnMuYXJyb3dTaXplO1xuXHRcdFx0YXJyb3dDc3MgPSAkLmV4dGVuZCh7fSwgY3NzKTtcblx0XHRcdGFycm93Q29sb3IgPSB0aGlzLnVzZXJDb250YWluZXIuY3NzKFwiYm9yZGVyLWNvbG9yXCIpIHx8IHRoaXMudXNlckNvbnRhaW5lci5jc3MoXCJib3JkZXItdG9wLWNvbG9yXCIpIHx8IHRoaXMudXNlckNvbnRhaW5lci5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIpIHx8IFwid2hpdGVcIjtcblx0XHRcdGZvciAoayA9IDAsIGxlbjEgPSBtYWluUG9zaXRpb25zLmxlbmd0aDsgayA8IGxlbjE7IGsrKykge1xuXHRcdFx0XHRwb3MgPSBtYWluUG9zaXRpb25zW2tdO1xuXHRcdFx0XHRwb3NGdWxsID0gcG9zaXRpb25zW3Bvc107XG5cdFx0XHRcdGlmIChwb3MgPT09IG9wcCkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbG9yID0gcG9zRnVsbCA9PT0gbWFpbkZ1bGwgPyBhcnJvd0NvbG9yIDogXCJ0cmFuc3BhcmVudFwiO1xuXHRcdFx0XHRhcnJvd0Nzc1tcImJvcmRlci1cIiArIHBvc0Z1bGxdID0gYXJyb3dTaXplICsgXCJweCBzb2xpZCBcIiArIGNvbG9yO1xuXHRcdFx0fVxuXHRcdFx0aW5jcihjc3MsIHBvc2l0aW9uc1tvcHBdLCBhcnJvd1NpemUpO1xuXHRcdFx0aWYgKGluZGV4T2YuY2FsbChtYWluUG9zaXRpb25zLCBwQWxpZ24pID49IDApIHtcblx0XHRcdFx0aW5jcihhcnJvd0NzcywgcG9zaXRpb25zW3BBbGlnbl0sIGFycm93U2l6ZSAqIDIpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoaW5kZXhPZi5jYWxsKHZBbGlnbnMsIHBNYWluKSA+PSAwKSB7XG5cdFx0XHRpbmNyKGNzcywgXCJsZWZ0XCIsIHJlYWxpZ24ocEFsaWduLCBjb250VywgZWxlbVcpKTtcblx0XHRcdGlmIChhcnJvd0Nzcykge1xuXHRcdFx0XHRpbmNyKGFycm93Q3NzLCBcImxlZnRcIiwgcmVhbGlnbihwQWxpZ24sIGFycm93U2l6ZSwgZWxlbUlXKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChpbmRleE9mLmNhbGwoaEFsaWducywgcE1haW4pID49IDApIHtcblx0XHRcdGluY3IoY3NzLCBcInRvcFwiLCByZWFsaWduKHBBbGlnbiwgY29udEgsIGVsZW1IKSk7XG5cdFx0XHRpZiAoYXJyb3dDc3MpIHtcblx0XHRcdFx0aW5jcihhcnJvd0NzcywgXCJ0b3BcIiwgcmVhbGlnbihwQWxpZ24sIGFycm93U2l6ZSwgZWxlbUlIKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh0aGlzLmNvbnRhaW5lci5pcyhcIjp2aXNpYmxlXCIpKSB7XG5cdFx0XHRjc3MuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHR9XG5cdFx0dGhpcy5jb250YWluZXIucmVtb3ZlQXR0cihcInN0eWxlXCIpLmNzcyhjc3MpO1xuXHRcdGlmIChhcnJvd0Nzcykge1xuXHRcdFx0cmV0dXJuIHRoaXMuYXJyb3cucmVtb3ZlQXR0cihcInN0eWxlXCIpLmNzcyhhcnJvd0Nzcyk7XG5cdFx0fVxuXHR9O1xuXG5cdE5vdGlmaWNhdGlvbi5wcm90b3R5cGUuZ2V0UG9zaXRpb24gPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgcG9zLCByZWYsIHJlZjEsIHJlZjIsIHJlZjMsIHJlZjQsIHJlZjUsIHRleHQ7XG5cdFx0dGV4dCA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbiB8fCAodGhpcy5lbGVtID8gdGhpcy5vcHRpb25zLmVsZW1lbnRQb3NpdGlvbiA6IHRoaXMub3B0aW9ucy5nbG9iYWxQb3NpdGlvbik7XG5cdFx0cG9zID0gcGFyc2VQb3NpdGlvbih0ZXh0KTtcblx0XHRpZiAocG9zLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cG9zWzBdID0gXCJiXCI7XG5cdFx0fVxuXHRcdGlmIChyZWYgPSBwb3NbMF0sIGluZGV4T2YuY2FsbChtYWluUG9zaXRpb25zLCByZWYpIDwgMCkge1xuXHRcdFx0dGhyb3cgXCJNdXN0IGJlIG9uZSBvZiBbXCIgKyBtYWluUG9zaXRpb25zICsgXCJdXCI7XG5cdFx0fVxuXHRcdGlmIChwb3MubGVuZ3RoID09PSAxIHx8ICgocmVmMSA9IHBvc1swXSwgaW5kZXhPZi5jYWxsKHZBbGlnbnMsIHJlZjEpID49IDApICYmIChyZWYyID0gcG9zWzFdLCBpbmRleE9mLmNhbGwoaEFsaWducywgcmVmMikgPCAwKSkgfHwgKChyZWYzID0gcG9zWzBdLCBpbmRleE9mLmNhbGwoaEFsaWducywgcmVmMykgPj0gMCkgJiYgKHJlZjQgPSBwb3NbMV0sIGluZGV4T2YuY2FsbCh2QWxpZ25zLCByZWY0KSA8IDApKSkge1xuXHRcdFx0cG9zWzFdID0gKHJlZjUgPSBwb3NbMF0sIGluZGV4T2YuY2FsbChoQWxpZ25zLCByZWY1KSA+PSAwKSA/IFwibVwiIDogXCJsXCI7XG5cdFx0fVxuXHRcdGlmIChwb3MubGVuZ3RoID09PSAyKSB7XG5cdFx0XHRwb3NbMl0gPSBwb3NbMV07XG5cdFx0fVxuXHRcdHJldHVybiBwb3M7XG5cdH07XG5cblx0Tm90aWZpY2F0aW9uLnByb3RvdHlwZS5nZXRTdHlsZSA9IGZ1bmN0aW9uKG5hbWUpIHtcblx0XHR2YXIgc3R5bGU7XG5cdFx0aWYgKCFuYW1lKSB7XG5cdFx0XHRuYW1lID0gdGhpcy5vcHRpb25zLnN0eWxlO1xuXHRcdH1cblx0XHRpZiAoIW5hbWUpIHtcblx0XHRcdG5hbWUgPSBcImRlZmF1bHRcIjtcblx0XHR9XG5cdFx0c3R5bGUgPSBzdHlsZXNbbmFtZV07XG5cdFx0aWYgKCFzdHlsZSkge1xuXHRcdFx0dGhyb3cgXCJNaXNzaW5nIHN0eWxlOiBcIiArIG5hbWU7XG5cdFx0fVxuXHRcdHJldHVybiBzdHlsZTtcblx0fTtcblxuXHROb3RpZmljYXRpb24ucHJvdG90eXBlLnVwZGF0ZUNsYXNzZXMgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgY2xhc3Nlcywgc3R5bGU7XG5cdFx0Y2xhc3NlcyA9IFtcImJhc2VcIl07XG5cdFx0aWYgKCQuaXNBcnJheSh0aGlzLm9wdGlvbnMuY2xhc3NOYW1lKSkge1xuXHRcdFx0Y2xhc3NlcyA9IGNsYXNzZXMuY29uY2F0KHRoaXMub3B0aW9ucy5jbGFzc05hbWUpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmNsYXNzTmFtZSkge1xuXHRcdFx0Y2xhc3Nlcy5wdXNoKHRoaXMub3B0aW9ucy5jbGFzc05hbWUpO1xuXHRcdH1cblx0XHRzdHlsZSA9IHRoaXMuZ2V0U3R5bGUoKTtcblx0XHRjbGFzc2VzID0gJC5tYXAoY2xhc3NlcywgZnVuY3Rpb24obikge1xuXHRcdFx0cmV0dXJuIHBsdWdpbkNsYXNzTmFtZSArIFwiLVwiICsgc3R5bGUubmFtZSArIFwiLVwiICsgbjtcblx0XHR9KS5qb2luKFwiIFwiKTtcblx0XHRyZXR1cm4gdGhpcy51c2VyQ29udGFpbmVyLmF0dHIoXCJjbGFzc1wiLCBjbGFzc2VzKTtcblx0fTtcblxuXHROb3RpZmljYXRpb24ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uKGRhdGEsIG9wdGlvbnMpIHtcblx0XHR2YXIgZCwgZGF0YXMsIG5hbWUsIHR5cGUsIHZhbHVlO1xuXHRcdGlmICgkLmlzUGxhaW5PYmplY3Qob3B0aW9ucykpIHtcblx0XHRcdCQuZXh0ZW5kKHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG5cdFx0fSBlbHNlIGlmICgkLnR5cGUob3B0aW9ucykgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdHRoaXMub3B0aW9ucy5jbGFzc05hbWUgPSBvcHRpb25zO1xuXHRcdH1cblx0XHRpZiAodGhpcy5jb250YWluZXIgJiYgIWRhdGEpIHtcblx0XHRcdHRoaXMuc2hvdyhmYWxzZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fSBlbHNlIGlmICghdGhpcy5jb250YWluZXIgJiYgIWRhdGEpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0ZGF0YXMgPSB7fTtcblx0XHRpZiAoJC5pc1BsYWluT2JqZWN0KGRhdGEpKSB7XG5cdFx0XHRkYXRhcyA9IGRhdGE7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRhdGFzW2JsYW5rRmllbGROYW1lXSA9IGRhdGE7XG5cdFx0fVxuXHRcdGZvciAobmFtZSBpbiBkYXRhcykge1xuXHRcdFx0ZCA9IGRhdGFzW25hbWVdO1xuXHRcdFx0dHlwZSA9IHRoaXMudXNlckZpZWxkc1tuYW1lXTtcblx0XHRcdGlmICghdHlwZSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlID09PSBcInRleHRcIikge1xuXHRcdFx0XHRkID0gZW5jb2RlKGQpO1xuXHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLmJyZWFrTmV3TGluZXMpIHtcblx0XHRcdFx0XHRkID0gZC5yZXBsYWNlKC9cXG4vZywgJzxici8+Jyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHZhbHVlID0gbmFtZSA9PT0gYmxhbmtGaWVsZE5hbWUgPyAnJyA6ICc9JyArIG5hbWU7XG5cdFx0XHRmaW5kKHRoaXMudXNlckNvbnRhaW5lciwgXCJbZGF0YS1ub3RpZnktXCIgKyB0eXBlICsgdmFsdWUgKyBcIl1cIikuaHRtbChkKTtcblx0XHR9XG5cdFx0dGhpcy51cGRhdGVDbGFzc2VzKCk7XG5cdFx0aWYgKHRoaXMuZWxlbSkge1xuXHRcdFx0dGhpcy5zZXRFbGVtZW50UG9zaXRpb24oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRHbG9iYWxQb3NpdGlvbigpO1xuXHRcdH1cblx0XHR0aGlzLnNob3codHJ1ZSk7XG5cdFx0aWYgKHRoaXMub3B0aW9ucy5hdXRvSGlkZSkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMuYXV0b2hpZGVUaW1lcik7XG5cdFx0XHR0aGlzLmF1dG9oaWRlVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMuc2hvdy5iaW5kKHRoaXMsIGZhbHNlKSwgdGhpcy5vcHRpb25zLmF1dG9IaWRlRGVsYXkpO1xuXHRcdH1cblx0fTtcblxuXHROb3RpZmljYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblx0XHR0aGlzLndyYXBwZXIuZGF0YShwbHVnaW5DbGFzc05hbWUsIG51bGwpO1xuXHRcdHRoaXMud3JhcHBlci5yZW1vdmUoKTtcblx0fTtcblxuXHQkW3BsdWdpbk5hbWVdID0gZnVuY3Rpb24oZWxlbSwgZGF0YSwgb3B0aW9ucykge1xuXHRcdGlmICgoZWxlbSAmJiBlbGVtLm5vZGVOYW1lKSB8fCBlbGVtLmpxdWVyeSkge1xuXHRcdFx0JChlbGVtKVtwbHVnaW5OYW1lXShkYXRhLCBvcHRpb25zKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0b3B0aW9ucyA9IGRhdGE7XG5cdFx0XHRkYXRhID0gZWxlbTtcblx0XHRcdG5ldyBOb3RpZmljYXRpb24obnVsbCwgZGF0YSwgb3B0aW9ucyk7XG5cdFx0fVxuXHRcdHJldHVybiBlbGVtO1xuXHR9O1xuXG5cdCQuZm5bcGx1Z2luTmFtZV0gPSBmdW5jdGlvbihkYXRhLCBvcHRpb25zKSB7XG5cdFx0JCh0aGlzKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHByZXYgPSBnZXRBbmNob3JFbGVtZW50KCQodGhpcykpLmRhdGEocGx1Z2luQ2xhc3NOYW1lKTtcblx0XHRcdGlmIChwcmV2KSB7XG5cdFx0XHRcdHByZXYuZGVzdHJveSgpO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGN1cnIgPSBuZXcgTm90aWZpY2F0aW9uKCQodGhpcyksIGRhdGEsIG9wdGlvbnMpO1xuXHRcdH0pO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdCQuZXh0ZW5kKCRbcGx1Z2luTmFtZV0sIHtcblx0XHRkZWZhdWx0czogZGVmYXVsdHMsXG5cdFx0YWRkU3R5bGU6IGFkZFN0eWxlLFxuXHRcdHJlbW92ZVN0eWxlOiByZW1vdmVTdHlsZSxcblx0XHRwbHVnaW5PcHRpb25zOiBwbHVnaW5PcHRpb25zLFxuXHRcdGdldFN0eWxlOiBnZXRTdHlsZSxcblx0XHRpbnNlcnRDU1M6IGluc2VydENTU1xuXHR9KTtcblxuXHQvL2Fsd2F5cyBpbmNsdWRlIHRoZSBkZWZhdWx0IGJvb3RzdHJhcCBzdHlsZVxuXHRhZGRTdHlsZShcImJvb3RzdHJhcFwiLCB7XG5cdFx0aHRtbDogXCI8ZGl2PlxcbjxzcGFuIGRhdGEtbm90aWZ5LXRleHQ+PC9zcGFuPlxcbjwvZGl2PlwiLFxuXHRcdGNsYXNzZXM6IHtcblx0XHRcdGJhc2U6IHtcblx0XHRcdFx0XCJmb250LXdlaWdodFwiOiBcImJvbGRcIixcblx0XHRcdFx0XCJwYWRkaW5nXCI6IFwiOHB4IDE1cHggOHB4IDE0cHhcIixcblx0XHRcdFx0XCJ0ZXh0LXNoYWRvd1wiOiBcIjAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpXCIsXG5cdFx0XHRcdFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIiNmY2Y4ZTNcIixcblx0XHRcdFx0XCJib3JkZXJcIjogXCIxcHggc29saWQgI2ZiZWVkNVwiLFxuXHRcdFx0XHRcImJvcmRlci1yYWRpdXNcIjogXCI0cHhcIixcblx0XHRcdFx0XCJ3aGl0ZS1zcGFjZVwiOiBcIm5vd3JhcFwiLFxuXHRcdFx0XHRcInBhZGRpbmctbGVmdFwiOiBcIjI1cHhcIixcblx0XHRcdFx0XCJiYWNrZ3JvdW5kLXJlcGVhdFwiOiBcIm5vLXJlcGVhdFwiLFxuXHRcdFx0XHRcImJhY2tncm91bmQtcG9zaXRpb25cIjogXCIzcHggN3B4XCJcblx0XHRcdH0sXG5cdFx0XHRlcnJvcjoge1xuXHRcdFx0XHRcImNvbG9yXCI6IFwiI0I5NEE0OFwiLFxuXHRcdFx0XHRcImJhY2tncm91bmQtY29sb3JcIjogXCIjRjJERURFXCIsXG5cdFx0XHRcdFwiYm9yZGVyLWNvbG9yXCI6IFwiI0VFRDNEN1wiLFxuXHRcdFx0XHRcImJhY2tncm91bmQtaW1hZ2VcIjogXCJ1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCUUFBQUFVQ0FZQUFBQ05pUjBOQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUF0UkpSRUZVZU5xa1ZjMXUwMEFRSHErZE9EKzBwb0lRZmtJamFsVzBTRUdxUk11Um5Ib3MzRGp3QUgwQXJseVFlQU5PT1NNZUFBNVZqeUJ4S0JRaGdTcFZVS0tRTkdsb0ZkdzRjV3cyanRmTU9uYTZKT1VBckRUYXpYaS9iM2RtNTVzb2NQcVFoRmthKythSEJzSThHc29wUkpFUk5GbFk4OEZDRWs5WWl3ZjhSaGdSeWFIRlFwUEhDRG1aRzVvWDJ1aTJ5aWxrY1RUMUFjRHNiWUMxTk1BeU9pN3pUWDJBZ3g3QTlsdUFsODhCYXVpaVEvY0phWlFmSXBBbG5nRGN2WlpNcmw4dkZQSzUrWGt0cldseDMvZWhaNXI5K3Q2ZStXVm5wMXB4bk5JamdCZTQvNmRBeXNRYzhkc21Id1BjVzlDMGgzZlcxaGFuczFsdHdKaHkwR3hLN1haYlVsTXA1V3cyZXlhbjYrZnQvZjJGQXFYR0s0Q3ZRazVIdWVGejdENkdPWnRJcksrc3J1cGR4MUdSQkJxTkJ0emMyQWlNcjduUHBsUmRLaGIxcTZxNnpqRmhya2xFRk9VdXRvUTUweGNYODZabHFhWnBRcmZiQmR1MlI2L0cxOXpYNlhTZ2g2Ulg1dWJ5SENNOG5xU0lENklDckdpWmpHWVl4b2pFc2l3NFBEd01TTDVWS3NDOFlmNFZSWUZ6TXpNYXh3amxKU2xDeUFROWwwQ1c0NFBCQUR6WGhlN3hNZGk5SHRUcmRZakZZa0RRTDBjbjRYZHEyL0VBRStJbkNudkFEVGYyZWFoNFN4OXZFeFFqa3FYVDZhQUVSSUNNZXdkL1VBcC9JZVlBTk0yam94dCtxNVZJK2llcTJpMFdnM2w2RE56SHdURVJQZ28xa283WEJYajN2ZGxzVDJGK1V1aEloWWtwN3U3Q2Fya2NyRk9DdFIzSDVKaXdiQUllSW1qVC9ZUUtLQnRHalJGQ1U1SVVnRlJlN2ZGNGNDTlZJUE1ZbzNWS3F4d2p5TkFYTmVwdW9weXFubGQ2MDJxVnNmUnBFa2t6K0dGTDF3UGo2eVNYQnBKdFdWYTV4bGhwY3loQk53cFpIbXRYOEFHZ2ZJRXhvMFpwemtXVlRCR2lYQ1NFYUhoNjIvUG9SMHAvdkhhY3p4WEduajRiU28rRzc4bEVMVTgwaDF1b2dCd1dMZjVZbHNQbWdERWQ0TTIzNnhqbSs4bm00SXVFLzl1Ky9QSDJKWFpmYnd6NHp3MVdiTytTUVBwWGZ3Ry9CQmdBaENOWmlTYi9wT1FBQUFBQVNVVk9SSzVDWUlJPSlcIlxuXHRcdFx0fSxcblx0XHRcdHN1Y2Nlc3M6IHtcblx0XHRcdFx0XCJjb2xvclwiOiBcIiM0Njg4NDdcIixcblx0XHRcdFx0XCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiI0RGRjBEOFwiLFxuXHRcdFx0XHRcImJvcmRlci1jb2xvclwiOiBcIiNENkU5QzZcIixcblx0XHRcdFx0XCJiYWNrZ3JvdW5kLWltYWdlXCI6IFwidXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVUNBWUFBQUNOaVIwTkFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBdXRKUkVGVWVOcTBsY3RQRTBFY3gzOHp1L1JGUzFFcnlxdGdKRkEwOFlDaU1aSUFRUTRlUkc4ZURHZFBKaVllVEl3SFRmd1BpQWN2WEl3WEx3b1hQYUR4a1dnUTZpc2xLbEpMU1FXTFVyYVBMVHY3R21lMzJ6b0Y5S1NUZkxPN3Y1M3ZaM2QvTTcvZkl0aCtJTzZJTnQyampvQTdiakhDSm9BbHpDUnc1OVl3SFlqQm5mTVBxQUtXUVlLakdrZkNKcUFGMHh3WmppcFF0QTNNeGVTRzg3VmhPT1llZ1ZyVUN5N1VaTTlTNlRMSWRBYW15U1RjbFpkWWhGaFJIbG9HWWc3bWdadjFaenp0dmd1ZDdWMXRiUTJ0d1lBMzRMSm1GNHA1ZFhGMUtUdWZuRStTeGVKdHVDWk5zTERDUVUwK1J5S1RGMjdVbncxMDFsOGU2aG5zM3UwUEJhbE9SVlZWa2NhRUtCSkRnVjMrY0dNNHRLS21JK29obElHbnlnS1gwMHJTQmZzenovbjJ1WHY4MXdkNitydDFvcnNaQ0hSZHIxSW1rMkYyS29iM2h1dFN4Vzh0aHNkOEFYTmFsbjlEN0NUZkE2TyswVWdrTXV3VnZFRkZVYmJBY3JrY1RBOCtBdE9rOEU2S2lRaURtTUZTRHFaSXRBekVWUXZpUmtkRGRhRmdQcDhIU1pLQUVBTDVRaDdTcTJsSUpCSnd2MnNjVXFrVW5Lb1pnTmhjREtoS2c1YUgrMUlrY291Q0FkRkdBUXN1V1pZaE9qd0ZIUTk2b2FnV2dSb1VvdjFUOWtSQkVPREF3eE0yUXRFVWwrV3ArTG45VlJvNkJjTXc0RXJIUllqSDQvQjI2QWxRb1FRVFJkSFd3Y2Q5QUg1NytVQVhkZHZERDM3RG1yQkJWMzRXZnFpWFBsNjFnK3ZyNnhBOXpzR2VNOWdPZHNOWGtncEV0VHdWdndPa2xYTEttNisvcDVlendrNEIrajZkcm9CczJDc0dhL2dOczZSSXhhemw0VGMyNW1wVGd3L2FwUFIxTFlsTlJGQXpnc094a3lYWUxJTTFWOE5Nd3lBa0pTY3REMWVHVktpcTV3V2pTUGRqbWVUa2lLdlZXNGYyWVBIV2wzR0FWcTZ5bWN5Q1Rnb3ZNM0Z6eVJpRGUyVGFLY0VLc0xwSnZOSGpaZ1BOcUV0eWk2bVpJbTRTUkZ5TE1Vc09OU1Nka1BlRnRZMW4wbWN6b1kzQkhUTGh3UFJ5OS9semN6aUN3OUFDSSt5cWwwVkx6Y0dBWmJZU001Q0NTWmcxLzlvYy9ubjcraThOOXAvOEFuNEpNQUR4aEgreEhmdWlLd0FBQUFCSlJVNUVya0pnZ2c9PSlcIlxuXHRcdFx0fSxcblx0XHRcdGluZm86IHtcblx0XHRcdFx0XCJjb2xvclwiOiBcIiMzQTg3QURcIixcblx0XHRcdFx0XCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiI0Q5RURGN1wiLFxuXHRcdFx0XHRcImJvcmRlci1jb2xvclwiOiBcIiNCQ0U4RjFcIixcblx0XHRcdFx0XCJiYWNrZ3JvdW5kLWltYWdlXCI6IFwidXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVUNBWUFBQUNOaVIwTkFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQjNSSlRVVUgzUVlGQWhrU3NkZXMvUUFBQThkSlJFRlVPTXZWbEd0TVcyVVl4Ly9QT2FXSFhnNmxMYVcweXBBdHcxVUNnYm5pTk9MY1ZPTG1Bakhab2xPWWx4bVRHWFZaZEFuUmZYUW0rN1NvVTRtWGFPYWlac0VwQzlGa2lRczZaNmJkQ25OWXJ1TTZLTkJ3NllXZXd6bDl6K3NISW1FV3Yrdno3WG1UOTVmLyszLys3d1A4MTR2K2VmRE9WMy9Tb1gzbEhBQSs2T0RlVUZmTWZqT1dNQURnZGsrZUVLejBwRjdhUWRNQWNPS0xManJjVk1WWDN4ZFdOMjkvR2hZUDdTdm5QMGNXZlM4Y2FTa2ZIWnNQRTlGZ250MDJKTnV0UTBRWUhCMmREejkvcEtYOFFqanVPOXhVeGQvNjZIZHhUZUNIWjNyb2pRT2JHUUJjdU5qZnBsa0QzYjE5WS82TXJpbVNhS2dTTW1wR1U1V2V2bUUvc3dhNk95NzN0UUhBMFJkcjJNbXYvNkExbjl3OXN1UTcwOTdaOWxNNEZsVGdURHJ6WlR1NFN0WFZmcGlJNDhyVmNVRE01Y21Fa3NyRm5IeGZwVHRVLzNCRlF6Q1FGLzJiWVZvTmJIN3ptSXRiU29NajQwSlN6bU15WDVxRHZyaUE3UWRySUlwQSszY2RzTXB1MG5YSThjVjBNdEtYQ1BaZXYrZ0NFTTFTMk5IUHZXZlAvaEwrN0ZTcjMrMHA1UkJFeWhFTjVKQ0tZcjhYbkFTTVQweEJOeXpRR1FlSThmanNHRDM5Uk1QazdzZTJiZDVadFR5b0ZZWGZ0RjZ5MzdneDdOZVV0SkpPVEZsQUhEWkxEdUlMVTNqMytINW9PckQzeVdiSXp0dWdhQXpnbkJLSnVCTHBHZlFyUzh3TzRGWmdWK2MxSXhhTGdXVlUwdE1MRUVUQ29zNHhNekVJdjljSlhRY3lhZ0l3aWdER3dKZ09BdEhBd0FoaXNRVWp5ME9SR0VSaUVMZ0c0aWFra3pvNE1ZQXhjTTVoQU1pMVdXRzF5WUNKSWNNVWFCa1ZSTGRHZVNVMjk5NVRMV3pjVUF6T05KN0o2RkJWQllJZ2dNem1GYnZkQlY0NENvcmc4dmpoekMrRUpFbDhVMWtKdGdZcmhDemdjL3Z2VHdYS1NpYjFwYVJGVlJWT1JEQUpBc3c1RnVUYUpFaFdNMlNIQjNtT0FsaGtOeHd1THplSnNHd3FXemY1VEZOZEtndFk1cUhwNlpGZjY3WS9zQVZhZENhVlk1WUFDRERiM09pNE5JakxuV013MlF0aENCSXNWaHNVVFU5dHZYc2plcTkrWDFkNzUvS0VzNExOT2ZjZGYvK0h0aE1udnd4T0Qwd21IYVhyN1pJdG4yd3VIMlNuQnpiWkFiUEp3cFB4K1ZRdXpjbTdkZ1JDQjU3YTF1QnpVRFJMNGJmbkkwUkUwZWFYZDlXODltcGpxSFpuVUk1SGgybDJka1paVWhPcXBpMnFTbXBPbVo2NFR1dTlxbHovU0VYbzZNRUhhM3dPaXA0NkYxbjc2MzNlZWtWOGRzOFd4am4zN1dsNjNWVmErZWo1b2VFWi84MlpCRVRKanBKMVJiaWoyRDNaLzF0clhVdkxzYmxDSzBYZk94MFNYMmtNc245ZFgrZCs3S2Y2aDhvNEFJeWt1ZmZqVDhMMjBMVSt3NEFaZDVWdkVQWStYcFdxTFYzMjdIUjdEelh1RG5EOHIrb3ZrQmVoSjhpK3k4WUFBQUFBU1VWT1JLNUNZSUk9KVwiXG5cdFx0XHR9LFxuXHRcdFx0d2Fybjoge1xuXHRcdFx0XHRcImNvbG9yXCI6IFwiI0MwOTg1M1wiLFxuXHRcdFx0XHRcImJhY2tncm91bmQtY29sb3JcIjogXCIjRkNGOEUzXCIsXG5cdFx0XHRcdFwiYm9yZGVyLWNvbG9yXCI6IFwiI0ZCRUVENVwiLFxuXHRcdFx0XHRcImJhY2tncm91bmQtaW1hZ2VcIjogXCJ1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCUUFBQUFVQ0FNQUFBQzZWKzAvQUFBQkpsQk1WRVhyNmViLzJvRC93aTcveGpyLzBtUC95a2YvdFFEL3ZCai8zbzcvdVEvL3Z5TC90d2ViaGdELzRwelgxSzN6OGUzNDl2SzZ0SENpbENXYmlReW1uMGpHd29ycjZkWFF6YTNIeGNLa24xdld2Vi81dVJmazRkWFoxYkQxOCsvNTJZZWJpQW15cjVTOW1oQ3pyV3E1dDZ1ZmpSSDU0YUxzMG9TK3FENzUxWHFQaEF5Ymh3WHN1akczc20rWmswUFR3RzZTaGcrUGhoT2Jod09QZ1FMNHpWMm5seXJmMjd1TGZnQ1BoUkh1N09tTGdBYWZreWlXa0QzbDQ5aWJpQWZUczBDK2xnQ25pd0Q0c2dESnhxT2lsekRXb3dXRmZBSDA4dWViaWc2cXBGSEJ2SC9hdzI2RmZRVFF6c3Z5OE95RWZ6MjByM2pBdmFLYmhnRzlxMG5jMkxiWnhYYW5vVXUvdTVXU2dnQ3RwMWFucEpLZG1Gei96bFgvMW5HSmlZbXVxNUR4NytzQUFBRG9QVVpTQUFBQUFYUlNUbE1BUU9iWVpnQUFBQUZpUzBkRUFJZ0ZIVWdBQUFBSmNFaFpjd0FBQ3hNQUFBc1RBUUNhbkJnQUFBQUhkRWxOUlFmZEJnVUJHaGg0YWFoNUFBQUFsa2xFUVZRWTAyTmdvQklJRThFVWN3bjFGa0lYTTFUajVkRFVRaFBVNTAyTWk3WFhReEd6NXVWSWpHT0pVVVVXODFIbllFeU1pMkhWY1VPSUNRWnpNTVlteHJFeU15bEp3Z1V0NUJsaldSTGptSm00cEkxaFlwNVNRTEdZeERnbUxuWk9WeHVvb0NsSURLZ1hLTWJONWdnVjFBQ0xKY2FCeE5nY29pR0NCaVp3ZFd4T0VUQkRyVHlFRmV5MGpZSjRlSGpNR1dnRUFJcFJGUkNVdDA4cUFBQUFBRWxGVGtTdVFtQ0MpXCJcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdCQoZnVuY3Rpb24oKSB7XG5cdFx0aW5zZXJ0Q1NTKGNvcmVTdHlsZS5jc3MpLmF0dHIoXCJpZFwiLCBcImNvcmUtbm90aWZ5XCIpO1xuXHRcdCQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuXCIgKyBwbHVnaW5DbGFzc05hbWUgKyBcIi1oaWRhYmxlXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdCQodGhpcykudHJpZ2dlcihcIm5vdGlmeS1oaWRlXCIpO1xuXHRcdH0pO1xuXHRcdCQoZG9jdW1lbnQpLm9uKFwibm90aWZ5LWhpZGVcIiwgXCIuXCIgKyBwbHVnaW5DbGFzc05hbWUgKyBcIi13cmFwcGVyXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdHZhciBlbGVtID0gJCh0aGlzKS5kYXRhKHBsdWdpbkNsYXNzTmFtZSk7XG5cdFx0XHRpZihlbGVtKSB7XG5cdFx0XHRcdGVsZW0uc2hvdyhmYWxzZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xuXG59KSk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciAkcGFyc2VJbnQgPSBnbG9iYWwucGFyc2VJbnQ7XG52YXIgaGV4ID0gL15bKy1dPzBbWHhdLztcbnZhciBGT1JDRUQgPSAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMDgnKSAhPT0gOCB8fCAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMHgxNicpICE9PSAyMjtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXBhcnNlaW50LXN0cmluZy1yYWRpeFxubW9kdWxlLmV4cG9ydHMgPSBGT1JDRUQgPyBmdW5jdGlvbiBwYXJzZUludChzdHJpbmcsIHJhZGl4KSB7XG4gIHZhciBTID0gdHJpbShTdHJpbmcoc3RyaW5nKSk7XG4gIHJldHVybiAkcGFyc2VJbnQoUywgKHJhZGl4ID4+PiAwKSB8fCAoaGV4LnRlc3QoUykgPyAxNiA6IDEwKSk7XG59IDogJHBhcnNlSW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZmluZDtcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC11c2VzLXRvLWxlbmd0aCcpO1xuXG52YXIgRklORCA9ICdmaW5kJztcbnZhciBTS0lQU19IT0xFUyA9IHRydWU7XG5cbnZhciBVU0VTX1RPX0xFTkdUSCA9IGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoKEZJTkQpO1xuXG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuaWYgKEZJTkQgaW4gW10pIEFycmF5KDEpW0ZJTkRdKGZ1bmN0aW9uICgpIHsgU0tJUFNfSE9MRVMgPSBmYWxzZTsgfSk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmluZGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogU0tJUFNfSE9MRVMgfHwgIVVTRVNfVE9fTEVOR1RIIH0sIHtcbiAgZmluZDogZnVuY3Rpb24gZmluZChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcyhGSU5EKTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgRnVuY3Rpb25Qcm90b3R5cGVUb1N0cmluZyA9IEZ1bmN0aW9uUHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIG5hbWVSRSA9IC9eXFxzKmZ1bmN0aW9uIChbXiAoXSopLztcbnZhciBOQU1FID0gJ25hbWUnO1xuXG4vLyBGdW5jdGlvbiBpbnN0YW5jZXMgYC5uYW1lYCBwcm9wZXJ0eVxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZnVuY3Rpb24taW5zdGFuY2VzLW5hbWVcbmlmIChERVNDUklQVE9SUyAmJiAhKE5BTUUgaW4gRnVuY3Rpb25Qcm90b3R5cGUpKSB7XG4gIGRlZmluZVByb3BlcnR5KEZ1bmN0aW9uUHJvdG90eXBlLCBOQU1FLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEZ1bmN0aW9uUHJvdG90eXBlVG9TdHJpbmcuY2FsbCh0aGlzKS5tYXRjaChuYW1lUkUpWzFdO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBwYXJzZUludEltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL251bWJlci1wYXJzZS1pbnQnKTtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXBhcnNlaW50LXN0cmluZy1yYWRpeFxuJCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiBwYXJzZUludCAhPSBwYXJzZUludEltcGxlbWVudGF0aW9uIH0sIHtcbiAgcGFyc2VJbnQ6IHBhcnNlSW50SW1wbGVtZW50YXRpb25cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcbnZhciBpc1JlZ0V4cCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1yZWdleHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkdmFuY2Utc3RyaW5nLWluZGV4Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgY2FsbFJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIGFycmF5UHVzaCA9IFtdLnB1c2g7XG52YXIgbWluID0gTWF0aC5taW47XG52YXIgTUFYX1VJTlQzMiA9IDB4RkZGRkZGRkY7XG5cbi8vIGJhYmVsLW1pbmlmeSB0cmFuc3BpbGVzIFJlZ0V4cCgneCcsICd5JykgLT4gL3gveSBhbmQgaXQgY2F1c2VzIFN5bnRheEVycm9yXG52YXIgU1VQUE9SVFNfWSA9ICFmYWlscyhmdW5jdGlvbiAoKSB7IHJldHVybiAhUmVnRXhwKE1BWF9VSU5UMzIsICd5Jyk7IH0pO1xuXG4vLyBAQHNwbGl0IGxvZ2ljXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygnc3BsaXQnLCAyLCBmdW5jdGlvbiAoU1BMSVQsIG5hdGl2ZVNwbGl0LCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgdmFyIGludGVybmFsU3BsaXQ7XG4gIGlmIChcbiAgICAnYWJiYycuc3BsaXQoLyhiKSovKVsxXSA9PSAnYycgfHxcbiAgICAndGVzdCcuc3BsaXQoLyg/OikvLCAtMSkubGVuZ3RoICE9IDQgfHxcbiAgICAnYWInLnNwbGl0KC8oPzphYikqLykubGVuZ3RoICE9IDIgfHxcbiAgICAnLicuc3BsaXQoLyguPykoLj8pLykubGVuZ3RoICE9IDQgfHxcbiAgICAnLicuc3BsaXQoLygpKCkvKS5sZW5ndGggPiAxIHx8XG4gICAgJycuc3BsaXQoLy4/LykubGVuZ3RoXG4gICkge1xuICAgIC8vIGJhc2VkIG9uIGVzNS1zaGltIGltcGxlbWVudGF0aW9uLCBuZWVkIHRvIHJld29yayBpdFxuICAgIGludGVybmFsU3BsaXQgPSBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgdmFyIHN0cmluZyA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpKTtcbiAgICAgIHZhciBsaW0gPSBsaW1pdCA9PT0gdW5kZWZpbmVkID8gTUFYX1VJTlQzMiA6IGxpbWl0ID4+PiAwO1xuICAgICAgaWYgKGxpbSA9PT0gMCkgcmV0dXJuIFtdO1xuICAgICAgaWYgKHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkKSByZXR1cm4gW3N0cmluZ107XG4gICAgICAvLyBJZiBgc2VwYXJhdG9yYCBpcyBub3QgYSByZWdleCwgdXNlIG5hdGl2ZSBzcGxpdFxuICAgICAgaWYgKCFpc1JlZ0V4cChzZXBhcmF0b3IpKSB7XG4gICAgICAgIHJldHVybiBuYXRpdmVTcGxpdC5jYWxsKHN0cmluZywgc2VwYXJhdG9yLCBsaW0pO1xuICAgICAgfVxuICAgICAgdmFyIG91dHB1dCA9IFtdO1xuICAgICAgdmFyIGZsYWdzID0gKHNlcGFyYXRvci5pZ25vcmVDYXNlID8gJ2knIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IubXVsdGlsaW5lID8gJ20nIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IudW5pY29kZSA/ICd1JyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLnN0aWNreSA/ICd5JyA6ICcnKTtcbiAgICAgIHZhciBsYXN0TGFzdEluZGV4ID0gMDtcbiAgICAgIC8vIE1ha2UgYGdsb2JhbGAgYW5kIGF2b2lkIGBsYXN0SW5kZXhgIGlzc3VlcyBieSB3b3JraW5nIHdpdGggYSBjb3B5XG4gICAgICB2YXIgc2VwYXJhdG9yQ29weSA9IG5ldyBSZWdFeHAoc2VwYXJhdG9yLnNvdXJjZSwgZmxhZ3MgKyAnZycpO1xuICAgICAgdmFyIG1hdGNoLCBsYXN0SW5kZXgsIGxhc3RMZW5ndGg7XG4gICAgICB3aGlsZSAobWF0Y2ggPSByZWdleHBFeGVjLmNhbGwoc2VwYXJhdG9yQ29weSwgc3RyaW5nKSkge1xuICAgICAgICBsYXN0SW5kZXggPSBzZXBhcmF0b3JDb3B5Lmxhc3RJbmRleDtcbiAgICAgICAgaWYgKGxhc3RJbmRleCA+IGxhc3RMYXN0SW5kZXgpIHtcbiAgICAgICAgICBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCwgbWF0Y2guaW5kZXgpKTtcbiAgICAgICAgICBpZiAobWF0Y2gubGVuZ3RoID4gMSAmJiBtYXRjaC5pbmRleCA8IHN0cmluZy5sZW5ndGgpIGFycmF5UHVzaC5hcHBseShvdXRwdXQsIG1hdGNoLnNsaWNlKDEpKTtcbiAgICAgICAgICBsYXN0TGVuZ3RoID0gbWF0Y2hbMF0ubGVuZ3RoO1xuICAgICAgICAgIGxhc3RMYXN0SW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgICAgaWYgKG91dHB1dC5sZW5ndGggPj0gbGltKSBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VwYXJhdG9yQ29weS5sYXN0SW5kZXggPT09IG1hdGNoLmluZGV4KSBzZXBhcmF0b3JDb3B5Lmxhc3RJbmRleCsrOyAvLyBBdm9pZCBhbiBpbmZpbml0ZSBsb29wXG4gICAgICB9XG4gICAgICBpZiAobGFzdExhc3RJbmRleCA9PT0gc3RyaW5nLmxlbmd0aCkge1xuICAgICAgICBpZiAobGFzdExlbmd0aCB8fCAhc2VwYXJhdG9yQ29weS50ZXN0KCcnKSkgb3V0cHV0LnB1c2goJycpO1xuICAgICAgfSBlbHNlIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4KSk7XG4gICAgICByZXR1cm4gb3V0cHV0Lmxlbmd0aCA+IGxpbSA/IG91dHB1dC5zbGljZSgwLCBsaW0pIDogb3V0cHV0O1xuICAgIH07XG4gIC8vIENoYWtyYSwgVjhcbiAgfSBlbHNlIGlmICgnMCcuc3BsaXQodW5kZWZpbmVkLCAwKS5sZW5ndGgpIHtcbiAgICBpbnRlcm5hbFNwbGl0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgIHJldHVybiBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCAmJiBsaW1pdCA9PT0gMCA/IFtdIDogbmF0aXZlU3BsaXQuY2FsbCh0aGlzLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICB9O1xuICB9IGVsc2UgaW50ZXJuYWxTcGxpdCA9IG5hdGl2ZVNwbGl0O1xuXG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc3BsaXRgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc3BsaXRcbiAgICBmdW5jdGlvbiBzcGxpdChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgc3BsaXR0ZXIgPSBzZXBhcmF0b3IgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VwYXJhdG9yW1NQTElUXTtcbiAgICAgIHJldHVybiBzcGxpdHRlciAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gc3BsaXR0ZXIuY2FsbChzZXBhcmF0b3IsIE8sIGxpbWl0KVxuICAgICAgICA6IGludGVybmFsU3BsaXQuY2FsbChTdHJpbmcoTyksIHNlcGFyYXRvciwgbGltaXQpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBzcGxpdFxuICAgIC8vXG4gICAgLy8gTk9URTogVGhpcyBjYW5ub3QgYmUgcHJvcGVybHkgcG9seWZpbGxlZCBpbiBlbmdpbmVzIHRoYXQgZG9uJ3Qgc3VwcG9ydFxuICAgIC8vIHRoZSAneScgZmxhZy5cbiAgICBmdW5jdGlvbiAocmVnZXhwLCBsaW1pdCkge1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShpbnRlcm5hbFNwbGl0LCByZWdleHAsIHRoaXMsIGxpbWl0LCBpbnRlcm5hbFNwbGl0ICE9PSBuYXRpdmVTcGxpdCk7XG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHJlZ2V4cCk7XG4gICAgICB2YXIgUyA9IFN0cmluZyh0aGlzKTtcbiAgICAgIHZhciBDID0gc3BlY2llc0NvbnN0cnVjdG9yKHJ4LCBSZWdFeHApO1xuXG4gICAgICB2YXIgdW5pY29kZU1hdGNoaW5nID0gcngudW5pY29kZTtcbiAgICAgIHZhciBmbGFncyA9IChyeC5pZ25vcmVDYXNlID8gJ2knIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChyeC5tdWx0aWxpbmUgPyAnbScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHJ4LnVuaWNvZGUgPyAndScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKFNVUFBPUlRTX1kgPyAneScgOiAnZycpO1xuXG4gICAgICAvLyBeKD8gKyByeCArICkgaXMgbmVlZGVkLCBpbiBjb21iaW5hdGlvbiB3aXRoIHNvbWUgUyBzbGljaW5nLCB0b1xuICAgICAgLy8gc2ltdWxhdGUgdGhlICd5JyBmbGFnLlxuICAgICAgdmFyIHNwbGl0dGVyID0gbmV3IEMoU1VQUE9SVFNfWSA/IHJ4IDogJ14oPzonICsgcnguc291cmNlICsgJyknLCBmbGFncyk7XG4gICAgICB2YXIgbGltID0gbGltaXQgPT09IHVuZGVmaW5lZCA/IE1BWF9VSU5UMzIgOiBsaW1pdCA+Pj4gMDtcbiAgICAgIGlmIChsaW0gPT09IDApIHJldHVybiBbXTtcbiAgICAgIGlmIChTLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGNhbGxSZWdFeHBFeGVjKHNwbGl0dGVyLCBTKSA9PT0gbnVsbCA/IFtTXSA6IFtdO1xuICAgICAgdmFyIHAgPSAwO1xuICAgICAgdmFyIHEgPSAwO1xuICAgICAgdmFyIEEgPSBbXTtcbiAgICAgIHdoaWxlIChxIDwgUy5sZW5ndGgpIHtcbiAgICAgICAgc3BsaXR0ZXIubGFzdEluZGV4ID0gU1VQUE9SVFNfWSA/IHEgOiAwO1xuICAgICAgICB2YXIgeiA9IGNhbGxSZWdFeHBFeGVjKHNwbGl0dGVyLCBTVVBQT1JUU19ZID8gUyA6IFMuc2xpY2UocSkpO1xuICAgICAgICB2YXIgZTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHogPT09IG51bGwgfHxcbiAgICAgICAgICAoZSA9IG1pbih0b0xlbmd0aChzcGxpdHRlci5sYXN0SW5kZXggKyAoU1VQUE9SVFNfWSA/IDAgOiBxKSksIFMubGVuZ3RoKSkgPT09IHBcbiAgICAgICAgKSB7XG4gICAgICAgICAgcSA9IGFkdmFuY2VTdHJpbmdJbmRleChTLCBxLCB1bmljb2RlTWF0Y2hpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEEucHVzaChTLnNsaWNlKHAsIHEpKTtcbiAgICAgICAgICBpZiAoQS5sZW5ndGggPT09IGxpbSkgcmV0dXJuIEE7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gei5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIEEucHVzaCh6W2ldKTtcbiAgICAgICAgICAgIGlmIChBLmxlbmd0aCA9PT0gbGltKSByZXR1cm4gQTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcSA9IHAgPSBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBBLnB1c2goUy5zbGljZShwKSk7XG4gICAgICByZXR1cm4gQTtcbiAgICB9XG4gIF07XG59LCAhU1VQUE9SVFNfWSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG5cbnZhciBzbGljZSA9IFtdLnNsaWNlO1xudmFyIE1TSUUgPSAvTVNJRSAuXFwuLy50ZXN0KHVzZXJBZ2VudCk7IC8vIDwtIGRpcnR5IGllOS0gY2hlY2tcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAoc2NoZWR1bGVyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaGFuZGxlciwgdGltZW91dCAvKiAsIC4uLmFyZ3VtZW50cyAqLykge1xuICAgIHZhciBib3VuZEFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgICB2YXIgYXJncyA9IGJvdW5kQXJncyA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKSA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc2NoZWR1bGVyKGJvdW5kQXJncyA/IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgICAgKHR5cGVvZiBoYW5kbGVyID09ICdmdW5jdGlvbicgPyBoYW5kbGVyIDogRnVuY3Rpb24oaGFuZGxlcikpLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0gOiBoYW5kbGVyLCB0aW1lb3V0KTtcbiAgfTtcbn07XG5cbi8vIGllOS0gc2V0VGltZW91dCAmIHNldEludGVydmFsIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjdGltZXJzXG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IE1TSUUgfSwge1xuICAvLyBgc2V0VGltZW91dGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldHRpbWVvdXRcbiAgc2V0VGltZW91dDogd3JhcChnbG9iYWwuc2V0VGltZW91dCksXG4gIC8vIGBzZXRJbnRlcnZhbGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldGludGVydmFsXG4gIHNldEludGVydmFsOiB3cmFwKGdsb2JhbC5zZXRJbnRlcnZhbClcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==