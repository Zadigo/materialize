<template>
    <div class="content">
        <!-- Title -->
        <div class="content-title">
            <a href="./version1.html">
                <h5>{{ post.title }}</h5>
            </a>
        </div>

        <!-- Date -->
        <p class="content-date">
            {{ post.date }}
        </p>

        <!-- Content -->
        <div class="content-text">
            {{ post.content }}
        </div>
        
        <!-- Social -->
        <Social />
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

