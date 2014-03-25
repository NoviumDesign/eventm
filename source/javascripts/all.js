//= require foundation/js/foundation.min

//= require app
//= require libs/stickySidebar.js
//= require script

$(document).foundation();

$('.reveal-modal').on('opened', function(){
    $(window).trigger('resize');
});