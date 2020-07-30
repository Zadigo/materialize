<template>
    <div id="dashboard">
        <!-- Header -->
        <HeaderItem/>

        <!-- Sidebar -->
        <SideBarItem v-bind:side_bar_active="side_bar_active"/>

        <!-- Main -->
        <div class="dashboard-container">
            <p @click="side_bar_active = !side_bar_active">Press</p>
            
            <TableItem @changeActive="toggleActive" v-bind:items="offres"/>
        </div>
    </div>
</template>

<script>
import Header from '@/components/dashboard/Header.vue'
import SideBar from '@/components/dashboard/SideBar.vue'
import Table from '@/components/dashboard/Table.vue'

export default {
    components: {
        'HeaderItem': Header,
        'SideBarItem': SideBar,
        'TableItem': Table
    },

    data() {
        return {
            side_bar_active: false,
            offres: [
                {id:1,name:'Google',href:'http://',active:true},
                {id:2,name:'Google',href:'http://',active:false}
            ]
        }
    },

    methods: {
        toggleActive: function(id) {
            var offres = this.$data.offres
            offres.forEach(function(offre) {
                if (offre.id == id) {
                    offre.active = !offre.active
                }
            })
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

