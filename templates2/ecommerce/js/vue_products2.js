var selectcheckboxes = {
    template: "\
        <div class='card-panel' id='another'>\
            <p v-for='(option, optionindex) in options' :key='option.name'>\
                <label>\
                    <input @click='selectoption(optionindex, option.checked)' type='checkbox' :name='option.name' :id='option.name' />\
                    <span>{{ option.name }}</span>\
                </label>\
            </p>\
        </div>\
    ",
    data() {
        return {
            options: [
                {name: "xl", checked: false},
                {name: "xs", checked: false}
            ]
        }
    },
    methods: {
        selectoption: function(optionindex, state) {
            this.$data.options[optionindex]["checked"] = !state
        }
    }
}

var interface = {
    props: ["products"],
    components: {selectcheckboxes},
    template: "\
        <div class='row'>\
            <div class='col s12 m2 l2'>\
                <div id='filters'>\
                    <div class='card-panel'>\
                        <p v-for='(radio, index) in radios' :key='radio.id'>\
                            <label>\
                                <input @click='setradio(index)' type='radio' name='radio' id='radio' :checked='radio.checked'>\
                                <span>{{ radio.name }}</span>\
                            </label>\
                        </p>\
                    </div>\
                    <div class='card-panel' id='other'>\
                        <select>\
                            <option @click='selectedoption(option)' v-for='(option, index) in options' :key='option.value' :value='option.value'>\
                                {{ option.value }}\
                            </option>\
                        </select>\
                    </div>\
                    <selectcheckboxes />\
                </div>\
            </div>\
            <div class='col s12 m10 l10' id='prducts_col'>\
                <transition-group name='slide'>\
                    <a href='#!' v-for='product in listproducts' :key='product.id' class='card-link'>\
                        <div class='col s6 m4 l4'>\
                            <div class='card flat-ecommerce with-action zoom-rotate'>\
                                <div v-show='product.markeddown' class='discount'>{{ product.markeddown_pct|percentage }}</div>\
                                <div class='card-image'>\
                                    <img :src='parseimage(product.images)' :alt='product.name'>\
                                    <div class='actions'>\
                                        <div class='action' id='star'><i class='material-icons'>star_border</i></div>\
                                    </div>\
                                </div>\
                                <div class='card-content'>\
                                    <div class='title'>{{ product.name }}</div>\
                                    <div class='price'>{{ product.price|euros }}</div>\
                                </div>\
                            </div>\
                        </div>\
                    </a>\
                </transition-group>\
            </div>\
        </div>\
    ",
    data() {
        return {
            radios: [
                {id: 1, name: "all", checked: true},
                {id: 2, name: "robe", checked: false},
                {id: 3, name: "jupe", checked: false}
                // {id: 3, name: "markeddown", checked: false}
            ],
            options: [
                {value: "-----", selected: true},
                {value: "promotions", selected: false},
                {value: "croissant", selected: false},
                {value: "decroissant", selected: false},
            ]
        }
    },
    methods: {
        setradio: function(radioinex) {
            var radios = this.$data.radios
            radios.forEach(radio => {
                radio["checked"] = false
            })
            radios[radioinex]["checked"] = true
        },
        selectedoption: function(option) {
            alert(option)
            // this.$data.options.forEach(option => {
            //     option["selected"] = false

            //     if (selected["value"] === selected["value"]) {
            //         this.$data.options[index]["selected"] = true
            //     }
            // })
        },
        parseimage: function(images) {
            return images[0].image_url
        }
    },
    computed: {
        listproducts() {
            let {radio} = this.selectedfilters
            var products = undefined

            if (radio["name"] === "all") { 
                products = this.$props.products
            } else {
                products = this.$props.products.filter(product => {
                    return product["category"] === radio["name"]
                })
            }

            return products
        },
        selectedfilters() {
            return  {
                radio: this.$data.radios.filter(radio => {return radio["checked"] === true})[0]
            }
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
}

var app = new Vue({
    el: "#app",
    components: {interface},
    data() {
        return {
            products: []
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
    }
})