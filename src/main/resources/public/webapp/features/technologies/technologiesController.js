(function() {

    var techController =  function() {
        var vm = this;
        // holds a global set
        vm.msg = "PAGE_TECHO";
              
        
    };

    angular.module('mod_morick_site').controller('techController', [techController]);
}());