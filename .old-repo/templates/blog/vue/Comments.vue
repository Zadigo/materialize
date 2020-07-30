<template>
    <div class="blog-post-responses">
        <p class="responses">Responses</p>
        <div 
            v-for="comment in comments" 
            v-bind:key="comment.id"
            class="card-panel"
        >
            {{ comment.content }}
        </div>
    </div>
</template>

<script>
export default {
    props: ['comments']
}
</script>

