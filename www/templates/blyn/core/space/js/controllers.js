(function () {
    'use strict'

    appControllers.controller('spaceCtrl', SpaceController);
    SpaceController.$inject=['currentSpace'];
    function SpaceController (currentSpace) {
           this.me = currentSpace.name;

    };

    appControllers.controller('spaceHomeCtrl', function ($scope) {

    });

})();
