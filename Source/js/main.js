// DEPENDENCIES: jQuery
(function($, window, document)
{
	var introOriginalHeight;

	"use strict";

	$(function() { _Init(); }); // jQuery ready event to kick off Init

	var _Init = function()
	{
		/// <summary>Initializes the page.</summary>

		introOriginalHeight = $("#intro").height();

		// Call once to init
		_FitIntroSectionToWindow();

		$(window).on("resize", _Debounce(_FitIntroSectionToWindow, 300, false));
		$(window).on("scroll", _Debounce(_HandleScroll, 300, false));

		// History timeline bar on click handler
		$("#about").find(".history .bar").on("click", function()
		{
			document.getElementById("about").className = this.attributes["data-id"].value + " section";
		});

		// Project click handler
		$("#work").find(".project").on("click", function(e)
		{
			var $target = $(e.target);

			if(!$target.is("a"))
				$(this).toggleClass("selected");
		});
	};

	var _FitIntroSectionToWindow = function()
	{
		/// <summary>Adjust intro section to fill the viewport height.</summary>

		var contentHeight = $("#intro > div").height() + 150;
		var viewportHeight = $(window).height();

		// IF the window view is taller than the content then use it else keep content height
		var newHeight = (viewportHeight > contentHeight) ? viewportHeight : contentHeight;
		
		$("#intro").height(newHeight);

		// IF window is mobile width
		if(_IsMobile())
			$("#body").css("margin-top", "0px");
		else
			$("#body").css("margin-top", newHeight + "px");
	};

	var _HandleScroll = function()
	{
		// True if scrolled distance is into the body section
		var isPastIntro = ($(window).scrollTop()) > ($("#body").offset().top);

		$('#nav').toggleClass('sticky', isPastIntro);
		$('#visitSource').toggleClass('sticky', isPastIntro);
	};

	var _IsMobile = function()
	{
		/// <summary>Returns true if window is currently set for mobile.</summary>

		// IF Intro section is fixed it means media queries
		// set it up for desktop width
		return !($("#intro").css("position") === "fixed");
	};

	var _Debounce = function(func, wait, immediate)
	{
		// Returns a function, that, as long as it continues to be invoked, will not
		// be triggered. The function will be called after it stops being called for
		// N milliseconds. If `immediate` is passed, trigger the function on the
		// leading edge, instead of the trailing.

		var timeout;
		return function()
		{
			var context = this, args = arguments;
			clearTimeout(timeout);
			timeout = setTimeout(function()
			{
				timeout = null;
				if(!immediate) func.apply(context, args);
			}, wait);
			if(immediate && !timeout) func.apply(context, args);
		};
	};

})(window.jQuery, window, document);