var center = SMap.Coords.fromWGS84(13.8643006, 49.6019553);
var ryba = SMap.Coords.fromWGS84(13.8433614, 49.5772531);
var m = new SMap(JAK.gel("m"), center, 13);
m.addDefaultLayer(SMap.DEF_BASE).enable();
m.addDefaultControls();

var layer = new SMap.Layer.Marker();
m.addLayer(layer);
layer.enable();

options = {
title: "Podcast",
};
var znacka = JAK.mel("div");
var obrazek = JAK.mel(
"img",
{
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6e/JJryba.jpg",
},
{ width: 54, height: 73 }
);
znacka.appendChild(obrazek);
// var popisek = JAK.mel(
//   "div",
//   {},
//   {
//     position: "absolute",
//     left: "0px",
//     top: "2px",
//     textAlign: "center",
//     width: "22px",
//     color: "white",
//     fontWeight: "bold",
//   }
// );
// popisek.innerHTML = "JJR";
// znacka.appendChild(popisek);
var card = new SMap.Card();
card.getHeader().innerHTML = "<strong>Jakub Jan Ryba</strong>";
card.getBody().innerHTML = "About Jakub Jan Ryba";
var marker = new SMap.Marker(ryba, "myMarker", { url: znacka });
marker.decorate(SMap.Marker.Feature.Card, card);

layer.addMarker(marker);