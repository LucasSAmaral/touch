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