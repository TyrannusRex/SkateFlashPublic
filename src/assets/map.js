
$('#map').ready(function(){
 const pos = ol.proj.fromLonLat([-100.4276, 20.6076815,]);
   const vectorSource = new ol.source.Vector();
   vectorLayer = new ol.layer.Vector({
       source: vectorSource
   });

   var styles = {
    route: new ol.style.Style({
      stroke: new ol.style.Stroke({
        width: 3,
        color: [194, 90, 89, 1],
        lineDash: [0.1, 5]
      })
    })
  };
   const map = new ol.Map({
       target: 'map',
       interactions: ol.interaction.defaults({
           doubleClickZoom: false,
           dragAndDrop: true,
           dragPan: false,
           keyboardPan: false,
           keyboardZoom: false,
           mouseWheelZoom: false,
           pointer: false,
           select: false
       }),
       layers: [
           new ol.layer.Tile({
               source: new ol.source.OSM({}),
               tileOptions: { crossOriginKeyword: 'anonymous' }
           }),
           vectorLayer
       ],
       view: new ol.View({
           center: pos,
           zoom: 16
       })
   });
   const marker = new ol.Overlay({
       position: pos,
       positioning: 'center-center',
       element: document.getElementById('marker'),
       stopEvent: false
   });

   map.addOverlay(marker);
});
