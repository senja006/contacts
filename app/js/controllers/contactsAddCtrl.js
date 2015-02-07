contacts.controller('contactsAddCtrl', ['$scope', 'myFireBase', '$firebase', 'fileUploader', '$rootScope', '$location', function($scope, myFireBase, $firebase, fileUploader, $rootScope, $location){

	$rootScope.contactToEdit = {};

	// скрытие кнопки удалить
	$scope.buttonDel = false;

	// сохранение контакта
	$scope.submitForm = function() {
		$rootScope.contacts.$add($rootScope.contactToEdit);
		$location.path('/');
	};

	// загрузка изображения
	$scope.uploadFile = function(file) {
		fileUploader.upload(file);
	};

}]);