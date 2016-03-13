angular.module("NoteWrangler")
	.directive("title", function ($timeout) {

		return function (scope, element) {
			$timeout(function() {
				element.tooltip({ container: "body" });
			});

			scope.$on('destroy', function () {
				element.tooltip('destroy');
			});
		}
	}

	// sharing things with other directives: use controller
	// all other times: use link



	});