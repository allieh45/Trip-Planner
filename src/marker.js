import mapboxgl from "mapbox-gl";

const iconURLs = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png",
  activities: "http://i.imgur.com/WbMOfMl.png",
};

const buildMarker = function (type, coords) {
  const markerDomEl = document.createElement("div");
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  //console.log(iconURLs[type]);
  markerDomEl.style.backgroundImage = `url(${iconURLs[type]})`;

  // Create a new marker, set the longitude and latitude, and add it to the map
  new mapboxgl.Marker(markerDomEl).setLngLat(coords).addTo(map);
};

export default buildMarker;
