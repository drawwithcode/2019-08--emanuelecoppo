var key = "pk.eyJ1IjoiZW1hbnVlbGVjb3BwbyIsImEiOiJjazJ0N3UwMjgwbnkwM2hwdm94ZHVydjUwIn0.Pj461W5faCuO9LNZtO8R-A";
var mappa = new Mappa("MapboxGL", key);
var myMap;
var canvas;
var position, myLat, myLng;
var itLat = 42.504154, itLng = 12.646361;

var options = {
  lat: itLat,
  lng: itLng,
  zoom: 5,
  minZoom: 5,
  pitch: 0,
  style: "mapbox://styles/mapbox/dark-v9",
}

var rnd = 0;
var p = [];
var places = [
  {lat: 43.64229, lng: 10.62826}, //La Borra
  {lat: 41.36246, lng: 15.31228}, //Troia
  {lat: 42.86943, lng: 12.55935}, //Bastardo
  {lat: 46.52666, lng: 10.17484}, //Trepalle
  {lat: 38.08898, lng: 13.46774}, //Ficarazzi
  {lat: 40.87793, lng:  8.90875}, //Scupaggiu
  {lat: 45.79670, lng:  8.73318}, //Cazzago Brabbia
  {lat: 38.14242, lng: 15.26287}, //Femminamorta
  {lat: 44.88783, lng: 12.32918}, //Gnocca
  {lat: 42.76280, lng: 13.36789}, //Favalanciata
  {lat: 45.43123, lng:  9.98930}, //Pompiano
  {lat: 42.65559, lng: 13.06115}, //Chiavano
  {lat: 44.25066, lng:  9.87943}, //Camporella
];

function preload(){
  position = getCurrentPosition();
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);

  myLat = position.latitude;
  myLng = position.longitude;
}

function draw() {
  clear();

  //my position
  var point = myMap.latLngToPixel(myLat, myLng);
  noStroke();
  ellipseMode(CENTER);
  fill("rgba(27, 137, 255, .5)");
  ellipse(point.x, point.y, 35);
  fill("white");
  ellipse(point.x, point.y, 25);
  fill("rgba(27, 137, 255, 1)");
  ellipse(point.x, point.y, 20);

  //places
  fill("rgb(255, 0, 0)");
  stroke("rgba(255, 0, 0, .5)");
  strokeWeight(5);
  for (var i = 0; i < places.length; i++) {
    p[i] = myMap.latLngToPixel(places[i].lat, places[i].lng);
    ellipse(p[i].x, p[i].y, 10);
  }
}

function fly(val) {
  rnd = round(random(0, places.length-1));
  select("#MapboxGL").remove();
  if (val==1) {
    options.lat = places[rnd].lat;
    options.lng = places[rnd].lng;
    options.zoom = 14;
  }
  else if (val==0) {
    options.lat = itLat;
    options.lng = itLng;
    options.zoom = 5;
  }
  options.pitch = 0;
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
}
