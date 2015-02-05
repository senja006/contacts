var app = angular.module('app', [
	'contacts', 
	'firebase', 
	'myRoute'
]);

var contacts = angular.module('contacts', ['firebase']);
var myRoute = angular.module('myRoute', ['ngRoute'])
	.constant('myBaseUrl', {
		'pageIndex': '/',
		'pageAdd': '/add-contacts',
		'pageEdit': '/edit-contacts'
	})
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode({
			enabled: true
  			// requireBase: false
		});

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