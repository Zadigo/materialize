var inputemail = {
    
}

var emailcta = new Vue({
    el: "#vue_cta",
    template: "\
    <div class='with-input'>\
        <input v-model='email' v-if='!sent' type='email' name='email' \
            id='email' placeholder='Email' class='browser-default' required>\
        <a v-if='!sent' @click='registeruser' \
            class='btn-large waves-effect waves-light blue darken-1'>S'inscrire</a>\
        <transition name='message_cta' tag='div'>\
            <div @click='sent=!sent' v-if='sent' \
                 class='message' :class='{success: registered, error: !registered}'>\
                <p>{{ message }}</p>\
            </div>\
        </transition>\
    </div>\
    ",
    data() {
        return {
            email: "",
            sent: false,
            registered: false,
            message: "Merci de votre inscription!"
        }
    },
    methods: {
        registeruser: function() {
            var self = this
            self.$data.sent = true
            $.ajax({
                type: "GET",
                url: "https://example.com",
                data: {},
                dataType: "json",
                success: function (response) {
                    self.$data.registered = !this.$data.registered
                },
                error: function(response) {
                    self.$data.registered = false
                    self.$data.message = "Oups ! Une erreur est arrivée"
                }
            });
        }
    }
})