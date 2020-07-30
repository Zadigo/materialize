// ITEMS

var items = [
    {id: 1, title: "Cadre supérieur", category: "Stage", price: 45, selected: false},
    {id: 2, title: "Spécialiste communication", category: "Job", price: 25, selected: false},
    {id: 3, title: "Etudiant", category: "Stage", price: 75, selected: false},
    {id: 4, title: "Scientifique", category: "Job", price: 32, selected: false},
    {id: 5, title: "Developpeur", category: "Stage", price: 89, selected: false},
    {id: 6, title: "Analyste", category: "Alternance", price: 14, selected: false},
    {id: 7, title: "Cadre moyen", category: "Stage", price: 41, selected: false},
    {id: 8, title: "Etudiant en science", category: "Stage", price: 17, selected: false},
]

// COMPONENTS

var preloadercomponent = {
    props: ["show"],
    template: "\
    <div v-if='show' class='progress'>\
        <div class='indeterminate'></div>\
    </div>\
    "
}

var cards = {
	props: ["items"],
    template: "\
    <div class='cards'>\
        <slot name='cards' tag='div'>\
            <div v-for='item in items' :key='item.id' class='card'>\
                {{ item.price }}\
            </div>\
        </slot>\
    </div>\
	"
}

var searchcheckboxcomponent = {
    // A checkbox that goes to specified search page by
    // appending parameters to the URL
    props: ["items"],
    template: "\
    <div class='col s12 m12 l12'>\
        <label v-for='category in categories' :key='category'>\
            <input @click='gotopage(category)' type='checkbox' :value='category' />\
            <span>{{ category }}</span>\
        </label>\
    </div>\
    ",
    data() {
        return {
            categories: []
        }
    },
    mounted() {
        // Get the current searched parameter. This will select
        // the correct one in the list so that when the page loads,
        // the correct checkbox is selected
        var parameters = new URLSearchParams(window.location.search)
        var searchvalue = parameters.get("q")
        // Creates a list of custom categories
        // for checkboxes in order to search
        // specific items
        var items = []
        _.forEach(this.$props.items, function(item) {
            items.push(item.category)
        })
        this.$data.categories = _.uniq(items)

        if (items.includes(searchvalue)) {
            // Find the correct category dict and
            // mark it as selected
        }
    },
    methods: {
        gotopage: function(value) {
            var url = new URL(window.location.href)
            var parameters = new URLSearchParams(url.search.slice(1))
            parameters.append("q", value)
            window.location.href = parameters.toString()
        }
    }
}

var rangecomponent = {
    // A component that allows sorting values
    // based on a range x < value < y or
    // x > value > y
    props: ["items"],
    template: "\
    <p class='range-field'>\
        <input v-model='currentvalue' type='range'\
            id='test5' :min='minprice' :max='maxprice' />\
    </p>\
    ",
    data() {
        return {
            currentvalue: 0
        }
    },
    computed: {
        dorange() {
            // Return the items which price is inferior
            // than the value of the range
            var value = parseInt(this.$data.currentvalue)
            return this.$props.items.filter(function(item) {
                return item.price <= value
            })
        },
        maxprice() {
            // Returns the maximum x in items
            var item =  _.maxBy(this.$props.items, function(item) {return item.price})
            return item.price
        },
        minprice() {
            // Returns the minimum x in items
            var item =  _.minBy(this.$props.items, function(item) {return item.price})
            return item.price
        }
    }
}

var checkboxcomponent = {
    // Allows to sort values based on the checkboxes
    // that were checked in the filter bar
    props: ["items"],
    template: "\
    <div class='col s12 m12 l12'>\
        <label v-for='item in items' :key='item.id'>\
            <input v-model='checkedoptions' type='checkbox' :value='item.id' />\
            <span>{{ item.id }}</span>\
        </label>\
    </div>\
    ",
    data() {
        return {
            checkedoptions: []
        }
    },
    computed: {
        checkeditems() {
            // Return the items that
            // were checked
            var self = this
            var items = []
            self.$data.checkedoptions.forEach(function(value) {
                self.$props.items.forEach(function(item) {
                    if (item.id === value) {
                        item.selected = !item.visible
                        items.push(item)
                    }
                })
            })
            return items
        }
    }
}

