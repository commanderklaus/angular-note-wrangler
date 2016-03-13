angular.module('NoteWrangler').controller('NotesCreateController', function ($scope, Note) {
	$scope.note = new Note();

	$scope.saveNote = function(note) {
		$scope.errors = null;
		$scope.updating = true;

		
		note.save()
			.catch(function(note) {
				$scope.errors = note.data.error;
			})
			.finally(function () {
				$scope.updating = false;
			});
	};



});