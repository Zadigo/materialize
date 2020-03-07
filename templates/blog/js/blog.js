var cards = {
    props: ["posts"],
    template: "\
    <div>\
        <transition-group name='card_items'>\
            <div v-for='post in posts' :key='post.id' class='content'>\
                <div class='content-title'>\
                    <a href='./post.html'><h5>{{ post.title }}</h5></a>\
                </div>\
                <p class='content-date'>{{ post.date }}</p>\
                <div class='content-text'>{{ post.content }}</div>\
                <div class='content-social'>\
                    <a href='http://facebook.com'><i class='fab fa-facebook-f'></i></a>\
                    <a href='http://twitter.com'><i class='fab fa-twitter'></i></a>\
                    <a href='http://snapchat.com'><i class='fab fa-snapchat'></i></a>\
                </div>\
            </div>\
        </transition-group>\
    </div>\
    "
}

var blog = new Vue({
    el: "#app",
    components: {cards},
    data() {
        return {
            posts: [
                {id: 1, title: "Kendall is a talent", date: "12-01-2019", content: "This is some kind of post"},
                {id: 2, title: "Hailey loves me", date: "12-01-2019", content: "This is some kind of post"},
                {id: 3, title: "Kylie is an extraordinary woman", date: "12-01-2019", content: "This is some kind of post"},
            ]
        }
    }
})