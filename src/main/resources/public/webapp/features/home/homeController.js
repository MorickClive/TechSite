(function() {

    var HomeController =  function() {
        var vm = this;
        // holds a global set
        vm.msg = "HOME_PAGE";
    };

    angular.module('mod_morick_site').controller('HomeController', [HomeController]);
}());