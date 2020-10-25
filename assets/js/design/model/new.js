import '../../../css/design/model/new.css';

$(document).ready(function () {

    $(document).on('change', '#model_file', function (event) {

        let file = $('#model_file')[0].files[0];
        $('.custom-file-label').html(file.name);

    });

});