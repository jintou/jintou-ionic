angular.module('starter')
    .config(function ($urlRouterProvider, $stateProvider) {

        $urlRouterProvider.when(
            '#/user',
            '#/user/dashboard');

        $stateProvider
            .state('user.dashboard', {
                url: "/dashboard",
                params: {
                    isAnimated: false
                },
                views: {
                    'menuContent': {
                        templateUrl: "templates/blyn/core/user/html/user_dashboard.html",
                        controller: 'userDashboardCtrl as vm'
                    }
                }
            })
            .state('user.profile', {
                url: "/profile",
                params: {
                    isAnimated: false
                },
                views: {
                    'menuContent': {
                        templateUrl: "templates/blyn/core/user/html/profile.html",
                        controller: 'userProfileCtrl as vm'
                    }
                }
            })
            .state('user.trade', {
                url: "/trade",
                params: {
                    isAnimated: false
                },
                views: {
                    'menuContent': {
                        templateUrl: "templates/blyn/core/user/html/trade.html",
                        controller: 'userTradeCtrl as vm'
                    }
                }
            })
            .state('user.finance', {
                url: "/finance",
                params: {
                    isAnimated: false
                },
                views: {
                    'menuContent': {
                        templateUrl: "templates/blyn/core/user/html/finance.html",
                        controller: 'userFinanceCtrl as vm'
                    }
                }
            })
            .state('user.favorite', {
                url: "/favorite",
                params: {
                    isAnimated: false
                },
                views: {
                    'menuContent': {
                        templateUrl: "templates/blyn/core/user/html/favorite.html",
                        controller: 'userFavoriteCtrl as vm'
                    }
                }
            })
        //.state('user.space', {
        //    url: "/space "
        //    , params: {
        //        spaceId: -1
        //    }
        //    , views: {
        //        'menuContent': {
        //            templateUrl: "templates/blyn/core/space/html/userSpace.html",
        //            controller: 'spaceCtrl as vm'
        //        }
        //    }                               
        //     ,resolve: {
        //         currentSpace: function ($stateParams, $q, BSpace) {
        //             console.log("resolve user.space");
        //             if ($stateParams.spaceId) {
        //                  console.log("spaceId = " +  $stateParams.spaceId);
        //                 BSpace.setCurrent($stateParams.spaceId);
        //                 return BSpace.getCurrent();
        //             }
        //         }
        //     }
        //})
    })