<template>
<div class="card-panel grey lighten-3">
    <h5>Envoyer un message</h5>

    <div class="input-field">
        <input v-model="new_message.name" type="text" placeholder="Nom" id="name">
    </div>

    <div class="input-field">
        <input v-model="new_message.email" type="email" placeholder="Email" id="email">
    </div>

    <div class="input-field">
        <textarea v-model="new_message.message" class="materialize-textarea" placeholder="Message" id="message"></textarea>
    </div>

    <button @click="sendEmail()" type="submit" class="btn red darken-1 waves-effect waves-light">Envoyer</button>
</div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            new_message: {
                name: '',
                email: '',
                message: ''
            }
        }
    },

    methods: {
        sendEmail: function() {
            axios.post('http://127.0.0.1:8000', this.$data.new_message)
                .then(response => {
                    // console.log(response)
                    this.$data.new_message.name = ''
                })
                .catch(error => {
                    this.$data.new_message.name = ''
                })
        }
    }
}
</script>
