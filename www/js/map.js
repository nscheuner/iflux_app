angular.module('iflux.map', ['geolocation'])

.controller('MapController', function($scope, mapboxMapId, mapboxAccessToken, geolocation, IssueService, $log, apiUrl){
	
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
        
        $scope.mapMarkers.push({
		lat: data.coords.latitude,
		lng: data.coords.longitude, 
		message: '<p>HELLO</p>',
		
	});      

    })
	
});
