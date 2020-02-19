<template>
    <section id="payment">
        <div class="container">
            <div class="row">
                <div class="col s8 l8 m8">
                    <Livraison/>
                    <CodePromo/>
                    <OptionsLivraison/>
                    <Stripe/>
                </div>
                <div class="col s4 l4 m4">
                    <div class="card">
                        Test
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Livraison from "@/components/payment/Livraison.vue"
    import CodePromo from "@/components/payment/CodePromo.vue"
    import OptionsLivraison from "@/components/payment/OptionsLivraison.vue"
    import Stripe from "@/components/payment/Stripe.vue"

    export default {
        components: {
            Livraison,
            CodePromo,
            OptionsLivraison,
            Stripe
        },

        data() {
            return {
                radioButtons: []
            }
        }
    }
</script>