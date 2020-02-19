var posteditor = {
    template: "\
        <div class='card-panel' id='new_post'>\
            <div v-show='preview' id='preview'></div>\
            <div id='editor'></div>\
            <p>\
                <label>\
                    <input @click='' v-model='preview' type='checkbox' name='preview' id='preview'>\
                    <span>Twitter</span>\
                </label>\
            </p>\
            <p>\
                <label>\
                    <input @click='' v-model='preview' type='checkbox' name='preview' id='preview'>\
                    <span>Facebook</span>\
                </label>\
            </p>\
            <div @click='createnewpost' class='btn' id='btn_new_post'>Create</div>\
            <div @click='' class='btn' id='btn_preview'>Preview</div>\
        </div>\
    ",
    data() {
        return {
            preview: false,
            editor: undefined,
            content: undefined
        }
    },
    mounted() {
        var self = this
        var options = {
            // syntax: true,
            toolbar: [
                [{ 'header': 1 }, { 'header': 2 }, { 'header': 3 }],
                ['bold', 'italic'],
                ['link'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['clean'],
            ],
            history: {
                delay: 2000,
                maxStack: 500,
                userOnly: true
            },
            placeholder: 'Écrivez le corps de votre annonce ici...',
            theme: 'snow'
        }
        self.$data.editor =  new Quill("#editor", options)
    },
    methods: {
        createnewpost: function() {
            var self = this
            var content = JSON.stringify(self.$data.editor.getContents())
            var html = self.$data.editor.root.innerHTML
            var text = self.$data.editor.root.innerText

            var newpost = {
                id: 5,
                content: text,
                user: {
                    "avatar": "https://www.w3schools.com/bootstrap4/img_avatar4.png",
                    "join_date": "03-06-2015",
                    "post_count": 11564
                }
            }

            // var request = new XMLHttpRequest()
            // request.open
            // request.send

            // Reset editor content
            self.$data.editor.root.innerText = ""

            this.$emit('createnewpost', newpost)
        },
        showpreviewbox: function() {
            document.getElementById('preview').innerHTML = editor.root.innerHTML
        }
    }
}

var forumcards = {
    props: ["posts"],
    template: "\
    <div id='content'>\
        <transition-group name='posts'>\
            <div v-for='post in posts.posts' :key='post.id' class='post' :id='post.id'>\
                <div class='user'>\
                    <img :src='post.user.avatar' alt='avatar'>\
                    <div class='details'>\
                        <div class='username'>{{ post.user.username}}</div>\
                        <div class='join-date'>{{ post.user.join_date }}</div>\
                        <div class='posts-count'>{{ post.user.post_count }}</div>\
                    </div>\
                </div>\
                <div class='content'>\
                    <div v-for='quote in post.quotes' class='quote'>\
                        <div class='author'>{{ quote.user.username }} <span>said:</span></div>\
                        {{ quote.content }}\
                    </div>\
                    {{ post.content }}\
                </div>\
                <div class='action'>\
                    <div class='btn-group right'>\
                        <a href='#new_post' class='btn z-depth-0'><i class='material-icons left'>send</i>Reply</a>\
                        <div @click='createquote(post)' class='btn z-depth-0'><i class='material-icons left'>send</i>Quote</div>\
                        <div class='btn z-depth-0'><i class='material-icons left'>share</i>Share</div>\
                        <div class='btn z-depth-0 grey lighten-1'><i class='material-icons left'>info</i>Report</div>\
                    </div>\
                </div>\
            </div>\
        </transition-group>\
        <div class='card-panel green lighten-1 z-depth-0'>There are new posts just after yours. <a>Show</a></div>\
    </div>\
    ",
    data() {
        return {
            lastpostid: undefined
        }
    },
    created() {
        var self = this
        // Get the iD of the last post
        // in the array
        self.$data.lastpostid = self.$props.posts.slice(-1)[0]
    },
    methods: {
        createpost: function() {
            var template = {
                "id": this.$data.lastpostid,
                "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea harum ipsam saepe minima nostrum minus illo autem debitis",
                "quotes": [],
                "user": {
                    "id": 22,
                    "avatar": "https://www.w3schools.com/bootstrap4/img_avatar3.png",
                    "username": "Kendall Jenner",
                    "join_date": "11-9-2019",
                    "post_count": 1456
                }
            }
            // Emit the function in order to create
            // the new post for the user
            this.$emit('createpost', template)
        },
        createquote: function(post) {
            var postquotes = post.quotes
            var postcontent = post.content
            console.log(postcontent)
            console.log(postquotes)
        }
    }
}

var app = new Vue({
    el: "#app",
    components: { forumcards, posteditor },
    data() {
        return {
            posts: [],
            newposts: []
        }
    },
    created() {
        var self = this
        var request = new XMLHttpRequest()
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                self.$data.posts = JSON.parse(this.response)
            }
        }
        request.open("GET", "https://raw.githubusercontent.com/Zadigo/materialize_for_startups/master/templates2/forum/posts.json", true)
        request.send()
    },
    methods: {
        docreate: function(newpost) {
            // We save the post to the database
            // and then call a refresh to get
            // the new set of posts
            // this.$data.newposts.push(post)
            this.$data.posts.posts.push(newpost)
        }
    }
})
