contacts.factory('myFireBase', ['$firebase', function($firebase){
	var url = 'https://contacts-all.firebaseio.com';
	var ref = new Firebase(url);
	return {
		get: function() {
			var sync = $firebase(ref);
			return sync.$asObject();
		},
	};
}]);