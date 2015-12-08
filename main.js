$(document).ready(function() {

$(".mainmenu li").hover(function() {
	$(this).find(".submenu").removeClass("hide");
}, function() {
	$(this).find(".submenu").addClass("hide");
});

});