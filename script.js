// CRIAR O QUADRO
const board = document.getElementById('pixel-board');

function createPixelBoard(linesNumber) {
  for (let index = 0; index < linesNumber; index += 1) {
    const row = document.createElement('tr');

    for (let index = 0; index < linesNumber; index += 1) {
      const pixel = document.createElement('td');
      pixel.classList.add('pixel');
      pixel.addEventListener('click', paint);
      row.appendChild(pixel);
    }
    board.appendChild(row);
    document.getElementById('board-size').value = linesNumber;
    
  }
}
document.onload = createPixelBoard(5);

function createBoardButton() {
  let size = document.getElementById('board-size').value;

  if (size === '') {
    alert('Board inválido!');
  } else {
    while (board.children.length > 0) {
      board.removeChild(board.firstChild);
    }

    if (size < 5) {
      size = 5;
      alert('Opa!\nO menor número possível é 5!')
      createPixelBoard(size);
      document.getElementById('board-size').value = 5;
      
    } else if (size > 50) {
      size = 50;
      alert('Opa!\nO maior número possível é 50!')
      createPixelBoard(size);
      document.getElementById('board-size').value = 50;
    } else {
      createPixelBoard(size);
    }
  }
}

function enter(key) {
  if (key.keyCode === 13) {
    createButton.click();
  }
}

const input = document.getElementById('board-size');
const createButton = document.getElementById('generate-board');
createButton.addEventListener('click', createBoardButton);
input.addEventListener('keyup', enter);

// SELECIONAR CORES
function selectColor(click) {
  if(click.target.classList.contains('selected')) {
  } else {
    const deselect = document.querySelector('.selected');
    deselect.classList.remove('selected');
    click.target.classList.add('selected')
  }
}
const colors = document.getElementsByClassName('color');

for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', selectColor);
}

//COLORIR O QUADRO
function paint(click) {
  const selected = document.querySelector(".selected");
  const color = window.getComputedStyle(selected, null).getPropertyValue('background-color');
  click.target.style.backgroundColor = color;
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