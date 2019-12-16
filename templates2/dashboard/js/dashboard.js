var store = {
    data: {}
}

var filterbutton = {
    // This filters the products according
    // to the parameter present in the
    // the select
    template: "\
    <select name='filter' id='filter'>\
        <option v-for='selectoption in selectoptions' :value='selectoption'>{{ selectoption }}</option>\
    </select>\
    ",
    data() {
        return {
            selectoptions: ["-----", "Prix croissant", "Prix décroissant"]
        }
    }
}

var deleteproductbutton = {
    // This commponent allows the user to
    // delete an item from the database
    // after having selected them

    props: ['selectedvalues'],
    template: "<a @click='deleteProduct()' class='btn-large' id='delete_product'>{{ title }}</a>",
    data() {
        return {
            title: "Delete"
        }
    },
    methods: {
        deleteProduct: function() {
            // A method that iterates through the
            // the iDs of the products and creates
            // an AJAX request to delete them
            console.log(this.$props.selectedvalues)
        }
    }
}

var vuetable = {
    // This component creates a table
    // for the dashboard and with the
    // the provided data

    props: ["products"],
    template: "\
    <table :class='isStriped()'>\
        <thead>\
            <tr>\
                <th v-for='title in titles' :key='title'>{{ title|capitalize }}</th>\
            </tr>\
        </thead>\
        <tbody>\
            <tr v-for='(product, i) in products' :key='product.id'>\
                <td>\
                    <p>\
                        <label>\
                            <input @click='createprocess' type='checkbox' v-model='checkbox_data[i]' :name='product.name|slugify' :id='product.name|slugify'>\
                            <span></span>\
                        </label>\
                    </p>\
                </td>\
                <td>{{ product.name }}</td>\
                <td>{{ product.surname }}</td>\
                <td>{{ product.price|euros }}</td>\
            </tr>\
        </tbody>\
    </table>\
    ",
    data() {
        return {
            striped: false,
            titles: ["id", "name", "surname", "price"],
            checkbox_data: {"data": []}
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
    },
    methods: {
        isStriped: function() {
            // Toggle the stripes on
            // the table
            if (this.$data.striped) {
                return "striped"
            }
        },
        createprocess: function() {
            // When we click on the checkbox,
            // create an emmit in order to process
            // an action behind: delete etc.
            this.$emit('createprocess', this.$data.checkbox_data)
        }
    }
}

var app = new Vue({
    el: "#vuetable",
    components: { vuetable, deleteproductbutton, filterbutton },
    data() {
        return {
            products: [
                {"id": 1, "name": "Kendall", "surname": "Jenner", "price": 145},
                {"id": 2, "name": "Hailey", "surname": "Baldwin", "price": 345},
                {"id": 3, "name": "Taylor", "surname": "Swift", "price": 175}
            ],
            selectedvalues: []
        }
    },
    methods: {
        selectedValues: function(values) {
            // Receives the selected values
            // in order to do something with them
            this.$data.selectedvalues = values
        }
    }
})