API.chatLog("Running Balkan Party RoomScript!", true);
API.chatLog("version 0.013 (281213)", true);
function initEnvironment(){
	if (plugCubed === undefined) {
		$.getScript('http://files.plugCubed.net/plugCubed.js'); 
	};
}
initEnvironment();
var plugCubed,
RMEnhancedModel = require('a96fc/ff0b8/e72a9').extend({
    init: function(){
        var Lang = require('lang/Lang');
        setTimeout($.proxy(this.initCSS,this), 1500);
		setTimeout($.proxy(this.autoWoot,this), 500);
		this.proxy = {
            onChat: $.proxy(this.onChat, this)
        };
        API.on(API.CHAT,this.proxy.onChat);
		String.prototype.equalsIgnoreCase = function(other) {
        return this.toLowerCase() === other.toLowerCase();
        };
    },
	settings: {
            autowoot         : false
    },
    initCSS: function() {
		$(".background").find('img').attr('src','http://i.imgur.com/gYDeX8Z.png');
        $('head').append('<link rel="stylesheet" type="text/css" href="https://dl.dropboxusercontent.com/s/xrc8z5doey7y4zc/style.css">');
		$('body').append('<div id="tooltip_custom" class="right" style="top: 28px; right: 120px; visibility: hidden;"><span>AutoWoot Enable/Disable</span><div class="corner"></div></div>');
		$('body').append('<div id="tooltip_custom1" class="right" style="top: 28px; right: 70px; visibility: hidden;"><span>AutoJoin Enable/Disable</span><div class="corner"></div></div>');
		$('#room').find('canvas').filter(function() { return $(this).css('opacity') < 1; }).remove();
		$('#room').append('<div class="is-leave" style="margin-top: 300px; text-align: center;"><a href="https://www.facebook.com/groups/547885508611462/" target="_blank"><img src="http://i.imgur.com/pq5mQcC.png"></a></div>');
		$('#dj-booth').append('<div id="rmbooth" style="background-image: url(http://i.imgur.com/tg0qpxC.png);"></div>');
		$('#chat-header').append('<div id="autowoot-button" class="chat-header-button" onMouseOver="show(\'tooltip_custom\')" onMouseOut="hide(\'tooltip_custom\')" onClick="woot()"><i class="icon icon-autowoot-off"></i></div>');
	},
    onChat: function(data){
    },
	autoWoot: function(data){
		API.on(API.DJ_ADVANCE, callback); 
		function callback(obj) { 
            if (RMEnhanced.settings.autowoot) {
                document.getElementById('woot').click(); 
            }
		}
	},
});
function woot() {
	        document.getElementById('woot').click(); 
			RMEnhanced.settings.autowoot = !RMEnhanced.settings.autowoot;
            if (RMEnhanced.settings.autowoot === false) {
              $("#autowoot-button").html('<i class="icon icon-autowoot-off"></i>');
            }
            if (RMEnhanced.settings.autowoot === true) {
              $("#autowoot-button").html('<i class="icon icon-autowoot"></i>');
            }
}
function show(id) {
    document.getElementById(id).style.visibility = "visible";
}
function hide(id) {
    document.getElementById(id).style.visibility = "hidden";
}
var RMEnhanced = new RMEnhancedModel();
