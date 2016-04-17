angular.module('iflux.map', ['geolocation'])

.controller('MapController', function($state, $scope, mapboxMapId, mapboxAccessToken, geolocation, IssueService, $log, apiUrl){
	
	var mapboxTileLayer = "http://api.tiles.mapbox.com/v4/" + mapboxMapId;
	mapboxTileLayer = mapboxTileLayer + "/{z}/{x}/{y}.png?access_token=" + mapboxAccessToken;
	
	$scope.mapDefaults = {
		tileLayer: mapboxTileLayer         
              
	};
        
            
	$scope.mapCenter = {
		lat: 46.78,
		lng: 6.65,
		zoom: 14
	};
   
		
	geolocation.getLocation().then(function(data) {
		$scope.mapCenter.lat = data.coords.latitude;
		$scope.mapCenter.lng = data.coords.longitude; 
        
    });
	
	
	

	IssueService.getIssues(0,
		function(data){
			$scope.mapMarkers = [];
			for(var i = 0; i < data.length; i++){
					var issue = data[i];
					$scope.mapMarkers.push({
                        lat: issue.lat,
                        lng: issue.lng,						
						focus: true,
						riseOnHover: true,
                        message: "<p>Description: {{ issue.description }}</br></p><a ng-href='#menu/issueDetailsFromMap/{{issue.id}}'>Détails</a><img src='{{ issue.imageUrl }}' width='200px' />",
						getMessageScope: function() {
                            var scope = $scope.$new();
                            scope.issue = issue;
                            return scope;
                        }
                     });   
				
			}
			$scope.finishedLoading = true;
		}, 
		function(error){
			$log.debug(error);
		}
	);
	function createMarkerScope(issue){
		return function(){
			var scope = $scope.$new();
			scope.issue = issue;
			return issue;
		}
	}
	

	
	
	
});
