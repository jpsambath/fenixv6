import '../../../css/design/design/index.css';
import density from '../../global/density.js';
import 'bootstrap';

$(document).ready(function () {

    $(document).on('click', '.cutscolumn', function (event) {
        let designid = $(this).parents('tr').attr('data-uniqueid');
        let design = $("#table").bootstrapTable('getRowByUniqueId', designid);
        $('#cutid').text(design.id);
        $('#cuttitle').text(design.name);
        $('#cutparts').val(design.name);
        $('#cutmodal').modal('show');

        $(document).on('click', '#savecut', function (event) {
            // let cutparts = $('#cutparts').val().split(/\r?\n/);
            let cutparts = $.map($('#cutparts').val().split(/\r?\n/), $.trim);
            let cut = {"linecount": cutparts.length, "parts": cutparts};

            $.ajax({
                url: "/design/cut/savecut/" + design.id,
                type: 'POST',
                data: {
                    cut: JSON.stringify(cut)
                },
                success:
                    function (data, status) {
                        $("#menu_area").notify("Text Cut Done", {
                            position: "bottom right",
                            className: "success"
                        });
                        console.log(status);
                        console.log(data);
                    },
                error:
                    function (data, status, message) {
                        $("#menu_area").notify("Text Cut Fail", {
                            position: "bottom right",
                            className: "error"
                        });
                        console.log(status);
                        console.log(message);
                        console.log(data);
                    }
            });

        });

    });

    $(document).on('click', '.cut', function (event) {
        $('#cutmodal').modal('show');
    });

    $(document).on('click', '#smartcuttext', function (event) {
        $.ajax({
            url: $(this).attr('href'),
            type: 'POST',
            success:
                function (data, status) {
                    $("#menu_area").notify("Text Cut Done", {
                        position: "bottom right",
                        className: "success"
                    });
                    console.log(status);
                    console.log(data);
                },
            error:
                function (data, status, message) {
                    $("#menu_area").notify("Text Cut Fail", {
                        position: "bottom right",
                        className: "error"
                    });
                    console.log(status);
                    console.log(message);
                    console.log(data);
                }
        });
    });


    $(document).on('click', '#linktagtodesign', function (event) {
        $.ajax({
            url: $(this).attr('href'),
            type: 'POST',
            success:
                function (data, status) {
                    $("#menu_area").notify("Link Done", {
                        position: "bottom right",
                        className: "success"
                    });
                    console.log(status);
                    console.log(data);
                },
            error:
                function (data, status, message) {
                    $("#menu_area").notify("Link Fail", {
                        position: "bottom right",
                        className: "error"
                    });
                    console.log(status);
                    console.log(message);
                    console.log(data);
                }
        });
    });

    $(document).on('click', '#refresh', function (event) {
        $('#table').bootstrapTable('refresh');
    });
    $(document).on('click', '#unfilterall', function (event) {
        $('#table').bootstrapTable('clearFilterControl');
    });
    $(document).on('click', '#viewjson', function (event) {
        console.log($("#table").bootstrapTable('getSelections'));
    });
    $(document).on('click', '#clearall', function (event) {
        $("#table").bootstrapTable('togglePagination').bootstrapTable('uncheckAll').bootstrapTable('togglePagination');
        $('#table').bootstrapTable('clearFilterControl');
    });
    $(document).on('click', '#checkall', function (event) {
        if ($("#table").bootstrapTable('getSelections').length > 0) {
            alert('You have already selected designs! Attenchion !')
        } else {
            $("#table").bootstrapTable('togglePagination').bootstrapTable('checkAll').bootstrapTable('togglePagination');
        }
    });
    $(document).on('click', '#uncheckall', function (event) {
        $("#table").bootstrapTable('togglePagination').bootstrapTable('uncheckAll').bootstrapTable('togglePagination');
    });

    $(document).on('click', '#savebtn', function (event) {
        $("#table").bootstrapTable('togglePagination').bootstrapTable('uncheckAll').bootstrapTable('togglePagination');
        let alldata = $('#table').bootstrapTable('getData');
        let changeddata = removeFromArrayBy(alldata, "change", 1);
        $.ajax({
            url: $(this).attr('href'),
            type: 'POST',
            data: {
                designs: JSON.stringify(changeddata)
            },
            success: function (data, status) {
                $("#menu_area").notify("Design Successfully Saved", {
                    position: "bottom right",
                    className: "success"
                });

                $('#table').bootstrapTable('refresh');

            },
            error:
                function (data, status, message) {
                    $("#menu_area").notify("Design Failed Saving", {
                        position: "bottom right",
                        className: "error"
                    });
                }
        });
    });

    $('#table').on('all.bs.table', majactivechange);
    $('#table').on('check.bs.table uncheck.bs.table uncheck-all.bs.table check-all.bs.table', majactiveselection);

    //ici ajax tag
    $(document).on('click', '.unlinktagfromselectionbtn', function (event) {
        let tagid = $(this).parent().attr('tagid');
        let designs = $("#table").bootstrapTable('getSelections');

        $.each(designs, function (key, design) {
            let designtags = design.tags;

            designtags = designtags.filter(function (obj) {
                return obj.id !== parseInt(tagid);
            });

            $('#table').bootstrapTable('updateCellByUniqueId', {
                id: design.id,
                field: 'tags',
                value: designtags
            });

            $('#table').bootstrapTable('updateCellByUniqueId', {
                id: design.id,
                field: 'change',
                value: 1
            });

            majactivetags();

            $("#menu_area").notify("Tags Successfully Removed", {
                position: "bottom right",
                className: "success"
            });

        });
    });

    $(document).on('click', '.unlinktagbtn', function (event) {
        let tagid = $(this).parent().attr('tagid');
        let designid = $(this).parents('tr').attr('data-uniqueid');
        let design = $("#table").bootstrapTable('getRowByUniqueId', designid);
        let designtags = design.tags;

        designtags = designtags.filter(function (obj) {
            return obj.id !== parseInt(tagid);
        });

        $('#table').bootstrapTable('updateCellByUniqueId', {
            id: designid,
            field: 'tags',
            value: designtags
        });

        $('#table').bootstrapTable('updateCellByUniqueId', {
            id: designid,
            field: 'change',
            value: 1
        });

        majactivetags();

        $("#menu_area").notify("Tags Successfully Removed", {
            position: "bottom right",
            className: "success"
        });

    });

    $("#applytag").on('click', function () {
        // console.log($("#selecttag option:selected"));
        // console.log($("#table").bootstrapTable('getSelections'));

        let tags = $("#selecttag option:selected");
        let designs = $("#table").bootstrapTable('getSelections');
        //let tagobj;
        let taglist = [];

        $.each(tags, function (t, tag) {
            //tagobj = {"id": parseInt(tag.value), "name": tag.text}
            taglist.push({"id": parseInt(tag.value), "name": tag.text})
        })

        $.each(designs, function (key, design) {
            let tagfulllist = taglist.concat(design.tags);

            tagfulllist = distinctArrayBy(tagfulllist, 'id');

            $('#table').bootstrapTable('updateCellByUniqueId', {
                id: design.id,
                field: 'tags',
                value: tagfulllist
            });

            $('#table').bootstrapTable('updateCellByUniqueId', {
                id: design.id,
                field: 'change',
                value: 1
            });


        });

        majactivetags();

        $("#menu_area").notify("Tags Successfully Added :  \n" + $("#selecttag option:selected").toArray().map(item => item.text).join('\n'), {
            position: "bottom right",
            className: "success"
        });

        $("#table").bootstrapTable('togglePagination').bootstrapTable('uncheckAll').bootstrapTable('togglePagination');

    });

    $('#table').on('check.bs.table uncheck.bs.table uncheck-all.bs.table check-all.bs.table', majactivetags);


    //ici ajax template
    $("#applytemplate").on('click', function () {
        // console.log($("#selecttemplate option:selected"));
        // console.log($("#table").bootstrapTable('getSelections'));

        let templates = $("#selecttemplate option:selected");
        let designs = $("#table").bootstrapTable('getSelections');
        let templateobj;

        $.each(designs, function (key, design) {
            let templatelist = design.templates;

            $.each(templates, function (t, template) {
                templateobj = {
                    "id": parseInt(template.value),
                    "name": template.text,
                    "linecount": $(template).attr('linecount')
                }
                templatelist.push(templateobj)
            })

            templatelist = distinctArrayBy(templatelist, 'id');


            $('#table').bootstrapTable('updateCellByUniqueId', {
                id: design.id,
                field: 'templates',
                value: templatelist
            });

            $('#table').bootstrapTable('updateCellByUniqueId', {
                id: design.id,
                field: 'change',
                value: 1
            });

            majactivetemplates();

            $("#menu_area").notify("Templates Successfully Added :  \n" + $("#selecttemplate option:selected").toArray().map(item => item.text).join('\n'), {
                position: "bottom right",
                className: "success"
            });
        });

    });

    $(document).on('click', '.unlinktemplatefromselectionbtn', function (event) {
        let templateid = $(this).parent().attr('templateid');
        let designs = $("#table").bootstrapTable('getSelections');

        $.each(designs, function (key, design) {
            let designtemplates = design.templates;

            designtemplates = designtemplates.filter(function (obj) {
                return obj.id !== parseInt(templateid);
            });

            $('#table').bootstrapTable('updateCellByUniqueId', {
                id: design.id,
                field: 'templates',
                value: designtemplates
            });

            $('#table').bootstrapTable('updateCellByUniqueId', {
                id: design.id,
                field: 'change',
                value: 1
            });

            majactivetemplates();

            $("#menu_area").notify("Tags Successfully Removed", {
                position: "bottom right",
                className: "success"
            });

        });
    });

    $(document).on('click', '.unlinktemplatebtn', function (event) {
        let templateid = $(this).parent().attr('templateid');
        let designid = $(this).parents('tr').attr('data-uniqueid');
        let design = $("#table").bootstrapTable('getRowByUniqueId', designid);
        let designtemplates = design.templates;

        designtemplates = designtemplates.filter(function (obj) {
            return obj.id !== parseInt(templateid);
        });

        $('#table').bootstrapTable('updateCellByUniqueId', {
            id: designid,
            field: 'templates',
            value: designtemplates
        });

        $('#table').bootstrapTable('updateCellByUniqueId', {
            id: designid,
            field: 'change',
            value: 1
        });

        majactivetemplates();

        $("#menu_area").notify("Tags Successfully Removed", {
            position: "bottom right",
            className: "success"
        });

    });

    $('#table').on('check.bs.table uncheck.bs.table uncheck-all.bs.table check-all.bs.table', majactivetemplates);

    //ici ajax model
    $(document).on('click', '.unlinkmodelfromselectionbtn', function (event) {
        let modelid = $(this).parent().attr('modelid');
        let designs = $("#table").bootstrapTable('getSelections');

        $.each(designs, function (key, design) {
            let designmodels = design.models;

            designmodels = designmodels.filter(function (obj) {
                return obj.id !== parseInt(modelid);
            });

            $('#table').bootstrapTable('updateCellByUniqueId', {
                id: design.id,
                field: 'models',
                value: designmodels
            });

            $('#table').bootstrapTable('updateCellByUniqueId', {
                id: design.id,
                field: 'change',
                value: 1
            });

            majactivemodels();

            $("#menu_area").notify("Tags Successfully Removed", {
                position: "bottom right",
                className: "success"
            });

        });
    });
    $(document).on('click', '.unlinkmodelbtn', function (event) {

        let modelid = $(this).parent().attr('modelid');

        let designid = $(this).parents('tr').attr('data-uniqueid');

        let design = $("#table").bootstrapTable('getRowByUniqueId', designid);

        let designmodels = design.models;

        designmodels = designmodels.filter(function (obj) {
            return obj.id !== parseInt(modelid);
        });

        $('#table').bootstrapTable('updateCellByUniqueId', {
            id: designid,
            field: 'models',
            value: designmodels
        });

        $('#table').bootstrapTable('updateCellByUniqueId', {
            id: designid,
            field: 'change',
            value: 1
        });

        majactivemodels();

        $("#menu_area").notify("Tags Successfully Removed", {
            position: "bottom right",
            className: "success"
        });
    });
    $("#applymodel").on('click', function () {
        let models = $("#selectmodel option:selected");
        let designs = $("#table").bootstrapTable('getSelections');
        let modelobj;
        $.each(designs, function (key, design) {
            let modellist = design.models;

            $.each(models, function (t, model) {
                modelobj = {"id": parseInt(model.value), "name": model.text}
                modellist.push(modelobj)
            })

            modellist = distinctArrayBy(modellist, 'id');

            $('#table').bootstrapTable('updateCellByUniqueId', {
                id: design.id,
                field: 'models',
                value: modellist
            });

            $('#table').bootstrapTable('updateCellByUniqueId', {
                id: design.id,
                field: 'change',
                value: 1
            });

            majactivemodels();

            $("#menu_area").notify("Tags Successfully Added :  \n" + $("#selectmodel option:selected").toArray().map(item => item.text).join('\n'), {
                position: "bottom right",
                className: "success"
            });
        });

    });
    $('#table').on('check.bs.table uncheck.bs.table uncheck-all.bs.table check-all.bs.table', majactivemodels);

    $(document).on('click', '#suggesttags', function (event) {
        let suggestedtaglist = "";
        let from = $('#fromtag').val() === "" || $('#fromtag').val() === undefined ? 1 : $('#fromtag').val();
        let to = parseInt(from) + 100;

        console.log(from + " - " + to);

        jQuery.each(calculatedensity().slice(from, to), function (index, suggestedtag) {
            // faire quelque chose avec `value` (ou `this` qui est `value` )
            suggestedtaglist += "<span class='suggestedtaglabel'><span href='/design/design/ajaxlinksuggestedtag/' tagname='" + suggestedtag.word + "'>" + suggestedtag.word + "<span class='badge badge-secondary'>" + suggestedtag.count + "</span><span class='btn btn-link btn-sm ml-1 filterbtn' filtername='" + suggestedtag.word + "'><i class=\"fas fa-filter\"></i></span></span></span>";
        });

        $('#suggestedtags').html(suggestedtaglist);

    });
    $(document).on('click', '.filterbtn', function (event) {
        let filtervalue = $(this).attr('filtername');
        $("th[data-field='name']").find('input').val(filtervalue);
        $('#table').bootstrapTable('triggerSearch');
    });
});


