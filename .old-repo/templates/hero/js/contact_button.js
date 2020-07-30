var contactbox = {
    props: ["showbox"],
    template: "\
    <transition name='contact_box_transition'>\
        <div v-if='showbox' class='contact-box'>\
            <div class='header'><p>Nous contactez</p></div>\
            <div class='wrapper'>\
                <div v-for='field in fields' :key='field.type' class='input-field'>\
                    <input v-model='contactitems[field.name]' :type='field.type' :name='field.name' :id='field.type' \
                        :autocomplete='field.autocomplete' :placeholder='field.placeholder'>\
                </div>\
                <div class='input-field'>\
                    <input v-model='contactitems[\"message\"]' type='text' \
                        name='message' id='message' placeholder='Message'>\
                </div>\
                <button @click='sendmessage' v-if='!sent' :class='cansend'>\
                    <i class='material-icons left'>email</i>{{ buttonname }}\
                </button>\
                <div v-else class='message' :class='{\"success\": !error, \"error\": error}'>{{ message }}</div>\
            </div>\
        </div>\
    </transition>\
    ",
    data() {
        return {
            contactitems: {},
            sent: false,
            error: false,
            message: "Message envoyé !",
            buttonname: "Envoyer",
            fields: [
                {name: "name", type: "text", autocomplete: "name", placeholder: "Name"},
                {name: "telephone", type: "tel", autocomplete: "tel", placeholder: "Telephone"},
                {name: "email", type: "email", autocomplete: "email", placeholder: "Email"}
            ]
        }
    },
    computed: {
        cansend() {
            var keys = Object.keys(this.$data.contactitems)
            if (keys.length > 0) {
                return "btn right z-depth-0"
            }
            return "btn right disabled"
        }
    },
    methods: {
        sendmessage: function() {
            var self = this
            $.ajax({
                type: "GET",
                url: "https://example.com/",
                // data: {},
                // dataType: "json",
                success: function (response) {
                    self.$data.sent = true
                    self.$data.contactitems = {}
                },
                error: function(response) {
                    self.$data.sent = true
                    self.$data.error = true
                    var retry = function() {
                        self.$data.sent = false
                    }
                    setTimeout(retry, 2000)
                    self.$data.buttonname = "Réessayer"
                    self.$data.message = "Oups ! Il y a eu une erreur"
                }
            });
            // this.$emit("sendmessage")
        }
    }
}

var contactbutton = {
    template: "\
    <div class='fixed-action-btn'>\
        <div @click='triggerbox' class='btn-large btn-floating orange darken-3'>\
            <transition name='float_icon'>\
                <i v-show='clicked' class='material-icons'>close</i>\
            </transition>\
            <transition name='float_icon'>\
                <i v-show='!clicked' class='material-icons'>email</i>\
            </transition>\
        </div>\
    </div>\
    ",
    data() {
        return {
            clicked: false
        }
    },
    methods: {
        triggerbox: function() {
            this.$data.clicked = !this.$data.clicked
            this.$emit("triggerbox")
        }
    }
}

var contact = new Vue({
    el: "#contact_button",
    components: {contactbutton, contactbox},
    data() {
        return {
            showbox: false
        }
    },
    methods: {
        triggershow: function() {
            this.$data.showbox = !this.$data.showbox
        }
    }
})