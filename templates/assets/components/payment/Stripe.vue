<template>
    <div class="card">
        <div class="card-content" id="payment"></div>
    </div>
</template>

<script>
export default {
    mounted() {
        let stripeScript = document.createElement('script')
        stripeScript.setAttribute('src', 'https://js.stripe.com/v3/')
        document.head.appendChild(stripeScript)
    },

    beforeCreate() {
        var stripe = Stripe('pk_test_eo8zzqww6iuVFzWmLQEJ4F7K')
        var elements = stripe.elements()
        var card = elements.create('card')
        card.mount('#payment')

        var promise = stripe.createToken(card)
        promise.then(function(result) {
            // Do something
        })
    }
}
</script>
