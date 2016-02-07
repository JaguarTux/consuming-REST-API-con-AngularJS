// public/js/app/controllers.js
'use strict';
/* Controllers */
var appAgJS = angular.module('appAngularjs.controllers', []);
    appAgJS.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {

        // Funcionalidad del controlador
        $scope.holaMundo = "Hola desde AngularJS!!";
        var getUsers = function() {
        	$http.get('http://127.0.0.1:5000/users',{headers: {'Authorization': 'Basic YWRtaW46c2VjcmV0'}}).
	        success(function(data) {
	            $scope.greeting = data;
	        });
        }
        $scope.newUser = function() {
            console.log('jag', $scope.nUser);
            $http.post('http://127.0.0.1:5000/users', $scope.nUser,{headers: {'Authorization': 'Basic YWRtaW46c2VjcmV0'}})
            .success(function(response) {
                if(response.status === "OK") { // Si nos devuelve un OK la API...
                	console.log(response);
                    $scope.nUser = {}; // Limpiamos el scope
                    getUsers(); // Actualizamos la lista de ToDo's
                }
            });
        }
		getUsers();
    }]);
    appAgJS.directive('showUsers', function() {
		return {
    		restrict: 'E',
    		templateUrl: 'users.html'
  		};
	});
	appAgJS.directive('frmUser', function() {
		return {
    		restrict: 'E',
    		templateUrl: 'frmuser.html'
  		};
	});