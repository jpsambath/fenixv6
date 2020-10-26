/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../../css/global/base.css';


// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');

$(document).ready(function () {
    $('#form_file').on("change", function () {
        let files = $(this)[0].files;
        $('#filescount').innerHTML = "";
        $('#filescount').append("You have selected : " + files.length + " files. <a class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModalLong\"> View Files Name </a>");

        $('.modal-body').innerHTML = "";

        let bar1 = new ldBar("#progressbar", {
            "stroke": '#f00',
            "stroke-width": 10,
            "preset": "stripe",
            "value": 0,
            "width": "300px"
        });
        /* ldBar stored in the element */
        let bar2 = document.getElementById('progressbar').ldBar;
        bar1.set(0);

        $.each(files, function () {
            $('.modal-body').append(this.name + '<br>');
        });
    });

    $('#form_uploadimage').on("click", function (event) {
        let bar1 = new ldBar("#progressbar", {
            "stroke": '#f00',
            "stroke-width": 10,
            "preset": "stripe",
            "value": 0,
            "width": '100%'
        });

        let bar2 = document.getElementById('progressbar').ldBar;
        bar1.set(0);

        let files = $('#form_file')[0].files;


        $.each(files, async function (index, value) {
            // console.log(await toBase64(this));
            // console.log('64base : ' + await toBase64(this));
            // console.log('filename : ' + this.name);
            console.log("File  : " + index);
            $.ajax({
                url: 'https://api.printify.com/v1/uploads/images.json',
                type: 'POST',
                headers: {'Authorization': 'Bearer ' + $('#form_api').val(), 'Content-Type': 'application/json'},
                data: JSON.stringify({"file_name": this.name, "contents": await toBase64(this)}),
                dataType: 'json',
                async: true,

                success: function (data, status) {
                    bar1.set(Math.ceil(((index + 1) / files.length)) * 100);
                    console.log(status + ': OK')
                },
                error: function (data, status, message) {
                    console.log(data);
                    console.log(this.name + ': KO')
                }
            });
        });

    });


});

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(
        reader.result.replace(/^data:.+;base64,/, '')
    );
    reader.onerror = error => reject(error);
});

