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
	};

	var _MyPrivateFunc = function()
	{

	};
})(window.jQuery, window, document);