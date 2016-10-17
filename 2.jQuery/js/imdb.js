(function (){
    'use strict'

    var query = $('#search').val();

    $.get('http://www.omdbapi.com/?s=' + query, function(data) {}).
    done(function (data) {
        data.each(function() {
            
        });
    });



})();