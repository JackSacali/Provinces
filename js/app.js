(function () {
  'use strict';
angular.module("webApp",[])
    .controller("provinceController",['Province', provinceController])
    .service("Province",Province)
    .component('provinceCard', {
      bindings: {
          provinces: '='
      },
      templateUrl: 'cards/single-province.html'
    });
    

    
    
    
    
}());


