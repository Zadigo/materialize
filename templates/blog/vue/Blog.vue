<template>
    <div class="blog">
        <div class="blog-header">
            <div class="blog-container">
                <h2>Title</h2>
                
                <!-- Content -->
                <Content/>
            </div>
        </div>
    </div>
</template>

<script>
import Content from "@/components/blog/Content.vue"

export default {
    components: {
        Content
    },

    data() {
        return {
            posts: [
                {}
            ]
        }
    },

    created() {
        // this.axios.get('')
        //     .then(response => {

        //     })
    }
}
</script>

<style lang="scss" scoped>
$header_color: #26a69a;

div.blog {
    &-header {
        background-color: $header_color;
        padding: 24px;
        width: 100%;
        height: 200px;
    }

    &-container{
        margin: 0 auto;
        max-width: 1280px;
        width: 70%;

        @media only screen and (min-width: 300px) {
            width: 90%;

            > h1 {
                font-size: 2.72rem;
            }
        }

        @media only screen and (min-width: 601px) {
            width: 70%;

            > h1 {
                font-size: 4.2rem;
            }
        }

        .content {
            & {
                background-color: #ffffff;
                padding: 24px;
                margin-bottom: 15px;
                max-height: 100%;
                overflow: hidden;
                border-radius: 0 0 2px 2px;
                -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
                    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
            }

            &-date {
                color: #9e9e9e;
                font-weight: 400;
            }

            &-social {
                margin: {
                    top: 18px;
                }
    
                a {
                    margin-right: 15px;
                    color: inherit;
    
                    .fab:not(:last-child) {
                        font-size: 20px;
                    }
                }
            }

            &-tags {
                margin-top: 1.75rem;
            }
        }
    }
}
</style>

