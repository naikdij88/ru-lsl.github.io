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

        $('.hr').click(function(e) {
            e.preventDefault(); // Предотвратить href от перенаправления напрямую
            var linkURL = $(this).attr("href");
            // $("#my_if").html("<iframe src="+linkURL+" width='100%' height='700' id='my_if1'></iframe>" );
            alert(linkURL);
            //var h = 600;
            //var w = 900;
            //window.open("https://wiki.secondlife.com/wiki/" + linkURL, "", 'scrollbars=1,height=' + Math.min(h, screen.availHeight) + ',width=' + Math.min(w, screen.availWidth) + ',left=' + Math.max(0, (screen.availWidth - w) / 2) + ',top=' + Math.max(0, (screen.availHeight - h) / 2));

        });

    });

});