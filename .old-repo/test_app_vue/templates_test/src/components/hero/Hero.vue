<template>
    <div class="hero">
        <div class="hero-wrapper">
            <div class="call-to-action">
                <div class="lead">{{ hero.lead }}</div>
                <div class="lead-subtitle">{{ hero.subtitle }}</div>

                <actionButton :buttonItems="buttonItems" />
            </div>
        </div>
    </div>
</template>

<script>
import actionButton from '@/components/hero/actionButton.vue'

export default {
    props: ['hero'],
    components: {
        actionButton
    },
    data() {
        return {
            buttonItems: {
                "title": "Press this button",
                "href": "https://www.google.com"
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    $blue: #1565c0;
    $padding_top: 12.5%;
    $font_weight: 600;
    $lead_font_weight: 600;

    @mixin hero_grid_calculator($multiple) {
        // Calculates the top padding
        // for the lead titles. Increments
        // from 12.5%
        $base_grid: 100;
        $section: $base_grid / 8;
        padding-top: $section * $multiple;
    }

    %hero {
        background-color: $blue;
        height: 100vh !important;
        text-align: center;
        color: white;
    }

    %hero-wrapper {
        margin: 0 auto;
        max-width: 1280px;
        width: 90%;
    }

    %call-to-action {
        margin: {
            left: auto;
            right: auto;
            bottom: 20px;
        }
        padding-top: $padding_top;
    }

    %lead {
        display: block;
        font: {
            size: 4rem;
            weight: 400;
        }
        margin-bottom: 1.250rem;
    }

    div, section {
        &.hero {
            @extend %hero;

            .hero-wrapper {
                @extend %hero-wrapper;

                .call-to-action {
                    @extend %call-to-action;

                    @media only screen and (min-width: 300px) {
                        text-align: left;
                        padding-top: 25%;
                    }

                    @media only screen and (min-width: 601px) {
                        text-align: center;
                        padding-top: 12.5%;
                    }

                    @each $tag in lead, lead-stronger {
                        div.#{$tag} {
                            @extend %lead;

                            @if $tag == "lead-stronger" {
                                font-weight: 600;
                            }

                            @media only screen and (min-width: 300px) {
                                font-size: 2rem;
                            }

                            @media only screen and (min-width: 601px) {
                                font-size: 4rem;
                            }

                            &.upper {
                                text-transform: uppercase;
                            }
                        }
                    }

                    div.lead-subtitle {
                        font: {
                            size: 2rem;
                            weight: $font_weight / 2;
                        }

                        margin: {
                            top: 0.5rem;
                            bottom: 2.75rem;
                        }

                        @media only screen and (min-width: 300px) {
                            font-size: 1.305rem;
                        }

                        @media only screen and (min-width: 601px) {
                            font-size: 2rem;
                        }
                    }

                    div.lead-button {
                        display: block;
                        text-align: center;
                        margin-top: 10px;
                    }
                }
            }
        }

        // BENEFITS
        &.benefits {
            width: 100%;

            .benefit {
                padding: 65px 0 65px 0;
                margin-bottom: 0;

                &:first-child {
                    padding-top: 0;
                }

                .row {
                    margin-top: 20px;
                }

                @for $title from 1 to 5 {
                    h#{$title} {
                        font: {
                            size: 2.28rem;
                            weight: 700;
                        }

                        margin-bottom: 2rem;

                        > span.lighten {
                            font-weight: 400;
                        }
                    }
                }

                @media only screen and (min-width: 300px) {
                    padding-top: 0;
                }

                @media only screen and (min-width: 601px) {
                    padding-top: 65px;
                }
            }

            .separator {
                padding: 65px 0 65px 0;
                background-color: #eeeeee;

                .row {
                    margin-top: 0;
                }
                
                @media only screen and (min-width: 300px) {
                    padding-top: 0px;
                }

                @media only screen and (min-width: 601px) {
                    padding-top: 65px;
                }                
            }
            
            .separator-with-image {
                overflow:hidden;
                height:375px;
                width:100%;
                background-color:grey;
                text-align: center;
                color: white;

                .seperator-content {
                    z-index: 999;
                    position: absolute;
                    width: inherit;
                    
                    a {
                        color: white;
                    }
                }

                .seperator-img {
                    position:relative;
                    top:0;
                    right:0;
                    left:0;
                    background: {
                        // image: url('./public/fashion_1.jpeg');
                        position: center;
                    }
                    height: 100%;
                    width: auto;
                }
            }

            .call-to-action {
                text-align: center;
            }

            &.image-tiles {
                padding-top: 16px;
                padding-bottom: 16px;

                display: grid;
                grid: {
                    template-columns: repeat(2, 1fr);
                    gap: .275em;
                    auto-rows: 300px;
                }

                @media only screen and (min-width: 300px) {
                    grid-template-columns: repeat(1, 1fr);
                }

                @media only screen and (min-width: 601px) {
                    grid-template-columns: repeat(2, 1fr);
                }

                .image-tile {
                    position: relative;
                    background-color: $blue;
                    overflow: hidden;

                    .tile-cover {
                        position: absolute;
                        background-color: black;
                        height: 100%;
                        width: 100%;
                        top: 0;
                        left: 0;
                        opacity: 0;
                        transition: .3s ease-in-out;
        
                        &:hover {
                            opacity: .3;
                        }
                    }

                    .tile-title {
                        position: absolute;
                        width: 100;
                        color: white;
                        bottom: 35px;
                        left: 45px;
                        text-align: center;
                        margin-top: 0px;

                        @media only screen and (min-width: 300px) {
                            font-size: calc(2rem / 2);
                            left: calc(45px / 2);
                        }

                        @media only screen and (min-width: 601px) {
                            font-size: 2rem;
                        } 
                    }
                }
            }

            .benefits .team {
                text-align: center;
            }
            
            .team {
                text-align: center;

                .teammate-avatar {
                    vertical-align: middle;
                    width: 175px;
                    height: 175px;
                    border-radius: 50%;
                }
            
                .teammate-name {
                    font-weight: 600;
                    margin-top: 2.5rem;
                }
            
                .social {
                    margin-top: 2rem;
                }
            
                .fab {
                    font-size: 1.33333em;
                }
            }
            
        }
    }
</style>