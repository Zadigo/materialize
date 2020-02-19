var sidefilter = {
    props: ["products"],

    template: "\
        <div id=\"filters\">\
            <div class=\"card-panel\">\
                <p v-for=\"radio in radios\" :key=\"radio.id\">\
                    <label>\
                        <input @click=\"startFilter(radio.name)\" type=\"radio\" name=\"radio\" id=\"radio\" :checked=\"radio.checked\">\
                        <span>{{ radio.name|capitalize }}</span>\
                    </label>\
                </p>\
            </div>\
            <div class=\"card-panel\" id=\"other\">\
                <select @change=\"otherFilter()\" name=\"price\" id=\"price\">\
                    <option v-for=\"option in options\" :key=\"option\" value=\"option\">{{ option|capitalize }}</option>\
                </select>\
            </div>\
        </div>\
    ",
    
    data() {
        return {
            radios: [
                {"id": 1, "name": "all", "checked": true},
                {"id": 2, "name": "robe", "checked": false},
                {"id": 3, "name": "jupe", "checked": false}
            ],
            options: ["-----", "promotions", "croissant", "decroissant"]
        }
    },

    filters: {
        capitalize: function(value) {
            if (!value) return ''
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    },

    methods: {
        startFilter: function(filterName) {
            var products = this.$props.products
            var p = []

            if (filterName == "all") {
                p = products
            } else {
                p = products.filter(function(product) {if (product.category.includes(filterName)) {return product}})
            }
            this.$emit('startfilter', p)
        },
        otherFilter: function() {
            var w = []
            var products = this.$props.products
            var value = $("#other").find("ul li.selected span").text().toLowerCase()

            if (value == 'promotions') {
                w = products.filter(function(product) {return product.markeddown == true})
            } else if (value == 'croissant') {
                w = products.sort(function(a, b) {return a.price - b.price})
            } else if (value == 'decroissant') {
                w = products.sort(function(a, b) {return b.price - a.price})
            } else {
                w = products
            } 

            this.$emit('otherfilters', w)
        }
    }
}

var app = new Vue({
    el: "#app",

    components: {
        sidefilter
    },

    data() {
        return {
            products: [],
            images: [],
            fProducts: []
        }
    },

    created() {
        var self = this
        $.ajax({
            type: "GET",
            url: "https://raw.githubusercontent.com/Zadigo/open-data-party/master/various/products2.json",
            success: function (response) {
                self.$data.products = JSON.parse(response)['products']
            }
        });
    },

    computed: {
        allProducts: function() {
            if (this.$data.fProducts.length > 0) {
                return this.$data.fProducts
            } else {
                return this.$data.products
            }
        }
    },

    methods: {
        parseImage: function(images) {
            return images[0].image_url
        },
        applyFilter: function(i) {
            this.$data.fProducts = i
        },
        applyOtherFilter: function(e) {
            this.$data.fProducts = e
        }
    },

    filters: {
        percentage: function(value) {
            return value.toString() + "%"
        },
        euros: function(value) {
            return value.toString() + "€"
        }
    }
})
