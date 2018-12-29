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

	//jQuery to load pages using AJAX
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
				$('#bms-breadcrumb').html( $(responseHtml.responseText).find('#bms-breadcrumb').html() );
				window.history.pushState(newTitle, newTitle, parser.pathname);
			}
		});
		return false;
	});

	//jQuery to handle font-size slider
	$('#font-size-slider').on('change', function () {
		var v = $(this).val();
		$('#bms-content').css('font-size', v + '%');
		$('#bms-content').css('line-height', Math.max(3,(2.4 - v/100)) +'em');
		$('#font-size-value').html(v);
	});

	//jQuery to handle day-night mode switch
	$('#night-mode-switch input[type=radio]').change(function() {
		if (this.value == 'dayMode') {
			$('body').toggleClass('bms-n bms-d');
		}
		else if (this.value == 'nightMode') {
			$('body').toggleClass('bms-d bms-n');
		}
	});
});

$(window).resize(function() {
	//to disable height equalization on narrow viewport
	viewportwidth = $(window).width();
	if (viewportwidth>768) {
		$("#bms-sidebar-header").height($("#bms-header").height());
		}
});

