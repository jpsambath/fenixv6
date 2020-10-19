import '../../../css/design/template/new.css';

$(document).ready(function () {

    $(document).on('click', '.add_new_linestyle', function (event) {
        let wrapper = $('#linestyles_wrapper');

        if (wrapper.data('index') < 5) {
            // Try to find the counter of the list or use the length of the list
            let index = wrapper.data('index') + 1;

            // grab the prototype template
            let prototype = wrapper.data('prototype');
            // get the new index

            let newForm = prototype.replace(/__name__label__/g, index).replace(/__name__/g, index);
            let temp = $('<div>').html(newForm);

            // modify attributes
            temp.find('input').attr('linenumber', index);
            temp.find('select').attr('linenumber', index);
            //$(newForm).attr('linenumber', index);
            // Increase the counter
            wrapper.data('index', index);
            // And store it, the length cannot be used if deleting widgets is allowed
            wrapper.append(temp);

            $('#template_lineStyles_' + index + '_font option').each(function () {
                $(this).css("font-family", $(this).text());
            });

            $('#template_linecount').val(index);

            $("#menu_area").notify("New Line Style Added", {
                position: "bottom right",
                className: "success"
            });
            // create a new list element and add it to the list
            // var newElem = $(list.attr('data-widget-tags')).html(newWidget);
            // newElem.appendTo(list);
        } else {
            $("#menu_area").notify("Maximum Linestyles Reached", {
                position: "bottom right",
                className: "error"
            });

        }

    });

    $('.template_linestyle_font option').each(function () {
        $(this).css("font-family", $(this).text());
    });

    let str = $('#textsample').val()
    str = str.replace(/<br>/g, "\r\n");
    $('#textsample').val(str)

    let arrayOfLines = $('#textsample').val().trim().split('\n');
    let linenumber;
    $.each(arrayOfLines, function (index, item) {
        linenumber = index + 1
        $('#line' + linenumber).text(item)
        $('#line' + linenumber).attr('data-origin', item);
    });

    //Changement du texte
    $(document).on('keyup', '#textsample', function (event) {
        $('#line1').text("")
        $('#line2').text("")
        $('#line3').text("")
        $('#line4').text("")
        $('#line5').text("")

        let arrayOfLines = $('#textsample').val().trim().split('\n');
        let linenumber;
        $.each(arrayOfLines, function (index, item) {
            linenumber = index + 1;
            $('#line' + linenumber).text(item);
            $('#line' + linenumber).attr('data-origin', item);
        });
    });

    //Changement de la police
    $(document).on('change', '.template_linestyle_font', function (event) {
        let linenumber = $(this).attr('linenumber');
        $('#line' + linenumber).css("font-family", $("option:selected", this).text())
    });

    //Changement de la couleur
    $(document).on('input', '.template_linestyle_fontcolor', function (event) {
        let linenumber = $(this).attr('linenumber');
        $('#line' + linenumber).css("color", $(this).val())
    });
    //Changement de la couleur
    $(document).on('change', '.template_linestyle_fontcolor', function (event) {
        let linenumber = $(this).attr('linenumber');
        $('#line' + linenumber).css("color", $(this).val())
    });

    //Changement de la taille
    $(document).on('change', '.template_linestyle_fontsize', function (event) {
        let linenumber = $(this).attr('linenumber');
        $('#line' + linenumber).css("font-size", $("option:selected", this).val() + 'px')
    });

    //Changement uppercase
    $(document).on('change', '.template_linestyle_uppercase', function () {
        let linenumber = $(this).attr('linenumber');
        if (this.checked) {
            $('#template_lineStyles_'+linenumber+'_capitalize').prop("checked", false);
            $('#template_lineStyles_'+linenumber+'_lowercase').prop("checked", false);
            $('#line' + linenumber).css('textTransform', 'uppercase');
        } else {
            $('#line' + linenumber).css('textTransform', '');
        }
    });

    //Changement lowercase
    $(document).on('change', '.template_linestyle_lowercase', function () {
        let linenumber = $(this).attr('linenumber');
        if (this.checked) {
            $('#template_lineStyles_'+linenumber+'_capitalize').prop("checked", false);
            $('#template_lineStyles_'+linenumber+'_uppercase').prop("checked", false);
            $('#line' + linenumber).css('textTransform', 'lowercase');
        } else {
            $('#line' + linenumber).css('textTransform', '');
        }
    });

    //Changement capitalize
    $(document).on('change', '.template_linestyle_capitalize', function () {
        let linenumber = $(this).attr('linenumber');
        if (this.checked) {
            $('#template_lineStyles_'+linenumber+'_uppercase').prop("checked", false);
            $('#template_lineStyles_'+linenumber+'_lowercase').prop("checked", false);
            $('#line' + linenumber).css('textTransform', 'capitalize');
        } else {
            $('#line' + linenumber).css('textTransform', '');
        }
    });

    //Changement bold
    $(document).on('change', '.template_linestyle_bold', function () {
        let linenumber = $(this).attr('linenumber');
        if (this.checked) {
            $('#line' + linenumber).css('font-weight','Bold');
        } else {
            $('#line' + linenumber).css('font-weight', '');
        }
    });

    //Changement italic
    $(document).on('change', '.template_linestyle_italic', function () {
        let linenumber = $(this).attr('linenumber');
        if (this.checked) {
            $('#line' + linenumber).css('font-style','italic');
        } else {
            $('#line' + linenumber).css('font-style', '');
        }
    });

    //Changement underline
    $(document).on('change', '.template_linestyle_underline', function () {
        let linenumber = $(this).attr('linenumber');
        if (this.checked) {
            $('#template_lineStyles_'+linenumber+'_linethrough').prop("checked", false);
            $('#line' + linenumber).css('text-decoration','underline');
        } else {
            $('#line' + linenumber).css('text-decoration', '');
        }
    });

    //Changement linethrough
    $(document).on('change', '.template_linestyle_linethrough', function () {
        let linenumber = $(this).attr('linenumber');
        if (this.checked) {
            $('#template_lineStyles_'+linenumber+'_underline').prop("checked", false);
            $('#line' + linenumber).css('text-decoration','line-through');
        } else {
            $('#line' + linenumber).css('text-decoration', '');
        }
    });


});