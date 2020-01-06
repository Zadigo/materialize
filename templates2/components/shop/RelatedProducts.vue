<template>
    <section class="section" id="related-products">
        <div class="row">
                <div 
                    v-for="product in related_products" 
                    v-bind:key="product.id" 
                    class="col s12 l4"
                >
                    {{ product.name }}
                </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['related_products']
}
</script>

