<template>
    <div>
        <p v-for="input in inputs" :key="input.name">
            <label>
                <input @click="showActive()" type="checkbox" :name="input.name" :id="input.id">
                <span>{{ input.title }}</span>
            </label>
        </p>
    </div>
</template>

<script>
export default {
    props: ['inputs'],
    methods: {
        showActive: function() {
            this.$emit('showActive')
        }
    }
}
</script>