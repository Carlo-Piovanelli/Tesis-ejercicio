var mapa = L.map('mapa').setView([-0.186, -78.499],10);
 L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 20,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'png'
}). addTo(mapa);

$.getJSON("https://carlo-piovanelli.github.io/Tesis-ejercicio/Tesis ejercicio.geojson",
function(data){
var clusteredPoints = L.markerClusterGroup();
var marker = L.geoJson(data,{
  onEachFeature: function (feature, layer){
        L.marker (layer);
    layer.bindPopup('<b>Titulo: </b>' + feature.properties.TITULO_TESIS_O_INVESTIGACION + 
                         '<br>\<b>Autor(es): </b>' + feature.properties.AUTOR_O_AUTORES+ 
                         '<br>\<b>Tutor(es): </b>' + 
feature.properties.TUTOR_DE_TESIS )
        }
    }, 
     );
  clusteredPoints.addLayer(marker);
  mapa.addLayer(clusteredPoints)
});