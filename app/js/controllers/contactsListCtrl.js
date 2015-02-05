contacts.controller('contactsListCtrl', ['$scope', 'myFireBase', function($scope, myFireBase) {

	// режима просмотра по умолчанию
	$scope.mode = true;

	// получение списка контактов
	$scope.contacts = myFireBase.get();

	// переключение режима просмотра
	$scope.toggleMode = function() {
		$scope.mode = !$scope.mode;
	};
}]);