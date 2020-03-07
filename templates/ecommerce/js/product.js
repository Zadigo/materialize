// Vue.mixin({
//     methods: {
//         calculatetotal: function(products) {
//             var total = 0
//             product.forEach(product => {
//                 total += product.price
//             })
//             return total
//         }
//     }
// })

var selectdetails = {
    template: "\
    <div id='selectfields'>\
        <select @change='sendselection' v-if='is_clothe' v-model='selection[\"size\"]' name='clothes_size' class='browser-default' id='clothes_size'>\
            <option v-for='(clothe, index) in clothes' :key='clothe' :value='clothe' :selected='firstoption(index)'>{{ clothe }}</option>\
        </select>\
        <select @change='sendselection' v-if='is_shoe' v-model='selection[\"size\"]' name='shoe_size' id='shoe_size'>\
            <option v-for='(shoe, index) in shoes' :key='shoe' :value='shoe'>{{ shoe }}</option>\
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
            this.$emit("sendselection", this.$data.selection)
        },
        firstoption: function(index) {
            if (index === 0) {
                return true
            } else {
                return false
            }
        }
    }
}

var cartdrawer = {
    props: ["activatedrawer"],
    template: "\
    <div>\
        <transition name='drawer_component'>\
            <div v-if='activatedrawer' class='cart-drawer'>\
                <div class='drawer'>\
                    <div class='drawer-title'>\
                        Votre panier\
                    </div>\
                        <transition-group name='drawer_product'>\
                            <div v-if='!product.deleted' v-for='product in products' :key='product.id' class='product'>\
                                <div class='details'>\
                                    <div class='product-image'>\
                                        <img src='../images/image4.jpg' alt='image1'>\
                                    </div>\
                                    <div class='product-title'>\
                                        <div class='title'>{{ product.title }}</div>\
                                        <div class='reference'>{{ product.reference }}</div>\
                                    </div>\
                                    <div class='product-price'>{{ product.price|euro }}</div>\
                                    <p @click='deleteproduct(product)' class='remove-link'>Remove</p>\
                                </div>\
                            </div>\
                        </transition-group>\
                    <div class='sub-total'>\
                        <span class='title'>Sous-total</span>\
                        <div class='sum'>{{ carttotal|euro }}</div>\
                    </div>\
                    <a href='cart.html' class='btn-large btn-checkout black z-depth-0'>Panier</a>\
                </div>\
            </div>\
        </transition>\
    </div>\
    ",
    data() {
        return {
            showmodal: false,
            products: [
                {id: 1, title: "Kendall Jenner", reference: "ARER3", price: 134}
            ]
        }
    },
    beforeMount() {
        this.$data.products.forEach(product => {
            product["deleted"] = false
        })
        // $.ajax({
        //     type: "GET",
        //     url: "/api/v1/get-cart",
        //     dataType: "json",
        //     success: function (response) {
                
        //     }
        // });
    },
    computed: {
        carttotal() {
            // Calculates the total price
            // of the products in the cart
            var total = 0
            this.$data.products.forEach(product => {
                total += (product.price * 1)
            })
            return total
        }
    },
    methods: {
        deleteproduct: function(product) {
            product.deleted = true

            // $.ajax({
            //     type: "POST",
            //     url: "/api/v1/delete-product",
            //     data: "data",
            //     dataType: "dataType",
            //     success: function (response) {
                    
            //     }
            // });
        },
        updateproducts: function() {
            this.$data.products.push(
                {id: 2, title: "Kendall Jenner", reference: "ZERT2", price: 100}
            )
            // $.ajax({
            //     type: "GET",
            //     url: "/api/v1/get-cart",
            //     dataType: "json",
            //     success: function (response) {
                    
            //     }
            // });
        }
    },
    filters: {
        euro: function(price) {
            return price + "€"
        }
    }
}

