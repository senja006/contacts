var app = angular.module('app', [
	'contacts', 
	'firebase', 
	'myRoute',
	'angularFileUpload'
]);

var contacts = angular.module('contacts', ['firebase']);
var myRoute = angular.module('myRoute', ['ngRoute'])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider
			.when('/', {
				templateUrl: 'tpls/contacts-list.html',
				controller: 'contactsListCtrl'})
			.when('/add-contacts', {
				templateUrl: 'tpls/form.html',
				controller: 'contactsAddCtrl'})
			.when('/edit-contacts/:id',
				{templateUrl: 'tpls/form.html',
				controller: 'contactsEditCtrl'})
			.otherwise({redirectTo: '/'});
	}]);