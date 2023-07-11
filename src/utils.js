let currentColor = "red";
const canvas = document.getElementById("canvas");

export function changeColor(color) {
  currentColor = color;
}

export function drawTile(event) {
  const tile = event.target;
  tile.style.backgroundColor = currentColor;
}

export function cleanCanvas() {
  const tiles = document.getElementsByClassName("tile");
  Array.from(tiles).forEach(tile => {
    tile.style.backgroundColor = '';
  });
}

export function saveImage() {
  // Utwórz tymczasowy element canvas do eksportu obrazka
  const tempCanvas = document.createElement('canvas');
  const tempContext = tempCanvas.getContext('2d');
  const tileSize = 30;
  const numTiles = 15;

  tempCanvas.width = tileSize * numTiles;
  tempCanvas.height = tileSize * numTiles;

  // Skopiuj zawartość z głównego canvas do tymczasowego
  const tiles = document.getElementsByClassName('tile');
  Array.from(tiles).forEach((tile, index) => {
    const row = Math.floor(index / numTiles);
    const col = index % numTiles;
    const color = tile.style.backgroundColor;

    if (color) {
      tempContext.fillStyle = color;
    } else {
      tempContext.fillStyle = 'white'; 
    }

    tempContext.fillRect(col * tileSize, row * tileSize, tileSize, tileSize);
  });

  // Utwórz link do pobrania obrazka
  const link = document.createElement('a');
  link.href = tempCanvas.toDataURL('image/jpeg', 1.0);
  link.download = 'image.jpg';
  link.click();
}