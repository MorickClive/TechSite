(function() {

    var pokemonController =  function(pokeService, $http) {
        var vm = this;
        // holds a global set
        vm.myVar = undefined;
        
        vm.reverse = false;
        vm.doSort = function()
        {
            vm.sortby = 'Title';
            vm.reverse= !vm.reverse
        };


        vm.printToConsole = function(pokemonNo){
            console.log("requesting data");

            pokeService.getPokemonList(pokemonNo).then(function(results){
                console.log( results );
                vm.myVar = results;
            });
        }
    };

    angular.module('mod_morick_site').controller('pokemonController', ['pokeService', '$http', pokemonController]);
}());