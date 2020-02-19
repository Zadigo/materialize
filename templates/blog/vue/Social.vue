<template>
    <div class="content-social">
        <a 
            :for="socialNetwork in socialNetworks"
            :key="socialNetwork.id"
            :href="socialNetwork.href"
        >
            <i :class="getFab(socialNetwork.name)"></i>
        </a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            socialNetworks: [
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

