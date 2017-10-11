(function() {

    var pokeService =  function(PokeDal) {
        
    	this.getPokemonList = function(num)
        {
            return PokeDal.getPokemonList(num);
        };
    };

    angular.module('mod_morick_site').service('pokeService', ['PokeDal', pokeService]);
}());