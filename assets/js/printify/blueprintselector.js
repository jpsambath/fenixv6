import '../../css/printify/blueprintselector.css';

$(document).ready(function() {
    //set initial state.

    $(":checkbox").click(function() {
        if (!$(this).is(':checked')) {

            $.ajax({
                type: 'POST',
                url: $(this).attr("data-url"),
                success: function(data) {
                    console.log(data);
                }
            });
        }else{
            $.ajax({
                type: 'POST',
                url: $(this).attr("data-url"),
                success: function(data) {
                    console.log(data);
                }
            });
        }
    });

        $("td[colspan=5]").find("table").hide();
        $("table").click(function(event) {
            event.stopPropagation();
            var $target = $(event.target);
            if ( $target.closest("td").attr("colspan") > 1 ) {
                $target.slideUp();
            } else {
                $target.closest("tr").next().find("table").slideToggle();
            }
        });



});



