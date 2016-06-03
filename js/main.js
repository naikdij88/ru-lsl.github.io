$(function() {
    $.getJSON("constants.json", function(data) {
        var template = $('#const').html();
        var html = Mustache.render(template, data);
        $('.content-k').html(html);
    });

    $.getJSON("events.json", function(data) {
        var template = $('#event').html();
        var html = Mustache.render(template, data);
        $('.content-e').html(html);
    });

    $.getJSON("function.json", function(data) {
        var template = $('#func').html();
        var html = Mustache.render(template, data);
        $('.content-f').html(html);

        $('.hr-f').click(function(e) {
            e.preventDefault(); // Предотвратить href от перенаправления напрямую
            var linkURL = $(this).attr("href");

            var myExp = new RegExp(linkURL, "i");
            var output = '';
            $.each(data.func, function(key, val) {
                if (val.name.search(myExp) != -1) {
                    output += '<div class="name-f ">';
                    output += '<h2><span class="txtsh">' + val.name + '</span></h2></div>';
                    output += '<ul class="list-group material-list-group material-list-group">';
                    output += '<li class="list-group-item material-list-group__item">' + val.name_2 + '</li>';
                    output += '<li class="list-group-item material-list-group__item">' + val.opesanie + '</li></ul>';
                    output += '';


                }
            });
            output += '';
            $('.update').html(output);

        });

    });

});

/* Preloder 
-------------------------------------------------------------------*/
$(window).load(function() {
    "use strict";
    //$(".cssload-thecube").fadeOut();
    $("#preloader").delay(0).fadeOut("slow");
});
/* Preloder End
-------------------------------------------------------------------*/