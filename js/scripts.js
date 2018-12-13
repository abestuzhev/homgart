$(document).ready(function () {
    $('.homgart-select').SumoSelect();



    $(window).load(function(){
        $('.list').resizeItems({target: '.list_item'});
    });

    $.fn.resizeItems = function(options) {
        var settings = {
            target: null
        };
        return this.each(function() {
            if (options) {$.extend(settings, options);}

            var $this = $(this);
            var $items = $(settings.target);
            var top = $items[0].offsetTop;
            var arrHeight = [];
            var arrItems = [];

            for(var i = 0; i < $items.length; i++){
                $items[i].style.height = 'auto';
            }

            for(var i = 0; i < $items.length; i++){
                if(top != $items[i].offsetTop){
                    arrHeight.sort(function(a,b){return b-a});
                    for(var j = 0; j < arrItems.length; j++){
                        arrItems[j].style.height = arrHeight[0] + 'px';
                    }
                    top = $items[i].offsetTop;
                    arrHeight.length = arrItems.length = 0;
                    i = i-1;
                    continue;
                }
                arrHeight[arrHeight.length] = $items[i].offsetHeight;
                arrItems[arrItems.length] = $items[i];
            }
            arrHeight.sort(function(a,b){return b-a});
            for(var j = 0; j < arrItems.length; j++){
                var pad = $(arrItems[j]).css('padding').replace(/[px ].+/, '');
                pad *= 2;
                arrItems[j].style.height = arrHeight[0] - pad + 'px';
            }


        })
    }

});

    /*новые скрипты --------------*/
    /*функция показа модального окна*/
    function showPopup(icon, popup) {
        $(document).on('click', icon, function (e) {
            var $html = $('html');
            e.preventDefault();
            $(popup).addClass('is-visible');
            $('.mfp-bg').addClass('is-visible');


            $html.addClass('lock-html');
            $('body').addClass('fixed-input');
            if(windowWidth > documentWidth){
                $html.css({
                    'margin-right':'17px'
                });
                $('.mfp-wrap').css({
                    'overflow-y':'scroll'
                });
                // console.log('Есть полоса прокрутки');
            }else {
                // console.log('Нет полосы прокрутки');
            }
        });
    }

    $(document).on('click', '.js-popup-close', function (e) {
        e.preventDefault();
        var $html = $('html');
        $(this).parents('.mfp-wrap').removeClass('is-visible');
        $('.mfp-bg').removeClass('is-visible');
        $html.css({
            'margin-right':'0'
        }).removeClass('lock-html');
        $('.wrapper').removeClass('fixed-input');
        $('.header.sticky').css({
            // 'right':'0'
        });


    });

    showPopup('.model-instruction-btn','.popup-instruction');
});

