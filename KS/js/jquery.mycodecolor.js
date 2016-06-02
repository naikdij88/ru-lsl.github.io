;(function($){
    $.fn.mycodecolor = function () {
        //console.log(this);
        var searchType = ['integer', 'float', 'key', 'string', 'vector', 'rotation', 'list '];
        var searchFunc = ['llAbs', 'llAcos', 'llAddToLandPassList','llAdjustSoundVolume', 'llPlaySound', 'llLoopSound', 'llTriggerSound'];
        var searchConst = [];
        var searchEven = ['attach', 'at_rot_target', 'at_target', 'changed', 'collision', 'collision_end', 'collision_start', 'control', 'dataserver', 'email', 'event_order', 'experience_permissions', 'experience_permissions_denied', 'http_request', 'http_respons','land_collision_end', 'land_collision',  'land_collision_start', 'link_message', 'listen', 'money', 'moving_end', 'moving_start', 'not_at_rot_target', 'not_at_target', 'no_sensor', 'object_rez', 'on_rez', 'path_update', 'remote_data', 'run_time_permissions', 'sensor', 'state_entry', 'state_exit', 'timer', 'touch', 'touch_end', 'touch_start', 'transaction_result'];
        for (var i = 0; i < searchType.length; i++) {
            //console.log(searchType[i]);
            var searchFind = searchType[i];
            var findExp = new RegExp(searchFind,'i');
            var param = $(this).html();
            var say = param.search(findExp);
            if (say != -1) {
                console.log(searchFind + ' гуд');
                $(this).highlight(searchType[i]);

            }
        }
        
        for (var i = 0; i < searchFunc.length; i++) {
            //console.log(searchFunc[i]);
            var searchFind1 = searchFunc[i];
            var findExp = new RegExp(searchFind1, 'i');
            var param = $(this).html();
            var say = param.search(findExp);
            if (say != -1) {
                //console.log(searchFind + ' гуд');
                $(this).highlightF(searchFunc[i]);

            }
        }

        for (var i = 0; i < searchEven.length; i++) {
            //console.log(searchFunc[i]);
            var searchFind2 = searchEven[i];
            var findExp = new RegExp(searchFind2, 'i');
            var param = $(this).html();
            var say = param.search(searchFind2);
            if (say != -1) {
                //console.log(searchFind + ' гуд');
                $(this).highlightE(searchEven[i]);

            }
        }

    };

}(jQuery));