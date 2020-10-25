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

  $("#applytemplate").on('click', function () {
    console.log('tags:' + JSON.stringify($("#selecttemplate").val()));
    console.log('designs:' + JSON.stringify($("#table").bootstrapTable('getSelections')));
    $.ajax({
      url: "/design/design/ajaxaddtemplate",
      type: 'POST',
      data: {
        tags: JSON.stringify($("#selecttemplate").val()),
        designs: JSON.stringify($("#table").bootstrapTable('getSelections'))
      },
      dataType: 'json',
      success: function success(data, status) {
        $("#menu_area").notify("Templates Successfully Added :  \n" + $("#selecttemplate option:selected").toArray().map(function (item) {
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
          var templatelist = "";
          $.each(design.templates, function (t, tag) {
            templatelist += "<span class='templatelabel'><span href='/design/design/ajaxunlinktemplate/" + design.id + "/" + template.id + "' templateid='" + template.id + "' templatename='" + template.name + "' class='closebtn unlinktemplatebtn'>×</span>" + tag.name + "</span>";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2Rlc2lnbi9kZXNpZ24vaW5kZXguY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9kZXNpZ24vZGVzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmZ1bmN0aW9uLm5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuc3BsaXQuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJvbiIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImF0dHIiLCJhamF4IiwidXJsIiwidHlwZSIsImRhdGEiLCJkZXNpZ25zIiwiSlNPTiIsInN0cmluZ2lmeSIsImJvb3RzdHJhcFRhYmxlIiwic3VjY2VzcyIsInN0YXR1cyIsIm5vdGlmeSIsInBvc2l0aW9uIiwiY2xhc3NOYW1lIiwiZWFjaCIsInBhcnNlIiwia2V5IiwiZGVzaWduIiwidGFnbGlzdCIsInRhZ3MiLCJ0IiwidGFnIiwiaWQiLCJuYW1lIiwiZmllbGQiLCJ2YWx1ZSIsIm1hamFjdGl2ZXRhZ3MiLCJlcnJvciIsIm1lc3NhZ2UiLCJ2YWwiLCJkYXRhVHlwZSIsInRvQXJyYXkiLCJtYXAiLCJpdGVtIiwidGV4dCIsImpvaW4iLCJ0ZW1wbGF0ZWxpc3QiLCJ0ZW1wbGF0ZXMiLCJ0ZW1wbGF0ZSIsIm1hamFjdGl2ZXRlbXBsYXRlcyIsIm1vZGVscyIsIm1vZGVsbGlzdCIsIm1vZGVsIiwibWFqYWN0aXZlbW9kZWxzIiwiY2xlYW50YWdzIiwibXlzdHJpbmciLCJyZXMiLCJyZXBsYWNlIiwic3BsaXQiLCJjbGVhbnJlcyIsInB1c2giLCJ0cmltIiwiZmlsdGVyIiwidW5pcXVlIiwiYXJyYXkiLCJncmVwIiwiZWwiLCJpbmRleCIsImluQXJyYXkiLCJyb3dsaXN0IiwiciIsInJvdyIsImZpbmQiLCJzIiwic3BhbiIsImpRdWVyeSIsImh0bWwiLCJodG1sVG9FbGVtZW50cyIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJjb250ZW50IiwiY2hpbGROb2RlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBRUFBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUUxQjtBQUNBRixHQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZRSxFQUFaLENBQWUsT0FBZixFQUF3Qiw0QkFBeEIsRUFBc0QsVUFBVUMsS0FBVixFQUFpQjtBQUVuRUMsV0FBTyxDQUFDQyxHQUFSLENBQVlOLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU8sSUFBUixDQUFhLE1BQWIsQ0FBWjtBQUNBUCxLQUFDLENBQUNRLElBQUYsQ0FBTztBQUNIQyxTQUFHLEVBQUVULENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU8sSUFBUixDQUFhLE1BQWIsQ0FERjtBQUVIRyxVQUFJLEVBQUUsTUFGSDtBQUdIQyxVQUFJLEVBQUU7QUFDRkMsZUFBTyxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWQsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZZSxjQUFaLENBQTJCLGVBQTNCLENBQWY7QUFEUCxPQUhIO0FBTUhDLGFBQU8sRUFBRSxpQkFBVUwsSUFBVixFQUFnQk0sTUFBaEIsRUFBd0I7QUFDN0JqQixTQUFDLENBQUMsWUFBRCxDQUFELENBQWdCa0IsTUFBaEIsQ0FBdUIsMEJBQXZCLEVBQW1EO0FBQy9DQyxrQkFBUSxFQUFFLGNBRHFDO0FBRS9DQyxtQkFBUyxFQUFFO0FBRm9DLFNBQW5EO0FBS0FwQixTQUFDLENBQUNxQixJQUFGLENBQU9SLElBQUksQ0FBQ1MsS0FBTCxDQUFXWCxJQUFYLENBQVAsRUFBeUIsVUFBVVksR0FBVixFQUFlQyxNQUFmLEVB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aWduX2Rlc2lnbl9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi4vLi4vLi4vY3NzL2Rlc2lnbi9kZXNpZ24vaW5kZXguY3NzJztcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAvL2ljaSBhamF4IHRhZ1xyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy51bmxpbmt0YWdmcm9tc2VsZWN0aW9uYnRuJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCQodGhpcykuYXR0cignaHJlZicpKTtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICQodGhpcykuYXR0cignaHJlZicpLFxyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGRlc2lnbnM6IEpTT04uc3RyaW5naWZ5KCQoXCIjdGFibGVcIikuYm9vdHN0cmFwVGFibGUoJ2dldFNlbGVjdGlvbnMnKSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEsIHN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgJChcIiNtZW51X2FyZWFcIikubm90aWZ5KFwiVGFnIFN1Y2Nlc3NmdWxseSBEZWxldGVkXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJib3R0b20gcmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwic3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAkLmVhY2goSlNPTi5wYXJzZShkYXRhKSwgZnVuY3Rpb24gKGtleSwgZGVzaWduKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0YWdsaXN0ID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGRlc2lnbi50YWdzLCBmdW5jdGlvbiAodCwgdGFnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ2xpc3QgKz0gXCI8c3BhbiBjbGFzcz0ndGFnbGFiZWwnPjxzcGFuIGhyZWY9Jy9kZXNpZ24vZGVzaWduL2FqYXh1bmxpbmt0YWcvXCIgKyBkZXNpZ24uaWQgKyBcIi9cIiArIHRhZy5pZCArIFwiJyB0YWdpZD0nXCIgKyB0YWcuaWQgKyBcIicgdGFnbmFtZT0nXCIgKyB0YWcubmFtZSArIFwiJyBjbGFzcz0nY2xvc2VidG4gdW5saW5rdGFnYnRuJz7Dlzwvc3Bhbj5cIiArIHRhZy5uYW1lICsgXCI8L3NwYW4+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoJyN0YWJsZScpLmJvb3RzdHJhcFRhYmxlKCd1cGRhdGVDZWxsQnlVbmlxdWVJZCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGRlc2lnbi5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICd0YWdzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRhZ2xpc3RcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWFqYWN0aXZldGFncygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyAkKCcjdGFibGUgdGJvZHknKS5maW5kKCcuc2VsZWN0ZWQnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIC8vICQoJyN0YWJsZSB0Ym9keScpLnByZXBlbmQoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAvLyAkKCcjdGFibGUnKS5ib290c3RyYXBUYWJsZSgncmVmcmVzaCcpO1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZGF0YSwgc3RhdHVzLCBtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNtZW51X2FyZWFcIikubm90aWZ5KFwiVGFnIERlbGV0aW9uIEZhaWxlZFwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbSByaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcudW5saW5rdGFnYnRuJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiAkKHRoaXMpLmF0dHIoJ2hyZWYnKSxcclxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSwgc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI21lbnVfYXJlYVwiKS5ub3RpZnkoXCJUYWcgU3VjY2Vzc2Z1bGx5IERlbGV0ZWRcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbSByaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJzdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBkZXNpZ24gPSBKU09OLnBhcnNlKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vJCgnI3RhYmxlJykuYm9vdHN0cmFwVGFibGUoJ3JlbW92ZUJ5VW5pcXVlSWQnLCBkZXNpZ24uaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0YWdsaXN0ID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAkLmVhY2goZGVzaWduLnRhZ3MsIGZ1bmN0aW9uICh0LCB0YWcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWdsaXN0ICs9IFwiPHNwYW4gY2xhc3M9J3RhZ2xhYmVsJz48c3BhbiBocmVmPScvZGVzaWduL2Rlc2lnbi9hamF4dW5saW5rdGFnL1wiICsgZGVzaWduLmlkICsgXCIvXCIgKyB0YWcuaWQgKyBcIicgdGFnaWQ9J1wiICsgdGFnLmlkICsgXCInIHRhZ25hbWU9J1wiICsgdGFnLm5hbWUgKyBcIicgY2xhc3M9J2Nsb3NlYnRuIHVubGlua3RhZ2J0bic+w5c8L3NwYW4+XCIgKyB0YWcubmFtZSArIFwiPC9zcGFuPlwiO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJCgnI3RhYmxlJykuYm9vdHN0cmFwVGFibGUoJ3VwZGF0ZUNlbGxCeVVuaXF1ZUlkJywge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBkZXNpZ24uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICd0YWdzJyxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGFnbGlzdFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbWFqYWN0aXZldGFncygpO1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZGF0YSwgc3RhdHVzLCBtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNtZW51X2FyZWFcIikubm90aWZ5KFwiVGFnIERlbGV0aW9uIEZhaWxlZFwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbSByaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIjYXBwbHl0YWdcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0YWdzOicrSlNPTi5zdHJpbmdpZnkoJChcIiNzZWxlY3R0YWdcIikudmFsKCkpKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnZGVzaWduczonK0pTT04uc3RyaW5naWZ5KCQoXCIjdGFibGVcIikuYm9vdHN0cmFwVGFibGUoJ2dldFNlbGVjdGlvbnMnKSkpXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcIi9kZXNpZ24vZGVzaWduL2FqYXhhZGR0YWdcIixcclxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICB0YWdzOiBKU09OLnN0cmluZ2lmeSgkKFwiI3NlbGVjdHRhZ1wiKS52YWwoKSksXHJcbiAgICAgICAgICAgICAgICBkZXNpZ25zOiBKU09OLnN0cmluZ2lmeSgkKFwiI3RhYmxlXCIpLmJvb3RzdHJhcFRhYmxlKCdnZXRTZWxlY3Rpb25zJykpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcblxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSwgc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI21lbnVfYXJlYVwiKS5ub3RpZnkoXCJUYWdzIFN1Y2Nlc3NmdWxseSBBZGRlZCA6ICBcXG5cIiArICQoXCIjc2VsZWN0dGFnIG9wdGlvbjpzZWxlY3RlZFwiKS50b0FycmF5KCkubWFwKGl0ZW0gPT4gaXRlbS50ZXh0KS5qb2luKCdcXG4nKSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbSByaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJzdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vU3VwcHJlc3Npb24gZGVzIGxpZ25lcyBwcsOpY8OpZGVtbWVudCBjb2Now6llc1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IGlkcyA9ICQubWFwKCQoJyN0YWJsZScpLmJvb3RzdHJhcFRhYmxlKCdnZXRTZWxlY3Rpb25zJyksIGZ1bmN0aW9uIChyb3cpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gcm93LmlkXHJcbiAgICAgICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAgICAgLy8gJCgnI3RhYmxlJykuYm9vdHN0cmFwVGFibGUoJ3JlbW92ZScsIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBmaWVsZDogJ2lkJyxcclxuICAgICAgICAgICAgICAgIC8vICAgICB2YWx1ZXM6IGlkc1xyXG4gICAgICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJC5lYWNoKEpTT04ucGFyc2UoZGF0YSksIGZ1bmN0aW9uIChrZXksIGRlc2lnbikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGFnbGlzdCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQuZWFjaChkZXNpZ24udGFncywgZnVuY3Rpb24gKHQsIHRhZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdsaXN0ICs9IFwiPHNwYW4gY2xhc3M9J3RhZ2xhYmVsJz48c3BhbiBocmVmPScvZGVzaWduL2Rlc2lnbi9hamF4dW5saW5rdGFnL1wiICsgZGVzaWduLmlkICsgXCIvXCIgKyB0YWcuaWQgKyBcIicgdGFnaWQ9J1wiICsgdGFnLmlkICsgXCInIHRhZ25hbWU9J1wiICsgdGFnLm5hbWUgKyBcIicgY2xhc3M9J2Nsb3NlYnRuIHVubGlua3RhZ2J0bic+w5c8L3NwYW4+XCIgKyB0YWcubmFtZSArIFwiPC9zcGFuPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKCcjdGFibGUnKS5ib290c3RyYXBUYWJsZSgndXBkYXRlQ2VsbEJ5VW5pcXVlSWQnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBkZXNpZ24uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiAndGFncycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0YWdsaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1hamFjdGl2ZXRhZ3MoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gJCgnI3RhYmxlIHRib2R5JykuZmluZCgnLnNlbGVjdGVkJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAvLyAkKCcjdGFibGUgdGJvZHknKS5wcmVwZW5kKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgLy8gJCgnI3RhYmxlJykuYm9vdHN0cmFwVGFibGUoJ3JlZnJlc2gnKTtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOlxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMsIG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI21lbnVfYXJlYVwiKS5ub3RpZnkoXCJBZGRpbmcgVGFncyBGYWlsZWQgOiAgXFxuXCIgKyAkKFwiI3NlbGVjdHRhZyBvcHRpb246c2VsZWN0ZWRcIikudG9BcnJheSgpLm1hcChpdGVtID0+IGl0ZW0udGV4dCkuam9pbignXFxuJyksIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYm90dG9tIHJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJlcnJvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICQoJyN0YWJsZScpLm9uKCdjaGVjay5icy50YWJsZSB1bmNoZWNrLmJzLnRhYmxlIHVuY2hlY2stYWxsLmJzLnRhYmxlIGNoZWNrLWFsbC5icy50YWJsZScsIG1hamFjdGl2ZXRhZ3MpO1xyXG5cclxuXHJcbiAgICAvL2ljaSBhamF4IHRlbXBsYXRlXHJcbiAgICAkKFwiI2FwcGx5dGVtcGxhdGVcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0YWdzOicrSlNPTi5zdHJpbmdpZnkoJChcIiNzZWxlY3R0ZW1wbGF0ZVwiKS52YWwoKSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkZXNpZ25zOicrSlNPTi5zdHJpbmdpZnkoJChcIiN0YWJsZVwiKS5ib290c3RyYXBUYWJsZSgnZ2V0U2VsZWN0aW9ucycpKSlcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiL2Rlc2lnbi9kZXNpZ24vYWpheGFkZHRlbXBsYXRlXCIsXHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdGFnczogSlNPTi5zdHJpbmdpZnkoJChcIiNzZWxlY3R0ZW1wbGF0ZVwiKS52YWwoKSksXHJcbiAgICAgICAgICAgICAgICBkZXNpZ25zOiBKU09OLnN0cmluZ2lmeSgkKFwiI3RhYmxlXCIpLmJvb3RzdHJhcFRhYmxlKCdnZXRTZWxlY3Rpb25zJykpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcblxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSwgc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI21lbnVfYXJlYVwiKS5ub3RpZnkoXCJUZW1wbGF0ZXMgU3VjY2Vzc2Z1bGx5IEFkZGVkIDogIFxcblwiICsgJChcIiNzZWxlY3R0ZW1wbGF0ZSBvcHRpb246c2VsZWN0ZWRcIikudG9BcnJheSgpLm1hcChpdGVtID0+IGl0ZW0udGV4dCkuam9pbignXFxuJyksIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJib3R0b20gcmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwic3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL1N1cHByZXNzaW9uIGRlcyBsaWduZXMgcHLDqWPDqWRlbW1lbnQgY29jaMOpZXNcclxuICAgICAgICAgICAgICAgIC8vIGxldCBpZHMgPSAkLm1hcCgkKCcjdGFibGUnKS5ib290c3RyYXBUYWJsZSgnZ2V0U2VsZWN0aW9ucycpLCBmdW5jdGlvbiAocm93KSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIHJvdy5pZFxyXG4gICAgICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgICAgIC8vICQoJyN0YWJsZScpLmJvb3RzdHJhcFRhYmxlKCdyZW1vdmUnLCB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgZmllbGQ6ICdpZCcsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdmFsdWVzOiBpZHNcclxuICAgICAgICAgICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICQuZWFjaChKU09OLnBhcnNlKGRhdGEpLCBmdW5jdGlvbiAoa2V5LCBkZXNpZ24pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXBsYXRlbGlzdCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQuZWFjaChkZXNpZ24udGVtcGxhdGVzLCBmdW5jdGlvbiAodCwgdGFnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlbGlzdCArPSBcIjxzcGFuIGNsYXNzPSd0ZW1wbGF0ZWxhYmVsJz48c3BhbiBocmVmPScvZGVzaWduL2Rlc2lnbi9hamF4dW5saW5rdGVtcGxhdGUvXCIgKyBkZXNpZ24uaWQgKyBcIi9cIiArIHRlbXBsYXRlLmlkICsgXCInIHRlbXBsYXRlaWQ9J1wiICsgdGVtcGxhdGUuaWQgKyBcIicgdGVtcGxhdGVuYW1lPSdcIiArIHRlbXBsYXRlLm5hbWUgKyBcIicgY2xhc3M9J2Nsb3NlYnRuIHVubGlua3RlbXBsYXRlYnRuJz7Dlzwvc3Bhbj5cIiArIHRhZy5uYW1lICsgXCI8L3NwYW4+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoJyN0YWJsZScpLmJvb3RzdHJhcFRhYmxlKCd1cGRhdGVDZWxsQnlVbmlxdWVJZCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGRlc2lnbi5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICd0ZW1wbGF0ZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGVtcGxhdGVsaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1hamFjdGl2ZXRlbXBsYXRlcygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyAkKCcjdGFibGUgdGJvZHknKS5maW5kKCcuc2VsZWN0ZWQnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIC8vICQoJyN0YWJsZSB0Ym9keScpLnByZXBlbmQoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAvLyAkKCcjdGFibGUnKS5ib290c3RyYXBUYWJsZSgncmVmcmVzaCcpO1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGRhdGEsIHN0YXR1cywgbWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjbWVudV9hcmVhXCIpLm5vdGlmeShcIkFkZGluZyBUZW1wbGF0ZXMgRmFpbGVkIDogIFxcblwiICsgJChcIiNzZWxlY3R0ZW1wbGF0ZSBvcHRpb246c2VsZWN0ZWRcIikudG9BcnJheSgpLm1hcChpdGVtID0+IGl0ZW0udGV4dCkuam9pbignXFxuJyksIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYm90dG9tIHJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJlcnJvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcudW5saW5rdGVtcGxhdGVmcm9tc2VsZWN0aW9uYnRuJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCQodGhpcykuYXR0cignaHJlZicpKTtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICQodGhpcykuYXR0cignaHJlZicpLFxyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGRlc2lnbnM6IEpTT04uc3RyaW5naWZ5KCQoXCIjdGFibGVcIikuYm9vdHN0cmFwVGFibGUoJ2dldFNlbGVjdGlvbnMnKSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEsIHN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgJChcIiNtZW51X2FyZWFcIikubm90aWZ5KFwiVGVtcGxhdGUgU3VjY2Vzc2Z1bGx5IERlbGV0ZWRcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbSByaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJzdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICQuZWFjaChKU09OLnBhcnNlKGRhdGEpLCBmdW5jdGlvbiAoa2V5LCBkZXNpZ24pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXBsYXRlbGlzdCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQuZWFjaChkZXNpZ24udGVtcGxhdGVzLCBmdW5jdGlvbiAodCwgdGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVsaXN0ICs9IFwiPHNwYW4gY2xhc3M9J3RlbXBsYXRlbGFiZWwnPjxzcGFuIGhyZWY9Jy9kZXNpZ24vZGVzaWduL2FqYXh1bmxpbmt0ZW1wbGF0ZS9cIiArIGRlc2lnbi5pZCArIFwiL1wiICsgdGVtcGxhdGUuaWQgKyBcIicgdGVtcGxhdGVpZD0nXCIgKyB0ZW1wbGF0ZS5pZCArIFwiJyB0ZW1wbGF0ZW5hbWU9J1wiICsgdGVtcGxhdGUubmFtZSArIFwiJyBjbGFzcz0nY2xvc2VidG4gdW5saW5rdGVtcGxhdGVidG4nPsOXPC9zcGFuPlwiICsgdGVtcGxhdGUubmFtZSArIFwiPC9zcGFuPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKCcjdGFibGUnKS5ib290c3RyYXBUYWJsZSgndXBkYXRlQ2VsbEJ5VW5pcXVlSWQnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBkZXNpZ24uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiAndGVtcGxhdGVzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRlbXBsYXRlbGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBtYWphY3RpdmV0ZW1wbGF0ZXMoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gJCgnI3RhYmxlIHRib2R5JykuZmluZCgnLnNlbGVjdGVkJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAvLyAkKCcjdGFibGUgdGJvZHknKS5wcmVwZW5kKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgLy8gJCgnI3RhYmxlJykuYm9vdHN0cmFwVGFibGUoJ3JlZnJlc2gnKTtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOlxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGRhdGEsIHN0YXR1cywgbWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjbWVudV9hcmVhXCIpLm5vdGlmeShcIlRlbXBsYXRlIERlbGV0aW9uIEZhaWxlZFwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbSByaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcudW5saW5rdGVtcGxhdGVidG4nLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICQodGhpcykuYXR0cignaHJlZicpLFxyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjbWVudV9hcmVhXCIpLm5vdGlmeShcIlRlbXBsYXRlIFN1Y2Nlc3NmdWxseSBEZWxldGVkXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJib3R0b20gcmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwic3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZGVzaWduID0gSlNPTi5wYXJzZShkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyQoJyN0YWJsZScpLmJvb3RzdHJhcFRhYmxlKCdyZW1vdmVCeVVuaXF1ZUlkJywgZGVzaWduLmlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdGVtcGxhdGVsaXN0ID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAkLmVhY2goZGVzaWduLnRlbXBsYXRlcywgZnVuY3Rpb24gKHQsIHRlbXBsYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVsaXN0ICs9IFwiPHNwYW4gY2xhc3M9J3RlbXBsYXRlbGFiZWwnPjxzcGFuIGhyZWY9Jy9kZXNpZ24vZGVzaWduL2FqYXh1bmxpbmt0ZW1wbGF0ZS9cIiArIGRlc2lnbi5pZCArIFwiL1wiICsgdGVtcGxhdGUuaWQgKyBcIicgdGVtcGxhdGVpZD0nXCIgKyB0ZW1wbGF0ZS5pZCArIFwiJyB0ZW1wbGF0ZW5hbWU9J1wiICsgdGVtcGxhdGUubmFtZSArIFwiJyBjbGFzcz0nY2xvc2VidG4gdW5saW5rdGVtcGxhdGVidG4nPsOXPC9zcGFuPlwiICsgdGVtcGxhdGUubmFtZSArIFwiPC9zcGFuPlwiO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJCgnI3RhYmxlJykuYm9vdHN0cmFwVGFibGUoJ3VwZGF0ZUNlbGxCeVVuaXF1ZUlkJywge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBkZXNpZ24uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICd0ZW1wbGF0ZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0ZW1wbGF0ZWxpc3RcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIG1hamFjdGl2ZXRlbXBsYXRlcygpO1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZGF0YSwgc3RhdHVzLCBtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNtZW51X2FyZWFcIikubm90aWZ5KFwiVGVtcGxhdGUgRGVsZXRpb24gRmFpbGVkXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYm90dG9tIHJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJlcnJvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI3RhYmxlJykub24oJ2NoZWNrLmJzLnRhYmxlIHVuY2hlY2suYnMudGFibGUgdW5jaGVjay1hbGwuYnMudGFibGUgY2hlY2stYWxsLmJzLnRhYmxlJywgbWFqYWN0aXZldGVtcGxhdGVzKTtcclxuXHJcbiAgICAvL2ljaSBhamF4IG1vZGVsXHJcbiAgICAkKFwiI2FwcGx5bW9kZWxcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdtb2RlbHM6JytKU09OLnN0cmluZ2lmeSgkKFwiI3NlbGVjdG1vZGVsXCIpLnZhbCgpKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Rlc2lnbnM6JytKU09OLnN0cmluZ2lmeSgkKFwiI3RhYmxlXCIpLmJvb3RzdHJhcFRhYmxlKCdnZXRTZWxlY3Rpb25zJykpKVxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCIvZGVzaWduL2Rlc2lnbi9hamF4YWRkbW9kZWxcIixcclxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBtb2RlbHM6IEpTT04uc3RyaW5naWZ5KCQoXCIjc2VsZWN0bW9kZWxcIikudmFsKCkpLFxyXG4gICAgICAgICAgICAgICAgZGVzaWduczogSlNPTi5zdHJpbmdpZnkoJChcIiN0YWJsZVwiKS5ib290c3RyYXBUYWJsZSgnZ2V0U2VsZWN0aW9ucycpKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG5cclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEsIHN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgJChcIiNtZW51X2FyZWFcIikubm90aWZ5KFwibW9kZWxzIFN1Y2Nlc3NmdWxseSBBZGRlZCA6ICBcXG5cIiArICQoXCIjc2VsZWN0bW9kZWwgb3B0aW9uOnNlbGVjdGVkXCIpLnRvQXJyYXkoKS5tYXAoaXRlbSA9PiBpdGVtLnRleHQpLmpvaW4oJ1xcbicpLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYm90dG9tIHJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9TdXBwcmVzc2lvbiBkZXMgbGlnbmVzIHByw6ljw6lkZW1tZW50IGNvY2jDqWVzXHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgaWRzID0gJC5tYXAoJCgnI3RhYmxlJykuYm9vdHN0cmFwVGFibGUoJ2dldFNlbGVjdGlvbnMnKSwgZnVuY3Rpb24gKHJvdykge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiByb3cuaWRcclxuICAgICAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgICAgICAvLyAkKCcjdGFibGUnKS5ib290c3RyYXBUYWJsZSgncmVtb3ZlJywge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGZpZWxkOiAnaWQnLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHZhbHVlczogaWRzXHJcbiAgICAgICAgICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAkLmVhY2goSlNPTi5wYXJzZShkYXRhKSwgZnVuY3Rpb24gKGtleSwgZGVzaWduKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtb2RlbGxpc3QgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkLmVhY2goZGVzaWduLm1vZGVscywgZnVuY3Rpb24gKHQsIG1vZGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsbGlzdCArPSBcIjxzcGFuIGNsYXNzPSdtb2RlbGxhYmVsJz48c3BhbiBocmVmPScvZGVzaWduL2Rlc2lnbi9hamF4dW5saW5rbW9kZWwvXCIgKyBkZXNpZ24uaWQgKyBcIi9cIiArIG1vZGVsLmlkICsgXCInIG1vZGVsaWQ9J1wiICsgbW9kZWwuaWQgKyBcIicgbW9kZWxuYW1lPSdcIiArIG1vZGVsLm5hbWUgKyBcIicgY2xhc3M9J2Nsb3NlYnRuIHVubGlua21vZGVsYnRuJz7Dlzwvc3Bhbj5cIiArIG1vZGVsLm5hbWUgKyBcIjwvc3Bhbj5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI3RhYmxlJykuYm9vdHN0cmFwVGFibGUoJ3VwZGF0ZUNlbGxCeVVuaXF1ZUlkJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogZGVzaWduLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ21vZGVscycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBtb2RlbGxpc3RcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWFqYWN0aXZlbW9kZWxzKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vICQoJyN0YWJsZSB0Ym9keScpLmZpbmQoJy5zZWxlY3RlZCcpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gJCgnI3RhYmxlIHRib2R5JykucHJlcGVuZChkYXRhKTtcclxuICAgICAgICAgICAgICAgIC8vICQoJyN0YWJsZScpLmJvb3RzdHJhcFRhYmxlKCdyZWZyZXNoJyk7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjpcclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZGF0YSwgc3RhdHVzLCBtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNtZW51X2FyZWFcIikubm90aWZ5KFwiQWRkaW5nIG1vZGVscyBGYWlsZWQgOiAgXFxuXCIgKyAkKFwiI3NlbGVjdG1vZGVsIG9wdGlvbjpzZWxlY3RlZFwiKS50b0FycmF5KCkubWFwKGl0ZW0gPT4gaXRlbS50ZXh0KS5qb2luKCdcXG4nKSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJib3R0b20gcmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImVycm9yXCJcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy51bmxpbmttb2RlbGZyb21zZWxlY3Rpb25idG4nLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJCh0aGlzKS5hdHRyKCdocmVmJykpO1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogJCh0aGlzKS5hdHRyKCdocmVmJyksXHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgZGVzaWduczogSlNPTi5zdHJpbmdpZnkoJChcIiN0YWJsZVwiKS5ib290c3RyYXBUYWJsZSgnZ2V0U2VsZWN0aW9ucycpKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSwgc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI21lbnVfYXJlYVwiKS5ub3RpZnkoXCJtb2RlbCBTdWNjZXNzZnVsbHkgRGVsZXRlZFwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYm90dG9tIHJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJC5lYWNoKEpTT04ucGFyc2UoZGF0YSksIGZ1bmN0aW9uIChrZXksIGRlc2lnbikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgbW9kZWxsaXN0ID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGRlc2lnbi5tb2RlbHMsIGZ1bmN0aW9uICh0LCBtb2RlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbGxpc3QgKz0gXCI8c3BhbiBjbGFzcz0nbW9kZWxsYWJlbCc+PHNwYW4gaHJlZj0nL2Rlc2lnbi9kZXNpZ24vYWpheHVubGlua21vZGVsL1wiICsgZGVzaWduLmlkICsgXCIvXCIgKyBtb2RlbC5pZCArIFwiJyBtb2RlbGlkPSdcIiArIG1vZGVsLmlkICsgXCInIG1vZGVsbmFtZT0nXCIgKyBtb2RlbC5uYW1lICsgXCInIGNsYXNzPSdjbG9zZWJ0biB1bmxpbmttb2RlbGJ0bic+w5c8L3NwYW4+XCIgKyBtb2RlbC5uYW1lICsgXCI8L3NwYW4+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoJyN0YWJsZScpLmJvb3RzdHJhcFRhYmxlKCd1cGRhdGVDZWxsQnlVbmlxdWVJZCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGRlc2lnbi5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdtb2RlbHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbW9kZWxsaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1hamFjdGl2ZW1vZGVscygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyAkKCcjdGFibGUgdGJvZHknKS5maW5kKCcuc2VsZWN0ZWQnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIC8vICQoJyN0YWJsZSB0Ym9keScpLnByZXBlbmQoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAvLyAkKCcjdGFibGUnKS5ib290c3RyYXBUYWJsZSgncmVmcmVzaCcpO1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZGF0YSwgc3RhdHVzLCBtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNtZW51X2FyZWFcIikubm90aWZ5KFwibW9kZWwgRGVsZXRpb24gRmFpbGVkXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYm90dG9tIHJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJlcnJvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy51bmxpbmttb2RlbGJ0bicsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogJCh0aGlzKS5hdHRyKCdocmVmJyksXHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEsIHN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgJChcIiNtZW51X2FyZWFcIikubm90aWZ5KFwibW9kZWwgU3VjY2Vzc2Z1bGx5IERlbGV0ZWRcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbSByaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJzdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBkZXNpZ24gPSBKU09OLnBhcnNlKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vJCgnI3RhYmxlJykuYm9vdHN0cmFwVGFibGUoJ3JlbW92ZUJ5VW5pcXVlSWQnLCBkZXNpZ24uaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBtb2RlbGxpc3QgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICQuZWFjaChkZXNpZ24ubW9kZWxzLCBmdW5jdGlvbiAodCwgbW9kZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbGxpc3QgKz0gXCI8c3BhbiBjbGFzcz0nbW9kZWxsYWJlbCc+PHNwYW4gaHJlZj0nL2Rlc2lnbi9kZXNpZ24vYWpheHVubGlua21vZGVsL1wiICsgZGVzaWduLmlkICsgXCIvXCIgKyBtb2RlbC5pZCArIFwiJyBtb2RlbGlkPSdcIiArIG1vZGVsLmlkICsgXCInIG1vZGVsbmFtZT0nXCIgKyBtb2RlbC5uYW1lICsgXCInIGNsYXNzPSdjbG9zZWJ0biB1bmxpbmttb2RlbGJ0bic+w5c8L3NwYW4+XCIgKyBtb2RlbC5uYW1lICsgXCI8L3NwYW4+XCI7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkKCcjdGFibGUnKS5ib290c3RyYXBUYWJsZSgndXBkYXRlQ2VsbEJ5VW5pcXVlSWQnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGRlc2lnbi5pZCxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ21vZGVscycsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG1vZGVsbGlzdFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbWFqYWN0aXZlbW9kZWxzKCk7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjpcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMsIG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI21lbnVfYXJlYVwiKS5ub3RpZnkoXCJtb2RlbCBEZWxldGlvbiBGYWlsZWRcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJib3R0b20gcmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImVycm9yXCJcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjdGFibGUnKS5vbignY2hlY2suYnMudGFibGUgdW5jaGVjay5icy50YWJsZSB1bmNoZWNrLWFsbC5icy50YWJsZSBjaGVjay1hbGwuYnMudGFibGUnLCBtYWphY3RpdmVtb2RlbHMpO1xyXG5cclxufSk7XHJcblxyXG5cclxuZnVuY3Rpb24gY2xlYW50YWdzKG15c3RyaW5nKSB7XHJcbiAgICBsZXQgcmVzID0gbXlzdHJpbmcucmVwbGFjZSgvKDwoW14+XSspPikvaWcsIFwiXCIpLnJlcGxhY2UoL1xcbnxcXHJ8KFxcblxccikvZywgXCJcIikuc3BsaXQoXCLDl1wiKTtcclxuICAgIGxldCBjbGVhbnJlcyA9IFtdO1xyXG5cclxuICAgICQuZWFjaChyZXMsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjbGVhbnJlcy5wdXNoKCQudHJpbSh0aGlzKSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBjbGVhbnJlcy5maWx0ZXIoZnVuY3Rpb24gKGNsZWFucmVzKSB7XHJcbiAgICAgICAgcmV0dXJuIGNsZWFucmVzICE9PSAnw5cnICYmIGNsZWFucmVzICE9PSAnJztcclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gdW5pcXVlKGFycmF5KSB7XHJcbiAgICByZXR1cm4gJC5ncmVwKGFycmF5LCBmdW5jdGlvbiAoZWwsIGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4ID09PSAkLmluQXJyYXkoZWwsIGFycmF5KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbWFqYWN0aXZldGFncygpIHtcclxuICAgIGxldCByb3dsaXN0ID0gJCgnI3RhYmxlJykuYm9vdHN0cmFwVGFibGUoJ2dldFNlbGVjdGlvbnMnKTtcclxuICAgIGxldCB0YWdsaXN0ID0gJyc7XHJcbiAgICBsZXQgdGFncyA9IFtdO1xyXG5cclxuICAgICQuZWFjaChyb3dsaXN0LCBmdW5jdGlvbiAociwgcm93KSB7XHJcbi8vICAgICAgICAkLm1lcmdlKHRhZ3MsIGNsZWFudGFncyhyb3cudGFncykpO1xyXG5cclxuICAgICAgICAkLmVhY2goJChyb3cudGFncykuZmluZCgnLnVubGlua3RhZ2J0bicpLCBmdW5jdGlvbihzLHNwYW4pe1xyXG4gICAgICAgICAgICBpZihqUXVlcnkuaW5BcnJheSgkKHNwYW4pLmF0dHIoJ3RhZ25hbWUnKSx0YWdzKSA9PT0gLTEpe1xyXG5cclxuICAgICAgICAgICAgICAgIHRhZ3MucHVzaCgkKHNwYW4pLmF0dHIoJ3RhZ25hbWUnKSk7XHJcbiAgICAgICAgICAgICAgICB0YWdsaXN0ICs9IFwiPHNwYW4gY2xhc3M9J3RhZ2xhYmVsJz48c3BhbiBocmVmPScvZGVzaWduL2Rlc2lnbi9hamF4dW5saW5rdGFnZnJvbXNlbGVjdGlvbi9cIiArICQoc3BhbikuYXR0cigndGFnaWQnKSArIFwiJyB0YWdpZD0nXCIgKyAkKHNwYW4pLmF0dHIoJ3RhZ2lkJykgKyBcIicgdGFnbmFtZT0nXCIgKyAkKHNwYW4pLmF0dHIoJ3RhZ25hbWUnKSArIFwiJyBjbGFzcz0nY2xvc2VidG4gdW5saW5rdGFnZnJvbXNlbGVjdGlvbmJ0bic+w5c8L3NwYW4+XCIgKyAkKHNwYW4pLmF0dHIoJ3RhZ25hbWUnKSArIFwiPC9zcGFuPlwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgIC8vY29uc29sZS5sb2coc3Bhbi5hdHRyKCd0YWdpZCcpKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJChzcGFuKS5hdHRyKCd0YWdpZCcpICsgJyAnICsgJChzcGFuKS5hdHRyKCd0YWduYW1lJykpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIC8vY29uc29sZS5sb2codGFnbGlzdCk7XHJcbiAgICAvLyB0YWdzID0gdW5pcXVlKHRhZ3MpO1xyXG4gICAgLy8gY29uc29sZS5sb2codGFncylcclxuICAgIC8vXHJcbiAgICAvLyAkLmVhY2godGFncywgZnVuY3Rpb24gKHQsIHRhZykge1xyXG4gICAgLy8gICAgIHRhZ2xpc3QgKz0gXCI8c3BhbiBjbGFzcz0ndGFnbGFiZWwnPjxzcGFuIGhyZWY9Jy9kZXNpZ24vZGVzaWduL2FqYXh1bmxpbmt0YWdmcm9tc2VsZWN0aW9uL1wiICsgdGFnLmlkICsgXCInIHRhZ2lkPSdcIiArIHRhZy5pZCArIFwiJyB0YWduYW1lPSdcIiArIHRhZy5uYW1lICsgXCInIGNsYXNzPSdjbG9zZWJ0biB1bmxpbmt0YWdmcm9tc2VsZWN0aW9uYnRuJz7Dlzwvc3Bhbj5cIiArIHRhZyArIFwiPC9zcGFuPlwiO1xyXG4gICAgLy8gfSlcclxuXHJcbiAgICAkKCcjYWN0aXZldGFncycpLmh0bWwodGFnbGlzdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hamFjdGl2ZXRlbXBsYXRlcygpIHtcclxuICAgIGxldCByb3dsaXN0ID0gJCgnI3RhYmxlJykuYm9vdHN0cmFwVGFibGUoJ2dldFNlbGVjdGlvbnMnKTtcclxuICAgIGxldCB0ZW1wbGF0ZWxpc3QgPSAnJztcclxuICAgIGxldCB0ZW1wbGF0ZXMgPSBbXTtcclxuXHJcbiAgICAkLmVhY2gocm93bGlzdCwgZnVuY3Rpb24gKHIsIHJvdykge1xyXG4vLyAgICAgICAgJC5tZXJnZSh0YWdzLCBjbGVhbnRhZ3Mocm93LnRhZ3MpKTtcclxuXHJcbiAgICAgICAgJC5lYWNoKCQocm93LnRlbXBsYXRlcykuZmluZCgnLnVubGlua3RlbXBsYXRlYnRuJyksIGZ1bmN0aW9uKHMsc3Bhbil7XHJcbiAgICAgICAgICAgIGlmKGpRdWVyeS5pbkFycmF5KCQoc3BhbikuYXR0cigndGVtcGxhdGVuYW1lJyksdGVtcGxhdGVzKSA9PT0gLTEpe1xyXG5cclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlcy5wdXNoKCQoc3BhbikuYXR0cigndGVtcGxhdGVuYW1lJykpO1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVsaXN0ICs9IFwiPHNwYW4gY2xhc3M9J3RlbXBsYXRlbGFiZWwnPjxzcGFuIGhyZWY9Jy9kZXNpZ24vZGVzaWduL2FqYXh1bmxpbmt0ZW1wbGF0ZWZyb21zZWxlY3Rpb24vXCIgKyAkKHNwYW4pLmF0dHIoJ3RlbXBsYXRlaWQnKSArIFwiJyB0ZW1wbGF0ZWlkPSdcIiArICQoc3BhbikuYXR0cigndGVtcGxhdGVpZCcpICsgXCInIHRlbXBsYXRlbmFtZT0nXCIgKyAkKHNwYW4pLmF0dHIoJ3RlbXBsYXRlbmFtZScpICsgXCInIGNsYXNzPSdjbG9zZWJ0biB1bmxpbmt0ZW1wbGF0ZWZyb21zZWxlY3Rpb25idG4nPsOXPC9zcGFuPlwiICsgJChzcGFuKS5hdHRyKCd0ZW1wbGF0ZW5hbWUnKSArIFwiPC9zcGFuPlwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHNwYW4uYXR0cigndGFnaWQnKSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCQoc3BhbikuYXR0cigndGFnaWQnKSArICcgJyArICQoc3BhbikuYXR0cigndGFnbmFtZScpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKHRhZ2xpc3QpO1xyXG4gICAgLy8gdGFncyA9IHVuaXF1ZSh0YWdzKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRhZ3MpXHJcbiAgICAvL1xyXG4gICAgLy8gJC5lYWNoKHRhZ3MsIGZ1bmN0aW9uICh0LCB0YWcpIHtcclxuICAgIC8vICAgICB0YWdsaXN0ICs9IFwiPHNwYW4gY2xhc3M9J3RhZ2xhYmVsJz48c3BhbiBocmVmPScvZGVzaWduL2Rlc2lnbi9hamF4dW5saW5rdGFnZnJvbXNlbGVjdGlvbi9cIiArIHRhZy5pZCArIFwiJyB0YWdpZD0nXCIgKyB0YWcuaWQgKyBcIicgdGFnbmFtZT0nXCIgKyB0YWcubmFtZSArIFwiJyBjbGFzcz0nY2xvc2VidG4gdW5saW5rdGFnZnJvbXNlbGVjdGlvbmJ0bic+w5c8L3NwYW4+XCIgKyB0YWcgKyBcIjwvc3Bhbj5cIjtcclxuICAgIC8vIH0pXHJcblxyXG4gICAgJCgnI2FjdGl2ZXRlbXBsYXRlcycpLmh0bWwodGVtcGxhdGVsaXN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFqYWN0aXZlbW9kZWxzKCkge1xyXG4gICAgbGV0IHJvd2xpc3QgPSAkKCcjdGFibGUnKS5ib290c3RyYXBUYWJsZSgnZ2V0U2VsZWN0aW9ucycpO1xyXG4gICAgbGV0IG1vZGVsbGlzdCA9ICcnO1xyXG4gICAgbGV0IG1vZGVscyA9IFtdO1xyXG5cclxuICAgICQuZWFjaChyb3dsaXN0LCBmdW5jdGlvbiAociwgcm93KSB7XHJcbi8vICAgICAgICAkLm1lcmdlKHRhZ3MsIGNsZWFudGFncyhyb3cudGFncykpO1xyXG5cclxuICAgICAgICAkLmVhY2goJChyb3cubW9kZWxzKS5maW5kKCcudW5saW5rbW9kZWxidG4nKSwgZnVuY3Rpb24ocyxzcGFuKXtcclxuICAgICAgICAgICAgaWYoalF1ZXJ5LmluQXJyYXkoJChzcGFuKS5hdHRyKCdtb2RlbG5hbWUnKSxtb2RlbHMpID09PSAtMSl7XHJcblxyXG4gICAgICAgICAgICAgICAgbW9kZWxzLnB1c2goJChzcGFuKS5hdHRyKCdtb2RlbG5hbWUnKSk7XHJcbiAgICAgICAgICAgICAgICBtb2RlbGxpc3QgKz0gXCI8c3BhbiBjbGFzcz0nbW9kZWxsYWJlbCc+PHNwYW4gaHJlZj0nL2Rlc2lnbi9kZXNpZ24vYWpheHVubGlua21vZGVsZnJvbXNlbGVjdGlvbi9cIiArICQoc3BhbikuYXR0cignbW9kZWxpZCcpICsgXCInIG1vZGVsaWQ9J1wiICsgJChzcGFuKS5hdHRyKCdtb2RlbGlkJykgKyBcIicgbW9kZWxuYW1lPSdcIiArICQoc3BhbikuYXR0cignbW9kZWxuYW1lJykgKyBcIicgY2xhc3M9J2Nsb3NlYnRuIHVubGlua21vZGVsZnJvbXNlbGVjdGlvbmJ0bic+w5c8L3NwYW4+XCIgKyAkKHNwYW4pLmF0dHIoJ21vZGVsbmFtZScpICsgXCI8L3NwYW4+XCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coc3Bhbi5hdHRyKCd0YWdpZCcpKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJChzcGFuKS5hdHRyKCd0YWdpZCcpICsgJyAnICsgJChzcGFuKS5hdHRyKCd0YWduYW1lJykpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIC8vY29uc29sZS5sb2codGFnbGlzdCk7XHJcbiAgICAvLyB0YWdzID0gdW5pcXVlKHRhZ3MpO1xyXG4gICAgLy8gY29uc29sZS5sb2codGFncylcclxuICAgIC8vXHJcbiAgICAvLyAkLmVhY2godGFncywgZnVuY3Rpb24gKHQsIHRhZykge1xyXG4gICAgLy8gICAgIHRhZ2xpc3QgKz0gXCI8c3BhbiBjbGFzcz0ndGFnbGFiZWwnPjxzcGFuIGhyZWY9Jy9kZXNpZ24vZGVzaWduL2FqYXh1bmxpbmt0YWdmcm9tc2VsZWN0aW9uL1wiICsgdGFnLmlkICsgXCInIHRhZ2lkPSdcIiArIHRhZy5pZCArIFwiJyB0YWduYW1lPSdcIiArIHRhZy5uYW1lICsgXCInIGNsYXNzPSdjbG9zZWJ0biB1bmxpbmt0YWdmcm9tc2VsZWN0aW9uYnRuJz7Dlzwvc3Bhbj5cIiArIHRhZyArIFwiPC9zcGFuPlwiO1xyXG4gICAgLy8gfSlcclxuXHJcbiAgICAkKCcjYWN0aXZlbW9kZWxzJykuaHRtbChtb2RlbGxpc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBodG1sVG9FbGVtZW50cyhodG1sKSB7XHJcbiAgICBsZXQgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xyXG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgIHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmNoaWxkTm9kZXM7XHJcbn0iLCIndXNlIHN0cmljdCc7XHJcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xyXG52YXIgJGZpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZmluZDtcclxudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzJyk7XHJcbnZhciBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtdXNlcy10by1sZW5ndGgnKTtcclxuXHJcbnZhciBGSU5EID0gJ2ZpbmQnO1xyXG52YXIgU0tJUFNfSE9MRVMgPSB0cnVlO1xyXG5cclxudmFyIFVTRVNfVE9fTEVOR1RIID0gYXJyYXlNZXRob2RVc2VzVG9MZW5ndGgoRklORCk7XHJcblxyXG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xyXG5pZiAoRklORCBpbiBbXSkgQXJyYXkoMSlbRklORF0oZnVuY3Rpb24gKCkgeyBTS0lQU19IT0xFUyA9IGZhbHNlOyB9KTtcclxuXHJcbi8vIGBBcnJheS5wcm90b3R5cGUuZmluZGAgbWV0aG9kXHJcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kXHJcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFNLSVBTX0hPTEVTIHx8ICFVU0VTX1RPX0xFTkdUSCB9LCB7XHJcbiAgZmluZDogZnVuY3Rpb24gZmluZChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xyXG4gICAgcmV0dXJuICRmaW5kKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcclxuYWRkVG9VbnNjb3BhYmxlcyhGSU5EKTtcclxuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XHJcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcclxuXHJcbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcclxudmFyIEZ1bmN0aW9uUHJvdG90eXBlVG9TdHJpbmcgPSBGdW5jdGlvblByb3RvdHlwZS50b1N0cmluZztcclxudmFyIG5hbWVSRSA9IC9eXFxzKmZ1bmN0aW9uIChbXiAoXSopLztcclxudmFyIE5BTUUgPSAnbmFtZSc7XHJcblxyXG4vLyBGdW5jdGlvbiBpbnN0YW5jZXMgYC5uYW1lYCBwcm9wZXJ0eVxyXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1mdW5jdGlvbi1pbnN0YW5jZXMtbmFtZVxyXG5pZiAoREVTQ1JJUFRPUlMgJiYgIShOQU1FIGluIEZ1bmN0aW9uUHJvdG90eXBlKSkge1xyXG4gIGRlZmluZVByb3BlcnR5KEZ1bmN0aW9uUHJvdG90eXBlLCBOQU1FLCB7XHJcbiAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gRnVuY3Rpb25Qcm90b3R5cGVUb1N0cmluZy5jYWxsKHRoaXMpLm1hdGNoKG5hbWVSRSlbMV07XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYycpO1xyXG52YXIgaXNSZWdFeHAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcmVnZXhwJyk7XHJcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcclxudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XHJcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xyXG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkdmFuY2Utc3RyaW5nLWluZGV4Jyk7XHJcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcclxudmFyIGNhbGxSZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XHJcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjJyk7XHJcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xyXG5cclxudmFyIGFycmF5UHVzaCA9IFtdLnB1c2g7XHJcbnZhciBtaW4gPSBNYXRoLm1pbjtcclxudmFyIE1BWF9VSU5UMzIgPSAweEZGRkZGRkZGO1xyXG5cclxuLy8gYmFiZWwtbWluaWZ5IHRyYW5zcGlsZXMgUmVnRXhwKCd4JywgJ3knKSAtPiAveC95IGFuZCBpdCBjYXVzZXMgU3ludGF4RXJyb3JcclxudmFyIFNVUFBPUlRTX1kgPSAhZmFpbHMoZnVuY3Rpb24gKCkgeyByZXR1cm4gIVJlZ0V4cChNQVhfVUlOVDMyLCAneScpOyB9KTtcclxuXHJcbi8vIEBAc3BsaXQgbG9naWNcclxuZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMoJ3NwbGl0JywgMiwgZnVuY3Rpb24gKFNQTElULCBuYXRpdmVTcGxpdCwgbWF5YmVDYWxsTmF0aXZlKSB7XHJcbiAgdmFyIGludGVybmFsU3BsaXQ7XHJcbiAgaWYgKFxyXG4gICAgJ2FiYmMnLnNwbGl0KC8oYikqLylbMV0gPT0gJ2MnIHx8XHJcbiAgICAndGVzdCcuc3BsaXQoLyg/OikvLCAtMSkubGVuZ3RoICE9IDQgfHxcclxuICAgICdhYicuc3BsaXQoLyg/OmFiKSovKS5sZW5ndGggIT0gMiB8fFxyXG4gICAgJy4nLnNwbGl0KC8oLj8pKC4/KS8pLmxlbmd0aCAhPSA0IHx8XHJcbiAgICAnLicuc3BsaXQoLygpKCkvKS5sZW5ndGggPiAxIHx8XHJcbiAgICAnJy5zcGxpdCgvLj8vKS5sZW5ndGhcclxuICApIHtcclxuICAgIC8vIGJhc2VkIG9uIGVzNS1zaGltIGltcGxlbWVudGF0aW9uLCBuZWVkIHRvIHJld29yayBpdFxyXG4gICAgaW50ZXJuYWxTcGxpdCA9IGZ1bmN0aW9uIChzZXBhcmF0b3IsIGxpbWl0KSB7XHJcbiAgICAgIHZhciBzdHJpbmcgPSBTdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKSk7XHJcbiAgICAgIHZhciBsaW0gPSBsaW1pdCA9PT0gdW5kZWZpbmVkID8gTUFYX1VJTlQzMiA6IGxpbWl0ID4+PiAwO1xyXG4gICAgICBpZiAobGltID09PSAwKSByZXR1cm4gW107XHJcbiAgICAgIGlmIChzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCkgcmV0dXJuIFtzdHJpbmddO1xyXG4gICAgICAvLyBJZiBgc2VwYXJhdG9yYCBpcyBub3QgYSByZWdleCwgdXNlIG5hdGl2ZSBzcGxpdFxyXG4gICAgICBpZiAoIWlzUmVnRXhwKHNlcGFyYXRvcikpIHtcclxuICAgICAgICByZXR1cm4gbmF0aXZlU3BsaXQuY2FsbChzdHJpbmcsIHNlcGFyYXRvciwgbGltKTtcclxuICAgICAgfVxyXG4gICAgICB2YXIgb3V0cHV0ID0gW107XHJcbiAgICAgIHZhciBmbGFncyA9IChzZXBhcmF0b3IuaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXHJcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IubXVsdGlsaW5lID8gJ20nIDogJycpICtcclxuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci51bmljb2RlID8gJ3UnIDogJycpICtcclxuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci5zdGlja3kgPyAneScgOiAnJyk7XHJcbiAgICAgIHZhciBsYXN0TGFzdEluZGV4ID0gMDtcclxuICAgICAgLy8gTWFrZSBgZ2xvYmFsYCBhbmQgYXZvaWQgYGxhc3RJbmRleGAgaXNzdWVzIGJ5IHdvcmtpbmcgd2l0aCBhIGNvcHlcclxuICAgICAgdmFyIHNlcGFyYXRvckNvcHkgPSBuZXcgUmVnRXhwKHNlcGFyYXRvci5zb3VyY2UsIGZsYWdzICsgJ2cnKTtcclxuICAgICAgdmFyIG1hdGNoLCBsYXN0SW5kZXgsIGxhc3RMZW5ndGg7XHJcbiAgICAgIHdoaWxlIChtYXRjaCA9IHJlZ2V4cEV4ZWMuY2FsbChzZXBhcmF0b3JDb3B5LCBzdHJpbmcpKSB7XHJcbiAgICAgICAgbGFzdEluZGV4ID0gc2VwYXJhdG9yQ29weS5sYXN0SW5kZXg7XHJcbiAgICAgICAgaWYgKGxhc3RJbmRleCA+IGxhc3RMYXN0SW5kZXgpIHtcclxuICAgICAgICAgIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4LCBtYXRjaC5pbmRleCkpO1xyXG4gICAgICAgICAgaWYgKG1hdGNoLmxlbmd0aCA+IDEgJiYgbWF0Y2guaW5kZXggPCBzdHJpbmcubGVuZ3RoKSBhcnJheVB1c2guYXBwbHkob3V0cHV0LCBtYXRjaC5zbGljZSgxKSk7XHJcbiAgICAgICAgICBsYXN0TGVuZ3RoID0gbWF0Y2hbMF0ubGVuZ3RoO1xyXG4gICAgICAgICAgbGFzdExhc3RJbmRleCA9IGxhc3RJbmRleDtcclxuICAgICAgICAgIGlmIChvdXRwdXQubGVuZ3RoID49IGxpbSkgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZXBhcmF0b3JDb3B5Lmxhc3RJbmRleCA9PT0gbWF0Y2guaW5kZXgpIHNlcGFyYXRvckNvcHkubGFzdEluZGV4Kys7IC8vIEF2b2lkIGFuIGluZmluaXRlIGxvb3BcclxuICAgICAgfVxyXG4gICAgICBpZiAobGFzdExhc3RJbmRleCA9PT0gc3RyaW5nLmxlbmd0aCkge1xyXG4gICAgICAgIGlmIChsYXN0TGVuZ3RoIHx8ICFzZXBhcmF0b3JDb3B5LnRlc3QoJycpKSBvdXRwdXQucHVzaCgnJyk7XHJcbiAgICAgIH0gZWxzZSBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCkpO1xyXG4gICAgICByZXR1cm4gb3V0cHV0Lmxlbmd0aCA+IGxpbSA/IG91dHB1dC5zbGljZSgwLCBsaW0pIDogb3V0cHV0O1xyXG4gICAgfTtcclxuICAvLyBDaGFrcmEsIFY4XHJcbiAgfSBlbHNlIGlmICgnMCcuc3BsaXQodW5kZWZpbmVkLCAwKS5sZW5ndGgpIHtcclxuICAgIGludGVybmFsU3BsaXQgPSBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xyXG4gICAgICByZXR1cm4gc2VwYXJhdG9yID09PSB1bmRlZmluZWQgJiYgbGltaXQgPT09IDAgPyBbXSA6IG5hdGl2ZVNwbGl0LmNhbGwodGhpcywgc2VwYXJhdG9yLCBsaW1pdCk7XHJcbiAgICB9O1xyXG4gIH0gZWxzZSBpbnRlcm5hbFNwbGl0ID0gbmF0aXZlU3BsaXQ7XHJcblxyXG4gIHJldHVybiBbXHJcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5zcGxpdGAgbWV0aG9kXHJcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnNwbGl0XHJcbiAgICBmdW5jdGlvbiBzcGxpdChzZXBhcmF0b3IsIGxpbWl0KSB7XHJcbiAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcclxuICAgICAgdmFyIHNwbGl0dGVyID0gc2VwYXJhdG9yID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlcGFyYXRvcltTUExJVF07XHJcbiAgICAgIHJldHVybiBzcGxpdHRlciAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgPyBzcGxpdHRlci5jYWxsKHNlcGFyYXRvciwgTywgbGltaXQpXHJcbiAgICAgICAgOiBpbnRlcm5hbFNwbGl0LmNhbGwoU3RyaW5nKE8pLCBzZXBhcmF0b3IsIGxpbWl0KTtcclxuICAgIH0sXHJcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHNwbGl0XWAgbWV0aG9kXHJcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAc3BsaXRcclxuICAgIC8vXHJcbiAgICAvLyBOT1RFOiBUaGlzIGNhbm5vdCBiZSBwcm9wZXJseSBwb2x5ZmlsbGVkIGluIGVuZ2luZXMgdGhhdCBkb24ndCBzdXBwb3J0XHJcbiAgICAvLyB0aGUgJ3knIGZsYWcuXHJcbiAgICBmdW5jdGlvbiAocmVnZXhwLCBsaW1pdCkge1xyXG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKGludGVybmFsU3BsaXQsIHJlZ2V4cCwgdGhpcywgbGltaXQsIGludGVybmFsU3BsaXQgIT09IG5hdGl2ZVNwbGl0KTtcclxuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xyXG5cclxuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QocmVnZXhwKTtcclxuICAgICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XHJcbiAgICAgIHZhciBDID0gc3BlY2llc0NvbnN0cnVjdG9yKHJ4LCBSZWdFeHApO1xyXG5cclxuICAgICAgdmFyIHVuaWNvZGVNYXRjaGluZyA9IHJ4LnVuaWNvZGU7XHJcbiAgICAgIHZhciBmbGFncyA9IChyeC5pZ25vcmVDYXNlID8gJ2knIDogJycpICtcclxuICAgICAgICAgICAgICAgICAgKHJ4Lm11bHRpbGluZSA/ICdtJyA6ICcnKSArXHJcbiAgICAgICAgICAgICAgICAgIChyeC51bmljb2RlID8gJ3UnIDogJycpICtcclxuICAgICAgICAgICAgICAgICAgKFNVUFBPUlRTX1kgPyAneScgOiAnZycpO1xyXG5cclxuICAgICAgLy8gXig/ICsgcnggKyApIGlzIG5lZWRlZCwgaW4gY29tYmluYXRpb24gd2l0aCBzb21lIFMgc2xpY2luZywgdG9cclxuICAgICAgLy8gc2ltdWxhdGUgdGhlICd5JyBmbGFnLlxyXG4gICAgICB2YXIgc3BsaXR0ZXIgPSBuZXcgQyhTVVBQT1JUU19ZID8gcnggOiAnXig/OicgKyByeC5zb3VyY2UgKyAnKScsIGZsYWdzKTtcclxuICAgICAgdmFyIGxpbSA9IGxpbWl0ID09PSB1bmRlZmluZWQgPyBNQVhfVUlOVDMyIDogbGltaXQgPj4+IDA7XHJcbiAgICAgIGlmIChsaW0gPT09IDApIHJldHVybiBbXTtcclxuICAgICAgaWYgKFMubGVuZ3RoID09PSAwKSByZXR1cm4gY2FsbFJlZ0V4cEV4ZWMoc3BsaXR0ZXIsIFMpID09PSBudWxsID8gW1NdIDogW107XHJcbiAgICAgIHZhciBwID0gMDtcclxuICAgICAgdmFyIHEgPSAwO1xyXG4gICAgICB2YXIgQSA9IFtdO1xyXG4gICAgICB3aGlsZSAocSA8IFMubGVuZ3RoKSB7XHJcbiAgICAgICAgc3BsaXR0ZXIubGFzdEluZGV4ID0gU1VQUE9SVFNfWSA/IHEgOiAwO1xyXG4gICAgICAgIHZhciB6ID0gY2FsbFJlZ0V4cEV4ZWMoc3BsaXR0ZXIsIFNVUFBPUlRTX1kgPyBTIDogUy5zbGljZShxKSk7XHJcbiAgICAgICAgdmFyIGU7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgeiA9PT0gbnVsbCB8fFxyXG4gICAgICAgICAgKGUgPSBtaW4odG9MZW5ndGgoc3BsaXR0ZXIubGFzdEluZGV4ICsgKFNVUFBPUlRTX1kgPyAwIDogcSkpLCBTLmxlbmd0aCkpID09PSBwXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBxID0gYWR2YW5jZVN0cmluZ0luZGV4KFMsIHEsIHVuaWNvZGVNYXRjaGluZyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIEEucHVzaChTLnNsaWNlKHAsIHEpKTtcclxuICAgICAgICAgIGlmIChBLmxlbmd0aCA9PT0gbGltKSByZXR1cm4gQTtcclxuICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IHoubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgIEEucHVzaCh6W2ldKTtcclxuICAgICAgICAgICAgaWYgKEEubGVuZ3RoID09PSBsaW0pIHJldHVybiBBO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcSA9IHAgPSBlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBBLnB1c2goUy5zbGljZShwKSk7XHJcbiAgICAgIHJldHVybiBBO1xyXG4gICAgfVxyXG4gIF07XHJcbn0sICFTVVBQT1JUU19ZKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==