API.chatLog("BP Room Script running :ballot_box_with_check: version 0.022 [160414]", true);
API.chatLog("http://adf.ly/aV2hG Room Script, http://adf.ly/X2U62 FB Grupa, http://adf.ly/e3Kol OP Lista, http://adf.ly/a6btD Plug³", false);
}
if (plugCubed === undefined) {
    setTimeout(function() { 
        $.getScript('https://d1rfegul30378.cloudfront.net/alpha/plugCubed.js');
        //$.getScript('https://d1rfegul30378.cloudfront.net/alpha/plugCubed.js');
        //$.getScript('https://d1rfegul30378.cloudfront.net/files/plugCubed.js');
    },750);
   };
if (plugCubed !== undefined) plugCubed.close();

(function() {
    if (!requirejs.defined('ba783/cb11e/b58aa'))
        return API.chatLog('This version of plug&#179; is not compatible with this version of plug.dj', true), false;

    define('ff0831/c960fa', ['jquery', 'underscore', 'ba783/cb11e/b58aa', 'ba783/cb11e/a882f', 'ba783/a03e8/b94e2', 'ba783/e9c92/e56e1', 'ba783/e7698/cb1cb', 'ba783/cd0b5/ef161', 'ba783/fef90/dad16', 'ba783/f27d8/b0942', 'ba783/f27d8/de526', 'ba783/cd0b5/decc3', 'lang/Lang', 'ba783/a849a/a1f3e/c2f48', 'ba783/fef90/f7969', 'ba783/fef90/ad91a', 'ff0831/e4a458', 'ba783/a849a/a1f3e/cdb59/f56c0', 'ba783/a849a/a1f3e/cdb59/ce96b', 'ff0831/b978ba', 'ff0831/ecb90b', 'ff0831/ac3e26', 'ba783/e9c92/c981b', 'ba783/cd0b5/db259', 'ff0831/cd4ccc/c52d43', 'ff0831/b8f89a', 'ff0831/ed26d7', 'ff0831/cd4ccc/e7144c', 'ba783/a849a/a1f3e/f1c3a/a7bd3', 'ba783/a849a/a1f3e/cdb59/ad99c'], function($, _, Class, Context, Chat, LocalStorage, Utils, Room, MCE, Socket, SIO, TUM, Lang, Audience, RJE, RSE, Styles, RoomUserListView, RoomUserListRow, _RoomUserListRow, p3Lang, p3Utils, Database, PlaybackModel, dialogCommands, Slider, VolumeView, dialogColors, PopoutView, UserPanelView) {
        SIO.sio.$events.chat = Socket.listener.chat = function(a) {
            if (typeof plugCubed !== 'undefined') {
                if (a.fromID) setUserData(a.fromID, 'lastChat', Date.now());
                }
initEnvironment();
var plugCubed,
RMEnhancedModel = require('ba783/cd0b5/ef161').extend({
    init: function(){
        setTimeout($.proxy(this.initCSS,this), 1500);
        this.proxy = {
            onChat: $.proxy(this.onChat, this)
        };
        API.on(API.CHAT,this.proxy.onChat);
        String.prototype.equalsIgnoreCase = function(other) {
        return this.toLowerCase() === other.toLowerCase();
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
});
var RMEnhanced = new RMEnhancedModel();
