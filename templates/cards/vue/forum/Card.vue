<template>
    <transition-group name="cards">
        <div class="section" id="messages">
            <div v-for="item in items" :key="item.id" class="card forum-card">
                <div class="card-content">
                    <div class="user-details">
                        <img :src="user.avatar" class="avatar" :id="user.state" :alt="user.username">
                        <p>{{ user.username }}</p>
                        <!-- User details -->
                        <UserDetails :v-bind:user="item.user" />
                    </div>

                    <!-- Content -->
                    <p>{{ item.content }}</p>
                </div>

                <!-- Actions -->
                <CardAction @createResponse="doResponse()" @createQuote="doQuote()" />
            </div>
        <transition/>
    </div>
</template>

<script>
import CardAction from "@components/forum/CardAction.vue"
import UserDetails from "@components/forum/UserDetails.vue";

export default {
    components: {
        CardAction,
        UserDetails
    },

    methods: {
        doResponse: {
            // Do something
        },
        
        doQuote: {
            // Do something
        }
    }
}
</script>

<style lang="scss" scoped>
    @mixin border_mixin($color) {
        border: 3px solid $color;
    }

    .cards {
        &-enter-active {
            transition: all .3s ease-in-out;
        }

        &-fade-enter, &-fade-leave-to {
            opacity: 0;
        }
    }

    .card.forum-card {
        box-shadow: none;
        border-radius: 0px;
        border: 1px solid grey;
        margin-bottom: 0rem;
        
        &:not(:first-child) {
            margin-top: 0rem;
            border-top: 0px;
        }

        .card-content {
            display: grid;
            // grid-template-columns: 1fr 4fr;
            
            @media only screen and (min-width: 300px) {
                // grid-template-columns: 1fr;
                grid-template-rows: 1fr;
            }

            @media only screen and (min-width: 601px) {
                grid-template-columns: 1fr 4fr;
            }

            .user-details {
                text-align: center;

                #username {
                    font: {
                        weight: 600;
                    };
                }

                .avatar {
                    // position: absolute;
                    overflow: hidden;
                    border-radius: 50%;

                    @media only screen and (min-width: 300px) {
                        height: 100px;
                        width: 100px;
                    }
            
                    @media only screen and (min-width: 601px) {
                        height: 140px;
                        width: 140px;
                    }

                    &#active {
                        @include border_mixin(#004d40)
                    }

                    &#inactive {
                        @include border_mixin(#c62828)
                    }
                }

                #details {
                    position: absolute;
                    padding: 25px;
                    text-align: left;
                    height: auto;
                    width: 200px;
                    top: 8px;
                    left: 105px;
                    background-color: white;
                    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
                    transition: all 1s ease-in-out;
                }

                p {
                    padding: 0px;
                }
            }

            p {
                padding: 0 2rem 0 2rem;
            }
        }

        .action {
            background-color: inherit;
            border-top: 1px solid rgba(160,160,160,0.2);
            position: relative;
            margin-top: 1rem;
            padding: 16px 24px;
        }
    }
</style>