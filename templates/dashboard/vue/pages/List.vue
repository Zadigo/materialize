<template>
    <div class="card-panel">
        <Table v-bind:header="header" v-bind:data="data" />
    </div>
</template>

<script>
import Table from "@/components/"

export default {
    components: {
        Table
    },

    data() {
        return {
            headers: [],
            data: []
        }
    }
}
</script>
