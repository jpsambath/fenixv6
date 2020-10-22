import '../../../css/design/text/new.css';

$(document).ready(function () {

    $(document).on('click', '.addnewcut', function (event) {
        event.preventDefault();
        let cutswrapper = $('#cuts_wrapper');
        if (cutswrapper.attr('cutnumber') < 5) {
            // Try to find the counter of the list or use the length of the list
            let index = parseInt(cutswrapper.attr('cutnumber')) + 1;

            // grab the prototype template
            let prototype = cutswrapper.data('prototype');
            // get the new index

            let newForm = prototype.replace(/__cutname__label__/g, index).replace(/__cutname__/g, index);
            let temp = $.parseHTML(newForm);

            // modify attributes
            $(temp).find('button').attr('cutnumber', index);
            $(temp).find('input').attr('cutnumber', index);
            $(temp).find('select').attr('cutnumber', index);
            //$(newForm).attr('linenumber', index);
            // Increase the counter
            cutswrapper.data('index', index);

            let partswraper = $(temp).find('#parts_wrapper');


            // grab the prototype template
            let prototype2 = partswraper.data('prototype');
            // get the new index
            partswraper.attr('partnumber', 1);
            partswraper.attr('cutnumber',index);

            let newForm2 = prototype2.replace(/__partname__label__/g, "1").replace(/__partname__/g, "1");
            let temp2 = $.parseHTML($.trim(newForm2));


            // modify attributes
            $(temp2).find('input').attr('partnumber', 1);
            // temp2.find('select').attr('linenumber', 1);
            //$(newForm).attr('linenumber', index);
            // Increase the counter

            partswraper.append(temp2);

            $(temp).find('#parts_wrapper').replaceWith(partswraper)

            cutswrapper.attr('cutnumber', index);
            // console.log(partswraper)
            // And store it, the length cannot be used if deleting widgets is allowed
            cutswrapper.append(temp);

            $("#menu_area").notify("New Cut Added", {
                position: "bottom right",
                className: "success"
            });
        } else {
            $("#menu_area").notify("Maximum Cuts Reached", {
                position: "bottom right",
                className: "error"
            });
        }
    });

    $(document).on('click', '.addnewpart', function (event) {
        event.preventDefault();
        let cutnumber = $(this).attr('cutnumber');

        let partswrapper = $('#parts_wrapper[cutnumber="'+cutnumber+'"]');
        // console.log('cutnumber searched : '+cutnumber )
        // console.log(partswrapper);
        // console.log('cutnumber found : '+ partswrapper.attr('cutnumber'));

        if (partswrapper.attr('partnumber') < 5) {
            // Try to find the counter of the list or use the length of the list
            let partnumber = parseInt(partswrapper.attr('partnumber')) + 1;
            // grab the prototype template
            let prototype = partswrapper.data('prototype');
            // get the new index

            let newForm = prototype.replace(/__partname__label__/g, partnumber).replace(/__partname__/g, partnumber);
            let temp = $.parseHTML($.trim(newForm));

            // modify attributes
            $(temp).find('input').attr('partnumber', partnumber);
            //$(newForm).attr('linenumber', index);
            // Increase the counter
            partswrapper.attr('partnumber', partnumber);
            partswrapper.append(temp);

            $('#text_cuts_'+cutnumber+'_linecount').val(partnumber);

            $("#menu_area").notify("New Part Added", {
                position: "bottom right",
                className: "success"
            });
        }else{
            $("#menu_area").notify("Maximum Parts Reached", {
                position: "bottom right",
                className: "error"
            });
        }
    });

    $(document).on('click', '.removepart', function (event) {
        event.preventDefault();
        let cutnumber = $(this).attr('cutnumber');
        let partswrapper = $('#parts_wrapper[cutnumber="'+cutnumber+'"]');

        if (partswrapper.attr('partnumber') > 1) {

            let partnumber = parseInt(partswrapper.attr('partnumber')) - 1;

            $(partswrapper).find('.part-item').last().fadeOut("slow").remove();
            partswrapper.attr('partnumber', partnumber);

            $('#text_cuts_' + cutnumber + '_linecount').val(partnumber);

            $("#menu_area").notify("Last Part Removed", {
                position: "bottom right",
                className: "success"
            });
        }else {
            $("#menu_area").notify("Minimum Parts Reached", {
                position: "bottom right",
                className: "error"
            });
        }
    });

    $(document).on('click', '.removecut', function (event) {
        event.preventDefault();
        let cutswrapper = $('#cuts_wrapper');
        console.log(cutswrapper);
        if (cutswrapper.attr('cutnumber') > 1) {

            let cutnumber = parseInt(cutswrapper.attr('cutnumber')) - 1;

            $(cutswrapper).find('.cut-item').last().fadeOut("slow").remove();
            cutswrapper.attr('cutnumber', cutnumber);

            $("#menu_area").notify("Last Cut Removed", {
                position: "bottom right",
                className: "success"
            });
        }else {
            $("#menu_area").notify("Minimum Cuts Reached", {
                position: "bottom right",
                className: "error"
            });
        }
    });

});