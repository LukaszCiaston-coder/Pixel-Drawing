import { changeColor, drawTile, cleanCanvas, saveImage } from './utils';

var canvas = document.getElementById("canvas");
var tileSize = 30;
var numTiles = 450 / tileSize;

for (var i = 0; i < numTiles * numTiles; i++) {
  var tile = document.createElement("div");
  tile.classList.add("tile");
  tile.addEventListener("click", drawTile);
  canvas.appendChild(tile);
}

var red = document.getElementById("red");
red.addEventListener("click", () => changeColor('red'));

var blue = document.getElementById("blue");
blue.addEventListener("click", () => changeColor('blue'));

var green = document.getElementById("green");
green.addEventListener("click", () => changeColor('green'));

var green = document.getElementById("white");
green.addEventListener("click", () => changeColor('white'));

var green = document.getElementById("black");
green.addEventListener("click", () => changeColor('black'));

var green = document.getElementById("yellow");
green.addEventListener("click", () => changeColor('yellow'));

var green = document.getElementById("papayawhip");
green.addEventListener("click", () => changeColor('papayawhip'));

var cleanBtn = document.getElementById("cleanBtn");
cleanBtn.addEventListener("click", cleanCanvas);

var saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener("click", saveImage);