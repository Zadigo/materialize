var stripeid = "pk_test_eo8zzqww6iuVFzWmLQEJ4F7K"
var stripe = Stripe(stripeid)

var csrf = function() {
    return $(".csrf input").val()
}

var payment = {
    props: ["products", "checkdata"],
    template: "\
        <form @submit.prevent='startpayment' method='POST' id='payment_form'>\
            <div id='card_element'></div>\
            <button :disabled='hasnoemptyfields' class='btn-large red darken-3 waves-effect waves-light' style='margin-top: 25px;'>\
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
                color: "#32325d",
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                color: "#aab7c4"
                }
            }
        }
        // Mount the payment card element
        self.$data.card = elements.create("card", {style: style})

        // Set the payment form as a global so that
        // we can access it from all the application
        self.$data.paymentform = document.getElementById("payment_form")
        self.$data.card.mount("#card_element")
    },
    computed: {
        hasnoemptyfields() {
            if (this.$props.checkdata.length[0] === "all") {
                return true
            }
            if (this.$props.checkdata.length > 0) {
                return true
            }  
        }
    },
    methods: {
        startpayment: function() {
            var self = this

            // dataLayer.push({
            //     "event": "transaction",
            //     "ecommerce": {
            //         "purchase": {
            //             "actionField": {
            //                 id: "c849d9b1-b75f-4565-9876-c2247d4fd842",
            //                 affiliation: "Online Store",
            //                 revenue: 10,
            //                 tax: 5,
            //                 shipping: "3.99"
            //             },
            //             products: this.$props.products
            //         }
            //     }
            // })

            var processtoken = function(token) {
                // A function created in order to
                // deal with the token result
                self.$emit("startpayment", token)
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

var products = {
    props: ["products"],
    template: "\
        <div class='card'>\
            <div class='card-content'>\
                <transition-group name='cart_products'>\
                    <div v-if='product.in_cart' v-for='product in products' :key='product.id' class='cart_product'>\
                        <span>{{ product.name }}</span>\
                        <button @click='deleteproduct(product)'>\
                            <i class='material-icons'>delete</i>\
                        </button>\
                    </div>\
                </transition-group>\
                <div class='details'>\
                    <p class='delivery'>Livraison: 3.99€</p>\
                    <p class='total'>Total : {{ carttotal|euro }}</p>\
                </div>\
            </div>\
            <div class='card-action'>\
                <div class='fas fa-info-circle'></div>\
                En savoir plus sur nos frais de livraison.\
            </div>\
        </div>\
    ",
    filters: {
        euro: function(price) {
            // Formats a price such as
            // 2 becomes 2€
            return price + "€"
        }
    },
    methods: {
        deleteproduct: function(product) {
            console.log(product)
            // Set the in_cart status to "false"
            product.in_cart = false

            // dataLayer.push({
            //     "event": "removeFromCart",
            //     "ecommerce": {
            //       "currencyCode": "EUR",
            //       "remove": {
            //         "products": [{
            //             "id": product.id,
            //             "name": product.name,
            //             "price": product.price,
            //             "brand": "Nawoka",
            //             "category": product.category,
            //             //   "variant": "red",
            //             //   "dimension1": "M",
            //             //   "position": 0,
            //             "quantity": 1
            //         }]
            //       }
            //     }
            // });

            // AJAX
            // $.ajax({
            //     type: "POST",
            //     url: "/api/v1/delete-product",
            //     data: {csrfmiddlewaretoken: "", reference: ""},
            //     dataType: "json",
            //     success: function (response) {
                    
            //     }
            // });
        }
    },
    computed: {
        carttotal() {
            // Calculates the total price
            // of the products in the cart
            var total = 0
            this.$props.products.forEach(product => {
                if (product.in_cart === true) {
                    total += (product.price * 1)
                }
            })
            return total
        }
    },
}

var coupon = {
    template: "\
        <div id='coupon'>\
            <transition name='coupon'>\
                <p v-show='validcoupon' class='coupon-applied green ligthen-1'>\
                    {{ coupon }}<i class='material-icons right'>check</i>\
                </p>\
            </transition>\
            <input v-show='!validcoupon' v-model='coupon' type='text' name='coupon' id='coupon' placeholder='Code'>\
            <button v-show='!validcoupon' @click='applydiscount' class='btn-large grey darken-4 waves-effect waves-light'>Appliquer</button>\
        </div>\
    ",
    
    data() {
        return {
            coupon: "",
            validcoupon: false,
        }
    },
    methods: {
        applydiscount: function() {
            // $.ajax({
            //     type: "POST",
            //     url: "/api/v1/validate-coupon",
            //     data: {csrfmiddlewarecoupon: "", coupon: ""},
            //     dataType: "json",
            //     success: function (response) {
            //         if (response.state === true) {
            //             this.$data.validcoupon = !this.$data.validcoupon
            //         }
            //     }
            // });
            this.$data.validcoupon = !this.$data.validcoupon
            var discountpct = 15
            this.$emit("applydiscount", discountpct)
        }
    }
}

var addresscomponent = {
    template: "\
    <form>\
        <div v-for='option in options' :key='option.id' class='input-field'>\
            <input @keyup='senddata' v-model='informations[option.name]' name='option.name' :type='option.type' :id='option.name' :placeholder='option.placeholder' />\
        </div>\
    </form>\
    ",
    data() {
        return {
            informations: {},
            options: [
                {id: 1, type: "text", name: "address", placeholder: "Address", autocomplete: "street-address"},
                {id: 2, type: "text", name: "postal-code", placeholder: "Postal code", autocomplete: "postal-code"},
                {id: 3, type: "text", name: "country", placeholder: "Country", autocomplete: "country"}
            ]
        }
    },
    methods: {
        senddata: function() {
            this.$emit("senddata", "address", this.$data.informations)
        }
    }
}

var infos = {
    template: "\
    <form>\
        <div v-for='option in options' :key='option.id' class='input-field'>\
            <input @keyup='senddata' v-model='informations[option.name]' name='option.name' :type='option.type' :id='option.name' :placeholder='option.placeholder' />\
        </div>\
    </form>\
    ",
    data() {
        return {
            informations: {},
            options: [
                {id: 1, type: "email", name: "email", placeholder: "Email", autocomplete: "email"},
                {id: 2, type: "tel", name: "telephone", placeholder: "Telephone", autocomplete: "tel"}
            ]
        }
    },
    methods: {
        senddata: function() {
            this.$emit("senddata", "infos", this.$data.informations)
        }
    }
}

var interface = {
    props: ["products"],
    components: {infos, addresscomponent, products, coupon, payment},
    template: "\
    <div class='row'>\
        <div v-if='!hascartid' class='card-panel center'>\
            <p>Vous n'avez pas de produits dans votre panier</p>\
            <a href='#!' class='btn-large red darken-1 waves-effect waves-light'>Commencez son shopping</a>\
        </div>\
        <div v-else class='row'>\
            <div class='col s12 m8 l8'>\
                <div class='card-panel'>\
                    <infos @senddata='implementdata' />\
                </div>\
                <div class='card-panel'>\
                    <addresscomponent @senddata='implementdata' />\
                </div>\
                <div class='card-panel'>\
                    <coupon @applydiscount='applypercentage' />\
                </div>\
                <div class='card-panel'>\
                    <payment @startpayment='sendpaymentrequest' v-bind:checkdata='checkdata' v-bind:products='products' />\
                </div>\
            </div>\
            <div class='col s12 m4 l4'>\
                <products v-bind:products='products' />\
            </div>\
        </div>\
    </div>\
    ",
    data() {
        return {
            datatosend: {},
            cartid: "RNERIN"
        }
    },
    computed: {
        checkdata() {
            let {address, infos} = this.$data.datatosend
            if (address && infos) {
                var emptyfields = []
                Object.keys(address).forEach(key => {
                    if (address[key] === "") {
                        emptyfields.push(key)
                    }
                })
                Object.keys(infos).forEach(key => {
                    if (infos[key] === "") {
                        emptyfields.push(key)
                    }
                })
                return emptyfields
            } else {
                return ["all"]
            }
        },
        hascartid() {
            // Checks if the cartid is set for
            // displaying specific cards or not
            return this.$data.cartid !== ""
        }
    },
    beforeMount() {
        // $.ajax({
        //     type: "GET",
        //     url: "/api/v1/user/cart-id",
        //     dataType: "json",
        //     success: function (response) {
        //         this.$data.cartid = response.cartid
        //     }
        // });
    },
    methods: {
        implementdata: function(field, data) {
            this.$set(this.$data.datatosend, field, data)
        },
        applypercentage: function(pct) {
            this.$set(this.$data.datatosend, pct)
        },
        sendpaymentrequest: function(token) {
            var data = {
                csrfmiddlewaretoken: "",
                token: token.token.id,
                data: this.$data.datatosend
            }
            console.log(data)
            
            // $.ajax({
            //     type: "POST",
            //     url: "/api/v1/process-payment",
            //     data: data,
            //     dataType: "json",
            //     success: function (response) {
                    
            //     },
            //     error: function(response) {

            //     }
            // });
        }
    }
}

var app = new Vue({
    el: "#app",
    components: {interface},
    data() {
        return {
            products: [
                // Send an AJAX to get the products in the cart.
                // We just need the product name, reference and
                // price for VueJS
                {id: 1, name: "Item A", price: 157},
                {id: 2, name: "Item B", price: 200}
            ],
        }
    },
    beforeMount() {
        var self = this

        // $.ajax({
        //     type: "GET",
        //     url: "/api/v1/get-cart",
        //     dataType: "dataType",
        //     success: function (response) {
                
        //     }
        // })

        self.$data.products.forEach(product => {
            product["in_cart"] = true
        })
    }
})