var cartbutton = {
    props: ["product", "itemselection"],
    template: "\
    <button v-else @click='addtocart' class='btn-large waves-effect waves-light red darken-1 z-depth-0' id='btn_add_to_cart'>\
        <i class='material-icons left'>shopping_cart</i>\
        Ajouter au panier\
    </button>\
    ",
    methods: {
        addtocart: function() {
            var self = this
            // product = {
            //     "currencyCode": "EUR",
            //     "add": {
            //         "products": [{
            //             "id": self.$props.product.id,
            //             "name": self.$props.product.name,
            //             "price": self.$props.product.price,
            //             "brand": "Nawoka",
            //             "category": self.$props.product.category,
            //             // "variant": "red",
            //             // "dimension1": "M",
            //             // "position": 0,
            //             "quantity": 1
            //         }]
            //     }
            // }
            // if (this.$props.itemselection) {
            //     product["add"]["products"][0]["variant"] = this.$props.itemselection.color
            //     product["add"]["products"][0]["dimension1"] = this.$props.itemselection.size
            // }
            // dataLayer.push({
            //     "event": "addToCart",
            //     "ecommerce": product
            // })

            this.$emit("addtocart")

            // $.ajax({
            //     type: "POST",
            //     url: "url",
            //     data: "data",
            //     dataType: "dataType",
            //     success: function (response) {
                    
            //     }
            // });
        }
    }
}

var mobileimagescomponent = {
    props: ["images"],
    template: "\
        <div>\
            <div @click='selectleft' class='left-select'></div>\
            <div v-text='smallcounter' class='image-counter'></div>\
            <img :src='imagetoshow'>\
            <div @click='selectright' class='right-select'></div>\
        </div>\
    ",
    data() {
        return {
            currentindex: 0
        }
    },
    computed: {
        imagetoshow() {
            return this.$props.images[this.$data.currentindex].url
        },
        smallcounter() {
            return (this.$data.currentindex + 1) + "/" + this.$props.images.length
        }
    },
    methods: {
        selectleft: function() {
            var value = this.$data.currentindex - 1
            if (value < 0) {
                this.$data.currentindex = this.$props.images.length - 1
            } else {
                this.$data.currentindex = value
            }
        },
        selectright: function() {
            var value = this.$data.currentindex + 1
            if (value >= this.$props.images.length) {
                this.$data.currentindex = 0
            } else {
                this.$data.currentindex = value
            }
        }
    }
}

var sideimagescomponent = {
    props: ["images"],
    template: "\
        <div>\
            <img @click='selectimage(image)' v-for='image in images' :key='image.url' :src='image.url' :alt='image.name'>\
        </div>\
    ",
    computed: {
        ismobile() {
            var mobile = true
            // var mobile = $(".mobile").val()
            if (mobile === true) {
                this.$props.images.forEach((index, image) => {
                    if (index !== 0) {
                        image["mask"] = true
                    }
                })
            }
            return this.$props.images
        }
    },
    methods: {
        selectimage: function(image) {
            this.$emit("selectimage", image.id)
        }
    }
}

var mainimagecomponent = {
    props: ["image"],
    template: "\
        <div class='image'>\
            <img :src='image[0].url' :alt='image.name'>\
        </div>\
    "
}

var product = new Vue({
    el: "#app",
    components: {mainimagecomponent, sideimagescomponent, cartbutton, cartdrawer, selectdetails, mobileimagescomponent},
    data() {
        return {
            product: {},
            activatedrawer: false,
            itemselection: {},
            images: [
                {id: 1, main_image: true, selected: false, url: "./assets/image1.jpg"},
                {id: 2, main_image: false, selected: false, url: "./assets/image2.jpg"},
                {id: 3, main_image: false, selected: false, url: "./assets/image3.jpg"}
            ]
        }
    },
    computed: {
        mainimage() {
            if (this.selectedimage) {
                return this.selectedimage
            }
            return this.$data.images.filter(image => {
                return image.main_image === true
            })
        },
        selectedimage() {
            return this.$data.images.filter(image => {
                return image.selected === true
            })
        },
    },
    beforeMount() {
        // Select the main image immediately
        // before the creation
        this.$data.images.forEach(image => {
            if (image.main_image === true) {
                image.selected = true
            }
        })
    },
    methods: {
        setselection: function(selection) {
            // Sets the details of a product such
            // its size, color etc...
            this.$data.itemselection = selection
        },
        showdrawer: function() {
            var self = this
            self.$data.activatedrawer = true
            
            // Trigger the update function in
            // the drawer component
            self.$refs.drawer.updateproducts()

            var hidedrawer = function() {
                self.$data.activatedrawer = false
            }
            setTimeout(hidedrawer, 4000)
        },
        showselected: function(imageid) {
            this.$data.images.forEach(image => {
                image.selected = false
                if (image.id === imageid) {
                    image.selected = true
                }
            })
        }
    },
})
