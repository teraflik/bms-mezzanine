$(document).ready(function() {
	$('.bms-tree ul li a.bms-tree-expand').click(function(ev) {
	    $(this).next().next('.sub-menu').slideToggle();
	    ev.stopPropagation();
	});
});