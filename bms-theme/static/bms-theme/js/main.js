$(document).ready(function() {
	$('.bms-tree ul li a.bms-tree-expand').click(function(ev) {
	    $(this).next().next('.sub-menu').slideToggle();
	    ev.stopPropagation();
	});

	$("#bms-sidebar").mCustomScrollbar({
		theme: "minimal-dark",
		scrollInertia: 60
	});
	$('#sidebarCollapse').on('click', function () {
		$('#bms-sidebar, #bms-main').toggleClass('active');
		$('.collapse.in').toggleClass('in');
		$('a[aria-expanded=true]').attr('aria-expanded', 'false');
	});
	$("#bms-sidebar-header").height($("#bms-header").height());

	$('.bms-tree .bms-tree-link').on('click', function(e){
		var target = $(this).attr('href');
		var parser = document.createElement('a');
		parser.href = target;
		$.ajax({
			async: false,
			url: target,
			complete: function(responseHtml){
				var newTitle = $(responseHtml).filter('title').text();
				$('#bms-content').html( $(responseHtml.responseText).find('#bms-content').html() );
				$('#bms-header-bottom').html( $(responseHtml.responseText).find('#bms-header-bottom').html() );
				window.history.pushState(newTitle, newTitle, parser.pathname);
			}
		});
		return false;
	});
});

$(window).resize(function() {
	//to disable height equalization on narrow viewport
	viewportwidth = $(window).width();
	if (viewportwidth>768) {
		$("#bms-sidebar-header").height($("#bms-header").height());
		}
});

