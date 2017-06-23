angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

.factory('jsonService',['$http', function($http, $scope){
	
	//return $http.get('../json/jsonTexos.json');

//	return $http.get('https://clinica-kenia-saad.firebaseio.com/clinica-kenia-saad.json');

	//return $http.get('https://clinica-kenia-saad.firebaseio.com/json.json');
	return $http.get('https://clinica-v5.firebaseio.com/json.json');

}]);