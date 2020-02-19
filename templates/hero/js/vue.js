var slider = {
    props: [ "show" ],
    template: "\
        <transition name='slider'>\
            <div v-if='show' class='z white' style='position: absolute; width: 100%; height: 150px;'>\
                <div class='w' style='padding: 1rem;'>\
                    Something\
                </div>\
            </div>\
        </transition>\
    "
}

var sliderlink = {
    props: [ "show" ],
    template: "<li @click='showSlider()' v-bind:show='show'><a>Sidebar</a></li>",
    methods: {
        showSlider: function() {
            this.$emit('showslider', !this.$props.show)
        }
    }
}

var app = new Vue({
    el: "#app",
    components: { sliderlink, slider },
    data() {
        return {
            show: false
        }
    },
    methods: {
        applyValue: function(value) {
            this.$data.show = value
        }
    }
})
