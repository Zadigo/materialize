var cards = {
    props: ["data"],
    template: "\
        <transition-group>\
            <div v-if='item.active' v-for='item in data' :key='item.id' class='card-panel'>\
                {{ item.price }}\
            </div>\
        </transition-group>\
    "
}

var filterselect = {
    props: ["testdata"],
    template: "\
        <div>\
            <select>\
                <option @click='selectedoption(optionkey)' v-for='(value, optionkey) in options' :key='optionkey' value='optionkey'>{{ optionkey }}</option>\
            </select>\
            <p v-for='(value, key) in checkboxes' :key='key'>\
                <label>\
                    <input @click='selectcheckbox(key)' type='checkbox' name='active' />\
                    <span>{{ key }}</span>\
                </label>\
            </p>\
        </div>\
    ",
    data() {
        return {
            options: {all: true, ascending: false, descending: false},
            checkboxes: {inactive: false, prime: false},

            filteredcards: {}
        }
    },
    methods: {
        selectedoption: function(optionkey) {
            console.log(optionkey)
        },
        selectcheckbox: function(key) {
            this.$data.checkboxes[key] = !this.$data.checkboxes[key]
        }
    },
    computed: {
        applycheckboxes() {
            return this.$props.testdata.filter(item => {
                Object.keys(this.$data.checkboxes).forEach(key => {
                    if (item[key] === this.$data.checkboxes[key]) return item
                })
                // return item["active"] === true
            })
        }
    }
}

new Vue({
    el: "#app",
    components: {filterselect, cards},
    data() {
        return {
            testdata: [
                {id: 1, active: false, price: 135},
                {id: 2, active: true, price: 115},
                {id: 3, active: false, price: 105},
                {id: 4, active: true, price: 145},
                {id: 5, active: true, price: 175},
            ]
        }
    }
})