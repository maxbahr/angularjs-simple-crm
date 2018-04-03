export const routing = ($urlRouterProvider, $locationProvider, $stateProvider) => {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/customers/list');

    $stateProvider.state({
        name: 'list',
        url: '/customers/list',
        component: 'list'
    });

    $stateProvider.state({
        name: 'add',
        url: '/customers/add',
        component: 'add'
    });

    $stateProvider.state({
        name: 'edit',
        url: '/customers/edit/:id',
        component: 'edit'
    });

    $stateProvider.state({
        name: 'details',
        url: '/customers/details/:id',
        component: 'customerDetails'
    });

}