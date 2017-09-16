angular.module('cadastroEmpresa').config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$stateProvider.state('dashboard', {
			url: "/dashboard",
			templateUrl: "dashboard/dashboard.html"
		}).state('cicloCadastro', {
			url: "/cicloCadastro",
			templateUrl: "cicloCadastro/tabs.html"
		})

		$urlRouterProvider.otherwise('/dashboard')
	}
]);