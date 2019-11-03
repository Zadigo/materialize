$(document).ready(function () {
    var likeButton = (function() {
        var star = $(".card.horizontal.slim").find(".like i")
        
        star.on("click", function() {
            var starType = $(this)

            if (starType.text() === "star") {
                starType.text("star_border")
            } else {
                starType.text("star")
            }
        })
    })

    likeButton()
});