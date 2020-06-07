import '../css/blueprintselector.css';
import('tableexport');


$(document).ready(function() {

    $('#blueprintselection').on('change', function(){
        let imagelist ='';
        let providerlist ='<div class="col-6"><div class="form-group"><label for="providerselection">2. Choose a provider</label><select class="form-control" id="providerselection">';
        $.each(shop.blueprints, function(i, obj){
            if(obj.id == $('#blueprintselection option:selected').val()){

                $.each(obj.images, function(j, img){
                    imagelist += '<img src="'+img+'" style="width:33%"/>'
                });
                $("#blueprintdescription").empty();
                $("#blueprintdescription").append('Brand : ' + obj.brand +'<br>');
                $("#blueprintdescription").append('Model : ' + obj.model +'<br><br>');

                $("#blueprintdescription").append('<p>' + obj.description + '</p>');

                $.each(obj.providers, function(k, prov){
                    providerlist += '<option value="'+prov.id+'">'+ prov.title + '</option>'
                });
                providerlist +='</select></div><div id="providerdescription"></div></div><div id="providervariant" class="col-6"></div>'
            }

        });
        $("#blueprintimages").empty();
        $("#blueprintimages").prepend(imagelist);

        $("#providerchoice").empty();
        $("#providerchoice").append(providerlist);

        $("#providervariant").empty();

        $("#exportchoice").empty();

        $('#providerselection').on('change', function(){
            let variantlist ='<select multiple size="10" id="variantselection" style="width:100%">';
            let shipping ='';
            $.each(shop.blueprints, function(i, obj){
                if(obj.id == $('#blueprintselection option:selected').val()){

                    $.each(obj.variants, function(j, variant){
                        if(variant.provider.id == $('#providerselection option:selected').val()){
                            variantlist +='<option value="'+ variant.id +'">' + variant.title +'</option>';
                        }
                    });
                    variantlist += '</select>';
                    console.log(variantlist);

                    $.each(obj.shippings, function(j, shipping){
                        if(shipping.provider.id == $('#providerselection option:selected').val()){
                            $("#providerdescription").empty();
                            $("#providerdescription").append('Handling time : ' + shipping.handling_time.value + ' ' + shipping.handling_time.unit + '<br>');
                        }
                    });

                }

            });
            $("#providervariant").empty();
            $("#providervariant").append(variantlist);

            $("#exportchoice").empty();

            $('#variantselection').on('change', function(){
                let exporttable = '<table class="table table-hover table-sm">\n' +
                    '  <thead>\n' +
                    '    <tr>\n' +
                    '      <th scope="col" title="Product Id (Integer)">Product Id</th>\n' +
                    '      <th scope="col">Blueprint Id</th>\n' +
                    '      <th scope="col">Provider Id</th>\n' +
                    '      <th scope="col">Variant Id</th>\n' +
                    '      <th scope="col">Variant Title</th>\n' +
                    '      <th scope="col" title="Product Title (Max 255 Characters)">Product Title</th>\n' +
                    '      <th scope="col" title="Product Description (Text feel free ;) + HTML ?)">Product Description</th>\n' +
                    '      <th scope="col" title="Variant Price (Integer without comma, i.e 29,00€ => 2900)">Variant Price</th>\n' +
                    '      <th scope="col">Variant Is_Enabled</th>\n' +
                    '      <th scope="col" title="Print Area Id (should be only one Print Area Id per Product Id, two if black and white)">Print Area Id</th>\n' +
                    '      <th scope="col">Placeholder Id</th>\n' +
                    '      <th scope="col">Placeholder Height</th>\n' +
                    '      <th scope="col">Placeholder Width</th>\n' +
                    '      <th scope="col">Position</th>\n' +
                    '      <th scope="col">Image Path</th>\n' +
                    '      <th scope="col">Tags</th>\n' +
                    '    </tr>\n' +
                    '  </thead><tbody>';
                console.log($('#variantselection').val());
                let placeholderid = 0;
                $.each(shop.blueprints, function( index, blueprint ) {
                    if(blueprint.id == $('#blueprintselection option:selected').val()){
                        console.log(blueprint);
                        $.each(blueprint.variants, function( index, variant ) {
                           if($.inArray(variant.id.toString(), $('#variantselection').val()) !== -1 && blueprint.id == $('#blueprintselection option:selected').val() &&  variant.provider.id == $('#providerselection option:selected').val()){
                               $.each(variant.placeholders, function( index, placeholder ) {
                                   placeholderid +=1;
                                   exporttable += '<tr>' +
                                       '<td>User Input</td>' +
                                       '<td>'+ blueprint.id +'</td>'+
                                       '<td>'+ variant.provider.id +'</td>'+
                                       '<td>'+ variant.id +'</td>' +
                                       '<td>'+ variant.title +'</td>' +
                                       '<td>User Input</td>' +
                                       '<td>User Input</td>' +
                                       '<td>User Input</td>' +
                                       '<td>1</td>' +
                                       '<td>User Input</td>' +
                                       '<td>' + placeholder.id + '</td>' +
                                       '<td>'+ placeholder.position +'</td>' +
                                       '<td>'+ placeholder.height +'</td>' +
                                       '<td>'+ placeholder.width +'</td>' +
                                       '<td>Image Path</td>' +
                                       '<td>Tags</td>'+
                                       '</tr>';
                               });
                           }
                        });
                    }
                });

                exporttable += '</tbody></table>';
                $("#exportchoice").empty();
                $("#exportchoice").append(exporttable);
                $("#exportchoice").append('<a id="exporttotable" class="btn btn-primary">Export</a>');

                $('#exporttotable').on('click', function(){
                    // Character set (character encoding) of the HTML.
                    $.fn.tableExport.charset ="charset=utf-8";
                    $.fn.tableExport.defaultFileName ="myTemplate";
// Class applied to each export button element.
                    $.fn.tableExport.defaultButton ="button-default";
// <a href="https://www.jqueryscript.net/tags.php?/Bootstrap/">Bootstrap</a> configuration classes ["base", "theme", "container"].

                    $.fn.tableExport.bootstrap = ["btn","btn-default","btn-toolbar"];
                    $("#exportchoice").tableExport({
                        // Displays table headers (th or td elements) in the <thead>
                        headers:true,

                        // Displays table footers (th or td elements) in the <tfoot>
                        footers:true,
                        // Filetype(s) for the export

                        formats: ["xls","csv","txt"],
                        // Filename for the downloaded file
                        fileName:"myTemplate",
                        // Style buttons using bootstrap framework
                        bootstrap:false,
                        // Automatically generates the built-in export buttons for each of the specified formats
                        exportButtons:true,
                        // Position of the caption element relative to table
                        position:"bottom",
                        // (Number, Number[]), Row indices to exclude from the exported file(s)
                        ignoreRows:null,
                        // (Number, Number[]), column indices to exclude from the exported file(s)
                        ignoreCols:null,
                        // Removes all leading/trailing newlines, spaces, and tabs from cell text in the exported file(s)
                        trimWhitespace:false,
                        // (Boolean), set direction of the worksheet to right-to-left (default: false)
                        RTL:false,
                        // (id, String), sheet name for the exported spreadsheet, (default: 'id')
                        sheetname:"template"

                    });
                });

            });


        });


    });

});




