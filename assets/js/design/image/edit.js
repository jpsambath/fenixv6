import '../../../css/design/image/edit.css';

$(document).ready(function () {
    let filename = $('#image_file').attr('file');
    let filepath = $('#image_src').val();
    console.log(filepath)

    if(filename !== undefined && filename !== "" && filepath !== undefined && filepath !== ""){
        $('.custom-file-label').html(filename);
        $('.custom-file-label').addClass('text-left');
        $('#imgthumbnail').removeAttr('hidden');
        $('#image_file').removeAttr('required');
    }

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