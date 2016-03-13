angular.module('NoteWrangler', ['ngRoute', 'ngResource', 'Gravatar'])
	.config(function (GravatarProvider) {

		GravatarProvider.setSize(100);



	});