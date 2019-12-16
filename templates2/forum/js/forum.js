var postcard = {
    props: ['posts'],
    template: "\
    <div class='container'>\
        <div v-for='post in posts' :key='post.id' class='post' :id='post.id'>\
            <div class='user'>\
                <img :src='post.user.avatar' alt='avatar'>\
                <div class='details'>\
                    <div class='username'>{{  }}</div>\
                    <div class='join-date'>{{ post.user.joind_date }}</div>\
                    <div class='posts-count'>{{ post.user.post_count }}</div>\
                </div>\
            </div>\
            <div class='content'>{{ post.content }}</div>\
            <div class='action'>\
                <div class='btn-group right'>\
                    <div class='btn z-depth-0'><i class='material-icons'>send</i></div>\
                    <div class='btn z-depth-0'><i class='material-icons'>share</i></div>\
                    <div class='btn z-depth-0'><i class='material-icons'>delete</i></div>\
                </div>\
            </div>\
        </div>\
    </div>\
    "
}

var app = new Vue({
    el: ".section#posts",
    components: { postcard },
    data() {
        return {
            posts: [
                {id: "1", content: "", user: {avatar: "https://www.w3schools.com/bootstrap4/img_avatar3.png", join_date: "11-9-2019", post_count: 1456}},
                {id: "2", content: "", user: {avatar: "https://www.w3schools.com/bootstrap4/img_avatar4.png", join_date: "", post_count: ""}},
                {id: "3", content: "", user: {avatar: "https://www.w3schools.com/bootstrap4/img_avatar5.png", join_date: "", post_count: ""}}
            ]
        }
    }
})