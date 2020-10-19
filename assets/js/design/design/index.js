import '../../../css/design/design/index.css';

$(document).ready(function () {

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

            success: function (data, status) {
                $("#menu_area").notify("Tags Successfully Added :  \n" + $("#selecttag option:selected").toArray().map(item => item.text).join('\n'), {
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
                    $("#menu_area").notify("Adding Tags Failed :  \n" + $("#selecttag option:selected").toArray().map(item => item.text).join('\n'), {
                        position: "bottom right",
                        className: "error"
                    });
                }
        });


    });

    $('#table').on('check.bs.table uncheck.bs.table uncheck-all.bs.table check-all.bs.table', majactivetags);

    //ici ajax template

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

function htmlToElements(html) {
    let template = document.createElement('template');
    template.innerHTML = html;
    return template.content.childNodes;
}