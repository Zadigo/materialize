// $(document).ready(function () {
//     $("#trigger-for-sidebar").on("click", function() {
//         // $(".dashboard .wrapper").toggle(".show-side-bar")
//         $(".dashboard .wrapper").toggle("hide")
//     })    
// });


var productdetailsurl = window.location.origin + "/dashboard/products/"

var constructurl = function(id, slug) {
    return  productdetailsurl + id + "/" + slug
}

var formbutton = {
    props: ["formbuttonname"],
    template: "\
    <button type='submit' class='btn-large indigo lighten-1 waves-effect waves-light'>\
        <i class='material-icons left'>create</i>{{ formbuttonname }}\
    </button>\
    "
}

var updateform = {
    components: {formbutton},
    template: "\
    <form @submit.prevent='updateitem'>\
        <div class='row'>\
            <div v-for='field in fields' :key='field.name' :class='\"input-field col s12 \" + field.size'>\
                <input :type='field.type' :name='field.name' :id='field.name' :placeholder='field.placeholder'>\
            </div>\
        </div>\
        <formbutton v-bind:formbuttonname='formbuttonname' />\
    </form>\
    ",
    data() {
        return {
            fields: [
                {type: "text", name: "name", placeholder: "Name", size: "m12 l12"},
                {type: "text", name: "category", placeholder: "Category", size: "m4 l4"},
            ],
            productid: undefined,
            formbuttonname: "Update"
        }
    },
    beforeMount() {
        var self = this
        var url = new URLSearchParams(window.location.search)
        var product = url.get("product")
        if (product) {
            // $.ajax({
            //     type: "GET",
            //     url: "http://example.com",
            //     success: function (response) {
            //         self.$data.product = product
            //     }
            // })
        }
    },
    methods: {
        updateitem: function() {
            window.location.href = "/materialize_for_startups/templates2/dashboard/products2.html"
        }
    }
}

var createform = {
    components: {formbutton},
    template: "\
    <form @submit.prevent='createitem'>\
        <div class='row'>\
            <div v-for='field in fields' :key='field.name' :class='\"input-field col s12 \" + field.size'>\
                <input :type='field.type' :name='field.name' :id='field.name' :placeholder='field.placeholder'>\
            </div>\
        </div>\
        <formbutton v-bind:formbuttonname='formbuttonname' />\
    </form>\
    ",
    data() {
        return {
            fields: [
                {type: "text", name: "name", placeholder: "Name", size: "m12 l12"},
                {type: "text", name: "category", placeholder: "Category", size: "m4 l4"},
                {type: "number", name: "price", placeholder: "Price", size: "m4 l4"}
            ],
            formbuttonname: "Create",
            // testfields: {
            //     "1": [
            //         {type: "text", name: "name", placeholder: "Name", size: "m12 l12"},
            //         {type: "text", name: "category", placeholder: "Category", size: "m4 l4"},
            //         {type: "number", name: "price", placeholder: "Price", size: "m4 l4"}
            //     ],
            //     "2": [
            //         {type: "text", name: "skill", placeholder: "Skill", size: "m12 l12"}
            //     ]
            // },
            // w: []
        }
    },
    // beforeMount() {
    //     var self = this
    //     var params = new URLSearchParams(window.location.search)
    //     var currentstep = params.get("step")

    //     if (currentstep === "" | ! currentstep) {
    //         // Assume that we are at the first
    //         // step directly
    //     }
    //     if (currentstep === "1") {
    //         self.$data.w = self.$data.testfields["1"]
    //     }
    //     if (currentstep === "2") {
    //         self.$data.w = self.$data.testfields["2"]
    //     }
    // },
    methods: {
        createitem: function() {
            window.location.href = "/materialize_for_startups/templates2/dashboard/products2.html"
        },
        // changestep: function() {
        //     var params = new URL(window.location.href)
        //     params.searchParams.set("step", 2)
        // }
    }
}

var messages = {
    template: "\
        <transition name='show_message'>\
            <div v-if='show'>Supprimer un cours est une action irréversible.</div>\
        </transition>\
    ",
    data() {
        return {
            show: false
        }
    }
}

var deletebutton = {
    // This commponent allows the user to
    // delete an item from the database
    // after having selected them

    props: ["selectedproducts"],
    template: "\
        <a @click='deleteitems' class='btn-large waves-effect waves-light' id='delete_product' :disabled='showdeletebutton'>\
            <i class='material-icons left'>delete</i>\
            {{ title }}\
        </a>\
    ",
    data() {
        return {
            title: "Delete"
        }
    },
    computed: {
        showdeletebutton() {
            // Defines if the delete button should be enabled
            // or not --; true if products are selected,
            // otherwise false
            if (this.$props.selectedproducts.length > 0) {
                return false
            } else {
                return true
            }
        }
    },
    methods: {
        deleteitems: function() {
            this.$emit('deleteitems')
        }
    }
}

