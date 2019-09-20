<template>
    <div class='rating-stars'>
        <ul id='stars'>
            <li v-for="star in stars" :key="star" class='star' :title='star' :data-value='star'>
                <i class='fa fa-star fa-fw'></i>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            stars: [1, 2, 3, 4, 5]
        }
    },

    methods: {
        pressStar: function() {
            this.$emit('pressStart', {})
        }
    }
}
</script>
