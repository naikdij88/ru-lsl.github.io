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
    });
});