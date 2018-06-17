$(document).ready(function(){

    var whishlist = localStorage.getItem("whishlist");

    if(whishlist == "true") {
        $('.product__shopping-whishlist').addClass('on-whishlist');
    }

    $.getJSON("src/js/products-sizes.json", function(data){
        $.each(data, function(key, value){

            var total = value.length -1;
            
            for(i = 0; i<=total; i++) {
                $('#productSize').append('<option value="'+value[i].val+'">'+value[i].size+'</option>');
            }
            
        });
    });

    $('.product__shopping-whishlist').click(function(){

        var storage = window.localStorage.length;

        if (storage > 0) {
            localStorage.removeItem("whishlist");
            $('.product__shopping-whishlist').removeClass('on-whishlist');
        } else if (storage == 0){
            localStorage.setItem("whishlist","true");
            $('.product__shopping-whishlist').addClass('on-whishlist');
        }
    });

    $('.product__thumb').click(function(){

        var index = ($(this).index()) + 1;

        $('.product__thumb').removeClass('current-picture');

        $(this).addClass('current-picture');

        $('.product__image img').attr('src','src/assets/image-pdp-desktop'+index+'.jpg');

    });

});