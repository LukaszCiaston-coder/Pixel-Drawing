var currentColor = "red";
var canvas = document.getElementById("canvas");

export function changeColor(color) {
  currentColor = color;
}

export function drawTile(event) {
  var tile = event.target;
  tile.style.backgroundColor = currentColor;
}

export function cleanCanvas() {
  var tiles = document.getElementsByClassName("tile");
  Array.from(tiles).forEach(tile => {
    tile.style.backgroundColor = '';
  });
}

export function saveImage() {
  // Utwórz tymczasowy element canvas do eksportu obrazka
  var tempCanvas = document.createElement('canvas');
  var tempContext = tempCanvas.getContext('2d');
  var tileSize = 30;
  var numTiles = 15;

  tempCanvas.width = tileSize * numTiles;
  tempCanvas.height = tileSize * numTiles;

  // Skopiuj zawartość z głównego canvas do tymczasowego
  var tiles = document.getElementsByClassName('tile');
  Array.from(tiles).forEach((tile, index) => {
    var row = Math.floor(index / numTiles);
    var col = index % numTiles;
    var color = tile.style.backgroundColor;

    if (color) {
      tempContext.fillStyle = color;
    } else {
      tempContext.fillStyle = 'white'; 
    }

    tempContext.fillRect(col * tileSize, row * tileSize, tileSize, tileSize);
  });

  // Utwórz link do pobrania obrazka
  var link = document.createElement('a');
  link.href = tempCanvas.toDataURL('image/jpeg', 1.0);
  link.download = 'image.jpg';
  link.click();
}