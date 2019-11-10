var position;
var date, hours, minute, seconds;
var latitude, logitude, timestamp;
var myLat, myLng;
var token = "pk.eyJ1IjoiZW1hbnVlbGVjb3BwbyIsImEiOiJjazJ0M2RnOW4xM2l1M2JsNDNqdXlneDRlIn0.547Nm9aZd0mz6TX4KbJtdw"

var myMap;
var mappa = new Mappa("MapboxGL", token);

function preload(){
  position = getCurrentPosition();
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);

  myLat = position.latitude;
  myLng = position.longitude;

  var options = {
    //https://docs.mapbox.com/mapbox-gl-js/api/#map
    //https://docs.mapbox.com/api/maps/#styles
    style: "mapbox://styles/emanuelecoppo/ck2t5l32v0s421cs0amhz6ggk",
    lat: myLat,
    lng: myLng,
    zoom: 6,
    minZoom: 0,
    pitch: 0,
  }

  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
}

function draw() {
  clear();
  var point = myMap.latLngToPixel(myLat, myLng);
  fill("red");
  noStroke();
  ellipseMode(CENTER);
  ellipse(point.x, point.y, 20);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
