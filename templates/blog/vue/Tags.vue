<template>
<div>
    <p class="content-tags">
        <div 
            v-for="tag in tags" 
            v-bind:key="tag" class="chip"
        >
            {{ tag.title }}
        </div>
    </p>
</div>
</template>

<script>
export default {
    props: ['tags']
}
</script>

