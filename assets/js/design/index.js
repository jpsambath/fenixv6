import '../../css/design/index.css';

$(document).ready(function () {

    $("#applytag").click(function () {

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

                //console.log(data);

                $.each(JSON.parse(data), function (key, design) {
                    let ids = $.map($('#table').bootstrapTable('getSelections'), function (row) {
                        return row.id
                    })

                    let taglist = "";

                    $.each(design.tags, function (t, tag) {
                        taglist += "<span class='btn btn-outline-secondary btn-sm'><a href=\"#\" class='closebtn'><span>X</span></a>"+ tag.name+"</span>"
                    })

                    $('#table').bootstrapTable('remove', {
                        field: 'id',
                        values: ids
                    });
                    $('#table').bootstrapTable('insertRow', {
                        index: 0,
                        row: {
                            id: design.id,
                            name: design.name,
                            tags: taglist,
                            models: design.models,
                            templates: design.templates,
                            actions: "<a href=\"/design/design/" + design.id + "\"><span class=\"faicon\"><i class=\"fas fa-eye\"></i></span></a> " +
                                "<a href=\"/design/design/" + design.id + "/edit\"><span class=\"faicon\"><i class=\"fas fa-edit\"></i></span></a> " +
                                "<a href=\"/design/design/delete/" + design.id + "\"><span class=\"faicon\"><i class=\"fas fa-trash-alt\"></i></span>"
                        }
                    });
                    $('#table').bootstrapTable('check', 0);
                    console.log(key + " : " + design.name);
                })
                ;
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
        })
        ;
    });

});

