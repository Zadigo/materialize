<template>
    <ul class="sidenav" id="mobile-demo">
        <li v-for="link in links" :key="link.id">
            <a :href="getRouterLink(link.name)">{{ link.name }}</a>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['links'],
    methods: {
        getRouterLink: function(name) {
            // We use this technique in order to
            // dynamically match the routes from
            // list of links that were provided
            var lowercaseName = name.toLowerCase()
            return this.$router.matcher.match(lowercaseName).path
        }
    }
}
</script>