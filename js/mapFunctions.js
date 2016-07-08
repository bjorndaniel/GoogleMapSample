/*global L*/
var MapFunctions = {};
(function(MapFunctions) {
    'use strict';
    var mapServer = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
    MapFunctions.defaultCoordinates = {
        lat: 57.701286,
        lng: 11.982849
    };
    MapFunctions.isInitialized = false;
    MapFunctions.currentMap = {};
    MapFunctions.markers = [];
    MapFunctions.polygons = [];
    MapFunctions.markersCount = 0;
    MapFunctions.panOnClick = false;
    MapFunctions.divId = 'mapDiv',
        MapFunctions.init = function(divId, callback, callbackparams) {
            MapFunctions.divId = divId ? divId : 'mapDiv'
            MapFunctions.currentMap = new google.maps.Map(document.getElementById(MapFunctions.divId), {
                center: {
                    lat: MapFunctions.defaultCoordinates.lat,
                    lng: MapFunctions.defaultCoordinates.lng
                },
                zoom: 15
            });
            MapFunctions.currentMap.addListener('click', MapFunctions.mapClicked);
            if (callback) {
                callback(callbackparams);
            }
        };

    MapFunctions.zoomToFitMarkers = function() {
        alert('Not implemented');
    };

    MapFunctions.addMarker = function(marker, panTo) {
        //TODO: keep track of marker
        MapFunctions.markers.push(marker);
    };

    MapFunctions.removeMarker = function(marker) {
        //TODO: Remove from array
        marker.setMap(null);
    };

    MapFunctions.clearMarkers = function() {
          MapFunctions.markers.forEach(function(element) {
            MapFunctions.removeMarker(element);
        }, this);
        MapFunctions.markers = [];
    };

    MapFunctions.markerClick = function(e) {
        alert('Not implemented');
    };

    MapFunctions.selectMarker = function(lt, lg, panTo) {
        alert('Not implemented');
    };

    MapFunctions.unselectAll = function() {
        alert('Not implemented');
    };

    MapFunctions.clearMap = function() {
        MapFunctions.clearMarkers();
        MapFunctions.clearPolygons();
    };

    MapFunctions.mapClicked = function(e) {
        var lat = e.latLng.lat(),
            lng = e.latLng.lng(),
            coords = {
                lat: lat,
                lng: lng
            };
        $('#' + MapFunctions.divId).trigger('mapclicked', coords);
        if (MapFunctions.panOnClick) {
            MapFunctions.currentMap.setCenter(coords);
        }
    };

    MapFunctions.mapMoved = function(e) {
        alert('Not implemented');
    };

    MapFunctions.dragEnd = function(e) {
        alert('Not implemented');
    };

    MapFunctions.addPolygon = function(coords) {
        alert('Not implemented');
    };

    MapFunctions.addPolygonFromMarkers = function() {
        var coords = [];
        MapFunctions.markers.forEach(function(element) {
            coords.push({
                lat: element.position.lat(),
                lng: element.position.lng()
            });

        }, this);
        var polygon = new google.maps.Polygon({
            paths: coords,
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
              fillOpacity: 0.35
        });
        polygon.setMap(MapFunctions.currentMap);
        MapFunctions.polygons.push(polygon);
    };

    MapFunctions.clearPolygons = function() {
        MapFunctions.polygons.forEach(function(element) {
            element.setMap(null);
        }, this);
        MapFunctions.polygons = [];
    };

    $('body').on('onresize', '#divdetail-view-main', function() {
        alert('Not implemented');
    });

}(MapFunctions));