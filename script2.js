API.chatLog("Running Balkan Party Room Enhancements!", true);
function initEnvironment(){}
initEnvironment();
var plugCubed,
RMEnhancedModel = require('ac785/bc190/b96e1').extend({
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
        $('head').append('<link rel="stylesheet" type="text/css" href="http://pastebin.com/raw.php?i=UDT5agBa">');
		$('body').append('<div id="tooltip_custom" class="right" style="top: 28px; right: 120px; visibility: hidden;"><span>AutoWoot Enable/Disable</span><div class="corner"></div></div>');
		$('#room').find('canvas').filter(function() { return $(this).css('opacity') < 1; }).remove();
		$('#room').append('<div class="is-leave" style="margin-top: 300px; text-align: center;"><a href="http:/bla.com" target="_blank"><img src="http://i.imgur.com/hePOODi.png"></a></div>');
		$('#dj-booth').append('<div id="rmbooth" style="background-image: url(http://radiantedm.com/rmscript/img/djbooth.jpg);"></div>');
		$('#chat-header').append('<div id="autowoot-button" class="chat-header-button" onMouseOver="show(\'tooltip_custom\')" onMouseOut="hide(\'tooltip_custom\')" onClick="woot()"><i class="icon icon-autowoot-off"></i></div>');
	},
    onChat: function(data){
		if(data.message == "!testing" && data.fromID == "51c6fbb696fba562bc621943"){
            API.chatLog("Command Recieved!",true);
        }
		if(data.message == "!rmafk" && data.fromID == "51c6fbb696fba562bc621943"){
            API.chatLog("Rules of Inactivity: The bot classes you as inactive after 15 minutes of not talking. Messages must be at least 2 words long. The messages however cannot be the same as the previous one.",true);
                setTimeout(function() {
               API.chatLog("The minimum amount of characters is 5, this must include a space too. This is why we say at least 2 words are required.",true);
                },100);
		}
		if(data.message == "!whoisrunning" && data.fromID == "51c6fbb696fba562bc621943"){
            API.sendChat("I'm Running Radiant Music's RoomScript!");
        }

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
