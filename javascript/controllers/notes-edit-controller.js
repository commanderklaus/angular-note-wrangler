angular.module('NoteWrangler')
	.controller('NotesEditController', function ($scope, Note) {
		$scope.updateNote = function (note) {
			$scope.errors = null;
			$scope.updating = true;

			note.$update()
				.catch(function (note) {
					$scope.errors = [note.data.error];
				})
				.finally(function (){
					$scope.updating = false;
				});
		}

		$scope.deleteNote = function (note) {
			Note.$delete(note);
		}

	});