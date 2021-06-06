let size = 5;
// COLORIR O QUADRO
function paint(click) {
  const selected = document.querySelector('.selected');
  const color = window.getComputedStyle(selected, null).getPropertyValue('background-color');
  const px = click.target;
  px.style.backgroundColor = color;
}

// CRIAR O QUADRO
const board = document.getElementById('pixel-board');

function createPixelBoard() {
  for (let index = 0; index < size; index += 1) {
    const row = document.createElement('tr');

    for (let index2 = 0; index2 < size; index2 += 1) {
      const pixel = document.createElement('td');
      pixel.classList.add('pixel');
      pixel.addEventListener('click', paint);
      row.appendChild(pixel);
    }
    board.appendChild(row);
    /* document.getElementById('board-size').value = linesNumber; */
  }
}

function createBoardButton() {
  size = document.getElementById('board-size').value;

  if (size <= 0) {
    alert('Board inválido!');
  } else {
    while (board.children.length > 0) {
      board.removeChild(board.firstChild);
    }

    if (size < 5) {
      size = 5;
      alert('Opa!\nO menor número possível é 5!');
      createPixelBoard();
      /* document.getElementById('board-size').value = 5; */
    } else if (size > 50) {
      size = 50;
      alert('Opa!\nO maior número possível é 50!');
      createPixelBoard();
      /* document.getElementById('board-size').value = 50; */
    } else {
      createPixelBoard();
    }
  }
}

const createButton = document.getElementById('generate-board');
createButton.addEventListener('click', createBoardButton);

function enter(key) {
  if (key.keyCode === 13) {
    createButton.click();
  }
}

const input = document.getElementById('board-size');

input.addEventListener('keyup', enter);

// GERAR NOVAS CORES
function changeColors() {
  const changeble = document.getElementsByClassName('changeble');

  for (let index = 0; index < changeble.length; index += 1) {
    const hue = Math.round(1000 * (Math.random() * 0.33));
    const saturation = '100%';
    const lightness = Math.round(100 * (Math.random() * (0.9 - 0.2) + 0.2));
    const color = `hsl(${hue}, ${saturation}, ${lightness}%`;
    changeble[index].style.backgroundColor = color;
  }
}

const randomButton = document.getElementById('random');
randomButton.addEventListener('click', changeColors);

// ONLOAD
window.addEventListener('load', createPixelBoard);
window.addEventListener('load', changeColors);

// SELECIONAR CORES
function selectColor(click) {
  if (click.target.classList.contains('selected')) {
    // empty
  } else {
    const deselect = document.querySelector('.selected');
    deselect.classList.remove('selected');
    click.target.classList.add('selected');
  }
}
const colors = document.getElementsByClassName('color');

for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', selectColor);
}

// LIMPAR O QUADRO
function limpar() {
  const px = document.getElementsByClassName('pixel');
  for (let index = 0; index < px.length; index += 1) {
    px[index].style.backgroundColor = 'white';
  }
}

const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', limpar);
