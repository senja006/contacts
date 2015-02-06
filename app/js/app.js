var app = angular.module('app', [
	'contacts', 
	'firebase', 
	'myRoute'
]);

var contacts = angular.module('contacts', ['firebase', 'blueimp.fileupload'])
	.config(['$httpProvider', 'fileUploadProvider', function ($httpProvider, fileUploadProvider) {
			angular.extend(fileUploadProvider.defaults, {
		    disableImageResize: /Android(?!.*Chrome)|Opera/
		        .test(window.navigator.userAgent),
		    maxFileSize: 2000000,
		    acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i
		});
	}]);

var myRoute = angular.module('myRoute', ['ngRoute'])
	.constant('myBaseUrl', {
		'pageIndex': '/',
		'pageAdd': '/add-contacts',
		'pageEdit': '/edit-contacts'
	})
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider
			.when('/', {
				templateUrl: 'tpls/contacts-list.html',
				controller: 'contactsListCtrl'})
			.when('/add-contacts', {
				templateUrl: 'tpls/form.html',
				controller: 'contactsAddCtrl'})
			.when('/edit-contacts', 
				{templateUrl: 'tpls/form.html'})
			.otherwise({redirectTo: '/'});
	}]);