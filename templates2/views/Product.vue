<template>
    <section class="section">
        <div class="container">
            <div class="row">
                <!-- Side images -->
                <SideImages @selectedImage="showSelected" v-bind:images="images" />

                <!-- Main product image -->
                <div class="col s12 l6">
                    <div class="card z-depth-0">
                        <div class="card-image">
                            <img :src="mainImage" :alt="product.slug" id="main_image">
                        </div>
                    </div>
                </div>

                <!-- Side section -->
                <RightSection v-bind:product="product"/>
            </div>

            <!-- Additional information -->
            <AdditionalInfo v-bind:product="product"/>

            <!-- Related products -->
            <RelatedProducts/>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import SideImages from '@/components/shop/SideImages.vue';
import RightSection from '@/components/shop/RightSection.vue';
import AdditionalInfo from '@/components/shop/AdditionalInfo.vue';
import RelatedProducts from '@/components/shop/RelatedProducts.vue';


export default {
    components: {
        SideImages,
        RightSection,
        AdditionalInfo,
        RelatedProducts
    },

    data() {
        return {
            product: {},
            images: [],
            mainImage: ''
        }
    },

    created() {
        // var current_path = window.location.pathname
        // var re = /^\/shop\/(\d+)\/([a-z\-]+)$/g
        // var result = re.exec(current_path)
        // // var apiUrl = "http://127.0.0.1:8000/api/v1/shop/product/" + result[1] + "/" + result[2]
        // var apiUrl = "http://127.0.0.1:8000/api/v1/shop/product/" + result[1]

        // axios.get(apiUrl)
        //     .then(response => {
        //         this.$data.product = response.data
        //     })
        //     .then(error => {
        //         console.log(error.data)
        //     })

        // TEST
        var current_path = window.location.pathname
        var re = /^\/shop\/(\d+)\/([a-z\-]+)$/g
        var result = re.exec(current_path)
        var apiUrl = 'https://raw.githubusercontent.com/Zadigo/open-data-party/master/products.json'
        
        axios.get(apiUrl)
            .then(response => {
                this.$data.product = response.data.products.find(product => {
                    return product.id = result[1]
                })

                // Get images
                this.$data.images = this.$data.product.images

                var mainImage = ''
                // Get the main image
                this.$data.images.forEach(function(image) {
                    if (image.main_image === true) {
                        mainImage = image.image_url.toString()
                    }
                })

                // Set it globally
                this.$data.mainImage = mainImage
            })
    },

    methods: {
        // Show the selected image
        // in the main window
        showSelected: function(url) {
            this.$data.mainImage = url
        }
    }
}
</script>
