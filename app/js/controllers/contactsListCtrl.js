contacts.controller('contactsListCtrl', ['$scope', 'myFireBase', '$firebase', '$rootScope', '$location', function($scope, myFireBase, $firebase, $rootScope, $location) {

	// режима просмотра по умолчанию
	if(!$rootScope.mode) {
		$rootScope.mode = false;
	}

	// получение списка контактов
	if(!$rootScope.contacts) {
		$rootScope.contacts = myFireBase.get();
	}
	
	// переключение режима просмотра
	$scope.toggleMode = function() {
		$rootScope.mode = !$rootScope.mode;
	};

	// получение id редактируемого контакта
	$scope.getId = function(contact) {
		$rootScope.contactToEditId = contact.$id;
	};

}]);