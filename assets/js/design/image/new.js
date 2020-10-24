import '../../../css/image/new.css';

$(document).ready(function () {



    $(document).on('change', '#image_file', function (event) {

        let file = $('#image_file')[0].files[0];
        $('.custom-file-label').html(file.name);

        $('#image_size').val(Math.round(file.size/1024))

        let extension = file.name.split('.').pop();
        $('#image_format').val(extension)

        let img = new Image()
        img.src = window.URL.createObjectURL(file);
        img.onload = function(){
            $('#image_height').val(img.height)
            $('#image_width').val(img.width)
        }

    });

});