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
var ecommerceBar = function() {
    var bar = $(".ecommerce-bar")
    var links = bar.find("li")

    var transparentOnScroll = function() {
        // bar.scroll(function() {
        //     bar.addClass("transparent-on-scroll")
        // })
        console.log(bar.attr("class"))
    }

    var closeDrawer = function(linkiD) {
        $(linkiD).find(".close").on("click", function() {
            $(linkiD).css(
                {
                    "transform": "translateX(310px)"
                }
            )
        })
    }

    var openDrawer = function() {
        links.each(function(link) {
            var linkiD = $(this).attr("id")

            $(this).on("click", function() {
                $(linkiD).css(
                    {
                        "transform": "translateX(0px)"
                    }
                )
            })
            closeDrawer(linkiD)
        })
    }

    openDrawer()
    // transparentOnScroll()
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

ecommerceBar()
addToCart()
browseImages()
