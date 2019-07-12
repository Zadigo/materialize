<template>
<div class="content">
    <div class="content-title">
        <a href="./version1.html">
            <h5>{{ post.title }}</h5>
        </a>
    </div>

    <p class="content-date">{{ post.date }}</p>

    <div class="content-text">
        {{ post.content }}
    </div>
    
    <!-- Social -->
    <Social/>
</div>
</template>

<script>
import Social from "@/components/blog/Social.vue"

export default {
    props: ['post'],

    components: {
        Social
    }
}
</script>

