import { changeColor, drawTile, cleanCanvas, saveImage } from './utils';

const canvas = document.getElementById("canvas");
const tileSize = 30;
const numTiles = 450 / tileSize;

for (let i = 0; i < numTiles * numTiles; i++) {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  tile.addEventListener("click", drawTile);
  canvas.appendChild(tile);
}

const red = document.getElementById("red");
red.addEventListener("click", () => changeColor('red'));

const blue = document.getElementById("blue");
blue.addEventListener("click", () => changeColor('blue'));

const green = document.getElementById("green");
green.addEventListener("click", () => changeColor('green'));

const white = document.getElementById("white");
white.addEventListener("click", () => changeColor('white'));

const black = document.getElementById("black");
black.addEventListener("click", () => changeColor('black'));

const yellow = document.getElementById("yellow");
yellow.addEventListener("click", () => changeColor('yellow'));

const papayawhip = document.getElementById("papayawhip");
papayawhip.addEventListener("click", () => changeColor('rgb(241, 145, 80)'));

const cleanBtn = document.getElementById("cleanBtn");
cleanBtn.addEventListener("click", cleanCanvas);

const saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener("click", saveImage);