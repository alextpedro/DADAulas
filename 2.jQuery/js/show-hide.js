(function () {
    'use strict'

    $(document).ready(function() {
        $('#actionBar button:first-child').click(function (event) {
            $('#secret').toggleClass("invisible");
        });

        $('#actionBar button:nth-child(2)').mouseenter(function (event) {
            $('#secret').removeClass("invisible");
        });

        $('#actionBar button:nth-child(3)').mouseenter(function (event) {
            $('#secret').addClass("invisible");
        });
    });

})();