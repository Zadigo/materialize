<template>
<div class="content-social">
    <a 
        :for="social in socials"
        :key="social.id"
        :href="social.href"
    >
        <i :class="getFab(social.name)"></i>
    </a>
</div>
</template>

<script>
export default {
    data() {
        return {
            socials: [
                { id: 1, href: 'http://facebook.com', name: 'facebook' },
                { id: 2, href: 'http://twitter.com', name: 'facebook' },
                { id: 3, href: 'http://snapchat.com', name: 'facebook' }
            ]
        }
    },

    methods: {
        getFab: function(name) {
            return 'fab fa-' + name
        }
    }
}
</script>

