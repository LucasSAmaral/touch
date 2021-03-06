$(document).ready(function () {

    $('.product__image').zoom({
        url: '/src/assets/image-pdp-desktop1-big.jpg'
    });

    var whishlist = localStorage.getItem("whishlist");

    if (whishlist == "true") {
        $('.product__shopping-whishlist').addClass('on-whishlist');
    }

    $.getJSON("src/js/products-sizes.json", function (data) {
        $.each(data, function (key, value) {

            var total = value.length - 1;

            for (i = 0; i <= total; i++) {
                $('#productSize').append('<option value="' + value[i].val + '">' + value[i].size + '</option>');
            }

        });
    });

    $('.product__shopping-whishlist').click(function () {

        var storage = window.localStorage.length;

        if (storage > 0) {
            localStorage.removeItem("whishlist");
            $('.product__shopping-whishlist').removeClass('on-whishlist');
        } else if (storage == 0) {
            localStorage.setItem("whishlist", "true");
            $('.product__shopping-whishlist').addClass('on-whishlist');
        }
    });

    $('.product__thumb').click(function () {

        var index = ($(this).index()) + 1;

        $('.product__thumb').removeClass('current-picture');

        $('.product__image').trigger('zoom.destroy');

        $(this).addClass('current-picture');

        $('.product__image').zoom({
            url: '/src/assets/image-pdp-desktop' + index + '-big.jpg'
        });

        $('.product__image img').attr('src', 'src/assets/image-pdp-desktop' + index + '.jpg');

    });

    $('.menu-mobile').click(function () {
        $('.container__nav-menu').slideToggle();
    });

    $('#postalCode').mask('99999-999');

    $('.product__shipping-calculate').click(function () {
        if ($('#postalCode').val() != "") {


            $('.loading-area').fadeIn();

            setTimeout(function () {
                $('.loading-area').fadeOut();
            }, 2000);

            setTimeout(function () {
                $('.loading-area').fadeOut();
                $('.product__shipping-prices').fadeIn();
            }, 3000);
            $('#postalCode').css("border", "2px solid #dedede");
        } else {
            $('#postalCode').focus();
            $('#postalCode').css("border", "2px solid red");
        }
    });

});