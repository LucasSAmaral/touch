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

    $('.menu-mobile').click(function(){
        $('.container__nav-menu').slideToggle();
    });

});

var otherProducts = new Vue({
    el: "#otherProducts",
    data: {
        products: [{
            img: "bitmap-copy-5.jpg",
            title: "Saia Global Girl Bodycon",
            oldPrice: "",
            price: "R$ 30,00",
            installmentPayment: "3x de R$ 5,00 s/juros",
            discount: false
        },
        {
            img: "bitmap-copy-3.jpg",
            title: "Vestido Must-Have Sweatshirt",
            oldPrice: "",
            price: "R$ 15,00",
            installmentPayment: "3x de R$ 5,00 s/juros",
            discount: false
        },
        {
            img: "bitmap-copy-4.jpg",
            title: "Mini Saia Day Dreamer Abstract",
            oldPrice: "",
            price: "R$ 15,00",
            installmentPayment: "3x de R$ 5,00 s/juros",
            discount: false
        },
        {
            img: "bitmap-copy-5.jpg",
            title: "Vestido Opulent A-Line",
            oldPrice: "R$ 45,80",
            price: "R$ 30,00",
            installmentPayment: "3x de R$ 5,00 s/juros",
            discount: true
        }]
    }
})