var App = {};
(function(App) {
    'use strict';
    App.init = function() {
        $(document).on('mapclicked', '#mapDiv', App.addMarker);
        $(document).on('click', '#btnCreate', App.create);
        $(document).on('click', '#btnClear', App.clear);
        $(document).on('click', '#btnPost', App.post);
    };

    App.initMap = function() {
        MapFunctions.init('mapDiv');
    };

    App.markers = [];

    App.addMarker = function(e, latlng) {
        var marker = new google.maps.Marker({
            position: latlng,
            title: 'Marker',
            map: MapFunctions.currentMap
        });
        App.markers.push(marker);
        MapFunctions.addMarker(marker, false);
    };

    App.clear = function() {
        MapFunctions.clearMap();
    };

    App.create = function() {
        MapFunctions.addPolygonFromMarkers();
    };

    App.post = function() {
        var modal = $('#divModal'),
            body = $('.modal-body', modal);
        $(body).html('');
        $(App.markers).each(function(i, obj) {
            $(body).append($('<p>' + obj.position.lat() + ' ' + obj.position.lng() + '</p>'));
        });
        modal.modal('show');
    };

    $(document).ready(function() {
        App.init();
    });
}(App));