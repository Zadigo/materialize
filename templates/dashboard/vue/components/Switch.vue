<template>
   <div class="switch right">
        <label>
            <input @click="pressSwitch()" type="checkbox">
            <span class="lever"></span>
        </label>
    </div>
</template>

<script>
export default {
    props: ['button'],
    methods: {
        pressSwitch: function() {
            this.$emit('pressSwitch', {})
        }
    }
}
</script>
