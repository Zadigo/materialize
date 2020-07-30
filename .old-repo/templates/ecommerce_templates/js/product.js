var sideimages = {
    template: "\
    <div>\
        <div class='images'>\
            <img @click='returnmainimage(image.url)' v-for='image in images' :key='image.url' :src='image.url' :alt='image.url'>\
        </div>\
    </div>\
    ",
    data() {
        return {
            images: [
                {url: "../../assets/images/image3.jpg", selected: true},
                {url: "../../assets/images/image4.jpg", selected: false}
            ]
        }
    },
    methods: {
        returnmainimage: function(url) {
            this.$emit("returnmainimage", url)
        }
    }
}

var previewimage = {
    props: ["mainimage"],
    template: "\
    <div class='main-image'>\
        <div class='image'>\
            <transition name='appear'>\
                <img :src='mainimage' :alt='mainimage'>\
            </transition>\
        </div>\
    </div>\
    "
}

var app = new Vue({
    el: "#app",
    components: {sideimages, previewimage},
    data() {
        return {
            mainimage: "../../assets/images/image3.jpg"
        }
    },
    methods: {
        setmainimage: function(url) {
            this.$data.mainimage = url
        }
    }
})

// CART BUTTON & PRODUCT DETAILS SELECTION

var cartbutton = {
    props: ["currentselection"],
    template: "\
    <button @click='addtocart' class='btn-large waves-effect waves-light red darken-1 z-depth-0' id='btn_add_to_cart' data-for='modal2'>\
        <i class='material-icons left'>shopping_cart</i>\
        Ajouter au panier\
    </button>\
    ",
    methods: {
        addtocart: function() {
            var data = {
                size: this.$props.currentselection.size,
                color: undefined
            }
            // this.datalayer()
            this.showdrawer = !this.showdrawer

            $.ajax({
                type: "POST",
                url: "https://example.com",
                data: data,
                dataType: "json",
                success: function (response) {
                    
                },
                error: function(response) {

                } 
            });
        },
        datalayer: function() {
            // var product = JSON.parse($(".product_details").html())
            dataLayer.push({
                "event": "addToCart",
                "ecommerce": {
                    "currencyCode": "EUR",
                    "add": {
                        "products": [{
                            "id": "f6be8",
                            "name": "Bracelet en diamant pure",
                            "price": "33.00",
                            "brand": "Comverges",
                            "category": "Bracelets",
                            "variant": "red",
                            "dimension1": "M",
                            "position": 0,
                            "quantity": 1
                        }]
                    }
                }
            });
        }
    }
}

var selectdetails = {
    template: "\
    <div id='selectfields'>\
        <select @change='sendselection' v-if='is_clothe' v-model='selection[\"size\"]' name='clothes_size' id='clothes_size' style='max-width: 100px;'>\
            <option v-for='clothe in clothes' :key='clothe' :value='clothe'>{{ clothe }}</option>\
        </select>\
        <select @change='sendselection' v-if='is_shoe' v-model='selection[\"size\"]' name='shoe_size' id='shoe_size'>\
            <option v-for='shoe in shoes' :key='shoe' :value='shoe'>{{ shoe }}</option>\
        </select>\
    </div>\
    ",
    data() {
        return {
            is_clothe: true,
            is_shoe: false,

            selection: {size: ""},

            clothes: ["XS", "S", "M", "L"],
            shoes: []
        }
    },
    created() {
        for (let index = 34; index < 41; index++) {
            this.$data.shoes.push(index)
        }
    },
    methods: {
        sendselection: function() {
            this.$emit('sendselection', this.$data.selection)
        }
    }
}

new Vue({
    el: "#product_actions",
    components: {cartbutton, selectdetails},
    data() {
        return {
            currentselection: {size: ""}
        }
    },
    methods: {
        setselection: function(selection) {
            this.$data.currentselection = selection
        }
    }
})

// CART DRAWER

var cartdrawer = new Vue({
    el: "#cart_drawer",
    template: "\
    <div v-if='false' class='cart-drawer'>\
        <div class='drawer'>\
            <div class='drawer-title'>Votre panier</div>\
            <div class='product'>\
                <div v-for='detail in details' :key='detail.reference' class='details'>\
                    <div class='product-image'>\
                        <img :src='detail.imageurl' alt='image1'>\
                    </div>\
                    <div class='product-title'>\
                        <div class='title'>{{ detail.title }}</div>\
                        <div class='reference'>{{ detail.reference }}</div>\
                    </div>\
                    <div class='product-price'>{{ detail.price }}</div>\
                    <p class='remove-link'>Remove</p>\
                </div>\
            </div>\
            <div class='sub-total'>\
                <span class='title'>Sous-total</span>\
                <div class='sum'>{{ calculatetotal }}</div>\
            </div>\
            <a href='cart.html' class='btn-large btn-checkout black z-depth-0'>Panier</a>\
        </div>\
    </div>\
    ",
    data() {
        return {
            details: [
                {imageurl: "../images/image4.jpg", reference: "3EZFZ4EZFZEf", title: "Care taker", price: 165},
                {imageurl: "../images/image4.jpg", reference: "3EZFZ4AZFZEf", title: "Care taker", price: 165},
            ]
        }
    },
    computed: {
        calculatetotal() {
            var total = 0
            total = total + this.$data.details.forEach(detail => {
                return parseInt(detail.price)
            })
            return total
        },
        dodrawer() {
            if (this.showdrawer) {
                setTimeout(function() {
                    this.showdrawer = false
                }, 2000);
            } else {
                return false
            }
        }
    }
})
