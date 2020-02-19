var inputemail = {
    template: "\
    <div class='with-input'>\
        <input v-if='!registered' type='email' name='email' id='email' placeholder='Email' class='browser-default' required>\
        <transition name='inputfade'>\
            <p v-if='registered' class='white black-text register_confirmation'>Merci de votre inscription!</p>\
        </transition>\
        <a v-if='!registered' @click='registeruser' class='btn-large red darken-1'>S'inscrire</a>\
    </div>\
    ",
    data() {
        return {
            email: "",
            registered: false
        }
    },
    methods: {
        registeruser: function() {
            this.$data.registered = !this.$data.registered
            // if (this.$data.email) {
            // }
        }
    }
}

var cardicons = {
    template: "\
    <section class='section section-icons grey lighten-4 center' id='apropos'>\
        <div class='container'>\
            <div class='row'>\
                <transition-group name='fade'>\
                    <div v-for='card in cards' :key='card.id' class='col s12 m4'>\
                        <div class='card-panel'>\
                            <i class='material-icons large red-text'>{{ card.icon }}</i>\
                            <h4>{{ card.title }}</h4>\
                            <p>{{ card.content }}</p>\
                        </div>\
                    </div>\
                </transition-group>\
            </div>\
        </div>\
    </section>\
    ",
    data() {
        return {
            cards: [
                {id: 1, title: "Rapidité", icon: "map", content: "Livrez vos clients rapidement à domicilie sans prendre aucun risque"},
                {id: 2, title: "Economie", icon: "euro_symbol", content: "Economisez durabelement sur les frais de personnel et de matériel"},
                {id: 3, title: "Simplicité", icon: "star", content: "Vous gardez votre structure existante et étendez votre influence"}
            ]
        }
    }
}

var app = new Vue({
    el: "#app",
    components: {cardicons, inputemail}
})