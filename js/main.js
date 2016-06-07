$(function() {
    $.getJSON("constants.json", function(data) {
        var template = $('#const').html();
        var html = Mustache.render(template, data);
        //$('.content-k14').html(html);

        $('.hr-kp').click(function(e) {
            e.preventDefault(); // Предотвратить href от перенаправления напрямую
            //var linkURL = $(this).attr("href");
            var myExp = $(this).attr("href"); //new RegExp(linkURL, "i");
            var output = '<br/><br/><br/>';
            //console.log(myExp);
            $.each(data.cans, function(key, val) {
                //console.log(val.name.search(myExp));
                if (val.name.search(myExp) === 0) {
                    output += '<ul class="list-group material-list-group material-list-group">';
                    output += '<li class="list-group-item material-list-group__item">' + val.name + '</li>';
                    output += '<li class="list-group-item material-list-group__item">' + val.opesanie + '</li>';
                    output += '</ul></ul><div style="display: none;">';
                }
            });
            output += '</div>';
            $('.update').html(output);
            //console.log(output);
        });

    });

    $.getJSON("const.json", function (data) {
        console.log('000: '+data);
        $('.hr-pk').click(function (e) {
            e.preventDefault(); // Предотвратить href от перенаправления напрямую
            //var linkURL = $(this).attr("href");

            var myExp = $(this).attr("href"); //new RegExp(linkURL, "i");
            var output = '';
            $.each(data.cans, function (key, val) {
                console.log(val.name.search(myExp));
                if (val.name.search(myExp) === 0) {
                    output += '<div class="name-f ">';
                    output += '<h2><span class="txtsh">' + val.name + '</span></h2></div>';
                    output += '<ul class="list-group material-list-group material-list-group">';
                    output += '<li class="list-group-item material-list-group__item">' + val.opesanie + '</li></ul>';
                    output += '<button class="btn material-btn material-btn_danger glyphicon glyphicon-eye-open" data-toggle="modal" data-target="#myModal_danger"> WIKI</button>';
                    output += '<div class="modal material-modal material-modal_danger fade" id="myModal_danger"><div class="modal-dialog ">';
                    output += '<div class="modal-content material-modal__content"><div class="modal-header material-modal__header">';
                    output += '<h4 class="modal-title material-modal__title">' + val.name + '</h4></div>';
                    output += '<div class="modal-body material-modal__body" style="padding: 0;"><div class="embed-responsive embed-responsive-16by9">';
                    output += '<iframe class="embed-responsive-item" src="https://wiki.secondlife.com/wiki/' + val.name + '"></iframe></div></div>';
                    output += '<div class="modal-footer material-modal__footer"><button class="btn material-btn " data-dismiss="modal">Close</button>';
                    output += '</div></div></div></div><div style="display: none;">';
                }
            });
            output += '</div>';
            $('.update').html(output);
            //console.log(output);

        });
    });

    $.getJSON("events.json", function(data) {
        var template = $('#event').html();
        var html = Mustache.render(template, data);
        $('.content-e').html(html);

        $('.hr-e').click(function(e) {
            e.preventDefault(); // Предотвратить href от перенаправления напрямую
            //var linkURL = $(this).attr("href");

            var myExp = $(this).attr("href"); //new RegExp(linkURL, "i");
            var output = '';
            $.each(data.event, function(key, val) {
                console.log(val.name.search(myExp));
                if (val.name.search(myExp) === 0) {
                    output += '<div class="name-f ">';
                    output += '<h2><span class="txtsh">' + val.name + '</span></h2></div>';
                    output += '<ul class="list-group material-list-group material-list-group">';
                    output += '<li class="list-group-item material-list-group__item">' + val.name_2 + '</li>';
                    output += '<li class="list-group-item material-list-group__item">' + val.opesanie + '</li></ul>';
                    output += '<button class="btn material-btn material-btn_danger glyphicon glyphicon-eye-open" data-toggle="modal" data-target="#myModal_danger"> WIKI</button>';
                    output += '<div class="modal material-modal material-modal_danger fade" id="myModal_danger"><div class="modal-dialog ">';
                    output += '<div class="modal-content material-modal__content"><div class="modal-header material-modal__header">';
                    output += '<h4 class="modal-title material-modal__title">' + val.name + '</h4></div>';
                    output += '<div class="modal-body material-modal__body" style="padding: 0;"><div class="embed-responsive embed-responsive-16by9">';
                    output += '<iframe class="embed-responsive-item" src="https://wiki.secondlife.com/wiki/' + val.name + '"></iframe></div></div>';
                    output += '<div class="modal-footer material-modal__footer"><button class="btn material-btn " data-dismiss="modal">Close</button>';
                    output += '</div></div></div></div><div style="display: none;">';
                }
            });
            output += '</div>';
            $('.update').html(output);
            //console.log(output);

        });

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
                console.log(val.name.search(myExp));
                if (val.name.search(myExp) === 0) {
                    output += '<div class="name-f ">';
                    output += '<h2><span class="txtsh">' + val.name + '</span></h2></div>';
                    output += '<ul class="list-group material-list-group material-list-group">';
                    output += '<li class="list-group-item material-list-group__item">' + val.name_2 + '</li>';
                    output += '<li class="list-group-item material-list-group__item">' + val.opesanie + '</li></ul>';
                    output += '<button class="btn material-btn material-btn_danger glyphicon glyphicon-eye-open" data-toggle="modal" data-target="#myModal_danger"> WIKI</button>';
                    output += '<div class="modal material-modal material-modal_danger fade" id="myModal_danger"><div class="modal-dialog ">';
                    output += '<div class="modal-content material-modal__content"><div class="modal-header material-modal__header">';
                    output += '<h4 class="modal-title material-modal__title">' + val.name + '</h4></div>';
                    output += '<div class="modal-body material-modal__body" style="padding: 0;"><div class="embed-responsive embed-responsive-16by9">';
                    output += '<iframe class="embed-responsive-item" src="https://wiki.secondlife.com/wiki/' + val.name + '"></iframe></div></div>';
                    output += '<div class="modal-footer material-modal__footer"><button class="btn material-btn " data-dismiss="modal">Close</button>';
                    output += '</div></div></div></div><div style="display: none;">';
                }
            });
            output += '</div>';
            $('.update').html(output);
            console.log(output);

        });

    });

});

/* Preloder 
-------------------------------------------------------------------*/
$(window).load(function() {
    "use strict";
    //$(".cssload-thecube").fadeOut();
    $("#preloader").delay(2000).fadeOut("slow");
});
/* Preloder End
-------------------------------------------------------------------*/