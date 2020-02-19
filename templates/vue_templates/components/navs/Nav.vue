<template>
<div>
    <!-- NAV -->
    <div class="navbar-fixed">
        <nav class="red darken-1">
            <div class="nav-wrapper">
                <div class="container">
                    <router-link to="/" class="brand-logo">Bwaloca</router-link>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger">
                        <i class="material-icons">menu</i>
                    </a>
                    <!-- LINKS -->
                    <NavLinks v-bind:links="links" v-bind:navId="navId" v-bind:navClass="navClass"/>
                </div>
            </div>
        </nav>
    </div>

    <!-- SIDENAV -->
    <SideNav v-bind:links="links"/>

    <!-- Cart -->
    <button @click="showSlider = !showSlider">press</button>
    <CartSlider v-if="showSlider" />
</div>
</template>

<script>
import NavLinks from "@/components/navs/NavLinks.vue"
import SideNav from "@/components/navs/SideNav.vue"
import CartSlider from "@/components/navs/CartSlider.vue"

export default {
    props: ['links'],
    
    components: {
        SideNav,
        NavLinks,
        CartSlider
    },

    data() {
        return {
            navId: 'nav-mobile',
            navClass: 'hide-on-med-and-down right',
            showSlider: false
        }
    }
}
</script>

