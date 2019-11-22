var store = {
    data: {
        totalToPay: null,
        priceAfterCoupon: null
    }
}

var coupon = {
    template: "\
        <div id='coupon'>\
            <transition name='coupon'>\
                <p v-if='validCoupon' class='coupon_applied'>{{ coupon }}<i class='material-icons right'>check</i></p>\
            </transition>\
            <input v-model='coupon' type='text' name='coupon' id='coupon'>\
            <button @click='applyCoupon()' class='btn-large grey darken-4 waves-effect waves-light'>Appliquer</button>\
        </div>\
    ",
    
    data() {
        return {
            coupon: "",
            validCoupon: false,
            totalToPay: null
        }
    },

    mounted() {
        // Get the total to pay from the store
        this.$data.totalToPay = store.data.totalToPay
    },

    methods: {
        applyCoupon: function() {
            var discountedPct = 15
            // Coupon is valid?
            var discountedPrice = this.$data.totalToPay * (1 - (discountedPct / 100))
            // console.log(discountedPrice)
            store.data.priceAfterCoupon = discountedPrice
            this.$data.validCoupon = !this.$data.validCoupon
        }
    }
}

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
            // finalPrice: store.data.priceAfterCoupon || store.data.totalToPay
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
        // Set total in the store
        store.data.totalToPay = self.$data.total_to_pay
    },

    filters: {
        euro: function(price) {
            // Formats a price such as
            // 2 becomes 2€
            return price + "€"
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

    // computed: {
    //     displayPrice: function() {
    //         return this.$data.finalPrice
    //     }
    // }
}

var app = new Vue({
    el: "#app",

    components: {
        products,
        coupon
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
