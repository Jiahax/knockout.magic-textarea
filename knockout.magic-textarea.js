var ko = require("knockout");
var $ = require("jquery");

var MIN_HEIGHT = 32; // 2 lines for body copy

function calculateLayout(element) {
	element.style.height = "auto";
	var newHeight = Math.max(MIN_HEIGHT, element.scrollHeight) + parseInt(window.getComputedStyle(element)["padding-top"]) + parseInt(window.getComputedStyle(element)["padding-bottom"]);
	$(element).outerHeight(newHeight);
}

ko.bindingHandlers.magicTextarea = {
	init: function (element) {
		setTimeout(function(){
			calculateLayout(element);
		}, 0);
		$(element).on("keydown keyup input paste propertychange click submit mouseenter", function() {
			setTimeout(function(){
				calculateLayout(element);
			}, 0);
		});
	},
	update: function(element) {
		setTimeout(function(){
			calculateLayout(element);
		}, 0);
	}
};