function cleantags(mystring) {
    let res = mystring.replace(/(<([^>]+)>)/ig, "").replace(/\n|\r|(\n\r)/g, "").split("×");
    let cleanres = [];

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

function calculatedensity() {
    let data;
    if ($('#table').bootstrapTable('getSelections').length !== 0) {
        data = $('#table').bootstrapTable('getSelections');
    } else {
        data = $('#table').bootstrapTable('getData');
    }
    let allnames;
    let stopwords = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
        "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w",
        "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        "le", "la", "les", "je", "tu", "il", "ils", "elle", "nous", "vous",
        "une", "un", "en", "des", "dès", "de", "cette", "cet", "ces", "ce",
        "ses", "se", "est", "ai", "eu", "eut", "était", "êtes", "serait", "cas",
        "aussi", "après", "avant", "ans", "an", "puis", "où", "ou", "dans", "sur",
        "afin", "qu", "or", "mais", "nos", "vos", "ton", "tes", "te", "même", "me",
        "ta", "ma", "mon", "mes", "donc", "et", "du", "au", "aux", "ne", "pas", "qui",
        "que", "dont", "pour", "avec", "lui", "votre", "sont", "notre", "à", "tout", "toutes",
        "tous", "by", "us", "the", "your", "of", "on", "inc", "an", "is", "to", "or", "for", "ca",
        "ça", "in", "and", "it", "its", "but", "hi", "you", "with", "but", "all", "yet", "déjà",
        "has", "as", "more", "my", "that", "not", "are", "this", "ni", "par", "fr", "com"];

    let punctuationRegex = /[\-=_!"#%&*{},.\/:;?\(\)\[\]@\$\^*+<>~`\u00a1\u00a7\u00b6\u00b7\u00bf\u037e\u0387\u055a-\u055f\u0589\u05c0\u05c3\u05c6\u05f3\u05f4\u0609\u060a\u060c\u060d\u061b\u061e\u061f\u066a-\u066d\u06d4\u0700-\u070d\u07f7-\u07f9\u0830-\u083e\u085e\u0964\u0965\u0970\u0af0\u0df4\u0e4f\u0e5a\u0e5b\u0f04-\u0f12\u0f14\u0f85\u0fd0-\u0fd4\u0fd9\u0fda\u104a-\u104f\u10fb\u1360-\u1368\u166d\u166e\u16eb-\u16ed\u1735\u1736\u17d4-\u17d6\u17d8-\u17da\u1800-\u1805\u1807-\u180a\u1944\u1945\u1a1e\u1a1f\u1aa0-\u1aa6\u1aa8-\u1aad\u1b5a-\u1b60\u1bfc-\u1bff\u1c3b-\u1c3f\u1c7e\u1c7f\u1cc0-\u1cc7\u1cd3\u2016\u2017\u2020-\u2027\u2030-\u2038\u203b-\u203e\u2041-\u2043\u2047-\u2051\u2053\u2055-\u205e\u2cf9-\u2cfc\u2cfe\u2cff\u2d70\u2e00\u2e01\u2e06-\u2e08\u2e0b\u2e0e-\u2e16\u2e18\u2e19\u2e1b\u2e1e\u2e1f\u2e2a-\u2e2e\u2e30-\u2e39\u3001-\u3003\u303d\u30fb\ua4fe\ua4ff\ua60d-\ua60f\ua673\ua67e\ua6f2-\ua6f7\ua874-\ua877\ua8ce\ua8cf\ua8f8-\ua8fa\ua92e\ua92f\ua95f\ua9c1-\ua9cd\ua9de\ua9df\uaa5c-\uaa5f\uaade\uaadf\uaaf0\uaaf1\uabeb\ufe10-\ufe16\ufe19\ufe30\ufe45\ufe46\ufe49-\ufe4c\ufe50-\ufe52\ufe54-\ufe57\ufe5f-\ufe61\ufe68\ufe6a\ufe6b\uff01-\uff03\uff05-\uff07\uff0a\uff0c\uff0e\uff0f\uff1a\uff1b\uff1f\uff20\uff3c\uff61\uff64\uff65]+/g

    let results, results1, results2, results3;
    let finalresult = [];

    $.each(data, function (r, row) {
        if (row.name !== undefined) {
            let rownamewopunctuation = row.name.replace(punctuationRegex, '').replace(/(\s){2,}/g, '$1').replace('’', '\'');
            results1 = density.getSorted(rownamewopunctuation, {
                stopwords: stopwords,
                words: 1
            });
            results2 = density.getSorted(rownamewopunctuation, {
                stopwords: stopwords,
                words: 2
            });
            results3 = density.getSorted(rownamewopunctuation, {
                stopwords: stopwords,
                words: 3
            });

            results = unique($.merge($.merge(results1, results2), results3));
            results = sortByKeyDesc(distinctArrayBy(results, 'word'), "count");

            // console.log(results);

            $.each(results, function (index, suggestedtag) {
                if (finalresult.find(x => x.word === suggestedtag.word) === undefined) {
                    finalresult.push(suggestedtag);
                } else {
                    finalresult.find(x => x.word === suggestedtag.word).count += suggestedtag.count
                }
            });

        }
    })

    finalresult = sortByKeyDesc(distinctArrayBy(finalresult, 'word'), "count");
    console.log(JSON.stringify(finalresult));
    return finalresult;

}

function majactivetags() {

    let designs = $("#table").bootstrapTable('getSelections');
    let taghtml = '';
    let taglist = [];
    $.each(designs, function (key, design) {
        taglist = taglist.concat(design.tags);
    });
    taglist = distinctArrayBy(taglist, 'id');

    $.each(taglist, function (key, tag) {
        taghtml += "<span class='taglabel' tagid='" + tag.id + "' tagname='" + tag.name + "' ><span class='closebtn unlinktagfromselectionbtn'>×</span>" + tag.name + "</span>";
    });

    $('#activetags').html(taghtml);
}

function majactivetemplates() {

    let designs = $("#table").bootstrapTable('getSelections');
    let templatehtml = '';
    let templatelist = [];

    $.each(designs, function (key, design) {
        templatelist = templatelist.concat(design.templates);
    });
    templatelist = distinctArrayBy(templatelist, 'id');
    $.each(templatelist, function (key, template) {
        templatehtml += "<span class='templatelabel' templateid='" + template.id + "' templatename='" + template.name + "' linecount='" + template.linecount + "'><span class='closebtn unlinktemplatefromselectionbtn'>×</span>" + template.name + "<span class='badge badge-secondary'>" + template.linecount + "</span></span>";
    });

    $('#activetemplates').html(templatehtml);
}

function majactivemodels() {

    let designs = $("#table").bootstrapTable('getSelections');
    let modelhtml = '';
    let modellist = [];
    $.each(designs, function (key, design) {
        modellist = modellist.concat(design.models);
    });
    modellist = distinctArrayBy(modellist, 'id');

    $.each(modellist, function (key, model) {
        modelhtml += "<span class='modellabel' modelid='" + model.id + "' modelname='" + model.name + "' ><span class='closebtn unlinkmodelfromselectionbtn'>×</span>" + model.name + "</span>";
    });

    $('#activemodels').html(modelhtml);
}

function majactivechange() {
    let alldata = $('#table').bootstrapTable('getData');
    let changeddata = removeFromArrayBy(alldata, "change", 1);
    let result = '';

    if (changeddata.length === 0) {
        result = "Aucun changement effectué"
    } else {
        result = "<span style='color: #28a745; font-weight: bold'>" + changeddata.length + "</span> changement(s) à sauvegarder"
    }

    $('#activechange').html(result);
}

function majactiveselection() {

    let selection = $('#table').bootstrapTable('getSelections');
    let result = '';

    if (selection.length === 0) {
        result = "Aucune sélection en cours"
    } else {
        result = "<span style='color: #28a745; font-weight: bold'>" + selection.length + "</span> élément(s) sélectionné(s)"
    }

    $('#activeselection').html(result);

}


function htmlToElements(html) {
    let template = document.createElement('template');
    template.innerHTML = html;
    return template.content.childNodes;
}

function sortByKeyDesc(array, key) {
    return array.sort(function (a, b) {
        var x = a[key];
        var y = b[key];
        return ((x > y) ? -1 : ((x < y) ? 1 : 0));
    });
}

function sortByKeyAsc(array, key) {
    return array.sort(function (a, b) {
        var x = a[key];
        var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

function distinctArrayBy(arr, propName) {
    let result = arr.reduce(function (arr1, e1) {
        let matches = arr1.filter(function (e2) {
            return e1[propName] == e2[propName];
        })
        if (matches.length == 0)
            arr1.push(e1)
        return arr1;
    }, []);

    return result;
}

function removeFromArrayBy(arr, propName, propValue) {
    return arr.filter(function (obj) {
        return obj[propName] === propValue;
    });
}