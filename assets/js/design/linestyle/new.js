import '../../../css/design/linestyle/new.css';

$(document).ready(function () {
    $('#line_style_font option').each(function () {
        $(this).css("font-family", $(this).text());
    });

    $(document).on('change', '#line_style_font', function (event) {
        $('#textsample').css("font-family", $("#line_style_font option:selected").text())
    });


    $(document).on('change', '#line_style_fontColor', function (event) {
        console.log('change : '+$("#line_style_fontColor").val());
    });

    $(document).on('input', '#line_style_fontColor', function (event) {
        $('#textsample').css("color", $("#line_style_fontColor").val())
    });

    $(document).on('change', '#line_style_fontSize', function (event) {
        $('#textsample').css("font-size", $("#line_style_fontSize option:selected").val()+'px')
    });

    $(document).on('change', '#line_style_majuscule', function() {
        if(this.checked) {
            $('#textsample').val (function () {
                return this.value.toUpperCase();
            })
        }else{
            $('#textsample').val (function () {
                return this.value.toLowerCase();
            })
        }
    });



});