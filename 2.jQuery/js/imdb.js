(function() {
    'use strict'

    $(function() {
        var $searchForm = $('#searchForm');
        var $button = $('button', $searchForm); //button inside searchForm

        $('#search')
            .keyup(function() {
                if ($('#search').val().trim().length > 0) {
                    $button.removeAttr('disabled');
                } else {
                    $button.attr('disabled', 'disabled');
                }
            }).keyup();

        $searchForm.submit(function(e) {
            e.preventDefault();

            var pattern = $('#search').val().trim();

            imdbSearch($button, pattern);
        });
    });

    function imdbSearch ($searchButton, pattern) {
        var $panel = $('#resultPanel');

        $searchButton.attr('disabled', 'disabled');
        $panel.addClass('hidden');

        $.get('http://www.omdbapi.com/?s=' + encodeURI(pattern))
            .done(function (results) {
                console.log(results);
                updateSearchPanel($panel, pattern, results);                
            })
            .fail(function (err) {
                console.log(err);
            })
            .always(function () {
                $searchButton.removeAttr('disabled');
                $panel.removeClass('hidden');
            });
    }

    function updateSearchPanel ($panel, pattern, results) {
        /*Removes the placeholder div*/
        $('.panel-title span', $panel).text(pattern);
        var $body = $('.panel-body', $panel);
        $body.empty();

        if (results.Response !== 'True') {
            $panel.removeClass('panel-success').addClass('panel-danger');
            $body.append($('<p/>').append($('<strong/>', {text: "No results found!"})));
            return;
        }

        $panel.removeClass('panel-danger').addClass('panel-success');
        results.Search.forEach( function(item) {
            $body.append(createMediaItem(item));
        });
    }

    function createMediaItem(data) {
        return $('<div/>', {'class': 'media',})
            .append(createThumbnail(data.Poster, data.imdbID))
            .append(createBody(data.Title, data.Year, data.Type));
    }

    function createThumbnail (poster, id) {
        var img = poster === 'N/A' ? 'http://placehold.it/64x85' : poster;
        var $image = $('<img/>', {src : img, 'class' : 'media-object', width:64, height:85});
        var $anchor = $('<a/>', {href: 'http://www.imdb.com/title/' + id})
                        .append($image);

        return $('<div/>', {'class': 'media-left'}).append($anchor);
    }

    function createBody (title, year, type) {
        var head = $('<h4/>', {'class': 'media-heading'}).text(title);
        var info = $('<p/>').text(year + " and " + type);

        return $('<div/>', {'class': 'media-body'}).append(head).append(info);
    }

})();