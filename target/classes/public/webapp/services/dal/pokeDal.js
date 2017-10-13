"use strict";

(function () {

    angular.module("mod_morick_site").service("PokeDal", ["dal", PokeDal]);

    function PokeDal (dal) {

        this.getPokemonList = function (num) {
            return dal.http.GET("https://pokeapi.co/api/v2/pokemon/"+num+"/");
        };

        /*this.saveBook = function (bookToSave) {
            return dal.http.POST("", bookToSave);
        };

        this.updateBook = function (bookToUpdate) {
            return dal.http.PUT("", bookToUpdate);
        };

        this.deleteBook = function (bookToDelete) {
            return dal.http.DELETE("", bookToDelete);
        };*/

    }
}());
