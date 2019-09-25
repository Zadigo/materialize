$(document).ready(function () {
    var cardSlider = (function() {
        var card = $(".with-slider")
        var images = card.find("img")
        var left = card.find(".navigation i#left")
        var right = card.find(".navigation i#right")
        // HACK: Since an array starts with 0,
        // we need to use -1 so that the addition
        // of -1 + 1 gives 0 in order for the first
        // image to appear instead of undefined
        var currentIndex = -1
        // Get the images count
        var imagesCount = images.length

        var addOne = function(index, arrayLength) {
            var newIndex = index + 1
            // We need to take out 1 to the images
            // count in order to avoid the count
            // taking 4 into account --; instead
            // we get 0, 1, 2, and 3 supposing
            // we have three images in the slide
            if (index > arrayLength - 2) {
                newIndex = 0
            }
            return newIndex
        }

        var substractOne = function(index, arrayLength) {
            // The current index is -1 which is not
            // defined in the array so we have to immediately
            // reset it to 0
            // if (index == -1) {
            //     index = arrayLength - 1
            //     console.log("Back to " + index)
            // }

            var newIndex = index - 1
            // If index is below zero, then
            // just return the arrayLength
            // since it is equal to the index
            // of the last image
            // if (index < 0) {
            //     newIndex = arrayLength -1
            // }
            // console.log("New index " + newIndex)
            return newIndex
        }

        var slideImageRight = function() {
            // Increment the current index
            // by one iteration
            currentIndex = addOne(currentIndex, imagesCount)
            // currentIndex = substractOne(currentIndex, imagesCount)
            // The current image that is displayed
            var currentImage = images[currentIndex]

            images.each(image => {
                // Query all the images and remove 'hide'
                // so that we can affect all the images that
                // are not the current index
                // $(images[currentIndex]).removeClass("hide")
                $(currentImage).removeClass("hide")

                if (image != currentIndex) {
                    // Now we can add hide to all the
                    // images that are not the current index
                    $(images[image]).addClass("hide")
                }
            })
        }

        var slideImageLeft = function() {
        }

        var addEvent = function() {
            right.on("click", slideImageRight)
            left.on("click", slideImageLeft)
        }

        var init = function(params) {
            addEvent()
        }

        return {
            init
        }
    })();

    cardSlider.init()
});
