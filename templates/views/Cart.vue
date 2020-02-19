<template>
    <section class="section" id="cart">
        <div class="row">
            <div class="col s8 m8 l8">
                <!-- Products -->
                <Cards v-bind:products="products" />
            </div>

            <div class="col s4 m4 l4">
                <div class="card-panel">
                    <h4>Sous-total</h4>

                    <button @click="goToPayment()" type="submit" class="btn-large" id="payment">Paiement</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Cards from '@/components/shop/cart/Cards.vue'

export default {
    components: {
        Cards
    },

    data() {
        return {
            products: [
                {
                    'name': 'Robe trasselle',
                    'image': 'https://images.asos-media.com/products/asos-design-plus-lot-de-bracelets-en-cuir-et-tisses-monochrome/11445199-1-black',
                    'price': 1345
                },
                {
                    'name': 'Robe trasselle',
                    'image': 'https://images.asos-media.com/products/asos-design-plus-lot-de-bracelets-en-cuir-et-tisses-monochrome/11445199-1-black',
                    'price': 135
                }

            ]
        }
    },

    methods: {
        goToPayment: function() {
            
        }
    }
}
</script>

<style>

</style>
