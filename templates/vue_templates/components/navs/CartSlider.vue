<template>
    <transition name="slider">
        <div class="slider">
            <div v-for="product in products" :key="product" class="slider-card">
                {{ product }}
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    // props: ['products']

    data() {
        return {
            products: [
                'a', 'c', 'e'
            ],
        }
    }
}
</script>


<style lang="scss" scoped>
    .slider-enter-active {
        transition: all 1s ease-in-out;
    }

    .slider-enter {
        opacity: 0;
        transform: translateY(-200px);
    }

    .slider-enter-to {
        opacity: 1;
        transform: translateY(113px);
    }

    .slider {
        position: absolute;
        height: auto;
        width: 290px;
        top: 113px;
        right: 72px;
        background-color: navy;
        padding: 2rem;
        z-index: 1;

        .slider-card {
            padding: 1.24rem;
            border-bottom: 1px grey solid;
            background-color: white;
            color: black;
        }
    }
</style>

