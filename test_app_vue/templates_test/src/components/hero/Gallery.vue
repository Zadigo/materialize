<template>
    <section class="benefits image-tiles">
        <div v-for="image in images" :key="image.id" class="image-tile">
            <a :href="image.link">
                <img class="responsive-img" :src="image.href" alt="hero">
                <div class="tile-title">
                    {{ image.title }}
                </div>
            </a>
        </div>
    </section>        
</template>

<script>
export default {

}
</script>

<style>

</style>