$(document).ready(function(){

  //map initiation
  var map = L.map("map").setView([54.967761, -1.606064], 12);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 300,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  //Markers, circles, and polygons

  //circles random coordinates
  var coordList = [
    "54.976629, -1.653442",
    "54.978402, -1.557312",
    "54.954357, -1.63559",
    "54.978599, -1.543236",
  ];

//pick a random position
// let randomCoordinatesIndex = Math.floor(Math.random() * coordList.length + 1);

// console.log(randomCoordinatesIndex);
// let randomCoordinates = coordList[randomCoordinatesIndex];

// if(randomCoordinates){

// let randomCoordinatesArray = randomCoordinates.split(',');  

   
//   var circle = L.circle(randomCoordinatesArray
//   , {
//     color: "red",
//     fillColor: "#c92631",
//     fillOpacity: 0.5,
//     radius: 500,
//   }).addTo(map);
//   circle.bindPopup("RED ZONE!!");
// }

  var marker = L.marker([54.946171, -1.557066]).addTo(map);
  marker.bindPopup(
    "<b>Felling Cricket Club</b><br>High Heworth Lane, Gateshead NE10 9XD"
  );

  var marker = L.marker([54.942638, -1.594467]).addTo(map);
  marker.bindPopup(
    "<b>Gateshead Fell Cricket Club</b><br>Eastwood Gardens Low Fell, Sheriff Hill NE9 5UB"
  );

  var marker = L.marker([54.987747, -1.598661]).addTo(map);
  marker.bindPopup(
    "<b>Newcastle Cricket Club</b><br>Osborne Avenue, Jesmond, Newcastle Upon Tyne NE2 1JS"
  );

  //pop-ups which shows the coordinates in the map
  var popup = L.popup();

  function onMapClick(e) {
    popup
      .setLatLng(e.latlng)
      .setContent("You clicked the map at " + e.latlng.toString())
      .openOn(map);
  }

  map.on("click", onMapClick);

  //different types of locations
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");

  ctx.rect(10, 10, 15, 15);
  ctx.fillStyle = "#c92631";
  ctx.fill();
  ctx.stroke();

  let canvas2 = document.getElementById("canvas2");
  let ctx2 = canvas2.getContext("2d");

  ctx2.rect(10, 10, 15, 15);
  ctx2.fillStyle = "#3672d1";
  ctx2.fill();
  ctx2.stroke();

});