var filterproducts = {
    template: "\
    <select id='filter_products'>\
        <option @click='doselect(option.value)' v-for='option in options' :key='option.value' :value='option.value'>{{ option.name }}</option>\
    </select>\
    ",
    data() {
        return {
            options: [
                {value: "all", name: "-----", selected: true},
                {value: "croissant", name: "Croissant", selected: false},
                {value: "decroissant", name: "Décroissant", selected: false},
            ]
        }
    },
    methods: {
        doselect: function(value) {
            this.$data.options.forEach(option => {
                option.selected = false
                if (option.value === value) {
                    option.selected = true
                }
            })
        }
    },
    computed: {
        selectedfilter() {
            return this.$data.options.filter(option => {
                return option.selected === true
            })
        }
    }
}

var vuetable = {
    props: ["products"],
    template: "\
        <table class='highlight responsive-table'>\
            <thead>\
                <tr>\
                    <th>\
                        <label>\
                            <input @click='selectall' type='checkbox' name='select_all' id='selct_all' />\
                            <span></span>\
                        </label>\
                    </th>\
                    <th v-for='title in titles' :key='title'>{{ title|capitalize }}</th>\
                </tr>\
            </thead>\
            <tbody v-if='nondeletedproducts==0'>Vous n'avez aucun produits</tbody>\
            <tbody v-else>\
                <tr v-if='!product.deleted' v-for='(product, index) in products' :key='product.id'>\
                    <td>\
                        <p>\
                            <label>\
                                <input @click='selectitem(index)' type='checkbox' :name='product.name|slugify' :id='product.name|slugify' :checked='product.checked'>\
                                <span></span>\
                            </label>\
                        </p>\
                    </td>\
                    <td><a :href='\"./details.html?product=\" + product.id'>{{ product.id }}</a></td>\
                    <td>{{ product.name }}</td>\
                    <td>{{ product.surname }}</td>\
                    <td>{{ product.price|euros }}</td>\
                    <td>\
                        <a :href='\"./update.html?product=\" + product.id'><i class='material-icons'>create</i></a>\
                        <a @click='deletesingleitem(product.id)'><i class='material-icons'>delete</i></a>\
                    </td>\
                </tr>\
            </tbody>\
        </table>\
    ",
    data() {
        return {
            titles: ["iD", "name", "surname", "price", "update"],
        }
    },
    methods: {
        selectitem: function(index) {
            this.$emit('selectitem', index)
        },
        selectall: function(index) {
            this.$emit('selectall')
        },
        deletesingleitem: function(productid) {
            this.$emit('deletesingleitem', productid)
        }
    },
    computed: {
        nondeletedproducts() {
            // Keeps track of the products that are
            // not marked as deleted in order to
            // to perform certain actions
            var self = this
            var numberofproducts = self.$props.products.length

            self.$props.products.forEach(product => {
                if (product.deleted === true) {
                    numberofproducts -= 1
                }
            })
            return numberofproducts
        }
    },
    filters: {
        capitalize: function(value) {
            // Capitalize the first
            // letter of the title
            return value.toUpperCase()
        },
        slugify: function(value) {
            // Transforms words such as
            // 'eugenie bouchard' becomes
            // 'eugenie_bouchard'
            value.toLowerCase().replace(" ", "_")
        },
        euros: function(value) {
            return value + "€"
        }
    }
}

var dashboard = new Vue({
    el: "#vue_dashboard",
    components: {vuetable, deletebutton, filterproducts, createform, 
                    updateform, messages},
    data() {
        return {
            products: [
                {id: 1, name: "Kendall", surname: "Jenner", price: 145, selected: false, checked: false, deleted: false},
                {id: 2, name: "Hailey", surname: "Baldwin", price: 345, selected: false, checked: false, deleted: false},
                {id: 3, name: "Taylor", surname: "Swift", price: 175, selected: false, checked: false, deleted: false}
            ],
            showsidebar: true
        }
    },
    computed: {
        selectedproducts() {
            // Returns a list of selected products that
            // were also marked as not deleted
            return this.$data.products.filter(product => {
                return product.selected === true && product.deleted === false
            })
        }
    },
    methods: {
        doselect: function(index) {
            // Selects a product in the table using
            // a selectio checkbox
            this.$data.products[index].selected = !this.$data.products[index].selected
        },
        getall: function() {
            // Selects all the products in the
            // table by using the selection
            // checkboxes
            this.$data.products.forEach(product => {
                product.checked = !product.checked
                product.selected = !product.selected
            })
        },
        applydelete: function() {
            // Deletes items using the selection
            // checkboxes in the table
            this.selectedproducts.forEach(product => {
                this.$data.products.forEach((actualproduct, index) => {
                    if (product.id === actualproduct.id) {
                        product.deleted = !product.deleted
                    }
                })
            })
            
            $.ajax({
                type: "DELETE",
                url: "http://example.com",
                data: self.$props.selectedproducts,
                dataType: "json",
                success: function (response) {
                    console.log(response)
                }
            });
        },
        applydeletesingle: function(productid) {
            // ALlows the deletionf of a single
            // item from the table without going
            // through the selection
            this.$data.products.forEach(product => {
                if (product.id === productid) {
                    product.deleted = !product.deleted
                }
            })

            $.ajax({
                type: "DELETE",
                url: "http://example.com",
                data: {csrfmiddlewaretoken: "", reference: ""},
                dataType: "json",
                success: function (response) {
                    console.log(response)
                }
            });
        },
        togglesidebar: function() {
            this.$data.showsidebar = !this.$data.showsidebar
        }
    },
})