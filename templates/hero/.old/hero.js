$(document).ready(function(){
    var Hero = (function() {
        var form = $('form.get-email');

        var createRequest = function(data) {
            var input_field = form.find('input-field input');
            $.ajax({
                type: "POST",
                url: 'https://example.com',
                data: data,
                dataType: "json",
                success: function (response) {
                    
                },
                error: function (response) {
                    
                }
            });
        }

        var bindEvent = function() {
            form.on('submit', function(e) {
                e.preventDefault();
                var data = $(this).serialize();
                createRequest(data);
            })
        }

        var init = function() {
            form.find('input[type="email"]').attr({"placeholder": "Email"});
            bindEvent();
        }

        return {
            init: init
        }
    })();
    Hero.init()
})