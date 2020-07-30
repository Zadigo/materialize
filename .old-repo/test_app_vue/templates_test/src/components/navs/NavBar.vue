<template>
    <div class="navbar-fixed">
        <nav class="blue lighten-1">
            <div class="container">
                <div class="nav-wrapper">
                    <a href="/" class="brand-logo">TravelVille</a>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger">
                        <i class="material-icons">menu</i>
                    </a>
                    
                    <Links :links="links" />
                </div>
            </div>
        </nav>

        <SideNav :links="links" />
    </div>
</template>

<script>
import Links from '@/components/navs/navbar/Links.vue'
import SideNav from '@/components/navs/SideNav.vue'

export default {
    components: {
        Links,
        SideNav
    },
    data() {
        return {
            links: [
                {
                    id: 1,
                    name: 'Shop',
                },
                {
                    id: 2,
                    name: 'About'
                }
            ]
        }
    }
}
</script>
