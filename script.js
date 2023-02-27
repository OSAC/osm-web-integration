// show the openstreet map to ascol
var ascolCoordinate = [27.71772, 85.31298];
var zoomLevel = 18;
var map = L.map("map").setView(ascolCoordinate, zoomLevel);
tileProperties = { maxZoom: 25 };
L.tileLayer(
  "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  tileProperties
).addTo(map);

// Now add a blue marker
var marker = L.marker(ascolCoordinate).addTo(map);

// Show simple text popup on that marker
marker.bindPopup("<b>This is my college</b>").openPopup();

// Create a click tracker that detects the coordinate you click on the map
var popup = L.popup();
function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(map);
}
map.on("click", onMapClick);
