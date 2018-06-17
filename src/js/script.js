$(document).ready(function(){

    $.getJSON("src/js/products-sizes.json", function(data){
        $.each(data, function(key, value){

            var total = value.length -1;
            
            for(i = 0; i<=total; i++) {
                $('#productSize').append('<option value="'+value[i].val+'">'+value[i].size+'</option>');
            }
            
        });
    });

    $('.product__thumb').click(function(){

        var index = ($(this).index()) + 1;

        $('.product__thumb').removeClass('current-picture');

        $(this).addClass('current-picture');

        $('.product__image img').attr('src','src/assets/image-pdp-desktop'+index+'.jpg');

    });

});