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
  //ici ajax tag
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
      async: true,
      success: function success(data, status) {
        $("#menu_area").notify("Tags Successfully Added :  \n" + $("#selecttag option:selected").toArray().map(function (item) {
          return item.text;
        }).join('\n'), {
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
        });
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

  $("#applytemplate").on('click', function () {
    console.log('templates:' + JSON.stringify($("#selecttemplate").val()));
    console.log('designs:' + JSON.stringify($("#table").bootstrapTable('getSelections')));
    $.ajax({
      url: "/design/design/ajaxaddtemplate",
      type: 'POST',
      data: {
        templates: JSON.stringify($("#selecttemplate").val()),
        designs: JSON.stringify($("#table").bootstrapTable('getSelections'))
      },
      dataType: 'json',
      success: function success(data, status) {
        $("#menu_area").notify("Templates Successfully Added :  \n" + $("#selecttemplate option:selected").toArray().map(function (item) {
          return item.text;
        }).join('\n'), {
          position: "bottom right",
          className: "success"
        });
        $.each(JSON.parse(data), function (key, design) {
          var templatelist = "";
          $.each(design.templates, function (t, template) {
            templatelist += "<span class='templatelabel'><span href='/design/design/ajaxunlinktemplate/" + design.id + "/" + template.id + "' templateid='" + template.id + "' templatename='" + template.name + "' class='closebtn unlinktemplatebtn'>×</span>" + template.name + "</span>";
          });
          $('#table').bootstrapTable('updateCellByUniqueId', {
            id: design.id,
            field: 'templates',
            value: templatelist
          });
          majactivetemplates();
        }); // $('#table tbody').find('.selected').remove();
        // $('#table tbody').prepend(data);
        // $('#table').bootstrapTable('refresh');
      },
      error: function error(data, status, message) {
        $("#menu_area").notify("Adding Templates Failed :  \n" + $("#selecttemplate option:selected").toArray().map(function (item) {
          return item.text;
        }).join('\n'), {
          position: "bottom right",
          className: "error"
        });
      }
    });
  });
  $(document).on('click', '.unlinktemplatefromselectionbtn', function (event) {
    console.log($(this).attr('href'));
    $.ajax({
      url: $(this).attr('href'),
      type: 'POST',
      data: {
        designs: JSON.stringify($("#table").bootstrapTable('getSelections'))
      },
      success: function success(data, status) {
        $("#menu_area").notify("Template Successfully Deleted", {
          position: "bottom right",
          className: "success"
        });
        $.each(JSON.parse(data), function (key, design) {
          var templatelist = "";
          $.each(design.templates, function (t, template) {
            templatelist += "<span class='templatelabel'><span href='/design/design/ajaxunlinktemplate/" + design.id + "/" + template.id + "' templateid='" + template.id + "' templatename='" + template.name + "' class='closebtn unlinktemplatebtn'>×</span>" + template.name + "</span>";
          });
          $('#table').bootstrapTable('updateCellByUniqueId', {
            id: design.id,
            field: 'templates',
            value: templatelist
          });
          majactivetemplates();
        }); // $('#table tbody').find('.selected').remove();
        // $('#table tbody').prepend(data);
        // $('#table').bootstrapTable('refresh');
      },
      error: function error(data, status, message) {
        $("#menu_area").notify("Template Deletion Failed", {
          position: "bottom right",
          className: "error"
        });
      }
    });
  });
  $(document).on('click', '.unlinktemplatebtn', function (event) {
    $.ajax({
      url: $(this).attr('href'),
      type: 'POST',
      success: function success(data, status) {
        $("#menu_area").notify("Template Successfully Deleted", {
          position: "bottom right",
          className: "success"
        });
        var design = JSON.parse(data); //$('#table').bootstrapTable('removeByUniqueId', design.id);

        var templatelist = "";
        $.each(design.templates, function (t, template) {
          templatelist += "<span class='templatelabel'><span href='/design/design/ajaxunlinktemplate/" + design.id + "/" + template.id + "' templateid='" + template.id + "' templatename='" + template.name + "' class='closebtn unlinktemplatebtn'>×</span>" + template.name + "</span>";
        });
        $('#table').bootstrapTable('updateCellByUniqueId', {
          id: design.id,
          field: 'templates',
          value: templatelist
        });
        majactivetemplates();
      },
      error: function error(data, status, message) {
        $("#menu_area").notify("Template Deletion Failed", {
          position: "bottom right",
          className: "error"
        });
      }
    });
  });
  $('#table').on('check.bs.table uncheck.bs.table uncheck-all.bs.table check-all.bs.table', majactivetemplates); //ici ajax model

  $("#applymodel").on('click', function () {
    console.log('models:' + JSON.stringify($("#selectmodel").val()));
    console.log('designs:' + JSON.stringify($("#table").bootstrapTable('getSelections')));
    $.ajax({
      url: "/design/design/ajaxaddmodel",
      type: 'POST',
      data: {
        models: JSON.stringify($("#selectmodel").val()),
        designs: JSON.stringify($("#table").bootstrapTable('getSelections'))
      },
      dataType: 'json',
      success: function success(data, status) {
        $("#menu_area").notify("models Successfully Added :  \n" + $("#selectmodel option:selected").toArray().map(function (item) {
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
          var modellist = "";
          $.each(design.models, function (t, model) {
            modellist += "<span class='modellabel'><span href='/design/design/ajaxunlinkmodel/" + design.id + "/" + model.id + "' modelid='" + model.id + "' modelname='" + model.name + "' class='closebtn unlinkmodelbtn'>×</span>" + model.name + "</span>";
          });
          $('#table').bootstrapTable('updateCellByUniqueId', {
            id: design.id,
            field: 'models',
            value: modellist
          });
          majactivemodels();
        }); // $('#table tbody').find('.selected').remove();
        // $('#table tbody').prepend(data);
        // $('#table').bootstrapTable('refresh');
      },
      error: function error(data, status, message) {
        $("#menu_area").notify("Adding models Failed :  \n" + $("#selectmodel option:selected").toArray().map(function (item) {
          return item.text;
        }).join('\n'), {
          position: "bottom right",
          className: "error"
        });
      }
    });
  });
  $(document).on('click', '.unlinkmodelfromselectionbtn', function (event) {
    console.log($(this).attr('href'));
    $.ajax({
      url: $(this).attr('href'),
      type: 'POST',
      data: {
        designs: JSON.stringify($("#table").bootstrapTable('getSelections'))
      },
      success: function success(data, status) {
        $("#menu_area").notify("model Successfully Deleted", {
          position: "bottom right",
          className: "success"
        });
        $.each(JSON.parse(data), function (key, design) {
          var modellist = "";
          $.each(design.models, function (t, model) {
            modellist += "<span class='modellabel'><span href='/design/design/ajaxunlinkmodel/" + design.id + "/" + model.id + "' modelid='" + model.id + "' modelname='" + model.name + "' class='closebtn unlinkmodelbtn'>×</span>" + model.name + "</span>";
          });
          $('#table').bootstrapTable('updateCellByUniqueId', {
            id: design.id,
            field: 'models',
            value: modellist
          });
          majactivemodels();
        }); // $('#table tbody').find('.selected').remove();
        // $('#table tbody').prepend(data);
        // $('#table').bootstrapTable('refresh');
      },
      error: function error(data, status, message) {
        $("#menu_area").notify("model Deletion Failed", {
          position: "bottom right",
          className: "error"
        });
      }
    });
  });
  $(document).on('click', '.unlinkmodelbtn', function (event) {
    $.ajax({
      url: $(this).attr('href'),
      type: 'POST',
      success: function success(data, status) {
        $("#menu_area").notify("model Successfully Deleted", {
          position: "bottom right",
          className: "success"
        });
        var design = JSON.parse(data); //$('#table').bootstrapTable('removeByUniqueId', design.id);

        var modellist = "";
        $.each(design.models, function (t, model) {
          modellist += "<span class='modellabel'><span href='/design/design/ajaxunlinkmodel/" + design.id + "/" + model.id + "' modelid='" + model.id + "' modelname='" + model.name + "' class='closebtn unlinkmodelbtn'>×</span>" + model.name + "</span>";
        });
        $('#table').bootstrapTable('updateCellByUniqueId', {
          id: design.id,
          field: 'models',
          value: modellist
        });
        majactivemodels();
      },
      error: function error(data, status, message) {
        $("#menu_area").notify("model Deletion Failed", {
          position: "bottom right",
          className: "error"
        });
      }
    });
  });
  $('#table').on('check.bs.table uncheck.bs.table uncheck-all.bs.table check-all.bs.table', majactivemodels);
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

function majactivetemplates() {
  var rowlist = $('#table').bootstrapTable('getSelections');
  var templatelist = '';
  var templates = [];
  $.each(rowlist, function (r, row) {
    //        $.merge(tags, cleantags(row.tags));
    $.each($(row.templates).find('.unlinktemplatebtn'), function (s, span) {
      if (jQuery.inArray($(span).attr('templatename'), templates) === -1) {
        templates.push($(span).attr('templatename'));
        templatelist += "<span class='templatelabel'><span href='/design/design/ajaxunlinktemplatefromselection/" + $(span).attr('templateid') + "' templateid='" + $(span).attr('templateid') + "' templatename='" + $(span).attr('templatename') + "' class='closebtn unlinktemplatefromselectionbtn'>×</span>" + $(span).attr('templatename') + "</span>";
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

  $('#activetemplates').html(templatelist);
}

function majactivemodels() {
  var rowlist = $('#table').bootstrapTable('getSelections');
  var modellist = '';
  var models = [];
  $.each(rowlist, function (r, row) {
    //        $.merge(tags, cleantags(row.tags));
    $.each($(row.models).find('.unlinkmodelbtn'), function (s, span) {
      if (jQuery.inArray($(span).attr('modelname'), models) === -1) {
        models.push($(span).attr('modelname'));
        modellist += "<span class='modellabel'><span href='/design/design/ajaxunlinkmodelfromselection/" + $(span).attr('modelid') + "' modelid='" + $(span).attr('modelid') + "' modelname='" + $(span).attr('modelname') + "' class='closebtn unlinkmodelfromselectionbtn'>×</span>" + $(span).attr('modelname') + "</span>";
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

  $('#activemodels').html(modellist);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2Rlc2lnbi9kZXNpZ24vaW5kZXguY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9kZXNpZ24vZGVzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmZ1bmN0aW9uLm5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuc3BsaXQuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJvbiIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImF0dHIiLCJhamF4IiwidXJsIiwidHlwZSIsImRhdGEiLCJkZXNpZ25zIiwiSlNPTiIsInN0cmluZ2lmeSIsImJvb3RzdHJhcFRhYmxlIiwic3VjY2VzcyIsInN0YXR1cyIsIm5vdGlmeSIsInBvc2l0aW9uIiwiY2xhc3NOYW1lIiwiZWFjaCIsInBhcnNlIiwia2V5IiwiZGVzaWduIiwidGFnbGlzdCIsInRhZ3MiLCJ0IiwidGFnIiwiaWQiLCJuYW1lIiwiZmllbGQiLCJ2YWx1ZSIsIm1hamFjdGl2ZXRhZ3MiLCJlcnJvciIsIm1lc3NhZ2UiLCJ2YWwiLCJkYXRhVHlwZSIsImFzeW5jIiwidG9BcnJheSIsIm1hcCIsIml0ZW0iLCJ0ZXh0Iiwiam9pbiIsInRlbXBsYXRlcyIsInRlbXBsYXRlbGlzdCIsInRlbXBsYXRlIiwibWFqYWN0aXZldGVtcGxhdGVzIiwibW9kZWxzIiwibW9kZWxsaXN0IiwibW9kZWwiLCJtYWphY3RpdmVtb2RlbHMiLCJjbGVhbnRhZ3MiLCJteXN0cmluZyIsInJlcyIsInJlcGxhY2UiLCJzcGxpdCIsImNsZWFucmVzIiwicHVzaCIsInRyaW0iLCJmaWx0ZXIiLCJ1bmlxdWUiLCJhcnJheSIsImdyZXAiLCJlbCIsImluZGV4IiwiaW5BcnJheSIsInJvd2xpc3QiLCJyIiwicm93IiwiZmluZCIsInMiLCJzcGFuIiwialF1ZXJ5IiwiaHRtbCIsImh0bWxUb0VsZW1lbnRzIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImNvbnRlbnQiLCJjaGlsZE5vZGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFFQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFZO0FBRTFCO0FBQ0FGLEdBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlFLEVBQVosQ0FBZSxPQUFmLEVBQXdCLDRCQUF4QixFQUFzRCxVQUFVQyxLQUFWLEVBQWlCO0FBRW5FQyxXQUFPLENBQUNDLEdBQVIsQ0FBWU4sQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTyxJQUFSLENBQWEsTUFBYixDQUFaO0FBQ0FQLEtBQUMsQ0FBQ1EsSUFBRixDQUFPO0FBQ0hDLFNBQUcsRUFBRVQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTyxJQUFSLENBQWEsTUFBYixDQURGO0FBRUhHLFVBQUksRUFBRSxNQUZIO0FBR0hDLFVBQUksRUFBRTtBQUNGQyxlQUFPLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlZCxDQUFDLENBQUMsUUFBRCxDQUFELENBQVllLGNBQVosQ0FBMkIsZUFBM0IsQ0FBZjtBQURQLE9BSEg7QUFNSEMsYUFBTyxFQUFFLGlCQUFVTCxJQUFWLEVBQWdCTSxNQUFoQixFQUF3QjtBQUM3QmpCLFNBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JrQixNQUFoQixDQUF1QiwwQkFBdkIsRUFBbUQ7QUFDL0NDLGtCQUFRLEVBQUUsY0FEcUM7QUFFL0NDLG1CQUFTLEVBQUU7QUFGb0MsU0FBbkQ7QUFLQXBCLFNBQUMsQ0FBQ3FCLElBQUYsQ0FBT1IsSUFBSSxDQUFDUyxLQUFMLENBQVdYLElBQVgsQ0FBUCxFQUF5QixVQUFVWSxHQUFWLEVBQWVD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QUFDbkUseUJBQXlCLG1CQUFPLENBQUMsbUdBQW1DO0FBQ3BFLGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MscUJBQXFCLG1CQUFPLENBQUMsbUdBQW1DO0FBQ2hFLGlCQUFpQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNuRCxZQUFZLG1CQUFPLENBQUMscUVBQW9COztBQUV4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsaUNBQWlDLEVBQUU7O0FBRXhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRTtBQUMvRTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSx5QkFBeUIsbUJBQW1CO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJkZXNpZ25fZGVzaWduX2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuLi8uLi8uLi9jc3MvZGVzaWduL2Rlc2lnbi9pbmRleC5jc3MnO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIC8vaWNpIGFqYXggdGFnXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnVubGlua3RhZ2Zyb21zZWxlY3Rpb25idG4nLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJCh0aGlzKS5hdHRyKCdocmVmJykpO1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogJCh0aGlzKS5hdHRyKCdocmVmJyksXHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgZGVzaWduczogSlNPTi5zdHJpbmdpZnkoJChcIiN0YWJsZVwiKS5ib290c3RyYXBUYWJsZSgnZ2V0U2VsZWN0aW9ucycpKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSwgc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI21lbnVfYXJlYVwiKS5ub3RpZnkoXCJUYWcgU3VjY2Vzc2Z1bGx5IERlbGV0ZWRcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbSByaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJzdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICQuZWFjaChKU09OLnBhcnNlKGRhdGEpLCBmdW5jdGlvbiAoa2V5LCBkZXNpZ24pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhZ2xpc3QgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkLmVhY2goZGVzaWduLnRhZ3MsIGZ1bmN0aW9uICh0LCB0YWcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnbGlzdCArPSBcIjxzcGFuIGNsYXNzPSd0YWdsYWJlbCc+PHNwYW4gaHJlZj0nL2Rlc2lnbi9kZXNpZ24vYWpheHVubGlua3RhZy9cIiArIGRlc2lnbi5pZCArIFwiL1wiICsgdGFnLmlkICsgXCInIHRhZ2lkPSdcIiArIHRhZy5pZCArIFwiJyB0YWduYW1lPSdcIiArIHRhZy5uYW1lICsgXCInIGNsYXNzPSdjbG9zZWJ0biB1bmxpbmt0YWdidG4nPsOXPC9zcGFuPlwiICsgdGFnLm5hbWUgKyBcIjwvc3Bhbj5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI3RhYmxlJykuYm9vdHN0cmFwVGFibGUoJ3VwZGF0ZUNlbGxCeVVuaXF1ZUlkJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogZGVzaWduLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ3RhZ3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGFnbGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBtYWphY3RpdmV0YWdzKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vICQoJyN0YWJsZSB0Ym9keScpLmZpbmQoJy5zZWxlY3RlZCcpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gJCgnI3RhYmxlIHRib2R5JykucHJlcGVuZChkYXRhKTtcclxuICAgICAgICAgICAgICAgIC8vICQoJyN0YWJsZScpLmJvb3RzdHJhcFRhYmxlKCdyZWZyZXNoJyk7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjpcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMsIG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI21lbnVfYXJlYVwiKS5ub3RpZnkoXCJUYWcgRGVsZXRpb24gRmFpbGVkXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYm90dG9tIHJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJlcnJvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy51bmxpbmt0YWdidG4nLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICQodGhpcykuYXR0cignaHJlZicpLFxyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjbWVudV9hcmVhXCIpLm5vdGlmeShcIlRhZyBTdWNjZXNzZnVsbHkgRGVsZXRlZFwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYm90dG9tIHJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGRlc2lnbiA9IEpTT04ucGFyc2UoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8kKCcjdGFibGUnKS5ib290c3RyYXBUYWJsZSgncmVtb3ZlQnlVbmlxdWVJZCcsIGRlc2lnbi5pZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRhZ2xpc3QgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICQuZWFjaChkZXNpZ24udGFncywgZnVuY3Rpb24gKHQsIHRhZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhZ2xpc3QgKz0gXCI8c3BhbiBjbGFzcz0ndGFnbGFiZWwnPjxzcGFuIGhyZWY9Jy9kZXNpZ24vZGVzaWduL2FqYXh1bmxpbmt0YWcvXCIgKyBkZXNpZ24uaWQgKyBcIi9cIiArIHRhZy5pZCArIFwiJyB0YWdpZD0nXCIgKyB0YWcuaWQgKyBcIicgdGFnbmFtZT0nXCIgKyB0YWcubmFtZSArIFwiJyBjbGFzcz0nY2xvc2VidG4gdW5saW5rdGFnYnRuJz7Dlzwvc3Bhbj5cIiArIHRhZy5uYW1lICsgXCI8L3NwYW4+XCI7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkKCcjdGFibGUnKS5ib290c3RyYXBUYWJsZSgndXBkYXRlQ2VsbEJ5VW5pcXVlSWQnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGRlc2lnbi5pZCxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ3RhZ3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0YWdsaXN0XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBtYWphY3RpdmV0YWdzKCk7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjpcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMsIG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI21lbnVfYXJlYVwiKS5ub3RpZnkoXCJUYWcgRGVsZXRpb24gRmFpbGVkXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYm90dG9tIHJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJlcnJvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIiNhcHBseXRhZ1wiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RhZ3M6JytKU09OLnN0cmluZ2lmeSgkKFwiI3NlbGVjdHRhZ1wiKS52YWwoKSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkZXNpZ25zOicrSlNPTi5zdHJpbmdpZnkoJChcIiN0YWJsZVwiKS5ib290c3RyYXBUYWJsZSgnZ2V0U2VsZWN0aW9ucycpKSlcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiL2Rlc2lnbi9kZXNpZ24vYWpheGFkZHRhZ1wiLFxyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHRhZ3M6IEpTT04uc3RyaW5naWZ5KCQoXCIjc2VsZWN0dGFnXCIpLnZhbCgpKSxcclxuICAgICAgICAgICAgICAgIGRlc2lnbnM6IEpTT04uc3RyaW5naWZ5KCQoXCIjdGFibGVcIikuYm9vdHN0cmFwVGFibGUoJ2dldFNlbGVjdGlvbnMnKSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcblxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSwgc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI21lbnVfYXJlYVwiKS5ub3RpZnkoXCJUYWdzIFN1Y2Nlc3NmdWxseSBBZGRlZCA6ICBcXG5cIiArICQoXCIjc2VsZWN0dGFnIG9wdGlvbjpzZWxlY3RlZFwiKS50b0FycmF5KCkubWFwKGl0ZW0gPT4gaXRlbS50ZXh0KS5qb2luKCdcXG4nKSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbSByaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJzdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICQuZWFjaChKU09OLnBhcnNlKGRhdGEpLCBmdW5jdGlvbiAoa2V5LCBkZXNpZ24pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhZ2xpc3QgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkLmVhY2goZGVzaWduLnRhZ3MsIGZ1bmN0aW9uICh0LCB0YWcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnbGlzdCArPSBcIjxzcGFuIGNsYXNzPSd0YWdsYWJlbCc+PHNwYW4gaHJlZj0nL2Rlc2lnbi9kZXNpZ24vYWpheHVubGlua3RhZy9cIiArIGRlc2lnbi5pZCArIFwiL1wiICsgdGFnLmlkICsgXCInIHRhZ2lkPSdcIiArIHRhZy5pZCArIFwiJyB0YWduYW1lPSdcIiArIHRhZy5uYW1lICsgXCInIGNsYXNzPSdjbG9zZWJ0biB1bmxpbmt0YWdidG4nPsOXPC9zcGFuPlwiICsgdGFnLm5hbWUgKyBcIjwvc3Bhbj5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI3RhYmxlJykuYm9vdHN0cmFwVGFibGUoJ3VwZGF0ZUNlbGxCeVVuaXF1ZUlkJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogZGVzaWduLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ3RhZ3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGFnbGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBtYWphY3RpdmV0YWdzKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOlxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMsIG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI21lbnVfYXJlYVwiKS5ub3RpZnkoXCJBZGRpbmcgVGFncyBGYWlsZWQgOiAgXFxuXCIgKyAkKFwiI3NlbGVjdHRhZyBvcHRpb246c2VsZWN0ZWRcIikudG9BcnJheSgpLm1hcChpdGVtID0+IGl0ZW0udGV4dCkuam9pbignXFxuJyksIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYm90dG9tIHJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJlcnJvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICQoJyN0YWJsZScpLm9uKCdjaGVjay5icy50YWJsZSB1bmNoZWNrLmJzLnRhYmxlIHVuY2hlY2stYWxsLmJzLnRhYmxlIGNoZWNrLWFsbC5icy50YWJsZScsIG1hamFjdGl2ZXRhZ3MpO1xyXG5cclxuXHJcblxyXG4gICAgLy9pY2kgYWpheCB0ZW1wbGF0ZVxyXG4gICAgJChcIiNhcHBseXRlbXBsYXRlXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygndGVtcGxhdGVzOicrSlNPTi5zdHJpbmdpZnkoJChcIiNzZWxlY3R0ZW1wbGF0ZVwiKS52YWwoKSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkZXNpZ25zOicrSlNPTi5zdHJpbmdpZnkoJChcIiN0YWJsZVwiKS5ib290c3RyYXBUYWJsZSgnZ2V0U2VsZWN0aW9ucycpKSlcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiL2Rlc2lnbi9kZXNpZ24vYWpheGFkZHRlbXBsYXRlXCIsXHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVzOiBKU09OLnN0cmluZ2lmeSgkKFwiI3NlbGVjdHRlbXBsYXRlXCIpLnZhbCgpKSxcclxuICAgICAgICAgICAgICAgIGRlc2lnbnM6IEpTT04uc3RyaW5naWZ5KCQoXCIjdGFibGVcIikuYm9vdHN0cmFwVGFibGUoJ2dldFNlbGVjdGlvbnMnKSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjbWVudV9hcmVhXCIpLm5vdGlmeShcIlRlbXBsYXRlcyBTdWNjZXNzZnVsbHkgQWRkZWQgOiAgXFxuXCIgKyAkKFwiI3NlbGVjdHRlbXBsYXRlIG9wdGlvbjpzZWxlY3RlZFwiKS50b0FycmF5KCkubWFwKGl0ZW0gPT4gaXRlbS50ZXh0KS5qb2luKCdcXG4nKSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbSByaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJzdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICQuZWFjaChKU09OLnBhcnNlKGRhdGEpLCBmdW5jdGlvbiAoa2V5LCBkZXNpZ24pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXBsYXRlbGlzdCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQuZWFjaChkZXNpZ24udGVtcGxhdGVzLCBmdW5jdGlvbiAodCwgdGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVsaXN0ICs9IFwiPHNwYW4gY2xhc3M9J3RlbXBsYXRlbGFiZWwnPjxzcGFuIGhyZWY9Jy9kZXNpZ24vZGVzaWduL2FqYXh1bmxpbmt0ZW1wbGF0ZS9cIiArIGRlc2lnbi5pZCArIFwiL1wiICsgdGVtcGxhdGUuaWQgKyBcIicgdGVtcGxhdGVpZD0nXCIgKyB0ZW1wbGF0ZS5pZCArIFwiJyB0ZW1wbGF0ZW5hbWU9J1wiICsgdGVtcGxhdGUubmFtZSArIFwiJyBjbGFzcz0nY2xvc2VidG4gdW5saW5rdGVtcGxhdGVidG4nPsOXPC9zcGFuPlwiICsgdGVtcGxhdGUubmFtZSArIFwiPC9zcGFuPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKCcjdGFibGUnKS5ib290c3RyYXBUYWJsZSgndXBkYXRlQ2VsbEJ5VW5pcXVlSWQnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBkZXNpZ24uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiAndGVtcGxhdGVzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRlbXBsYXRlbGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBtYWphY3RpdmV0ZW1wbGF0ZXMoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gJCgnI3RhYmxlIHRib2R5JykuZmluZCgnLnNlbGVjdGVkJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAvLyAkKCcjdGFibGUgdGJvZHknKS5wcmVwZW5kKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgLy8gJCgnI3RhYmxlJykuYm9vdHN0cmFwVGFibGUoJ3JlZnJlc2gnKTtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOlxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMsIG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI21lbnVfYXJlYVwiKS5ub3RpZnkoXCJBZGRpbmcgVGVtcGxhdGVzIEZhaWxlZCA6ICBcXG5cIiArICQoXCIjc2VsZWN0dGVtcGxhdGUgb3B0aW9uOnNlbGVjdGVkXCIpLnRvQXJyYXkoKS5tYXAoaXRlbSA9PiBpdGVtLnRleHQpLmpvaW4oJ1xcbicpLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbSByaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnVubGlua3RlbXBsYXRlZnJvbXNlbGVjdGlvbmJ0bicsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygkKHRoaXMpLmF0dHIoJ2hyZWYnKSk7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiAkKHRoaXMpLmF0dHIoJ2hyZWYnKSxcclxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBkZXNpZ25zOiBKU09OLnN0cmluZ2lmeSgkKFwiI3RhYmxlXCIpLmJvb3RzdHJhcFRhYmxlKCdnZXRTZWxlY3Rpb25zJykpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjbWVudV9hcmVhXCIpLm5vdGlmeShcIlRlbXBsYXRlIFN1Y2Nlc3NmdWxseSBEZWxldGVkXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJib3R0b20gcmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwic3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAkLmVhY2goSlNPTi5wYXJzZShkYXRhKSwgZnVuY3Rpb24gKGtleSwgZGVzaWduKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wbGF0ZWxpc3QgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkLmVhY2goZGVzaWduLnRlbXBsYXRlcywgZnVuY3Rpb24gKHQsIHRlbXBsYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlbGlzdCArPSBcIjxzcGFuIGNsYXNzPSd0ZW1wbGF0ZWxhYmVsJz48c3BhbiBocmVmPScvZGVzaWduL2Rlc2lnbi9hamF4dW5saW5rdGVtcGxhdGUvXCIgKyBkZXNpZ24uaWQgKyBcIi9cIiArIHRlbXBsYXRlLmlkICsgXCInIHRlbXBsYXRlaWQ9J1wiICsgdGVtcGxhdGUuaWQgKyBcIicgdGVtcGxhdGVuYW1lPSdcIiArIHRlbXBsYXRlLm5hbWUgKyBcIicgY2xhc3M9J2Nsb3NlYnRuIHVubGlua3RlbXBsYXRlYnRuJz7Dlzwvc3Bhbj5cIiArIHRlbXBsYXRlLm5hbWUgKyBcIjwvc3Bhbj5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI3RhYmxlJykuYm9vdHN0cmFwVGFibGUoJ3VwZGF0ZUNlbGxCeVVuaXF1ZUlkJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogZGVzaWduLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ3RlbXBsYXRlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0ZW1wbGF0ZWxpc3RcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWFqYWN0aXZldGVtcGxhdGVzKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vICQoJyN0YWJsZSB0Ym9keScpLmZpbmQoJy5zZWxlY3RlZCcpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gJCgnI3RhYmxlIHRib2R5JykucHJlcGVuZChkYXRhKTtcclxuICAgICAgICAgICAgICAgIC8vICQoJyN0YWJsZScpLmJvb3RzdHJhcFRhYmxlKCdyZWZyZXNoJyk7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjpcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMsIG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI21lbnVfYXJlYVwiKS5ub3RpZnkoXCJUZW1wbGF0ZSBEZWxldGlvbiBGYWlsZWRcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJib3R0b20gcmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImVycm9yXCJcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnVubGlua3RlbXBsYXRlYnRuJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiAkKHRoaXMpLmF0dHIoJ2hyZWYnKSxcclxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSwgc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI21lbnVfYXJlYVwiKS5ub3RpZnkoXCJUZW1wbGF0ZSBTdWNjZXNzZnVsbHkgRGVsZXRlZFwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYm90dG9tIHJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGRlc2lnbiA9IEpTT04ucGFyc2UoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8kKCcjdGFibGUnKS5ib290c3RyYXBUYWJsZSgncmVtb3ZlQnlVbmlxdWVJZCcsIGRlc2lnbi5pZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRlbXBsYXRlbGlzdCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgJC5lYWNoKGRlc2lnbi50ZW1wbGF0ZXMsIGZ1bmN0aW9uICh0LCB0ZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlbGlzdCArPSBcIjxzcGFuIGNsYXNzPSd0ZW1wbGF0ZWxhYmVsJz48c3BhbiBocmVmPScvZGVzaWduL2Rlc2lnbi9hamF4dW5saW5rdGVtcGxhdGUvXCIgKyBkZXNpZ24uaWQgKyBcIi9cIiArIHRlbXBsYXRlLmlkICsgXCInIHRlbXBsYXRlaWQ9J1wiICsgdGVtcGxhdGUuaWQgKyBcIicgdGVtcGxhdGVuYW1lPSdcIiArIHRlbXBsYXRlLm5hbWUgKyBcIicgY2xhc3M9J2Nsb3NlYnRuIHVubGlua3RlbXBsYXRlYnRuJz7Dlzwvc3Bhbj5cIiArIHRlbXBsYXRlLm5hbWUgKyBcIjwvc3Bhbj5cIjtcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICQoJyN0YWJsZScpLmJvb3RzdHJhcFRhYmxlKCd1cGRhdGVDZWxsQnlVbmlxdWVJZCcsIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogZGVzaWduLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiAndGVtcGxhdGVzJyxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGVtcGxhdGVsaXN0XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBtYWphY3RpdmV0ZW1wbGF0ZXMoKTtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOlxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGRhdGEsIHN0YXR1cywgbWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjbWVudV9hcmVhXCIpLm5vdGlmeShcIlRlbXBsYXRlIERlbGV0aW9uIEZhaWxlZFwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbSByaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICQoJyN0YWJsZScpLm9uKCdjaGVjay5icy50YWJsZSB1bmNoZWNrLmJzLnRhYmxlIHVuY2hlY2stYWxsLmJzLnRhYmxlIGNoZWNrLWFsbC5icy50YWJsZScsIG1hamFjdGl2ZXRlbXBsYXRlcyk7XHJcblxyXG4gICAgLy9pY2kgYWpheCBtb2RlbFxyXG4gICAgJChcIiNhcHBseW1vZGVsXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbW9kZWxzOicrSlNPTi5zdHJpbmdpZnkoJChcIiNzZWxlY3Rtb2RlbFwiKS52YWwoKSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkZXNpZ25zOicrSlNPTi5zdHJpbmdpZnkoJChcIiN0YWJsZVwiKS5ib290c3RyYXBUYWJsZSgnZ2V0U2VsZWN0aW9ucycpKSlcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiL2Rlc2lnbi9kZXNpZ24vYWpheGFkZG1vZGVsXCIsXHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbW9kZWxzOiBKU09OLnN0cmluZ2lmeSgkKFwiI3NlbGVjdG1vZGVsXCIpLnZhbCgpKSxcclxuICAgICAgICAgICAgICAgIGRlc2lnbnM6IEpTT04uc3RyaW5naWZ5KCQoXCIjdGFibGVcIikuYm9vdHN0cmFwVGFibGUoJ2dldFNlbGVjdGlvbnMnKSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjbWVudV9hcmVhXCIpLm5vdGlmeShcIm1vZGVscyBTdWNjZXNzZnVsbHkgQWRkZWQgOiAgXFxuXCIgKyAkKFwiI3NlbGVjdG1vZGVsIG9wdGlvbjpzZWxlY3RlZFwiKS50b0FycmF5KCkubWFwKGl0ZW0gPT4gaXRlbS50ZXh0KS5qb2luKCdcXG4nKSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbSByaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJzdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vU3VwcHJlc3Npb24gZGVzIGxpZ25lcyBwcsOpY8OpZGVtbWVudCBjb2Now6llc1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IGlkcyA9ICQubWFwKCQoJyN0YWJsZScpLmJvb3RzdHJhcFRhYmxlKCdnZXRTZWxlY3Rpb25zJyksIGZ1bmN0aW9uIChyb3cpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gcm93LmlkXHJcbiAgICAgICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAgICAgLy8gJCgnI3RhYmxlJykuYm9vdHN0cmFwVGFibGUoJ3JlbW92ZScsIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBmaWVsZDogJ2lkJyxcclxuICAgICAgICAgICAgICAgIC8vICAgICB2YWx1ZXM6IGlkc1xyXG4gICAgICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJC5lYWNoKEpTT04ucGFyc2UoZGF0YSksIGZ1bmN0aW9uIChrZXksIGRlc2lnbikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgbW9kZWxsaXN0ID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGRlc2lnbi5tb2RlbHMsIGZ1bmN0aW9uICh0LCBtb2RlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbGxpc3QgKz0gXCI8c3BhbiBjbGFzcz0nbW9kZWxsYWJlbCc+PHNwYW4gaHJlZj0nL2Rlc2lnbi9kZXNpZ24vYWpheHVubGlua21vZGVsL1wiICsgZGVzaWduLmlkICsgXCIvXCIgKyBtb2RlbC5pZCArIFwiJyBtb2RlbGlkPSdcIiArIG1vZGVsLmlkICsgXCInIG1vZGVsbmFtZT0nXCIgKyBtb2RlbC5uYW1lICsgXCInIGNsYXNzPSdjbG9zZWJ0biB1bmxpbmttb2RlbGJ0bic+w5c8L3NwYW4+XCIgKyBtb2RlbC5uYW1lICsgXCI8L3NwYW4+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoJyN0YWJsZScpLmJvb3RzdHJhcFRhYmxlKCd1cGRhdGVDZWxsQnlVbmlxdWVJZCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGRlc2lnbi5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdtb2RlbHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbW9kZWxsaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1hamFjdGl2ZW1vZGVscygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyAkKCcjdGFibGUgdGJvZHknKS5maW5kKCcuc2VsZWN0ZWQnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIC8vICQoJyN0YWJsZSB0Ym9keScpLnByZXBlbmQoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAvLyAkKCcjdGFibGUnKS5ib290c3RyYXBUYWJsZSgncmVmcmVzaCcpO1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGRhdGEsIHN0YXR1cywgbWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjbWVudV9hcmVhXCIpLm5vdGlmeShcIkFkZGluZyBtb2RlbHMgRmFpbGVkIDogIFxcblwiICsgJChcIiNzZWxlY3Rtb2RlbCBvcHRpb246c2VsZWN0ZWRcIikudG9BcnJheSgpLm1hcChpdGVtID0+IGl0ZW0udGV4dCkuam9pbignXFxuJyksIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYm90dG9tIHJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJlcnJvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcudW5saW5rbW9kZWxmcm9tc2VsZWN0aW9uYnRuJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCQodGhpcykuYXR0cignaHJlZicpKTtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICQodGhpcykuYXR0cignaHJlZicpLFxyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGRlc2lnbnM6IEpTT04uc3RyaW5naWZ5KCQoXCIjdGFibGVcIikuYm9vdHN0cmFwVGFibGUoJ2dldFNlbGVjdGlvbnMnKSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEsIHN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgJChcIiNtZW51X2FyZWFcIikubm90aWZ5KFwibW9kZWwgU3VjY2Vzc2Z1bGx5IERlbGV0ZWRcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbSByaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJzdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICQuZWFjaChKU09OLnBhcnNlKGRhdGEpLCBmdW5jdGlvbiAoa2V5LCBkZXNpZ24pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1vZGVsbGlzdCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQuZWFjaChkZXNpZ24ubW9kZWxzLCBmdW5jdGlvbiAodCwgbW9kZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWxsaXN0ICs9IFwiPHNwYW4gY2xhc3M9J21vZGVsbGFiZWwnPjxzcGFuIGhyZWY9Jy9kZXNpZ24vZGVzaWduL2FqYXh1bmxpbmttb2RlbC9cIiArIGRlc2lnbi5pZCArIFwiL1wiICsgbW9kZWwuaWQgKyBcIicgbW9kZWxpZD0nXCIgKyBtb2RlbC5pZCArIFwiJyBtb2RlbG5hbWU9J1wiICsgbW9kZWwubmFtZSArIFwiJyBjbGFzcz0nY2xvc2VidG4gdW5saW5rbW9kZWxidG4nPsOXPC9zcGFuPlwiICsgbW9kZWwubmFtZSArIFwiPC9zcGFuPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKCcjdGFibGUnKS5ib290c3RyYXBUYWJsZSgndXBkYXRlQ2VsbEJ5VW5pcXVlSWQnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBkZXNpZ24uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiAnbW9kZWxzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG1vZGVsbGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBtYWphY3RpdmVtb2RlbHMoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gJCgnI3RhYmxlIHRib2R5JykuZmluZCgnLnNlbGVjdGVkJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAvLyAkKCcjdGFibGUgdGJvZHknKS5wcmVwZW5kKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgLy8gJCgnI3RhYmxlJykuYm9vdHN0cmFwVGFibGUoJ3JlZnJlc2gnKTtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOlxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGRhdGEsIHN0YXR1cywgbWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjbWVudV9hcmVhXCIpLm5vdGlmeShcIm1vZGVsIERlbGV0aW9uIEZhaWxlZFwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbSByaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcudW5saW5rbW9kZWxidG4nLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICQodGhpcykuYXR0cignaHJlZicpLFxyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjbWVudV9hcmVhXCIpLm5vdGlmeShcIm1vZGVsIFN1Y2Nlc3NmdWxseSBEZWxldGVkXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJib3R0b20gcmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwic3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZGVzaWduID0gSlNPTi5wYXJzZShkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyQoJyN0YWJsZScpLmJvb3RzdHJhcFRhYmxlKCdyZW1vdmVCeVVuaXF1ZUlkJywgZGVzaWduLmlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbW9kZWxsaXN0ID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAkLmVhY2goZGVzaWduLm1vZGVscywgZnVuY3Rpb24gKHQsIG1vZGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWxsaXN0ICs9IFwiPHNwYW4gY2xhc3M9J21vZGVsbGFiZWwnPjxzcGFuIGhyZWY9Jy9kZXNpZ24vZGVzaWduL2FqYXh1bmxpbmttb2RlbC9cIiArIGRlc2lnbi5pZCArIFwiL1wiICsgbW9kZWwuaWQgKyBcIicgbW9kZWxpZD0nXCIgKyBtb2RlbC5pZCArIFwiJyBtb2RlbG5hbWU9J1wiICsgbW9kZWwubmFtZSArIFwiJyBjbGFzcz0nY2xvc2VidG4gdW5saW5rbW9kZWxidG4nPsOXPC9zcGFuPlwiICsgbW9kZWwubmFtZSArIFwiPC9zcGFuPlwiO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJCgnI3RhYmxlJykuYm9vdHN0cmFwVGFibGUoJ3VwZGF0ZUNlbGxCeVVuaXF1ZUlkJywge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBkZXNpZ24uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdtb2RlbHMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBtb2RlbGxpc3RcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIG1hamFjdGl2ZW1vZGVscygpO1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZGF0YSwgc3RhdHVzLCBtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNtZW51X2FyZWFcIikubm90aWZ5KFwibW9kZWwgRGVsZXRpb24gRmFpbGVkXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYm90dG9tIHJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJlcnJvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI3RhYmxlJykub24oJ2NoZWNrLmJzLnRhYmxlIHVuY2hlY2suYnMudGFibGUgdW5jaGVjay1hbGwuYnMudGFibGUgY2hlY2stYWxsLmJzLnRhYmxlJywgbWFqYWN0aXZlbW9kZWxzKTtcclxuXHJcblxyXG59KTtcclxuXHJcblxyXG5mdW5jdGlvbiBjbGVhbnRhZ3MobXlzdHJpbmcpIHtcclxuICAgIGxldCByZXMgPSBteXN0cmluZy5yZXBsYWNlKC8oPChbXj5dKyk+KS9pZywgXCJcIikucmVwbGFjZSgvXFxufFxccnwoXFxuXFxyKS9nLCBcIlwiKS5zcGxpdChcIsOXXCIpO1xyXG4gICAgbGV0IGNsZWFucmVzID0gW107XHJcblxyXG4gICAgJC5lYWNoKHJlcywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNsZWFucmVzLnB1c2goJC50cmltKHRoaXMpKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGNsZWFucmVzLmZpbHRlcihmdW5jdGlvbiAoY2xlYW5yZXMpIHtcclxuICAgICAgICByZXR1cm4gY2xlYW5yZXMgIT09ICfDlycgJiYgY2xlYW5yZXMgIT09ICcnO1xyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmlxdWUoYXJyYXkpIHtcclxuICAgIHJldHVybiAkLmdyZXAoYXJyYXksIGZ1bmN0aW9uIChlbCwgaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gaW5kZXggPT09ICQuaW5BcnJheShlbCwgYXJyYXkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBtYWphY3RpdmV0YWdzKCkge1xyXG4gICAgbGV0IHJvd2xpc3QgPSAkKCcjdGFibGUnKS5ib290c3RyYXBUYWJsZSgnZ2V0U2VsZWN0aW9ucycpO1xyXG4gICAgbGV0IHRhZ2xpc3QgPSAnJztcclxuICAgIGxldCB0YWdzID0gW107XHJcblxyXG4gICAgJC5lYWNoKHJvd2xpc3QsIGZ1bmN0aW9uIChyLCByb3cpIHtcclxuLy8gICAgICAgICQubWVyZ2UodGFncywgY2xlYW50YWdzKHJvdy50YWdzKSk7XHJcblxyXG4gICAgICAgICQuZWFjaCgkKHJvdy50YWdzKS5maW5kKCcudW5saW5rdGFnYnRuJyksIGZ1bmN0aW9uKHMsc3Bhbil7XHJcbiAgICAgICAgICAgIGlmKGpRdWVyeS5pbkFycmF5KCQoc3BhbikuYXR0cigndGFnbmFtZScpLHRhZ3MpID09PSAtMSl7XHJcblxyXG4gICAgICAgICAgICAgICAgdGFncy5wdXNoKCQoc3BhbikuYXR0cigndGFnbmFtZScpKTtcclxuICAgICAgICAgICAgICAgIHRhZ2xpc3QgKz0gXCI8c3BhbiBjbGFzcz0ndGFnbGFiZWwnPjxzcGFuIGhyZWY9Jy9kZXNpZ24vZGVzaWduL2FqYXh1bmxpbmt0YWdmcm9tc2VsZWN0aW9uL1wiICsgJChzcGFuKS5hdHRyKCd0YWdpZCcpICsgXCInIHRhZ2lkPSdcIiArICQoc3BhbikuYXR0cigndGFnaWQnKSArIFwiJyB0YWduYW1lPSdcIiArICQoc3BhbikuYXR0cigndGFnbmFtZScpICsgXCInIGNsYXNzPSdjbG9zZWJ0biB1bmxpbmt0YWdmcm9tc2VsZWN0aW9uYnRuJz7Dlzwvc3Bhbj5cIiArICQoc3BhbikuYXR0cigndGFnbmFtZScpICsgXCI8L3NwYW4+XCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgLy9jb25zb2xlLmxvZyhzcGFuLmF0dHIoJ3RhZ2lkJykpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygkKHNwYW4pLmF0dHIoJ3RhZ2lkJykgKyAnICcgKyAkKHNwYW4pLmF0dHIoJ3RhZ25hbWUnKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyh0YWdsaXN0KTtcclxuICAgIC8vIHRhZ3MgPSB1bmlxdWUodGFncyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0YWdzKVxyXG4gICAgLy9cclxuICAgIC8vICQuZWFjaCh0YWdzLCBmdW5jdGlvbiAodCwgdGFnKSB7XHJcbiAgICAvLyAgICAgdGFnbGlzdCArPSBcIjxzcGFuIGNsYXNzPSd0YWdsYWJlbCc+PHNwYW4gaHJlZj0nL2Rlc2lnbi9kZXNpZ24vYWpheHVubGlua3RhZ2Zyb21zZWxlY3Rpb24vXCIgKyB0YWcuaWQgKyBcIicgdGFnaWQ9J1wiICsgdGFnLmlkICsgXCInIHRhZ25hbWU9J1wiICsgdGFnLm5hbWUgKyBcIicgY2xhc3M9J2Nsb3NlYnRuIHVubGlua3RhZ2Zyb21zZWxlY3Rpb25idG4nPsOXPC9zcGFuPlwiICsgdGFnICsgXCI8L3NwYW4+XCI7XHJcbiAgICAvLyB9KVxyXG5cclxuICAgICQoJyNhY3RpdmV0YWdzJykuaHRtbCh0YWdsaXN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFqYWN0aXZldGVtcGxhdGVzKCkge1xyXG4gICAgbGV0IHJvd2xpc3QgPSAkKCcjdGFibGUnKS5ib290c3RyYXBUYWJsZSgnZ2V0U2VsZWN0aW9ucycpO1xyXG4gICAgbGV0IHRlbXBsYXRlbGlzdCA9ICcnO1xyXG4gICAgbGV0IHRlbXBsYXRlcyA9IFtdO1xyXG5cclxuICAgICQuZWFjaChyb3dsaXN0LCBmdW5jdGlvbiAociwgcm93KSB7XHJcbi8vICAgICAgICAkLm1lcmdlKHRhZ3MsIGNsZWFudGFncyhyb3cudGFncykpO1xyXG5cclxuICAgICAgICAkLmVhY2goJChyb3cudGVtcGxhdGVzKS5maW5kKCcudW5saW5rdGVtcGxhdGVidG4nKSwgZnVuY3Rpb24ocyxzcGFuKXtcclxuICAgICAgICAgICAgaWYoalF1ZXJ5LmluQXJyYXkoJChzcGFuKS5hdHRyKCd0ZW1wbGF0ZW5hbWUnKSwgdGVtcGxhdGVzKSA9PT0gLTEpe1xyXG5cclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlcy5wdXNoKCQoc3BhbikuYXR0cigndGVtcGxhdGVuYW1lJykpO1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVsaXN0ICs9IFwiPHNwYW4gY2xhc3M9J3RlbXBsYXRlbGFiZWwnPjxzcGFuIGhyZWY9Jy9kZXNpZ24vZGVzaWduL2FqYXh1bmxpbmt0ZW1wbGF0ZWZyb21zZWxlY3Rpb24vXCIgKyAkKHNwYW4pLmF0dHIoJ3RlbXBsYXRlaWQnKSArIFwiJyB0ZW1wbGF0ZWlkPSdcIiArICQoc3BhbikuYXR0cigndGVtcGxhdGVpZCcpICsgXCInIHRlbXBsYXRlbmFtZT0nXCIgKyAkKHNwYW4pLmF0dHIoJ3RlbXBsYXRlbmFtZScpICsgXCInIGNsYXNzPSdjbG9zZWJ0biB1bmxpbmt0ZW1wbGF0ZWZyb21zZWxlY3Rpb25idG4nPsOXPC9zcGFuPlwiICsgJChzcGFuKS5hdHRyKCd0ZW1wbGF0ZW5hbWUnKSArIFwiPC9zcGFuPlwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHNwYW4uYXR0cigndGFnaWQnKSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCQoc3BhbikuYXR0cigndGFnaWQnKSArICcgJyArICQoc3BhbikuYXR0cigndGFnbmFtZScpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKHRhZ2xpc3QpO1xyXG4gICAgLy8gdGFncyA9IHVuaXF1ZSh0YWdzKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRhZ3MpXHJcbiAgICAvL1xyXG4gICAgLy8gJC5lYWNoKHRhZ3MsIGZ1bmN0aW9uICh0LCB0YWcpIHtcclxuICAgIC8vICAgICB0YWdsaXN0ICs9IFwiPHNwYW4gY2xhc3M9J3RhZ2xhYmVsJz48c3BhbiBocmVmPScvZGVzaWduL2Rlc2lnbi9hamF4dW5saW5rdGFnZnJvbXNlbGVjdGlvbi9cIiArIHRhZy5pZCArIFwiJyB0YWdpZD0nXCIgKyB0YWcuaWQgKyBcIicgdGFnbmFtZT0nXCIgKyB0YWcubmFtZSArIFwiJyBjbGFzcz0nY2xvc2VidG4gdW5saW5rdGFnZnJvbXNlbGVjdGlvbmJ0bic+w5c8L3NwYW4+XCIgKyB0YWcgKyBcIjwvc3Bhbj5cIjtcclxuICAgIC8vIH0pXHJcblxyXG4gICAgJCgnI2FjdGl2ZXRlbXBsYXRlcycpLmh0bWwodGVtcGxhdGVsaXN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFqYWN0aXZlbW9kZWxzKCkge1xyXG4gICAgbGV0IHJvd2xpc3QgPSAkKCcjdGFibGUnKS5ib290c3RyYXBUYWJsZSgnZ2V0U2VsZWN0aW9ucycpO1xyXG4gICAgbGV0IG1vZGVsbGlzdCA9ICcnO1xyXG4gICAgbGV0IG1vZGVscyA9IFtdO1xyXG5cclxuICAgICQuZWFjaChyb3dsaXN0LCBmdW5jdGlvbiAociwgcm93KSB7XHJcbi8vICAgICAgICAkLm1lcmdlKHRhZ3MsIGNsZWFudGFncyhyb3cudGFncykpO1xyXG5cclxuICAgICAgICAkLmVhY2goJChyb3cubW9kZWxzKS5maW5kKCcudW5saW5rbW9kZWxidG4nKSwgZnVuY3Rpb24ocyxzcGFuKXtcclxuICAgICAgICAgICAgaWYoalF1ZXJ5LmluQXJyYXkoJChzcGFuKS5hdHRyKCdtb2RlbG5hbWUnKSwgbW9kZWxzKSA9PT0gLTEpe1xyXG5cclxuICAgICAgICAgICAgICAgIG1vZGVscy5wdXNoKCQoc3BhbikuYXR0cignbW9kZWxuYW1lJykpO1xyXG4gICAgICAgICAgICAgICAgbW9kZWxsaXN0ICs9IFwiPHNwYW4gY2xhc3M9J21vZGVsbGFiZWwnPjxzcGFuIGhyZWY9Jy9kZXNpZ24vZGVzaWduL2FqYXh1bmxpbmttb2RlbGZyb21zZWxlY3Rpb24vXCIgKyAkKHNwYW4pLmF0dHIoJ21vZGVsaWQnKSArIFwiJyBtb2RlbGlkPSdcIiArICQoc3BhbikuYXR0cignbW9kZWxpZCcpICsgXCInIG1vZGVsbmFtZT0nXCIgKyAkKHNwYW4pLmF0dHIoJ21vZGVsbmFtZScpICsgXCInIGNsYXNzPSdjbG9zZWJ0biB1bmxpbmttb2RlbGZyb21zZWxlY3Rpb25idG4nPsOXPC9zcGFuPlwiICsgJChzcGFuKS5hdHRyKCdtb2RlbG5hbWUnKSArIFwiPC9zcGFuPlwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHNwYW4uYXR0cigndGFnaWQnKSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCQoc3BhbikuYXR0cigndGFnaWQnKSArICcgJyArICQoc3BhbikuYXR0cigndGFnbmFtZScpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKHRhZ2xpc3QpO1xyXG4gICAgLy8gdGFncyA9IHVuaXF1ZSh0YWdzKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRhZ3MpXHJcbiAgICAvL1xyXG4gICAgLy8gJC5lYWNoKHRhZ3MsIGZ1bmN0aW9uICh0LCB0YWcpIHtcclxuICAgIC8vICAgICB0YWdsaXN0ICs9IFwiPHNwYW4gY2xhc3M9J3RhZ2xhYmVsJz48c3BhbiBocmVmPScvZGVzaWduL2Rlc2lnbi9hamF4dW5saW5rdGFnZnJvbXNlbGVjdGlvbi9cIiArIHRhZy5pZCArIFwiJyB0YWdpZD0nXCIgKyB0YWcuaWQgKyBcIicgdGFnbmFtZT0nXCIgKyB0YWcubmFtZSArIFwiJyBjbGFzcz0nY2xvc2VidG4gdW5saW5rdGFnZnJvbXNlbGVjdGlvbmJ0bic+w5c8L3NwYW4+XCIgKyB0YWcgKyBcIjwvc3Bhbj5cIjtcclxuICAgIC8vIH0pXHJcblxyXG4gICAgJCgnI2FjdGl2ZW1vZGVscycpLmh0bWwobW9kZWxsaXN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaHRtbFRvRWxlbWVudHMoaHRtbCkge1xyXG4gICAgbGV0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcclxuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICByZXR1cm4gdGVtcGxhdGUuY29udGVudC5jaGlsZE5vZGVzO1xyXG59IiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcclxudmFyICRmaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbmQ7XHJcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xyXG52YXIgYXJyYXlNZXRob2RVc2VzVG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLXVzZXMtdG8tbGVuZ3RoJyk7XHJcblxyXG52YXIgRklORCA9ICdmaW5kJztcclxudmFyIFNLSVBTX0hPTEVTID0gdHJ1ZTtcclxuXHJcbnZhciBVU0VTX1RPX0xFTkdUSCA9IGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoKEZJTkQpO1xyXG5cclxuLy8gU2hvdWxkbid0IHNraXAgaG9sZXNcclxuaWYgKEZJTkQgaW4gW10pIEFycmF5KDEpW0ZJTkRdKGZ1bmN0aW9uICgpIHsgU0tJUFNfSE9MRVMgPSBmYWxzZTsgfSk7XHJcblxyXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbmRgIG1ldGhvZFxyXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZFxyXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBTS0lQU19IT0xFUyB8fCAhVVNFU19UT19MRU5HVEggfSwge1xyXG4gIGZpbmQ6IGZ1bmN0aW9uIGZpbmQoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcclxuICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXHJcbmFkZFRvVW5zY29wYWJsZXMoRklORCk7XHJcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xyXG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XHJcblxyXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcbnZhciBGdW5jdGlvblByb3RvdHlwZVRvU3RyaW5nID0gRnVuY3Rpb25Qcm90b3R5cGUudG9TdHJpbmc7XHJcbnZhciBuYW1lUkUgPSAvXlxccypmdW5jdGlvbiAoW14gKF0qKS87XHJcbnZhciBOQU1FID0gJ25hbWUnO1xyXG5cclxuLy8gRnVuY3Rpb24gaW5zdGFuY2VzIGAubmFtZWAgcHJvcGVydHlcclxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZnVuY3Rpb24taW5zdGFuY2VzLW5hbWVcclxuaWYgKERFU0NSSVBUT1JTICYmICEoTkFNRSBpbiBGdW5jdGlvblByb3RvdHlwZSkpIHtcclxuICBkZWZpbmVQcm9wZXJ0eShGdW5jdGlvblByb3RvdHlwZSwgTkFNRSwge1xyXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIEZ1bmN0aW9uUHJvdG90eXBlVG9TdHJpbmcuY2FsbCh0aGlzKS5tYXRjaChuYW1lUkUpWzFdO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcclxudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcclxudmFyIGlzUmVnRXhwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXJlZ2V4cCcpO1xyXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XHJcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xyXG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NwZWNpZXMtY29uc3RydWN0b3InKTtcclxudmFyIGFkdmFuY2VTdHJpbmdJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZHZhbmNlLXN0cmluZy1pbmRleCcpO1xyXG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XHJcbnZhciBjYWxsUmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xyXG52YXIgcmVnZXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYycpO1xyXG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcclxuXHJcbnZhciBhcnJheVB1c2ggPSBbXS5wdXNoO1xyXG52YXIgbWluID0gTWF0aC5taW47XHJcbnZhciBNQVhfVUlOVDMyID0gMHhGRkZGRkZGRjtcclxuXHJcbi8vIGJhYmVsLW1pbmlmeSB0cmFuc3BpbGVzIFJlZ0V4cCgneCcsICd5JykgLT4gL3gveSBhbmQgaXQgY2F1c2VzIFN5bnRheEVycm9yXHJcbnZhciBTVVBQT1JUU19ZID0gIWZhaWxzKGZ1bmN0aW9uICgpIHsgcmV0dXJuICFSZWdFeHAoTUFYX1VJTlQzMiwgJ3knKTsgfSk7XHJcblxyXG4vLyBAQHNwbGl0IGxvZ2ljXHJcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdzcGxpdCcsIDIsIGZ1bmN0aW9uIChTUExJVCwgbmF0aXZlU3BsaXQsIG1heWJlQ2FsbE5hdGl2ZSkge1xyXG4gIHZhciBpbnRlcm5hbFNwbGl0O1xyXG4gIGlmIChcclxuICAgICdhYmJjJy5zcGxpdCgvKGIpKi8pWzFdID09ICdjJyB8fFxyXG4gICAgJ3Rlc3QnLnNwbGl0KC8oPzopLywgLTEpLmxlbmd0aCAhPSA0IHx8XHJcbiAgICAnYWInLnNwbGl0KC8oPzphYikqLykubGVuZ3RoICE9IDIgfHxcclxuICAgICcuJy5zcGxpdCgvKC4/KSguPykvKS5sZW5ndGggIT0gNCB8fFxyXG4gICAgJy4nLnNwbGl0KC8oKSgpLykubGVuZ3RoID4gMSB8fFxyXG4gICAgJycuc3BsaXQoLy4/LykubGVuZ3RoXHJcbiAgKSB7XHJcbiAgICAvLyBiYXNlZCBvbiBlczUtc2hpbSBpbXBsZW1lbnRhdGlvbiwgbmVlZCB0byByZXdvcmsgaXRcclxuICAgIGludGVybmFsU3BsaXQgPSBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xyXG4gICAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcykpO1xyXG4gICAgICB2YXIgbGltID0gbGltaXQgPT09IHVuZGVmaW5lZCA/IE1BWF9VSU5UMzIgOiBsaW1pdCA+Pj4gMDtcclxuICAgICAgaWYgKGxpbSA9PT0gMCkgcmV0dXJuIFtdO1xyXG4gICAgICBpZiAoc2VwYXJhdG9yID09PSB1bmRlZmluZWQpIHJldHVybiBbc3RyaW5nXTtcclxuICAgICAgLy8gSWYgYHNlcGFyYXRvcmAgaXMgbm90IGEgcmVnZXgsIHVzZSBuYXRpdmUgc3BsaXRcclxuICAgICAgaWYgKCFpc1JlZ0V4cChzZXBhcmF0b3IpKSB7XHJcbiAgICAgICAgcmV0dXJuIG5hdGl2ZVNwbGl0LmNhbGwoc3RyaW5nLCBzZXBhcmF0b3IsIGxpbSk7XHJcbiAgICAgIH1cclxuICAgICAgdmFyIG91dHB1dCA9IFtdO1xyXG4gICAgICB2YXIgZmxhZ3MgPSAoc2VwYXJhdG9yLmlnbm9yZUNhc2UgPyAnaScgOiAnJykgK1xyXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLm11bHRpbGluZSA/ICdtJyA6ICcnKSArXHJcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IudW5pY29kZSA/ICd1JyA6ICcnKSArXHJcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3Iuc3RpY2t5ID8gJ3knIDogJycpO1xyXG4gICAgICB2YXIgbGFzdExhc3RJbmRleCA9IDA7XHJcbiAgICAgIC8vIE1ha2UgYGdsb2JhbGAgYW5kIGF2b2lkIGBsYXN0SW5kZXhgIGlzc3VlcyBieSB3b3JraW5nIHdpdGggYSBjb3B5XHJcbiAgICAgIHZhciBzZXBhcmF0b3JDb3B5ID0gbmV3IFJlZ0V4cChzZXBhcmF0b3Iuc291cmNlLCBmbGFncyArICdnJyk7XHJcbiAgICAgIHZhciBtYXRjaCwgbGFzdEluZGV4LCBsYXN0TGVuZ3RoO1xyXG4gICAgICB3aGlsZSAobWF0Y2ggPSByZWdleHBFeGVjLmNhbGwoc2VwYXJhdG9yQ29weSwgc3RyaW5nKSkge1xyXG4gICAgICAgIGxhc3RJbmRleCA9IHNlcGFyYXRvckNvcHkubGFzdEluZGV4O1xyXG4gICAgICAgIGlmIChsYXN0SW5kZXggPiBsYXN0TGFzdEluZGV4KSB7XHJcbiAgICAgICAgICBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCwgbWF0Y2guaW5kZXgpKTtcclxuICAgICAgICAgIGlmIChtYXRjaC5sZW5ndGggPiAxICYmIG1hdGNoLmluZGV4IDwgc3RyaW5nLmxlbmd0aCkgYXJyYXlQdXNoLmFwcGx5KG91dHB1dCwgbWF0Y2guc2xpY2UoMSkpO1xyXG4gICAgICAgICAgbGFzdExlbmd0aCA9IG1hdGNoWzBdLmxlbmd0aDtcclxuICAgICAgICAgIGxhc3RMYXN0SW5kZXggPSBsYXN0SW5kZXg7XHJcbiAgICAgICAgICBpZiAob3V0cHV0Lmxlbmd0aCA+PSBsaW0pIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VwYXJhdG9yQ29weS5sYXN0SW5kZXggPT09IG1hdGNoLmluZGV4KSBzZXBhcmF0b3JDb3B5Lmxhc3RJbmRleCsrOyAvLyBBdm9pZCBhbiBpbmZpbml0ZSBsb29wXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGxhc3RMYXN0SW5kZXggPT09IHN0cmluZy5sZW5ndGgpIHtcclxuICAgICAgICBpZiAobGFzdExlbmd0aCB8fCAhc2VwYXJhdG9yQ29weS50ZXN0KCcnKSkgb3V0cHV0LnB1c2goJycpO1xyXG4gICAgICB9IGVsc2Ugb3V0cHV0LnB1c2goc3RyaW5nLnNsaWNlKGxhc3RMYXN0SW5kZXgpKTtcclxuICAgICAgcmV0dXJuIG91dHB1dC5sZW5ndGggPiBsaW0gPyBvdXRwdXQuc2xpY2UoMCwgbGltKSA6IG91dHB1dDtcclxuICAgIH07XHJcbiAgLy8gQ2hha3JhLCBWOFxyXG4gIH0gZWxzZSBpZiAoJzAnLnNwbGl0KHVuZGVmaW5lZCwgMCkubGVuZ3RoKSB7XHJcbiAgICBpbnRlcm5hbFNwbGl0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciwgbGltaXQpIHtcclxuICAgICAgcmV0dXJuIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkICYmIGxpbWl0ID09PSAwID8gW10gOiBuYXRpdmVTcGxpdC5jYWxsKHRoaXMsIHNlcGFyYXRvciwgbGltaXQpO1xyXG4gICAgfTtcclxuICB9IGVsc2UgaW50ZXJuYWxTcGxpdCA9IG5hdGl2ZVNwbGl0O1xyXG5cclxuICByZXR1cm4gW1xyXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc3BsaXRgIG1ldGhvZFxyXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zcGxpdFxyXG4gICAgZnVuY3Rpb24gc3BsaXQoc2VwYXJhdG9yLCBsaW1pdCkge1xyXG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XHJcbiAgICAgIHZhciBzcGxpdHRlciA9IHNlcGFyYXRvciA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZXBhcmF0b3JbU1BMSVRdO1xyXG4gICAgICByZXR1cm4gc3BsaXR0ZXIgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgID8gc3BsaXR0ZXIuY2FsbChzZXBhcmF0b3IsIE8sIGxpbWl0KVxyXG4gICAgICAgIDogaW50ZXJuYWxTcGxpdC5jYWxsKFN0cmluZyhPKSwgc2VwYXJhdG9yLCBsaW1pdCk7XHJcbiAgICB9LFxyXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF1gIG1ldGhvZFxyXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNwbGl0XHJcbiAgICAvL1xyXG4gICAgLy8gTk9URTogVGhpcyBjYW5ub3QgYmUgcHJvcGVybHkgcG9seWZpbGxlZCBpbiBlbmdpbmVzIHRoYXQgZG9uJ3Qgc3VwcG9ydFxyXG4gICAgLy8gdGhlICd5JyBmbGFnLlxyXG4gICAgZnVuY3Rpb24gKHJlZ2V4cCwgbGltaXQpIHtcclxuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShpbnRlcm5hbFNwbGl0LCByZWdleHAsIHRoaXMsIGxpbWl0LCBpbnRlcm5hbFNwbGl0ICE9PSBuYXRpdmVTcGxpdCk7XHJcbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcclxuXHJcbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHJlZ2V4cCk7XHJcbiAgICAgIHZhciBTID0gU3RyaW5nKHRoaXMpO1xyXG4gICAgICB2YXIgQyA9IHNwZWNpZXNDb25zdHJ1Y3RvcihyeCwgUmVnRXhwKTtcclxuXHJcbiAgICAgIHZhciB1bmljb2RlTWF0Y2hpbmcgPSByeC51bmljb2RlO1xyXG4gICAgICB2YXIgZmxhZ3MgPSAocnguaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXHJcbiAgICAgICAgICAgICAgICAgIChyeC5tdWx0aWxpbmUgPyAnbScgOiAnJykgK1xyXG4gICAgICAgICAgICAgICAgICAocngudW5pY29kZSA/ICd1JyA6ICcnKSArXHJcbiAgICAgICAgICAgICAgICAgIChTVVBQT1JUU19ZID8gJ3knIDogJ2cnKTtcclxuXHJcbiAgICAgIC8vIF4oPyArIHJ4ICsgKSBpcyBuZWVkZWQsIGluIGNvbWJpbmF0aW9uIHdpdGggc29tZSBTIHNsaWNpbmcsIHRvXHJcbiAgICAgIC8vIHNpbXVsYXRlIHRoZSAneScgZmxhZy5cclxuICAgICAgdmFyIHNwbGl0dGVyID0gbmV3IEMoU1VQUE9SVFNfWSA/IHJ4IDogJ14oPzonICsgcnguc291cmNlICsgJyknLCBmbGFncyk7XHJcbiAgICAgIHZhciBsaW0gPSBsaW1pdCA9PT0gdW5kZWZpbmVkID8gTUFYX1VJTlQzMiA6IGxpbWl0ID4+PiAwO1xyXG4gICAgICBpZiAobGltID09PSAwKSByZXR1cm4gW107XHJcbiAgICAgIGlmIChTLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGNhbGxSZWdFeHBFeGVjKHNwbGl0dGVyLCBTKSA9PT0gbnVsbCA/IFtTXSA6IFtdO1xyXG4gICAgICB2YXIgcCA9IDA7XHJcbiAgICAgIHZhciBxID0gMDtcclxuICAgICAgdmFyIEEgPSBbXTtcclxuICAgICAgd2hpbGUgKHEgPCBTLmxlbmd0aCkge1xyXG4gICAgICAgIHNwbGl0dGVyLmxhc3RJbmRleCA9IFNVUFBPUlRTX1kgPyBxIDogMDtcclxuICAgICAgICB2YXIgeiA9IGNhbGxSZWdFeHBFeGVjKHNwbGl0dGVyLCBTVVBQT1JUU19ZID8gUyA6IFMuc2xpY2UocSkpO1xyXG4gICAgICAgIHZhciBlO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHogPT09IG51bGwgfHxcclxuICAgICAgICAgIChlID0gbWluKHRvTGVuZ3RoKHNwbGl0dGVyLmxhc3RJbmRleCArIChTVVBQT1JUU19ZID8gMCA6IHEpKSwgUy5sZW5ndGgpKSA9PT0gcFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgcSA9IGFkdmFuY2VTdHJpbmdJbmRleChTLCBxLCB1bmljb2RlTWF0Y2hpbmcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBBLnB1c2goUy5zbGljZShwLCBxKSk7XHJcbiAgICAgICAgICBpZiAoQS5sZW5ndGggPT09IGxpbSkgcmV0dXJuIEE7XHJcbiAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8PSB6Lmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICBBLnB1c2goeltpXSk7XHJcbiAgICAgICAgICAgIGlmIChBLmxlbmd0aCA9PT0gbGltKSByZXR1cm4gQTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHEgPSBwID0gZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgQS5wdXNoKFMuc2xpY2UocCkpO1xyXG4gICAgICByZXR1cm4gQTtcclxuICAgIH1cclxuICBdO1xyXG59LCAhU1VQUE9SVFNfWSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=