<template>
    <section class="section" id="products">
        <div class="container">
            <div class="row">
                <!-- Search -->
                <Search @startSearch="getSearch"/>
            </div>

            <div class="row">
                <!-- Side filters -->
                <SideFilters 
                    @activeProducts="toggleActiveProducts" 
                    v-bind:products="products"
                />

                <!-- Cards -->
                <Cards 
                    v-bind:products="aliasProducts"
                />
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import Cards from "@/components/shop/Cards.vue"
import Search from "@/components/shop/Search.vue"
import SideFilters from "@/components/shop/SideFilters.vue"

export default {
    components: {
        Cards,
        Search,
        SideFilters
    },
    
    data() {
        return {
            // Test
            products: [],
            aliasProducts: []
        }
    },

    created() {
        // TEST DATA
        var url = 'https://raw.githubusercontent.com/Zadigo/open-data-party/master/products.json'
        axios.get(url)
            .then(response => {
                this.$data.products = response.data.products
                // Set the alias to the original source
                this.$data.aliasProducts = this.$data.products
            })
        

        // var currentPath = window.location.pathname
        // var basePath = "http://127.0.0.1:8000/api/v1/shop/"
        // var apiUrl = ""

        // Get the correct data based
        // on the path
        // switch (currentPath) {
        //     case "/shop":
        //         apiUrl = basePath + "products"
        //         break;

        //     case "/whats-new":
        //         apiUrl = basePath + "whats-new"
        //         break;

        //     case "/our-favorites":
        //         apiUrl = basePath + "our-favorites"
        //         break;

        //     default:
        //         break;
        // }
        
        // axios.get(apiUrl)
        //     .then(response => {
        //         this.$data.products = response.data
        // })
    },

    methods: {
        toggleActiveProducts: function(data) {
            // Show filtered products. Use an alias
            // in order to not alter the original source
            this.$data.aliasProducts = data
        },

        getSearch: function(terms) {
            var matchedItems = []
            var products = this.$data.aliasProducts
            
            products.forEach(function(product) {
                if (product.name.includes(terms)) {
                    matchedItems.push(product)
                }
                // return product.name.includes(terms)
            })
            this.$data.aliasProducts = matchedItems
        }
    }
}
</script>

<style lang="scss" scoped>
section#products {
    height: 100vh;
}
</style>
