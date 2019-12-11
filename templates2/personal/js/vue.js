var formitem = {
    template: "\
        <form @submit.prevent='submitform' action='POST'>\
            <div v-for='f in items' :key='f.id' :class='f.size|size'>\
                <input v-model='form.parent_id[f.id - 1]' v-if='f.type != \"textarea\"' :type='f.type' :name='f.name' :id='f.name' :placeholder='f.name'>\
                <textarea v-else v-model='message' class='materialize-textarea' id='textarea1' name='message' cols='30' rows='100' minlength='50' :placeholder='f.name' required></textarea>\
            </div>\
            <div class='input-field col s12 m12 l12'>\
                <button class='btn-large right' type='submit'>{{ buttonname }}</button>\
            </div>\
        </form>\
    ",
    data() {
        return {
            buttonname: "Envoyer",
            form: { "parent_id": [] },
            message: "",
            items: [
                { "id": 1, "name": "name", "type": "text", "size": "col s12 m6 l6"},
                { "id": 2, "name": "email", "type": "email", "size": "col s12 m6 l6"},
                { "id": 3, "name": "subject", "type": "text", "size": "col s12 m12 l12"},
                { "id": 4, "name": "message", "type": "textarea", "size": "col s12 m12 l12"}
            ]
        }
    },
    filters: {
        size: function(attr) {
            return "input-field " + attr
        }
    },
    methods: {
        submitform: function(e) {
            console.log(e)
        }
    }
}

var skillsection = {
    props: [ "radioitems", "tags" ],
    template: "\
        <div class='row'>\
            <div class='col s12 m3 l3'>\
                <p v-for='radioitem in radioitems' :key='radioitem.key'>\
                <label>\
                    <input @click='startclassification(radioitem.name)' type='radio' :name='radioitem.group' :id='radioitem.name' :checked='radioitem.checked'>\
                    <span>{{ radioitem.name|upper }}</span>\
                </label>\
                </p>\
            </div>\
            <div class='col s12 m9 l9'>\
                <div class='chipsa'>\
                    <transition-group name='tags'>\
                        <div v-for='tag in classifiedtags' :key='tag.id' class='chip'>{{ tag.name }}</div>\
                    </transition-group>\
                </div>\
            </div>\
        </div>\
    ",
    data() {
        return {
            newitems: []
        }
    },
    filters: {
        upper: function(name) {
            return name.toUpperCase()
        }
    },
    methods: {
        startclassification: function(classification) {
            if (classification !== "all") {
                var items = this.$props.tags.filter(function(item) { return item.classification === classification })
                this.$data.newitems = items
            } else {
                this.$data.newitems = this.$props.tags
            }
        }
    },
    computed: {
        classifiedtags: function() {
            if (this.$data.newitems.length == 0) {
                return this.$props.tags
            }
            return this.$data.newitems
        }
    }
}

var app = new Vue({
    el: "#app",
    data() {
        return {
            radioitems: [
                { "id": 1, "name": "Tout", "group": "group1", "checked": true },
                { "id": 2, "name": "business", "group": "group1", "checked": false },
                { "id": 3, "name": "technique", "group": "group1", "checked": false }
            ],
            tags: [
                { "id": 1, "name": "Python", "classification": "technique" },
                { "id": 2, "name": "Docker", "classification": "technique" },
                { "id": 3, "name": "Lean startup", "classification": "business" },
                { "id": 4, "name": "Google Analytics", "classification": "business" },
                { "id": 5, "name": "Google Tag Manager", "classification": "business" },
                { "id": 6, "name": "Flask", "classification": "technique" },
                { "id": 7, "name": "Django", "classification": "technique" },
            ]
        }
    },
    components: { skillsection, formitem }
})