// Add to cart
var addToCart = function() {
    var button = $("#btn_add_to_cart")

    var pushDataLayer = function() {
        alert("Push DataLayer")
    }
    
    var createAjax = function() {
        alert("Create AJAX")

        pushDataLayer()
    }

    var addEvent = function() {
        button.on("click", createAjax)
    }

    addEvent()
}

// Drawer action
var ecommerceBar = function(size) {
    // Ecommerce bar
    var bar = $(".ecommerce-bar.for-filters")
    var filters = bar.find(".filter")

    // Navbar
    var navBar = $("nav #ecommerce-mobile")
    var links = navBar.find("li")

    var closeDrawer = function(e) {
        var targetId = $(e.currentTarget).attr("id")

        $(targetId).find(".close").on("click", function() {
            $(targetId).css(
                {
                    "transform": "translateX(" + size + ")"
                }
            )
        })
    }

    var openDrawer = function(e) {
        var targetId = $(e.currentTarget).attr("id")
        
        $(targetId).css(
            {
                "transform": "translateX(0px)",
                "opacity": 1
            }
        )
    }

    var addEvent = function() {
        filters.each(function(index) {
            $(filters[index]).on("click", openDrawer)
            $(filters[index]).on("click", closeDrawer)
        })

        links.each(function(index) {
            $(links[index]).on("click", openDrawer)
            $(links[index]).on("click", closeDrawer)
        })
    }

    var init = function() {
        addEvent()
    }

    return {
        init: init
    }
}

// Browse images
var browseImages = function() {
    var side = $(".side-images")
    var images = side.find("img")
    var imagesCount = images.length
    var displayType = side.attr("id")
    var currentIndex = 0
    var counter = side.find(".counter").find("span")
    
    // var items = $(".s .i")
    
    var forMobile = function() {
        counter.text("1 / " + imagesCount)

        images.each(id => {
            if (id == 0) {
                $(images[id]).css({"visibility": "visible"})
            } else {
                $(images[id]).css({"visibility": "hidden"})
            }

            // items.append(
            //     "<div class='box'></div>"
            // )

            // items.find(".box").first().addClass("active")

            $(images[id]).on("click", function() {         
                currentIndex = currentIndex + 1
                previousIndex = currentIndex - 1

                if (currentIndex > imagesCount - 1) {
                    currentIndex = currentIndex - currentIndex
                }

                if (previousIndex < 0) {
                    previousIndex = 0
                }

                var currentImage = $(images[currentIndex])
                var previousImage = $(images[previousIndex])
                
                previousImage.css(
                    {
                        "visibility": "hidden",
                    }
                )

                currentImage.css(
                    {
                        "visibility": "visible",
                    }
                )

                // var boxes = $(items).find(".box")
                
                // $(boxes[currentIndex]).addClass("active")
                // $(boxes[previousIndex]).removeClass("active")

                txt = (currentIndex + 1).toString() + " / " + imagesCount.toString()
                counter.text(txt)
            })
        })
    }

    var forDesktop = function() {
        var mainImage = $(".main-image").find("img")

        images.each(id => {
            $(images[id]).on("click", function() {
                var imageSrc = $(images[id]).attr("src")
                mainImage.attr("src", imageSrc)
            })
        })
    }

    if (displayType == "mobile") {
        forMobile()
    } else {
        forDesktop()
    }
}

ecommerceBar("310px").init()
addToCart()
browseImages()
