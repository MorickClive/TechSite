(function() {

    var indexController =  function() {
        var vm = this;
        // holds a global set
        vm.msg = "INDEX_PAGE";
    };

    angular.module('mod_morick_site').controller('indexController', [indexController]);
}());