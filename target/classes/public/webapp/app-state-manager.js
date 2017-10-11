"use strict";
(function () {

    angular.module('mod_morick_site').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("home");

        $stateProvider.state("home", {
            url: "/home",
            templateUrl: "webapp/features/home/home.html"

        }).state("page1", {
            url:"/page1",
            templateUrl:"webapp/features/page1/page1.html"
        })
    });
}());