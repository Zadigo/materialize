var cards = {
    props: ["data"],
    template: "\
        <transition-group>\
            <div v-for='item in data' :key='item.id' class='card-panel'>\
                {{ item.etablissement }}\
            </div>\
        </transition-group>\
    "
}

var filterbar = {
    props: ["testdata"],
    template: "\
        <div class='filters'>\
            <div class='items'>\
                <div class='icon'><i class='material-icons'>filter</i></div>\
                <div @click='setactive(menu, active)' v-for='(active, menu) in menus' :key='menu' class='filter'>{{ menu }}</div>\
            </div>\
            <transition-group name='slide'>\
                <div v-for='(tabvalues, tabkey) in options' :key='tabkey' v-show='menus[tabkey]' class='dropdown'>\
                    <div @click='selectfilter(tabkey, key)' v-for='(option, key) in tabvalues' :key='key' :class='\"chip \" + activecssfilter(tabkey, key)'>{{ key }}</div>\
                </div>\
            </transition-group>\
        </div>\
    ",
    data() {
        return {
            show: true,
            menus: {etablissement: false, academie: false},
            options: {etablissement: {}, academie: {}}
        }
    },
    beforeMount() {
        this.$props.testdata.forEach(item => {
            // Make all options reactive elements
            this.$set(this.$data.options.etablissement, item["etablissement"], false)
            this.$set(this.$data.options.academie, item["academie"], false)
        })
    },
    methods: {
        setactive: function(menu, state) {
            // Sets a menu tab as being active
            // or eventually inactive by inversing
            // its current state
            Object.keys(this.$data.menus).forEach(key => {
                // Set all tabs false --
                // just in case
                this.menus[key] = false
            })
            this.$data.menus[menu] = !state
        },
        selectfilter: function(tabkey, optionkey) {
            // Allows us to activate and
            // deactivate each filter individually
            this.$data.options[tabkey][optionkey] = !this.$data.options[tabkey][optionkey]
        },
        activecssfilter: function(tabkey, optionkey) {
            // Toggles the options filters' color
            if (this.$data.options[tabkey][optionkey]) {
                return "green lighten-1"
            } else {
                return "grey lighten-1"
            }
        }
    },
    computed: {
        listitems() {
            // We can apply each filter using the
            // activefiters computed method
            let {activeetablissement, activeacademie} = this.activefilters
            return this.$props.testdata.filter(({etablissement, academie}) => {
                return etablissement.indexOf(activeetablissement)
            })
        },
        activefilters() {
            // Query only the active filters
            // in order to start applying them
            let {etablissement, academie} = this.$data.options
            return {
                etablissement: Object.keys(etablissement).filter(key => etablissement[key]),
                academie: Object.keys(academie).filter(key => academie[key]),
            }
        }
    }
}

new Vue({
    el: "#app",
    components: {filterbar, cards},
    data() {
        return {
            testdata: [
                {id: 1, etablissement: 'ecole', academie: 'Paris'},
                {id: 2, etablissement: 'universite', academie: 'Créteil'},
                {id: 3, etablissement: 'ecole', academie: 'Paris'},
                {id: 4, etablissement: 'universite', academie: 'Marseille'},
                {id: 5, etablissement: 'ecole', academie: 'Lille'},
            ]
        }
    }
})