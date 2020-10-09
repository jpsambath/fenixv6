import '../../css/design/index.css';

$(document).ready(function () {

    $(document).on('click', '.unlinktagbtn', function (event) {

        console.log($(this).attr('href'));
        $.ajax({
            url: $(this).attr('href'),
            type: 'POST',
            success: function (data, status) {
                $("#menu_area").notify("Tag Successfully Deleted", {
                    position: "bottom right",
                    className: "success"
                });

                let design = JSON.parse(data);
                console.log(design.id + ">" + design.name);

                //$('#table').bootstrapTable('removeByUniqueId', design.id);

                let taglist = "";

                $.each(design.tags, function (t, tag) {
                    taglist += "<span class='taglabel'><span href='/design/design/ajaxunlinktag/" + design.id + "/" + tag.id + "' class='closebtn unlinktagbtn'>×</span>" + tag.name + "</span>";
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
                        taglist += "<span class='taglabel'><span href='/design/design/ajaxunlinktag/" + design.id + "/" + tag.id + "' class='closebtn unlinktagbtn'>×</span>" + tag.name + "</span>";
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

});


function cleantags(mystring) {
    let res = mystring.replace(/(<([^>]+)>)/ig, "").replace(/\n|\r|(\n\r)/g, "").split("×");

    return res.filter(function (elem) {
        return elem !== '×' && elem !== '';
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


    $.each(rowlist, function (t, row) {
        $.merge(tags, cleantags(row.tags));
    });

    tags = unique(tags);

    $.each(tags, function (t, tag) {
        taglist += "<span class='taglabel'><span class='closebtn unlinktagselection'>×</span>" + tag + "</span>";
    })

    $('#activetags').html(taglist);
}