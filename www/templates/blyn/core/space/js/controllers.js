(function () {
    'use strict'

    appControllers.controller('spaceCtrl', SpaceController);
    SpaceController.$inject=['$stateParams', '$q', 'BSpace'];
    function SpaceController ($stateParams, $q, BSpace) {
        var spaceId = $stateParams.spaceId;
     
         console.log("spaceId: " + spaceId);
          BSpace.setCurrent(spaceId);
         var  currentSpace =  BSpace.getCurrent();
           
         this.me = currentSpace.name;

    };

    appControllers.controller('spaceHomeCtrl', function ($scope) {

    });

})();
