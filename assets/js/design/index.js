import '../../css/design/index.css';

$(document).ready(function () {

    $("#applytag").click(function () {
        $.ajax({
            url: "/design/design/ajaxaddtag",
            type: 'POST',
            headers: {'Content-Type': 'application/json'},
            data: JSON.stringify({"file_name": this.name}),
            dataType: 'json',
            async: true,

            success: function (data, status) {
                jQuery.notify("Tags Successfully Added!", "success");
                console.log('OK');
            },
            error: function (data, status, message) {
                console.log('KO');
            }
        });
    });


});