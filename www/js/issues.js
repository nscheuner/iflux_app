angular.module('iflux.issues', [])

    //Issue list controller
    .controller('IssueCtrl', function(IssueService, apiUrl, $http, $ionicHistory, $ionicLoading, $scope, $state) {

        //Get all issues
    $scope.currentPage = 0;
	IssueService.getIssues(
		$scope.currentPage,
		function(data){
			$scope.issues = data;
			$scope.currentPage++;
			//$log.debug(data);
		}, 
		function(error){
			$scope.error = error;
		}
	);

	$scope.loadMoreIssues = function(){
		IssueService.getIssues(
			$scope.currentPage,
			function(data){
				Array.prototype.push.apply($scope.issues, data);
				$scope.currentPage++;
			},
			function(error){
				$scope.error = error;
			}
		);
	}
})
    // Specific issue controller

    .controller('IssueDetailsCtrl', function(IssueService, $log, $scope, $stateParams) {
        IssueService.getDetails(
            $stateParams.issueId,
            function(data) {
                $scope.issue = data;
                $scope.comments = data.comments;
                $scope.tags = data.tags;
            },
            function(error) {
                $scope.error = error;
            }
        );


    })
    //Add issue controller
.controller('createIssueCtrl', function($ionicHistory,IssueService, $log, $http, $scope, apiUrl, geolocation, $state){
    
    $scope.issueToAdd = {};
	
    geolocation.getLocation().then(function (data) {
        $scope.issueToAdd.lat = data.coords.latitude;
        $scope.issueToAdd.lng = data.coords.longitude;
    }, function (error) {
        $log.error("Geolocation error" + error);
    });

	// GET issueTypes
	IssueService.getIssueTypes(
		function(data){
			$scope.issuetypes = data;
		},
		function(error){
			$scope.error = error;
		}
	);
    $scope.createIssue = function (issueToAdd){
        issueToAdd.imageUrl = 'http://test.test';
        
        
        IssueService.createIssue(issueToAdd, 
		function(data){
          $ionicHistory.nextViewOptions({
          disableAnimate: true,
          historyRoot: true
        });
            $state.go('tab.issueList');
			$state.go('tab.issueDetails', {issueId: data.id});
		},
		function(error){
			alert.error('An error occured : '+ error);
		});
       
    }
})

    .factory('IssueService', function($http, apiUrl, $log) {
        return {

            //Get All Issue
            getIssues: function(page, callback, errorCallback) {
                $http({
                    method: 'GET',
                    url: apiUrl + '/issues/',
                    headers: {
					'x-pagination': page + ';20',
					'x-sort': '-createdOn'
				
				}
                    

                }).success(function(data, status, headers, config) {
                    callback(data);
                }).error(function(data, status, headers, config) {
                    errorCallback(data);
                });
            },
            //Get a specific issue with details
            getDetails: function(issueId, callback, errorCallback) {
                $http({
                    method: 'GET',
                    url: apiUrl + '/issues/' + issueId,
                }).success(function(data, status, headers, config) {
                    callback(data);
                }).error(function(data, status, headers, config) {
                    errorCallback(data);
                });
            },
            //get specific issue comments
            getComments: function(issueId, callback, errorCallback) {
                $http({
                    method: 'GET',
                    url: apiUrl + '/issues/' + issueId,
                }).success(function(data, status, headers, config) {
                    callback(data.comments);
                }).error(function(data, status, headers, config) {
                    errorCallback(data);
                });
            },
            //get all issue Types
            getIssueTypes: function(callback, errorCallback) {
                $http({
                    method: 'GET',
                    url: apiUrl + '/issueTypes'
                }).success(function(data, status, headers, config) {
                    callback(data);
                }).error(function(data, status, headers, config) {
                    errorCallback(data);
                });
            },
            //get issues related to a specific user
            getMyIssues: function(callback, errorCallback) {
                $http({
                    method: 'GET',
                    url: apiUrl + '/me/issues',
                }).success(function(data, status, headers, config) {
                    callback(data);
                }).error(function(data, status, headers, config) {
                    errorCallback(data);
                });
            },
            // Create an issue
		    createIssue : function (issue, callback, errorCallback){
			$http({
				method: 'POST',
				url: apiUrl + '/issues',
				data: issue
			}).success(function(data, status, headers, config){
				callback(data);		
			}).error(function(data, status, headers, config){
				errorCallback(data);
			});
		},
        }
    });