var sortcomponent = {
    // Allows sorting elements from asc to desc and opposite,
    // or, simply based on parameter in the list
    template: "\
    <select @change='runsort' v-model='selectedsort'>\
        <option v-for='option in selectoptions' :value='option.value'>{{ option.value }}</option>\
    </select>\
    ",
    data() {
		return {
            selectedsort: "All",
            selectoptions: [
                {value: "All"},
                {value: "Ascending"},
                {value: "Descending"}
            ]
		}
    },
    methods: {
        runsort: function() {
            this.$emit("runsort", this.$data.selectedsort)
        }
	}
}

var searchcompnent2 = {
    template: "\
    <div class='search-filter'>\
        <input v-model='search' type='search' name='search' id='search'>\
        <button @click='gotopage'>Search</button>\
    </div>\
    ",
    data() {
        return {
            search: ""
        }
    },
    methods: {
        gotopage: function() {
            var path = "/search/"
            window.location.pathname = path + "?q=" + this.$data.search
            window.sessionStorage.setItem()
            window.localStorage.setItem("searchhistory", this.$data.search)
        }
    }
}

var searchcomponent = {
    // Gets elements based whether a string or not
    // exists in the value of a key
    props: ["items"],
    template: "\
    <div>\
        <input @keyup='runsearch' v-model='search' type='text' \
            name='search' autcomplete='off' placeholder='Search' list='items_autocomplete'>\
        <datalist id='items_autocomplete'>\
            <option v-for='data in datalist' :key='data' :value='data'></option>\
        </datalist>\
    </div>\
    ",
    data() {
        return {
            search: "",
            datalist: []
        }
    },
    mounted() {
        // Returns a datalist that helps the
        // user complete the search field
        var self = this
        _.forEach(self.$props.items, function(item) {
            self.$data.datalist.push(item.title)
        })
    },
    methods: {
		runsearch: function() {
			this.$emit("runsearch", this.$data.search)
		}
	}
}

var app =  new Vue({
    el: "#app",
    components: {cards, searchcomponent, 
                    sortcomponent, checkboxcomponent, 
                        rangecomponent, searchcheckboxcomponent},
    data() {
        return {
            items: items,
            filterslist: {search: "", sort: "All"},
            filtereditems: []
        }
    },
    computed: {
        rangeditems() {},
        checkeditems() {},
        searcheditems() {
            // Returns a list of searched items
            var self = this
            return this.sorteditems.filter(function(item){
                return item.title.includes(self.$data.filterslist["search"])
            })
        },
        sorteditems() {
            // Returns a list of sorted items
            var copiedoffers = [...this.listitems]
            var selected = this.$data.filterslist["sort"]
            
			if (selected === "All") {return copiedoffers}
			if (selected === "Ascending") {
                copiedoffers.sort(function(a, b) {return a.price - b.price})
			}
			if (selected === "Descending") {
                copiedoffers.sort(function(a, b) {return b.price - a.price})
            }
            return copiedoffers
        },
        listitems() {
            // Returns an unsorted list of items
            var items = this.$data.filtereditems
            if (items.length > 0) {
                return items
            } else {
                items = this.$data.items
            }
            return items
        }
    },
    methods: {
        dosearch: function(value) {
            // Show the values that include
            // the specified searchd element
            // setTimeout(() => {
            //     this.$data.filterslist["search"] = value
            // }, 1000);
            var great = function() {console.log("Google")}
            _.debounce(great, 150)
            this.$data.filterslist["search"] = value
        },
        dosort: function(value) {
            // Show the values that based on a
            // specific order (asc, desc...)
            this.$data.filterslist["sort"] = value
        }
    }
})