contacts.controller('contactsEditCtrl', ['$scope', 'myFireBase', '$firebase', 'fileUploader', '$rootScope', '$location', function($scope, myFireBase, $firebase, fileUploader, $rootScope, $location) {
	
	// показ кнопки удалить
	$scope.buttonDel = true;

	// получение контакта для редактирования
	$rootScope.contactToEdit = myFireBase.getSingle($rootScope.contactToEditId);

	// сохранение измененного контакта
	$scope.submitForm = function() {
		$rootScope.contactToEdit.$save();
		$location.path('/');
	};

	// загрузка изображения
	$scope.uploadFile = function(file) {
		fileUploader.upload(file);
	};

}]);