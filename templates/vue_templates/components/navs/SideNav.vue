<template>
    <ul class="sidenav" id="mobile-demo">
        <li v-for="link in links" :key="link.id">
            <a :href="link.href">{{ link.name }}</a>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['links']
}
</script>
