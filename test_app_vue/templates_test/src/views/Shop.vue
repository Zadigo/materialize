<template>
    <section class="section" id="products">
        <div class="container">
            <div class="row">
                <Side />
                <Card :items="items" />
            </div>
        </div>
    </section>
</template>

<script>
import Card from '@/components/shop/Card.vue'
import Side from '@/components/shop/Side.vue'

export default {
    components: {
        Card,
        Side
    },

    data() {
        return {
            items: [
                {
                    id: 1,
                    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample17.jpg'
                },
                {
                    id: 2,
                    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample17.jpg'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
</style>

