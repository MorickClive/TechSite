"use strict";
(function () {

    angular.module('mod_morick_site').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("home");

        $stateProvider.state("home", {
            url: "/home",
            templateUrl: "webapp/features/home/home.html"
        }).state("projects", {
            url:"/projects",
            templateUrl:"webapp/features/projects/projects.html"
        }).state("technologies", {
            url:"/technologies",
            templateUrl:"webapp/features/technologies/technologies.html"
        }).state("pokesearch", {
            url:"/pokesearch",
            templateUrl:"webapp/features/technologies/pokesearch/pokesearch.html"
        }).state("about", {
            url:"/about",
            templateUrl:"webapp/features/about/about.html"
        }).state("page1", {
            url:"/page1",
            templateUrl:"webapp/features/page1/page1.html"
        })
    });
}());