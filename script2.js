API.chatLog("BP Room Script running :ballot_box_with_check: version 0.022 [160414]", true);
API.chatLog("http://adf.ly/aV2hG Room Script, http://adf.ly/X2U62 FB Grupa, http://adf.ly/e3Kol OP Lista, http://adf.ly/a6btD Plug³", false);
function initEnvironment(){
       if (Tastyplug === undefined) {
        $.getScript('http://fungustime.pw/tastyplug/tastyplug.js');
        };
    },
    initCSS: function() {
                //$("body").prepend('<img src="http://i.imgur.com/u94c2tZ.gif" id="BALKAN">');
                //$("body").prepend('<style> #balkan { position:absolute; top: 40px; left: 30px; } </style>');
                $(".background").find('img').attr('src','http://i.imgur.com/3ez0hdD.png');
        $('head').append('<link rel="stylesheet" type="text/css" href="https://dl.dropboxusercontent.com/s/xrc8z5doey7y4zc/style.css">');
                $('body').append('<div id="tooltip_custom" class="right" style="top: 28px; right: 120px; visibility: hidden;"><span>AutoWoot Enable/Disable</span><div class="corner"></div></div>');
                $('body').append('<div id="tooltip_custom1" class="right" style="top: 28px; right: 70px; visibility: hidden;"><span>AutoJoin Enable/Disable</span><div class="corner"></div></div>');
                $('#room').find('canvas').filter(function() { return $(this).css('opacity') < 1; }).remove();
                $('#room').append('<div class="is-leave" style="margin-top: 10px; text-align: center;"><img src="http://i.imgur.com/VdlgFSU.png"></a></div>');
               // $('#room').append('<div class="is-leave" style="margin-top: 300px; text-align: center;"><a href="https://www.facebook.com/groups/547885508611462/" target="_blank"><img src="http://i.imgur.com/F1p1ZET.png"></a></div>');
                //$('#dj-booth').append('<div id="rmbooth" style="background-image: url(http://i.imgur.com/tg0qpxC.png);"></div>');
                $('#chat-header').append('<div id="autowoot-button" class="chat-header-button" onMouseOver="show(\'tooltip_custom\')" onMouseOut="hide(\'tooltip_custom\')" onClick="woot()"><i class="icon icon-autowoot-off"></i></div>');
    },
    onChat: function(data){
    },
}),


