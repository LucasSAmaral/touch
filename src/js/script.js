$(document).ready(function(){

    $.getJSON("src/js/products-sizes.json", function(data){
        $.each(data, function(key, value){

            var total = value.length -1;
            
            for(i = 0; i<=total; i++) {
                $('#productSize').append('<option value="'+value[i].val+'">'+value[i].size+'</option>');
            }
            
        });
    });

});