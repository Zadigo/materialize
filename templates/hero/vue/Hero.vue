<template>
    <div class="hero">
        <div class="hero-wrapper">
            <div class="call-to-action">
                <div class="lead">{{ hero.lead }}</div>
                <div class="lead-subtitle">{{ hero.subtitle }}</div>

                <actionButton v-bind:buttonItems="buttonItems" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            buttonItems: {
                "title": "title",
                "href": "http://www.google.com"
            }
        }
    }
}
</script>

<style>

</style>