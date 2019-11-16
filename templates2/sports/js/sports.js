var sportsBar = (function() {
    $(".sports-bar").find("li").on("mouseover", function() {
        var menu = $(".sports-bar-menu")
        menu.css({
            // "display": "block",
            "opacity": 1,
            "transform": "translateX(0px)"
        })
        menu.on("mouseleave", function() {
            $(".sports-bar-menu").css({
                // "display": "none",
                "opacity": 0,
                "transform": "translateX(20px)"
            })
        })
    })
})();

sportsBar();