function yTestRoutes($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/');

  $stateProvider
    .state('root', {
      url: '/',
      component: 'main'
    })
    .state('video', {
      url: '/video/:albumId/:id',
      component: 'albumItem'
    })
    .state('album', {
      url: '/album/:id',
      component: 'album'
    })
  $urlRouterProvider.otherwise('/');
}
/* @ngInject */
export default yTestRoutes;
