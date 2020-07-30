<template>
    <div class="content-social">
        <a v-for="link in links" :key="link.id" :href="link.href">
            <i :class="createFab(link.icon)"></i>
        </a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {
                    id: 1,
                    href: 'http://facebook.com',
                    icon: 'facebook'
                },
                {
                    id: 2,
                    href: 'http://twitter.com',
                    icon: 'twitter'
                },
                {
                    id: 3,
                    href: 'http://snapchat.com',
                    icon: 'snapchat'
                }
            ]
        }
    },
    methods: {
        createFab: function(social) {
            return 'fab fa-' + social
        }
    }
}
</script>
