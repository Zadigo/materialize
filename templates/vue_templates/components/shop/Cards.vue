<template>
<div class="col s12 m9 l9">
    <transition-group name="card">
        <div v-for="product in products" :key="product.id" class="col s12 m4 l4">
            <div class="card">
                <div class="card-content">
                    
                </div>
                <div class="card-action">
                    <router-link 
                        :to="{'name': 'product', 'params': {'id': product.id, 'slug': product.slug}}">
                            Detail
                    </router-link>
                </div>
            </div>
        </div>
    </transition-group>
</div>
</template>

<script>
export default {
    props: ['products'],
}
</script>

<style lang="scss" scoped>
.card-enter-active {
    transition: opacity .6s ease-in-out;
}

.card-enter {
    opacity: 0;
}

.card-enter-to {
    opacity: 1
}
</style>

