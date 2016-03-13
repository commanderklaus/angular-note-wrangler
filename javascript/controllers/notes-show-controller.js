angular.module('NoteWrangler').controller('NotesShowController', function ($scope, $routeParams, Note) {
	var controller = this;

	$scope.note = Note.get({id:$routeParams.id});

});