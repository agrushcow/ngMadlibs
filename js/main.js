angular.module('myApp', [])
    .controller('MyCtrl', function($scope) {

    	var male = ['he', 'him', 'his', 'male name'];
    	var female = ['she', 'her', 'her ', 'female name'];
    	$scope.gender = 'male';

    	$scope.changeGender = function(){
    		if ($scope.gender == 'female') {
	        $scope.he = female[0];
	        $scope.him = female[1];
	        $scope.his = female[2];
	        $scope.male_name_placeholder = female[3];
	       } else {
	       	$scope.he = male[0]; 
	       	$scope.him = male[1];
	       	$scope.his = male[2];
	       	$scope.male_name_placeholder = male[3];
	       }
    	}
    	$scope.changeGender();
    });





