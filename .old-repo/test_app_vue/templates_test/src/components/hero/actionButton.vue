<template>
    <a :href="buttonItems.href" class="btn-large blue lighten-1" target="_blank">
        {{ buttonItems.title }}
    </a>
    <!-- <router-link :to="buttonItems.href" class="btn-large blue lighten-1" target="_blank">
        {{ buttonItems.title }}
    </router-link> -->
</template>

<script>
export default {
    props: ['buttonItems']
}
</script>