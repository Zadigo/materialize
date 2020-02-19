// Vue JS for the special details
// section of the dashboard relevant
// to dealing with a user's profile

var scoreproposition = {
    template: "\
    <div>\
        <div v-if='!scored' class='stars'>\
            <i @click='selectedstar(star)' v-for='star in stars' :key='star' :class='\"material-icons \" + activestars(star)'>star</i>\
        </div>\
        <p v-else>Score : {{ selected }}/5</p>\
    </div>\
    ",
    data() {
        return {
            stars: [1, 2, 3, 4, 5],
            selected: 0,
            scored: false
        }
    },
    methods: {
        selectedstar: function(star) {
            this.$data.selected = star
            this.$data.scored = true
        },
        activestars: function(n) {
            if (n <= this.$data.selected) {
                return "blue-text"
            }
        }
    }
}

var actionbuttons = {
    template: "\
    <div class='card-panel center'>\
        <button v-if='!accepted' @click='accepted=true' :disabled='refused' class='btn indigo lighten-1 waves-effect waves-light'><i class='material-icons left'>check</i>Accept</button>\
        <button v-else v-show='!hasmeeting' class='btn indigo lighten-1 waves-effect waves-light'><i class='material-icons left'>calendar_today</i>Prendre rendez-vous</button>\
        \
        <button v-show='hasmeeting' class='btn indigo lighten-1 waves-effect waves-light'><i class='material-icons left'>calendar_today</i>Bilan rendez-vous</button>\
        \
        <button @click='standby=true' :disabled='accepted || refused' class='btn indigo lighten-1 waves-effect waves-light'><i class='material-icons left'>pause</i>Stand by</button>\
        <button @click='refused=true' :disabled='accepted || refused' class='btn red darken-1 waves-effect waves-light'><i class='material-icons left'>block</i>Refuse</button>\
    </div>\
    ",
    data() {
        return {
            accepted: false,
            refused: false,
            standby: false,
            hasmeeting: false
        }
    },
    mounted() {
        // this.$data.accepted = true
        // this.$data.hasmeeting = true
    }
}

var dashboardetails = new Vue({
    el: "#vue_details",
    components: {actionbuttons, scoreproposition}
})