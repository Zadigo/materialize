$(document).ready(function() {
    (function() {
        var parentHeight = $(".hero.karousel, .header.karousel").height();
        var carouselItems = $(".hero.karousel, .header.karousel").find("div.karousel-item");

        // Indicators styling
        $(".karousel ol.indicators").css(
            {
                "position": "absolute",
                "display": "inline-block",
                "top": parentHeight - 150,
            }
        );

        $(".karousel .karousel-item").css(
            {
                "transition": "all 1s ease-in-out",
            }
        )

        var buttonAction = function() {
            // Action to append to the buttons
            var buttonFor = $(this).attr("for");

            // Reset the display to only show
            // the item that was clicked
            carouselItems.each(item => {
                $(carouselItems[item]).addClass("hide");
            })
            
            // Remove the hide class of the
            // specific carousel item using
            // the "for" attribute
            $(buttonFor).removeClass("hide");
        }

        var createNav = function() {
            // 2. Get the number of items in order
            // to determine the amount of buttons
            // to create
            var numberOfItems = carouselItems.length

            // Create buttons
            for (i = 0; i < numberOfItems; i++) {
                var indicator = $('<li target=".karousel" for=#' + $(carouselItems[i]).attr("id") + '></li>')
                var button = $('<button class="btn karousel-change" for=#' + $(carouselItems[i]).attr("id") + '>Test</button>')
                
                // Add action
                indicator.on("click", buttonAction);
                button.on("click", buttonAction);
                
                // Append buttons to the DOM
                $(".karousel .indicators").append(indicator);
                $(".espace").append(button);
            }
        }

        var getItems = function() {
            // 1. Get all the items present
            // in the carousel
            carouselItems.each(item => {
                if (item != 0) {
                    $(carouselItems[item]).addClass('hide')
                }
            })
        }

        init: {
            getItems();
            createNav();
        }
    })();
})
