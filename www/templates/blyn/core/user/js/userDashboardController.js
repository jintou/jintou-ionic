(function(){
    // appControllers.controller('userDashboardCtrl', function ($scope) {

    // });

     appControllers.controller('userDashboardCtrl', UserDashboardControllere);

     UserDashboardControllere.$inject=['BUser'];

     function UserDashboardControllere(BUser){
         var vm = this;
         vm.mySpaces = BUser.getMySpaces();
       //  alert(vm.mySpace.length);    
     };
})();