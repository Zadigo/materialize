var likeButton = (function() {
    var cards = $(".card.horizontal.slim")
    
    var changeStar = function(e) {
        var targetCard = $(e.currentTarget)
        var star = targetCard.find(".like i")

        if (star.text() == "star_border") {
            star.text("star")
        } else if (star.text() == "star") {
            star.text("star_border")
        }
    }

    var addEvent = function() {
        cards.each(function(index) {
            var star = $(cards[index]).find(".like i")
            star.on("click", changeStar)
        })
    }

    var init = function() {
        addEvent()
    }

    return {
        init: init
    }
})

likeButton().init()
