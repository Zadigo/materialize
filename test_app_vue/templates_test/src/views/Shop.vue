<template>
    <section class="section" id="products">
        <div class="container">
            <div class="row">
                <div class="section" id="products">
                    <div class="col s12 m3 l3">
                        <Side />
                    </div>
                    <div v-for="item in items" :key="item.id" class="col s12 m4 l4">
                        <Card :item="item" />
                    </div>
                </div>
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
                    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample17.jpg',
                    title: 'Jupe',
                    text: 'Jupe en cuir doux'
                },
                {
                    id: 2,
                    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample17.jpg',
                    title: 'Manteau',
                    text: 'Manteau en fourrure romantique'
                },
                {
                    id: 3,
                    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample17.jpg',
                    title: 'Bottes',
                    text: 'Bottes en simili cuir'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
</style>

