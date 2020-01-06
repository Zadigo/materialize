<template>
<div>
    <p v-for="item in items" :key="item.id">
        <label>
            <input type="radio" name="group1" id="item.id">
            <span>{{ item.span }}</span>
        </label>
    </p>
</div>
</template>

<script>
    export default {
        props: ["items"],
    }
</script>
