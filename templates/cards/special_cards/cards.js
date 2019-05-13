$(document).ready(function(){
    (function() {
        var cards = document.querySelectorAll(".card.special");
        
        // var hoverFour = function() {
        //     cards.forEach(function(card) {
        //         var hover_cover = $(card).find(".hover-cover-4");
        //         var height = hover_cover.height();
        //         // $(hover_cover).css(
        //         //     {
        //         //         "bottom": "-" + (height+30) + "px"
        //         //     }
        //         // )
        //     })
        // }

        var hoverIcons = function() {
            cards.forEach(function(card) {
                var hover_cover = $(card).find(".hover-cover-icons");
                var icons = hover_cover.children();
                icons.each(function(icon) {
                    $(this).on('click', function(e) {
                        e.preventDefault();
                        var click_id = $(this).prop('id');
                        if (click_id === "star") {
                            var i = $(this).find('i');
                            var star_type = i.text();
                            if (star_type === "star") {
                                i.text("star_border");
                            } else {
                                i.text("star");
                            }
                            $(this).find('i').css({"display":""});
                        }
                    });
                })
            })
        }

        hoverIcons();
        // hoverFour();
    })();
});