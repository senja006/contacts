app.factory('myFireBase', ['$firebase', function($firebase){
	var url = 'https://contacts-all.firebaseio.com';
	return {
		get: function() {
			var ref = new Firebase(url);
			var sync = $firebase(ref);
			return sync.$asArray();
		},
		getSingle: function(id) {
			var ref = new Firebase(url).child(id);
			var sync = $firebase(ref);
			return sync.$asObject();
		},
	};
}]);