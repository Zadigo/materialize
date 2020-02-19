<template>
    <div class="col s4 l2 hide-on-med-and-down">
        <ul class="side_images">
            <li 
                @click="selectedImage(image.image_url)"
                v-for="image in filterImages"
                :key="image.name" id="side_image"
            >
                <img :src="image.image_url" :alt="image.name" class="responsive-img">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['images'],

    computed: {
        filterImages() {
            var images = this.$props.images
            var sideImages = []
            // Only show images that are tagged
            // to be as side images
            images.forEach(function(image) {
                if (image.main_image === false) {
                    sideImages.push(image)
                } 
            })
            return sideImages
        }
    },

    methods: {
        // Select a side image
        selectedImage: function(url) {
            this.$emit('selectedImage', url)
        }
    }
}
</script>

<style lang="scss" scoped>
ul.side_images {
    #side_image {
        transition: all .7s ease-in-out;
        cursor: pointer;

        & img:hover {
            opacity: 0.9;
            border-left: 1px solid black;
        }

        & img.selected {
            border: 2px solid black;
        }
    }
}
</style>
 