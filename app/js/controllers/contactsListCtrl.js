contacts.controller('contactsListCtrl', ['$scope', 'myFireBase', function($scope, myFireBase) {
	$scope.contacts = myFireBase.get();
}]);