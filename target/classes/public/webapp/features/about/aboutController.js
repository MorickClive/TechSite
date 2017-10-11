(function() {

    var aboutController =  function() {
        var vm = this;
        // holds a global set
        vm.msg = "PAGE_ABOUT";
    };

    angular.module('mod_morick_site').controller('aboutController', [aboutController]);
}());