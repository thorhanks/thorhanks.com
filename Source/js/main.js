// DEPENDENCIES: jQuery
(function($, window, document)
{
	"use strict";

	$(function() { _Init(); }); // jQuery ready event to kick off Init

	var _Init = function()
	{
		/// <summary>Initializes the page.</summary>

		if($("#intro").css("position") === "fixed")
		{
			var viewportHeight = $(window).height();
			$("#intro").height(viewportHeight);
			$("#body").css("margin-top", viewportHeight + "px");
		}

		$(window).scroll(function()
		{
			// True if scrolled distance is into the body section
			var isPastIntro = ($(window).scrollTop()) > ($("#body").offset().top);

			$('#nav').toggleClass('sticky', isPastIntro);
			$('#visitSource').toggleClass('sticky', isPastIntro);
		});
	};

	var _MyPrivateFunc = function()
	{

	};
})(window.jQuery, window, document);