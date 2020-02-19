<template>
<section class="section" id="product_information">
    <div class="row">
        <div class="col s12 l8 offset-l2">
            <ul class="list-inline">
                <li class="selected" data-for=".product-description">Description</li>
                <li data-for=".product-composition">Composition</li>
                <li data-for=".product-care">Entretien</li>
            </ul>
        </div>
    </div>
    <div class="row">
        <div class="col s12 l8 offset-l2" id="product_texts">
            <div class="product-description">
                {{ product.description }}
            </div>
            <div class="product-composition hide">
                100% VISCOSE
            </div>
            <div class="product-care hide">
                that
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    props: ['product']
}
</script>

