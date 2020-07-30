var Cart = (function() {
    var deleteButtons = $(".section#cart").find(".cart_product")

    var deleteItem = function(e) {
        var targetElement = $(e.target)
        alert(targetElement)
    }

    var addEvent = function() {
        deleteButtons.each(function(index) {
            $(deleteButtons[index]).find("button").on("click", deleteItem)
        })
    }

    var init = function() {
        addEvent()
    }

    return {
        init: init
    }
})

Cart().init()