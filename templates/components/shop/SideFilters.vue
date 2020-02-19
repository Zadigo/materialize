<template>
<div class="col s12 m3 l3">
    <div class="card-panel">
        <p>
            <label>
                <input 
                    @click="activeProducts()" 
                    v-model="showActive" 
                    type="radio" name="group1" id="active"
                >
                <span>Active</span>
            </label>
        </p>
        <p>
            <label>
                <input 
                    @click="inActiveProducts()" 
                    v-model="showInactive" 
                    type="radio" name="group1" id="inactive"
                >
                <span>Inactive</span>
            </label>
        </p>
    </div>
</div>
</template>

<script>
export default {
    props: ['products'],

    data() {
        return {
            showActive: false,
            showInactive: false,

            // Array that aggregates all
            // the filtered products
            filteredProducts: []
        }
    },

    methods: {
        activeProducts: function() {
            this.$props.products.filter(product => {
                // The product is active? Then show it
                if (product.active === true) {
                    this.$data.filteredProducts.push(product)
                }
            })
            this.$emit('activeProducts', this.$data.filteredProducts)
        },
        
        inActiveProducts: function() {
            // Reset
            this.$data.filteredProducts=[]
            this.$props.products.filter(product => {
                // The product is inactive? Then show it
                if (product.active === false) {
                    this.$data.filteredProducts.push(product)
                }
            })
            this.$emit('activeProducts', this.$data.filteredProducts)
        }
    }
}
</script>
