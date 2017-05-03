import adminComponent from './admin'


let adminModule = angular.module('app.admin', [])
.component('admin', adminComponent)
.config(['$stateProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {
	$stateProvider
	.state('admin', {
		url: '/admin',
		abstract: true,
		templateUrl: 'js/components/adminblog/admin.html'
	})

	.state('admin', {
		url:'/admin',
		template: '<admin /><div class="container"><ui-view></ui-view></div>'
	})
}])
.name

export default adminsModule
