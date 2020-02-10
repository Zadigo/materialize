var app = new Vue({
    el: "#app",
    data() {
        return {
            showsidebar: false
        }
    },
    methods: {
        addtocart: function() {
            console.log("Add to cart")
        }
    }
})