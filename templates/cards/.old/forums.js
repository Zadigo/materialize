$(document).ready(function () {
    (function() {
        var showDetails = function(currentSelection) {
            $(currentSelection.currentTarget).find('#details').removeClass('hide')
        }

        var hideDetails = function() {
            var userDetails = $('.user-details')
            userDetails.each(userDetail => {
                $(userDetails[userDetail]).find('#details').addClass('hide')
            })
        }

        var showUserDetails = function() {
            $('.user-details').on('mouseenter', showDetails)
            $('.user-details').on('mouseleave', hideDetails)
        }

        showUserDetails()
    })();
});