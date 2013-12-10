API.chatLog("Running Balkan Party Room Enhancements! v0.003", true);
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
        $('head').append('<link rel="stylesheet" type="text/css" href="https://dl.dropboxusercontent.com/s/xrc8z5doey7y4zc/style.css">');
		$('body').append('<div id="tooltip_custom" class="right" style="top: 28px; right: 120px; visibility: hidden;"><span>AutoWoot Enable/Disable</span><div class="corner"></div></div>');
		$('#room').find('canvas').filter(function() { return $(this).css('opacity') < 1; }).remove();
		$('#room').append('<div class="is-leave" style="margin-top: 300px; text-align: center;"><a href="https://www.facebook.com/groups/547885508611462/" target="_blank"><img src="http://i.imgur.com/pq5mQcC.png"></a></div>');
		$('#dj-booth').append('<div id="rmbooth" style="background-image: url(http://booth.com);"></div>');
		$('#chat-header').append('<div id="autowoot-button" class="chat-header-button" onMouseOver="show(\'tooltip_custom\')" onMouseOut="hide(\'tooltip_custom\')" onClick="woot()"><i class="icon icon-autowoot-off"></i></div>');
	},
    onChat: function(data){
                if(data.message == "!test" && data.fromID == "51c643cd3e083e3100606c73"){
                if(data.message == "!test" && data.fromID == "51c6fbb696fba562bc621943"){
            API.chatLog("Skripta je uspješno pokrenuta! <idle>",true);
        }
                if(data.message == "!pravila" && data.fromID == "51c643cd3e083e3100606c73"){
                if(data.message == "!pravila" && data.fromID == "51c6fbb696fba562bc621943"){
            API.chatLog("Pročitajte pravila koja se nalaze u Info i pridružite se našoj FB grupi.",true);
                setTimeout(function() {
               API.chatLog("FB grupa http://adf.ly/X2U62",true);
                },100);
        }
                if(data.message == "!op" && data.fromID == "51c643cd3e083e3100606c73"){
                if(data.message == "!op" && data.fromID == "51c6fbb696fba562bc621943"){
            API.chatLog("Ova pjesma se pušta bar 20 puta dnevno, Sljedeći put pustite nešto originalnije. :/",true);
        }
                if(data.message == "!rf" && data.fromID == "51c643cd3e083e3100606c73"){
                if(data.message == "!rf" && data.fromID == "51c6fbb696fba562bc621943"){
            API.chatLog("*script changes have made, you should refresh the page*",true);
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
