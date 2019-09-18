<template>
    <div class="card-panel">
        <Editor v-bind:id="id" />
    </div>
</template>

<script>
import Editor from "@/components/";
export default {
    components: {
        Editor
    },

    data() {
        return {
            id: "something"
        }
    }
}
</script>

<style>

</style>