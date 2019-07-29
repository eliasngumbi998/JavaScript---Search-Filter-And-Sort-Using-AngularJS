var app = angular.module("myModule", [])
		.controller("myController", function($scope){
			var members = [
				{firstname: "John", lastname: "Smith", gender: "Male"},
				{firstname: "Claire", lastname: "Temple", gender: "Female"},
			];
 
			$scope.members = members;
			$scope.reverseSort = false;
 
			$scope.sortData = function(column){
				$scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
				$scope.sortColumn = column;
 
			}
 
			$scope.getSortClass = function(column){
				if($scope.sortColumn == column){
					return $scope.reverseSort ?  'down-arrow' : 'up-arrow';
				}
				return '';
			}
});
