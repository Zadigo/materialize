<template>
    <div class="card">
        <div class="card-content">
            <h3>Option de livraison</h3>

            <!-- Radio buttons -->
            <RadioButtons v-bind:items="buttonData"/>
        </div>
    </div>
</template>

<script>
import RadioButtons from "@/components/general/RadioButtons.vue"

export default {
    components: {
        RadioButtons
    },
    data() {
        return {
            buttonData: [
                { "id": "livraison_standard", "span": "Livraison standard" },
                { "id": "vingt_quatre_heure", "span": "Livraison 24h" }
            ]
        }
    }
}
</script>
