<template>
    <div id="dashboard">
        <!-- Header -->
        <HeaderItem/>

        <!-- Sidebar -->
        <SideBarItem v-bind:side_bar_active="side_bar_active"/>

        <!-- Main -->
        <div class="dashboard-container">
            <p @click="side_bar_active = !side_bar_active">Press</p>
            <router-link :to="{name: 'dashboard_one'}">PRESS</router-link>
            <h1>Test</h1>
        </div>
    </div>
</template>

<script>
import Header from '@/components/dashboard/Header.vue'
import SideBar from '@/components/dashboard/SideBar.vue'

export default {
    components: {
        'HeaderItem': Header,
        'SideBarItem': SideBar
    },

    data() {
        return {
            side_bar_active: false
        }
    },

    watch: {
        sideBarActive() {
            // this.$data.side_bar_active
            $('.dashboard-container').css('width', '100%')
        }
    }
}
</script>

<style lang="scss" scoped>
$side_bar_size: 250px;

.dashboard-container {
    margin: 0 auto;
    // width: calc(100% - 250px);
    max-width: 1280px;
}
</style>

