/*global L*/
var MapFunctions = {};
(function (MapFunctions) {
    'use strict';
    var mapServer = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
    MapFunctions.defaultCoordinates = {
        lat: 57.701286,
        lng: 11.982849
    };
    MapFunctions.isInitialized = false;
    MapFunctions.currentMap = {};
    MapFunctions.markers = {};
    MapFunctions.polygons = [];
    MapFunctions.markersCount = 0;
    MapFunctions.panOnClick = false;
    MapFunctions.divId = 'mapDiv',
    MapFunctions.init = function (divId, callback, callbackparams) {
        alert('Not implemented');
    };

    MapFunctions.zoomToFitMarkers = function (){
        alert('Not implemented');
    };

    MapFunctions.addMarker = function (marker, panTo){
        alert('Not implemented');
    };

    MapFunctions.removeMarker = function (marker) {
        alert('Not implemented');
    };

    MapFunctions.clearMarkers = function () {
        alert('Not implemented');
    };

    MapFunctions.markerClick = function (e) {
        alert('Not implemented');
    };

    MapFunctions.selectMarker = function (lt, lg, panTo) {
        alert('Not implemented');
    };

    MapFunctions.unselectAll = function () {
        alert('Not implemented');
    };

    MapFunctions.clearMap = function () {
        alert('Not implemented');
    };

    MapFunctions.mapClicked = function (e) {
        alert('Not implemented');
    };

    MapFunctions.mapMoved = function (e) {
        alert('Not implemented');
    };

    MapFunctions.dragEnd = function (e) {
        alert('Not implemented');
    };

    MapFunctions.addPolygon = function (coords){
        alert('Not implemented');
    };

    MapFunctions.addPolygonFromMarkers = function (){
        alert('Not implemented');
    };

    MapFunctions.clearPolygons = function (){
        alert('Not implemented');
    };

    $('body').on('onresize', '#divdetail-view-main', function () {
        alert('Not implemented');
    });

}(MapFunctions));