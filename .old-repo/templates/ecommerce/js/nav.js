var trigger2 = {
    template: "\
    <a @click='triggerdropdown' href='#!'>\
        <!-- <i class='material-icons'>Account</i> -->\
        Account\
    </a>\
    ",
    methods: {
        triggerdropdown: function() {
            this.$emit("triggerdropdown", "account")
        }
    }
}

var trigger1 = {
    template: "\
    <a @click='triggerdropdown' href='#!'>\
        <!-- <i class='material-icons'>search</i> -->\
        Search\
    </a>\
    ",
    methods: {
        triggerdropdown: function() {
            this.$emit("triggerdropdown", "search")
        }
    }
}

var searchbar = {
    props: ["searchstate"],
    template: "\
    <transition name='drop'>\
        <div v-if='searchstate' class='search-bar'>\
            <div class='wrapper'>\
                <input @keypress.enter='dosearch' v-bind='searchvalue' class='browser-default' type='search' name='search' id='search' placeholder='Rechercher'>\
            </div>\
        </div>\
    </transition>\
    ",
    data() {
        return {
            searchvalue: ""
        }
    },
    methods: {
        dosearch: function() {
            window.location.href = "/home"
        }
    }
}

var dropdownbar = {
    props: ["dropdownstate"],
    template: "\
    <transition name='drop'>\
        <div v-if='dropdownstate' class='dropdown'>\
            <div class='section'>\
                <ul>\
                    <li>Chaussures</li>\
                    <li>Robes</li>\
                    <li>Vêtements</li>\
                </ul>\
            </div>\
            <div class='section'>W</div>\
            <div class='section'>C</div>\
        </div>\
    </transition>\
    "
}

var navbar = new Vue({
    el: "#vue_nav",
    components: {dropdownbar, searchbar, trigger1, trigger2},
    data() {
        return {
            searchstate: false,
            dropdownstate: false
        }
    },
    methods: {
        initiatedropdown: function(name) {
            
            if (name === "search") {
                this.$data.dropdownstate = false
                this.$data.searchstate = !this.$data.searchstate
            }

            if (name === "account") {
                this.$data.searchstate = false
                this.$data.dropdownstate = !this.$data.dropdownstate
            }
        }
    }
})