var filterbar = {
    template: "\
        <div class='wrapper'>\
            <select @change='filterprice' v-model='selectedpricefilter' id='filterprice'>\
                <option value='initial'>------</option>\
                <option value='exclusive'>Exclusive</option>\
                <option value='croissant'>Croissant</option>\
                <option value='decroissant'>Décroissant</option>\
            </select>\
        </div>\
    ",
    data() {
        return {
            selectedpricefilter: "initial"
        }
    },
    methods: {
        filterprice: function() {
            this.$emit("filterprice", "priceorder", this.$data.selectedpricefilter)
        }
    }
}

var cards = {
    props: ["products"],
    template:"\
        <div class='grid' id='products'>\
                <div v-for='product in products' :key='product.id' class='product'>\
                    <a href='product.html'>\
                        <div class='image'>\
                            <img src='../images/image3.jpg' alt='image3'>\
                            <div v-show='product.exclusive' class='banner'>Exclusive</div>\
                        </div>\
                        <div class='details'>\
                            <div class='title'>{{ product.name }}</div>\
                            <div class='price-details'>\
                                <div class='price'>{{ product.price }}€</div>\
                            </div>\
                        </div>\
                    </a>\
                </div>\
        </div>\
    "
}

var app = new Vue({
    el: "#app",
    components: {cards, filterbar},
    data() {
        return {
            products: [
                {id: 1, name: "Jupe de soie", exclusive: true, price: 151},
                {id: 2, name: "Jupe de coton", exclusive: false, price: 106},
                {id: 3, name: "Jupe en cardigan", exclusive: false, price: 450},
                {id: 4, name: "Jupe de polen", exclusive: true, price: 753},
                {id: 5, name: "Jupe de végétal", exclusive: false, price: 150},
            ],
            productfilters: {priceorder: "initial"}
        }
    },
    mounted() {
        // GET products
    },
    computed: {
        listproducts() {
            return this.oderprices
        },
        oderprices() {
            var self = this
            if (self.$data.productfilters.priceorder === "initial") {
                return self.$data.products
            }
            
            if (self.$data.productfilters.priceorder === "croissant") {
                return self.$data.products.sort((a, b) => {
                    return a.price - b.price
                })
            }

            if (self.$data.productfilters.priceorder === "decroissant") {
                return self.$data.products.sort((a, b) => {
                    return b.price - a.price
                })
            }

            if (self.$data.productfilters.priceorder === "exclusive") {
                return self.$data.products.filter(product => {
                    return product.exclusive === true
                })
            }
        }
    },
    methods: {
        applyfilter: function(value, selectedfilter) {
            if (value === "priceorder") {
                this.$data.productfilters.priceorder = selectedfilter
            }
        } 
    }
})