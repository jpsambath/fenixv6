import '../../../css/design/design/index.css';

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
            success: function (data, status) {
                $("#menu_area").notify("Tag Successfully Deleted", {
                    position: "bottom right",
                    className: "success"
                });

                $.each(JSON.parse(data), function (key, design) {

                    let taglist = "";

                    $.each(design.tags, function (t, tag) {
                        taglist += "<span class='taglabel'><span href='/design/design/ajaxunlinktag/" + design.id + "/" + tag.id + "' tagid='" + tag.id + "' tagname='" + tag.name + "' class='closebtn unlinktagbtn'>×</span>" + tag.name + "</span>";
                    })


                    $('#table').bootstrapTable('updateCellByUniqueId', {
                        id: design.id,
                        field: 'tags',
                        value: taglist
                    });

                    majactivetags();
                });
                // $('#table tbody').find('.selected').remove();
                // $('#table tbody').prepend(data);
                // $('#table').bootstrapTable('refresh');

            },
            error:
                function (data, status, message) {
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
            success: function (data, status) {
                $("#menu_area").notify("Tag Successfully Deleted", {
                    position: "bottom right",
                    className: "success"
                });

                let design = JSON.parse(data);

                //$('#table').bootstrapTable('removeByUniqueId', design.id);

                let taglist = "";

                $.each(design.tags, function (t, tag) {
                    taglist += "<span class='taglabel'><span href='/design/design/ajaxunlinktag/" + design.id + "/" + tag.id + "' tagid='" + tag.id + "' tagname='" + tag.name + "' class='closebtn unlinktagbtn'>×</span>" + tag.name + "</span>";
                })


                $('#table').bootstrapTable('updateCellByUniqueId', {
                    id: design.id,
                    field: 'tags',
                    value: taglist
                });

                majactivetags();

            },
            error:
                function (data, status, message) {
                    $("#menu_area").notify("Tag Deletion Failed", {
                        position: "bottom right",
                        className: "error"
                    });
                }
        });

    });

    $("#applytag").on('click', function () {
        console.log('tags:'+JSON.stringify($("#selecttag").val()));
        console.log('designs:'+JSON.stringify($("#table").bootstrapTable('getSelections')))
        $.ajax({
            url: "/design/design/ajaxaddtag",
            type: 'POST',
            data: {
                tags: JSON.stringify($("#selecttag").val()),
                designs: JSON.stringify($("#table").bootstrapTable('getSelections'))
            },
            dataType: 'json',
            async: true,

            success: function (data, status) {
                $("#menu_area").notify("Tags Successfully Added :  \n" + $("#selecttag option:selected").toArray().map(item => item.text).join('\n'), {
                    position: "bottom right",
                    className: "success"
                });

                $.each(JSON.parse(data), function (key, design) {

                    let taglist = "";

                    $.each(design.tags, function (t, tag) {
                        taglist += "<span class='taglabel'><span href='/design/design/ajaxunlinktag/" + design.id + "/" + tag.id + "' tagid='" + tag.id + "' tagname='" + tag.name + "' class='closebtn unlinktagbtn'>×</span>" + tag.name + "</span>";
                    })


                    $('#table').bootstrapTable('updateCellByUniqueId', {
                        id: design.id,
                        field: 'tags',
                        value: taglist
                    });

                    majactivetags();
                });

            },
            error:

                function (data, status, message) {
                    $("#menu_area").notify("Adding Tags Failed :  \n" + $("#selecttag option:selected").toArray().map(item => item.text).join('\n'), {
                        position: "bottom right",
                        className: "error"
                    });
                }
        });


    });

    $('#table').on('check.bs.table uncheck.bs.table uncheck-all.bs.table check-all.bs.table', majactivetags);



    //ici ajax template
    $("#applytemplate").on('click', function () {
        console.log('templates:'+JSON.stringify($("#selecttemplate").val()));
        console.log('designs:'+JSON.stringify($("#table").bootstrapTable('getSelections')))
        $.ajax({
            url: "/design/design/ajaxaddtemplate",
            type: 'POST',
            data: {
                templates: JSON.stringify($("#selecttemplate").val()),
                designs: JSON.stringify($("#table").bootstrapTable('getSelections'))
            },
            dataType: 'json',

            success: function (data, status) {
                $("#menu_area").notify("Templates Successfully Added :  \n" + $("#selecttemplate option:selected").toArray().map(item => item.text).join('\n'), {
                    position: "bottom right",
                    className: "success"
                });

                $.each(JSON.parse(data), function (key, design) {

                    let templatelist = "";

                    $.each(design.templates, function (t, template) {
                        templatelist += "<span class='templatelabel'><span href='/design/design/ajaxunlinktemplate/" + design.id + "/" + template.id + "' templateid='" + template.id + "' templatename='" + template.name + "' class='closebtn unlinktemplatebtn'>×</span>" + template.name + "</span>";
                    })


                    $('#table').bootstrapTable('updateCellByUniqueId', {
                        id: design.id,
                        field: 'templates',
                        value: templatelist
                    });

                    majactivetemplates();
                });
                // $('#table tbody').find('.selected').remove();
                // $('#table tbody').prepend(data);
                // $('#table').bootstrapTable('refresh');

            },
            error:

                function (data, status, message) {
                    $("#menu_area").notify("Adding Templates Failed :  \n" + $("#selecttemplate option:selected").toArray().map(item => item.text).join('\n'), {
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
            success: function (data, status) {
                $("#menu_area").notify("Template Successfully Deleted", {
                    position: "bottom right",
                    className: "success"
                });

                $.each(JSON.parse(data), function (key, design) {

                    let templatelist = "";

                    $.each(design.templates, function (t, template) {
                        templatelist += "<span class='templatelabel'><span href='/design/design/ajaxunlinktemplate/" + design.id + "/" + template.id + "' templateid='" + template.id + "' templatename='" + template.name + "' class='closebtn unlinktemplatebtn'>×</span>" + template.name + "</span>";
                    })


                    $('#table').bootstrapTable('updateCellByUniqueId', {
                        id: design.id,
                        field: 'templates',
                        value: templatelist
                    });

                    majactivetemplates();
                });
                // $('#table tbody').find('.selected').remove();
                // $('#table tbody').prepend(data);
                // $('#table').bootstrapTable('refresh');

            },
            error:
                function (data, status, message) {
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
            success: function (data, status) {
                $("#menu_area").notify("Template Successfully Deleted", {
                    position: "bottom right",
                    className: "success"
                });

                let design = JSON.parse(data);

                //$('#table').bootstrapTable('removeByUniqueId', design.id);

                let templatelist = "";

                $.each(design.templates, function (t, template) {
                    templatelist += "<span class='templatelabel'><span href='/design/design/ajaxunlinktemplate/" + design.id + "/" + template.id + "' templateid='" + template.id + "' templatename='" + template.name + "' class='closebtn unlinktemplatebtn'>×</span>" + template.name + "</span>";
                })


                $('#table').bootstrapTable('updateCellByUniqueId', {
                    id: design.id,
                    field: 'templates',
                    value: templatelist
                });

                majactivetemplates();

            },
            error:
                function (data, status, message) {
                    $("#menu_area").notify("Template Deletion Failed", {
                        position: "bottom right",
                        className: "error"
                    });
                }
        });

    });

    $('#table').on('check.bs.table uncheck.bs.table uncheck-all.bs.table check-all.bs.table', majactivetemplates);

    //ici ajax model
    $("#applymodel").on('click', function () {
        console.log('models:'+JSON.stringify($("#selectmodel").val()));
        console.log('designs:'+JSON.stringify($("#table").bootstrapTable('getSelections')))
        $.ajax({
            url: "/design/design/ajaxaddmodel",
            type: 'POST',
            data: {
                models: JSON.stringify($("#selectmodel").val()),
                designs: JSON.stringify($("#table").bootstrapTable('getSelections'))
            },
            dataType: 'json',

            success: function (data, status) {
                $("#menu_area").notify("models Successfully Added :  \n" + $("#selectmodel option:selected").toArray().map(item => item.text).join('\n'), {
                    position: "bottom right",
                    className: "success"
                });

                //Suppression des lignes précédemment cochées
                // let ids = $.map($('#table').bootstrapTable('getSelections'), function (row) {
                //     return row.id
                // })
                // $('#table').bootstrapTable('remove', {
                //     field: 'id',
                //     values: ids
                // });

                $.each(JSON.parse(data), function (key, design) {

                    let modellist = "";

                    $.each(design.models, function (t, model) {
                        modellist += "<span class='modellabel'><span href='/design/design/ajaxunlinkmodel/" + design.id + "/" + model.id + "' modelid='" + model.id + "' modelname='" + model.name + "' class='closebtn unlinkmodelbtn'>×</span>" + model.name + "</span>";
                    })


                    $('#table').bootstrapTable('updateCellByUniqueId', {
                        id: design.id,
                        field: 'models',
                        value: modellist
                    });

                    majactivemodels();
                });
                // $('#table tbody').find('.selected').remove();
                // $('#table tbody').prepend(data);
                // $('#table').bootstrapTable('refresh');

            },
            error:

                function (data, status, message) {
                    $("#menu_area").notify("Adding models Failed :  \n" + $("#selectmodel option:selected").toArray().map(item => item.text).join('\n'), {
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
            success: function (data, status) {
                $("#menu_area").notify("model Successfully Deleted", {
                    position: "bottom right",
                    className: "success"
                });

                $.each(JSON.parse(data), function (key, design) {

                    let modellist = "";

                    $.each(design.models, function (t, model) {
                        modellist += "<span class='modellabel'><span href='/design/design/ajaxunlinkmodel/" + design.id + "/" + model.id + "' modelid='" + model.id + "' modelname='" + model.name + "' class='closebtn unlinkmodelbtn'>×</span>" + model.name + "</span>";
                    })


                    $('#table').bootstrapTable('updateCellByUniqueId', {
                        id: design.id,
                        field: 'models',
                        value: modellist
                    });

                    majactivemodels();
                });
                // $('#table tbody').find('.selected').remove();
                // $('#table tbody').prepend(data);
                // $('#table').bootstrapTable('refresh');

            },
            error:
                function (data, status, message) {
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
            success: function (data, status) {
                $("#menu_area").notify("model Successfully Deleted", {
                    position: "bottom right",
                    className: "success"
                });

                let design = JSON.parse(data);

                //$('#table').bootstrapTable('removeByUniqueId', design.id);

                let modellist = "";

                $.each(design.models, function (t, model) {
                    modellist += "<span class='modellabel'><span href='/design/design/ajaxunlinkmodel/" + design.id + "/" + model.id + "' modelid='" + model.id + "' modelname='" + model.name + "' class='closebtn unlinkmodelbtn'>×</span>" + model.name + "</span>";
                })


                $('#table').bootstrapTable('updateCellByUniqueId', {
                    id: design.id,
                    field: 'models',
                    value: modellist
                });

                majactivemodels();

            },
            error:
                function (data, status, message) {
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


function majactivetags() {
    let rowlist = $('#table').bootstrapTable('getSelections');
    let taglist = '';
    let tags = [];

    $.each(rowlist, function (r, row) {
//        $.merge(tags, cleantags(row.tags));

        $.each($(row.tags).find('.unlinktagbtn'), function(s,span){
            if(jQuery.inArray($(span).attr('tagname'),tags) === -1){

                tags.push($(span).attr('tagname'));
                taglist += "<span class='taglabel'><span href='/design/design/ajaxunlinktagfromselection/" + $(span).attr('tagid') + "' tagid='" + $(span).attr('tagid') + "' tagname='" + $(span).attr('tagname') + "' class='closebtn unlinktagfromselectionbtn'>×</span>" + $(span).attr('tagname') + "</span>";
            }

           //console.log(span.attr('tagid'));
            // console.log($(span).attr('tagid') + ' ' + $(span).attr('tagname'));
        });

    });

    //console.log(taglist);
    // tags = unique(tags);
    // console.log(tags)
    //
    // $.each(tags, function (t, tag) {
    //     taglist += "<span class='taglabel'><span href='/design/design/ajaxunlinktagfromselection/" + tag.id + "' tagid='" + tag.id + "' tagname='" + tag.name + "' class='closebtn unlinktagfromselectionbtn'>×</span>" + tag + "</span>";
    // })

    $('#activetags').html(taglist);
}

function majactivetemplates() {
    let rowlist = $('#table').bootstrapTable('getSelections');
    let templatelist = '';
    let templates = [];

    $.each(rowlist, function (r, row) {
//        $.merge(tags, cleantags(row.tags));

        $.each($(row.templates).find('.unlinktemplatebtn'), function(s,span){
            if(jQuery.inArray($(span).attr('templatename'), templates) === -1){

                templates.push($(span).attr('templatename'));
                templatelist += "<span class='templatelabel'><span href='/design/design/ajaxunlinktemplatefromselection/" + $(span).attr('templateid') + "' templateid='" + $(span).attr('templateid') + "' templatename='" + $(span).attr('templatename') + "' class='closebtn unlinktemplatefromselectionbtn'>×</span>" + $(span).attr('templatename') + "</span>";
            }

            //console.log(span.attr('tagid'));
            // console.log($(span).attr('tagid') + ' ' + $(span).attr('tagname'));
        });

    });

    //console.log(taglist);
    // tags = unique(tags);
    // console.log(tags)
    //
    // $.each(tags, function (t, tag) {
    //     taglist += "<span class='taglabel'><span href='/design/design/ajaxunlinktagfromselection/" + tag.id + "' tagid='" + tag.id + "' tagname='" + tag.name + "' class='closebtn unlinktagfromselectionbtn'>×</span>" + tag + "</span>";
    // })

    $('#activetemplates').html(templatelist);
}

function majactivemodels() {
    let rowlist = $('#table').bootstrapTable('getSelections');
    let modellist = '';
    let models = [];

    $.each(rowlist, function (r, row) {
//        $.merge(tags, cleantags(row.tags));

        $.each($(row.models).find('.unlinkmodelbtn'), function(s,span){
            if(jQuery.inArray($(span).attr('modelname'), models) === -1){

                models.push($(span).attr('modelname'));
                modellist += "<span class='modellabel'><span href='/design/design/ajaxunlinkmodelfromselection/" + $(span).attr('modelid') + "' modelid='" + $(span).attr('modelid') + "' modelname='" + $(span).attr('modelname') + "' class='closebtn unlinkmodelfromselectionbtn'>×</span>" + $(span).attr('modelname') + "</span>";
            }

            //console.log(span.attr('tagid'));
            // console.log($(span).attr('tagid') + ' ' + $(span).attr('tagname'));
        });

    });

    //console.log(taglist);
    // tags = unique(tags);
    // console.log(tags)
    //
    // $.each(tags, function (t, tag) {
    //     taglist += "<span class='taglabel'><span href='/design/design/ajaxunlinktagfromselection/" + tag.id + "' tagid='" + tag.id + "' tagname='" + tag.name + "' class='closebtn unlinktagfromselectionbtn'>×</span>" + tag + "</span>";
    // })

    $('#activemodels').html(modellist);
}

function htmlToElements(html) {
    let template = document.createElement('template');
    template.innerHTML = html;
    return template.content.childNodes;
}