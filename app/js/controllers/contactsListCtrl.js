contacts.controller('contactsListCtrl', ['$scope', 'myFireBase', function($scope, myFireBase) {

	$scope.mode = true;
	
	$scope.contacts = myFireBase.get();

	$scope.toggleMode = function($event) {
		$event.preventDefault();
		$scope.mode = !$scope.mode;
	};
}]);