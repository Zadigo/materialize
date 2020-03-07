var databaseproducts = [
    { 
        id: 1, 
        name: "Jupe de soie",
        exclusive: true,
        discount_price: 46,
        discount_pct: 25,
        price_ht: 151,
        images: [{ "main_image": true, image_url: "./assets/sac_a_dos_marron2.jpg" }] 
    },
    { 
        id: 2,
        name: "Jupe de coton",
        exclusive: false,
        discount_pct: 0,
        price_ht: 0,
        price_ht: 106,
        images: [{ "main_image": true, image_url: "./assets/sac_crossbody_similicuir_black.jpg" }] 
    },
    { 
        id: 3,
        name: "Jupe en cardigan",
        exclusive: false,
        discount_pct: 0,
        price_ht: 0,
        price_ht: 450,
        images: [{ "main_image": true, image_url: "./assets/small_tote_bag_red.jpg" }] 
    },
    { 
        id: 4,
        name: "Jupe de polen",
        exclusive: true,
        discount_pct: 0,
        price_ht: 0,
        price_ht: 753,
        images: [{ "main_image": true, image_url: "./assets/tote_bag_luxe_rouge.jpg" }] 
    },
    { 
        id: 5,
        name: "Jupe de végétal",
        exclusive: false,
        discount_pct: 0,
        price_ht: 0,
        price_ht: 150,
        images: [{ "main_image": true, image_url: "./assets/sac_a_dos_marron2.jpg" }] 
    },
]

var productquantity = {
    props: ["products"],
    template: "<span v-text='quantity'></span>",
    computed: {
        quantity() {
            var n = this.$props.products.length
            return n + " produits trouvées"
        }
    }
}

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
                <div v-for='(product, index) in products' :key='product.pk' class='product'>\
                    <a @click='pushdatalayer(index, product)' :href='builddetailurl(product)' id='btn_product_details'>\
                        <div class='image'>\
                            <img :src='getmainimage(product.images)' :alt='product.slug'>\
                            <div v-if='product.discount_price > 0' class='discount-pct grey darken-2'>{{ product.discount_pct|pricepct }}</div>\
                            <div v-show='product.exclusive' class='banner grey lighten-3'>Exclusive</div>\
                        </div>\
                        <div class='details'>\
                            <div class='title'>{{ product.name }}</div>\
                            <div class='price-details'>\
                                <div class='price'>{{ product.price_ht }}€</div>\
                            </div>\
                        </div>\
                    </a>\
                </div>\
        </div>\
    ",
    methods: {
        builddetailurl: function(product) { return "product.html" },
        pushdatalayer: function(index, product) {},
        getmainimage: function(images) {
            var mainimage = ""
            images.forEach(image => {
                if (image.main_image === true) {
                    mainimage = image.image_url
                }
            })
            return mainimage
        }
    },
    filters: {
        pricepct: function(pct) {
            return "-" + pct + "%"
        }
    }
}

var app = new Vue({
    el: "#app",
    components: {filterbar, cards, productquantity},
    data() {
        return {
            products: databaseproducts,
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
            // Copy the products array in order to keep
            // the original product's state when we sort
            // the products or do something else with them
            var copiedproducts = [...self.$data.products]

            if (self.$data.productfilters.priceorder === "initial") {
                return self.$data.products
            }
            
            if (self.$data.productfilters.priceorder === "croissant") {
                return copiedproducts.sort((a, b) => {
                    return a.price_ht - b.price_ht
                })
            }

            if (self.$data.productfilters.priceorder === "decroissant") {
                return copiedproducts.sort((a, b) => {
                    return b.price_ht - a.price_ht
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