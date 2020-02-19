<template>
    <div class="cart">
        <div class="card-panel">
            <h4>Mon panier</h4>
        </div>

        <div v-for="product in products" :key="product.id" class="card-panel">
            <div id="sections">
                <span>a</span>
                <span>a</span>
                <span>a</span>
            </div>
        </div>

        <div class="total">
            {{ totalPrice }}
        </div>
    </div>
</template>

<script>
export default {
    props: ['products'],

    computed: {
        totalPrice() {
            var t = 0
            this.$props.products.forEach(function(product) {
                t = t + product.price
                return t
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.cart {
    .card-panel {
        margin: 0;

        #sections {
            display: grid;
            grid-auto-columns: 1fr 1fr 1fr;
        }
    }
}
</style>

