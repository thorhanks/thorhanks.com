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

		// Setup fit func to run on resize
		$(window).on("resize", _FitIntroSectionToWindow);


		$(window).scroll(function()
		{
			// True if scrolled distance is into the body section
			var isPastIntro = ($(window).scrollTop()) > ($("#body").offset().top);

			$('#logo').toggleClass('below', isPastIntro);
			$('#nav').toggleClass('sticky', isPastIntro);
			$('#visitSource').toggleClass('sticky', isPastIntro);
		});

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
		if(_isMobile())
			$("#body").css("margin-top", "0px");
		else
			$("#body").css("margin-top", newHeight + "px");
	};

	var _isMobile = function()
	{
		/// <summary>Returns true if window is currently set for mobile.</summary>

		// IF Intro section is fixed it means media queries
		// set it up for desktop width
		return !($("#intro").css("position") === "fixed");
	};
})(window.jQuery, window, document);