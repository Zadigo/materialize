var products = {
    props: ["products"],

    template: "\
        <div class='card'>\
            <div class='card-content'>\
                <transition-group name='fade'>\
                    <div v-if='product.in_cart' v-for='(product, index) in products' :key='product.id' class='cart_product'>\
                        <span>{{ product.name }}</span>\
                        <button @click='deleteProduct(index)'><i class='material-icons'>delete</i></button>\
                    </div>\
                </transition-group>\
                <div class='details'>\
                    <p class='delivery'>Livraison: 3.99€</p>\
                    <p class='total'>Total : {{ total_to_pay|euro }}</p>\
                </div>\
            </div>\
            <div class='card-action'>\
                <div class='fas fa-info-circle'></div>\
                En savoir plus sur nos frais de livraison.\
            </div>\
        </div>\
    ",

    data() {
        return {
            total_to_pay: 0
        }
    },

    created() {
        var self = this
        var products = this.$props.products
        products.forEach(function(product) {
            // Calculate the total on create
            self.$data.total_to_pay += product.price
            // Set each product with a status of "in_cart"
            // true for VueJS
            product['in_cart'] = true
        })
    },

    filters: {
        euro: function(price) {
            // Formats a price such as
            // 2 becomes 2€
            return price.toString() + "€"
        }
    },

    methods: {
        deleteProduct: function(id) {
            var self = this
            var products = self.$props.products
            // Set the in_cart status to "false"
            products[id].in_cart = !products[id].in_cart
            
            // Reset total to pay
            self.$data.total_to_pay = 0
            // Recalculate the total of the cart
            products.forEach(function(product) {
                if (product.in_cart === true) {
                    self.$data.total_to_pay += product.price
                }
            })
        }
    }
}

var app = new Vue({
    el: "#app",

    components: {
        products
    },

    data() {
        return {
            products: [
                // Send an AJAX to get the products in the cart.
                // We just need the product name, reference and
                // price for VueJS
                {"id": 1, "name": "Jupe Vuitton", "price": 157},
                {"id": 2, "name": "Jupe Chanel", "price": 212}
            ]
        }
    }
})
