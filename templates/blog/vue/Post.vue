<template>
    <div class="content">
        <!-- Title -->
        <div class="content-title">
            <h5>{{ post.title }}</h5>
        </div>

        <!-- Author -->
        <p class="content-author">
            {{ post.author.name }}

            <div class="author-details">
                <p>{{ post.author.details }}</p>
            </div>
        </p>

        <!-- Date -->
        <p class="content-date">{{ post.date }}</p>

        <!-- Content -->
        <div class="content-text">
            {{ post.content }}
        </div>

        <!-- Tags -->
        <Tags v-bind:tags="tags"/>

        <!-- Responses -->
        <Comments v-bind:comments="comments"/>
    </div>
</template>

<script>
import Tags from "@/components/blog/ContenTags.vue"
import Comments from "@/components/blog/Comments.vue";

export default {
    props: ['post'],

    components: {
        Tags,
        Comments
    },

    data() {
        return {
            tags: [],
            responses: []
        }
    },

    created() {
        this.$data.tags = this.$props.post.tags
        this.$data.responses = this.$props.post.responses
    }
}
</script>

