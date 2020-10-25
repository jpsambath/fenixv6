import '../../../css/design/model/edit.css';

$(document).ready(function () {
    let filename = $('#model_file').attr('file');
    let filepath = $('#model_src').val();

    if (filename !== undefined && filename !== "" && filepath !== undefined && filepath !== "") {
        $('.custom-file-label').html(filename);
        $('.custom-file-label').addClass('text-left');
        $('#model_file').removeAttr('required');
    }

    $(document).on('change', '#model_file', function (event) {

        let file = $('#model_file')[0].files[0];
        $('.custom-file-label').html(file.name);

    });

});