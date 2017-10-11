(function() {

    var projectsController =  function() {
        var vm = this;
        // holds a global set
        vm.msg = "PAGE_PROJECTS";
    };

    angular.module('mod_morick_site').controller('projectsController', [projectsController]);
}());