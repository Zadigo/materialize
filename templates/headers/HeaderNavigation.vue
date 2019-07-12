<template>
    <div class="header-navigation-wrapper">
        <ul>
            <!-- TODO -->
            <li 
                @click="setActive()"
                v-for="header_link in header_links" 
                v-bind:key="header_link"
                v-bind:class="header_link.active"
            >
                {{ header_link.title }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['header_links'],

    methods: {
        setActive: function() {
            this.$emit('setActive', id)
        }
    }
}
</script>

