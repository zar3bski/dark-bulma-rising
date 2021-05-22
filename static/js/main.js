$(document).ready(function() {
	hljs.initHighlightingOnLoad();
	
	$(".modal-button").click(function() {
	  var target = $(this).data("target");
	  $("html").addClass("is-clipped");
	  $(target).addClass("is-active");
	});

	$(".modal-close").click(function() {
	  $("html").removeClass("is-clipped");
	  $(this).parent().removeClass("is-active");
	});
/*
	$(".tab_btn").click(function() {
	  var target = $(this).data("target");
	  var other = $(this).data("hide");
	  $(target).removeClass("is-hidden");
	  $(other).addClass("is-hidden");
	});
*/
	$('.nav-tabs > li > a').click(function(event){
		var active_tab_selector = $(this).parents('ul').children('li').filter(".is-active").children('a').attr('href');
		event.preventDefault();					
					
		//find actived navigation and remove 'active' css
		var actived_nav = $(this).parents('ul').children('li').filter(".is-active");
		//console.log(actived_nav);
		actived_nav.removeClass('is-active');
					
		//add 'active' css into clicked navigation
		$(this).parents('li').addClass('is-active');
					
		//hide displaying tab content
		$(active_tab_selector).removeClass('is-active');
		$(active_tab_selector).addClass('is-hidden');
					
		//show target tab content
		var target_tab_selector = $(this).attr('href');
		$(target_tab_selector).removeClass('is-hidden');
		$(target_tab_selector).addClass('is-active');
	});

	$(".navbar-burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  	});

});

