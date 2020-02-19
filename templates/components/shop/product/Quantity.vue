<template>
    <select class="product_quantity" name="product_quantity">
        <option v-for="number in numbers" :key="number">{{ number }}</option>
    </select>
</template>

<script>
export default {
    data() {
        return {
            numbers: [1, 2, 3, 4, 5]
        }
    }
}
</script>

