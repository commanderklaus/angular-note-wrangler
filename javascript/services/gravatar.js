angular.module('NoteWrangler')
	.provider("Gravatar", function GravatarProvider() {

		var avatarSize = 80; // default size
		var avatarUrl = "http://www.gravatar.com/avatar/";

		this.setSize = function (size) {

			avatarSize = size;
		}

		this.$get = function () {
			return function (email) {
				return avatarUrl + CryptoJS.MD5(email) + "?size=" + avatarSize.toString();
			}
		}
	});