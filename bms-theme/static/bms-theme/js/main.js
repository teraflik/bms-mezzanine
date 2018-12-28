$(document).ready(function() {
	$('.bms-tree ul li a.bms-tree-expand').click(function(ev) {
	    $(this).next().next('.sub-menu').slideToggle();
	    ev.stopPropagation();
	});

	$("#bms-sidebar").mCustomScrollbar({
		theme: "minimal"
	});
	$('#sidebarCollapse').on('click', function () {
		$('#bms-sidebar, #bms-main').toggleClass('active');
		$('.collapse.in').toggleClass('in');
		$('a[aria-expanded=true]').attr('aria-expanded', 'false');
	});
	$("#bms-sidebar-header").height($("#bms-header").height());
});

$(window).resize(function() {
	$("#bms-sidebar-header").height($("#bms-header").height());
});

