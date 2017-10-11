(function() {

    var P1Controller =  function() {
        var vm = this;
        // holds a global set
        vm.msg = "PAGE_1";
    };

    angular.module('mod_morick_site').controller('P1Controller', [P1Controller]);
}());