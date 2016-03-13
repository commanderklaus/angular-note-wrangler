angular.module('NoteWrangler').directive("nwCard", function ($sce) {
	var num = 1;


	return {
		restrict: 'E',
		template: 'templates/directives/nw-card.html',
		scope: {
			header: '=',
			icon: '=',
			image: '='
		},
		link: function (scope, element, attrs) { // runs after directive has been compiled and linked up
			// element: outermost element in template, .card in nw-card.html
			// attrs: attributes set on directive, 

			scope.body = $sce.trustAsHtml(markdown.toHTML(scope.body));

			element.on('click', function () {
				element("div.card p").toggleClass("hidden");
			})
			

		}
	};
});