// $(document).ready(function () {
//     var ecommerce = (function() {
//         var sideImages = $(".side-images img")
//         var mainImage = $(".main-image img")

//         var changeImage = function(e) {
//             // Subtitute main image to one
//             // of the sides
//             var imageURL = $(this).attr("src")
//             mainImage.attr({src: imageURL})
//         }

//         var addEvent = function() {
//             // Select each images
//             sideImages.each(image => {
//                 $(sideImages[image]).on("click", changeImage)
//             })
//         }

//         var init = function() {
//             addEvent()
//         }

//         return {
//             init
//         }
//     })()

//     ecommerce.init()
// });