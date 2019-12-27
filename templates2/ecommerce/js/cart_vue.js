var store = {
    data: {
        totalToPay: null,
        priceAfterCoupon: null
    }
}

var stripeid = 'pk_test_eo8zzqww6iuVFzWmLQEJ4F7K'
var stripe = Stripe(stripeid)

var payment = { 
    template: "\
        <form @submit.prevent='startpayment' method='POST' id='payment_form'>\
            <div id='card_element'></div>\
            <button class='btn-large red darken-3 waves-effect waves-light' style='margin-top: 25px;'>\
                <i class='material-icons left'>credit_card</i>Payer\
            </button>\
        </form>\
    ",
    data() {
        return {
            paymentform: "",
            card: undefined
        }
    },
    mounted() {
        // This section essentially just
        // creates the card element to be
        // used for the payment

        var self = this
        var elements = stripe.elements()
        var style = {
            base: {
                color: '#32325d',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                color: '#aab7c4'
                }
            }
        }
        // Mount the payment card element
        self.$data.card = elements.create('card', {style: style})

        // Set the payment form as a global so that
        // we can access it from all the application
        self.$data.paymentform = document.getElementById('payment_form')
        self.$data.card.mount('#card_element')
    },

    methods: {
        startpayment: function() {
            var self = this
            var processtoken = function(token) {
                // A function created in order to
                // deal with the token result
                var datatopost = {
                    pricedue:store.data.totalToPay,
                    token: token
                } 
                
                // AJAX
                // var request = new XMLHttpRequest()
                // request.open('POST', 'https://www.example.com/', false)
                // request.send()
                var response = {'orderid': 'zeuzubfzufzif'}
                document.location.href = 'http://127.0.0.1:5500/templates2/ecommerce/cart_success.html' + '?order_id=' + response.orderid 
            }

            stripe.createToken(self.$data.card).then(function(result) {
                if (result.error) {
                    var errorElement = document.getElementById("card-errors")
                    errorElement.textContent = result.error.message
                } else {
                    processtoken(result)
                }
            })
        }
    }
}

var coupon = {
    template: "\
        <div id='coupon'>\
            <transition name='coupon'>\
                <p v-if='validCoupon' class='coupon_applied'>{{ coupon }}<i class='material-icons right'>check</i></p>\
            </transition>\
            <input v-if='!validCoupon' v-model='coupon' type='text' name='coupon' id='coupon'>\
            <button v-if='!validCoupon' @click='startDiscount' class='btn-large grey darken-4 waves-effect waves-light'>Appliquer</button>\
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
        startDiscount: function() {
            var applydiscount = function(price, pct) {
                return price * (1 - (pct / 100))
            }

            // AJAX
            var result = {valid: true, pct: 15}
            if (result) {
                if (result.valid == true) {
                    var discountedprice = applydiscount(store.data.totalToPay, result.pct)
                    store.data.priceAfterCoupon = discountedprice
                    this.$data.validCoupon = !this.$data.validCoupon
                }
            }
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
        coupon,
        payment
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
