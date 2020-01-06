import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment.prod';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {
    map: Mapboxgl.Map;

    constructor() {}

    ngOnInit() {
        this.createMapbox();
    }
    createMapbox() {
        Mapboxgl.accessToken = environment.mapboxKey;
        this.map = new Mapboxgl.Map({
            container: 'map-box',
            style: 'mapbox://styles/mapbox/light-v10',
            center: [-100.3853049, 20.6006471], // starting position
            zoom: 16 // starting zoom
        });

        // Add zoom and rotation controls to the map.
        // this.map.addControl(new Mapboxgl.NavigationControl());


        const marker = new Mapboxgl.Marker({
            draggable: false
            })
            .setLngLat([-100.3853049, 20.6006471])
            .addTo(this.map);
            /*
            function onDragEnd() {
            var lngLat = marker.getLngLat();
            coordinates.style.display = 'block';
            coordinates.innerHTML =
            'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
            }

            marker.on('dragend', onDragEnd);*/
    }

}
