var app=angular.module("Prepup",["ngRoute"]);

app.config(function($routeProvider) {
    
	$routeProvider.when("/", {
        templateUrl : "index.html",
        controller: "indexController"
    });
    
	$routeProvider.when("/home", {
        templateUrl : "App/Views/home.html",
        controller: "homeController"
    });
    
});
