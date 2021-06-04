const board = document.getElementById('pixel-board');

function createPixelBoard(linesNumber) {
  for (let index = 0; index < linesNumber; index += 1) {
    const row = document.createElement('tr');

    for (let index = 0; index < linesNumber; index += 1) {
      const pixel = document.createElement('td');
      pixel.classList.add('pixel');
      row.appendChild(pixel);
    }
    board.appendChild(row);
  }
}
document.onload = createPixelBoard(5);
