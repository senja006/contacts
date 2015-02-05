contacts.controller('contactsAddCtrl', ['$scope', 'myFireBase', '$firebase', function($scope, myFireBase, $firebase){

	// скрытие кнопки удалить
	$scope.buttonDel = false;

	// получени списка контактов
	var contacts = myFireBase.get();

	// отправка формы
	$scope.submitForm = function() {
		console.log(contacts);
		contacts.$add($scope.user);
	};

}]);