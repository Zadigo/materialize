<template>
    <div class="action">
        <button @click="createQuote(item.id)" class="btn" id="quote">Quote</button>
        <button @click="createResponse()" class="btn" id="quick_response">Quick response</button>
    </div>
</template>

<script>
export default {
    methods: {
        createQuote: function(messageId) {
            this.$emit('createQuote', messageId)
        },

        createResponse: function() {
            this.$emit('createResponse')
        }
    }
}
</script>
