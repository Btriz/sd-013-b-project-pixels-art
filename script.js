// CRIAR O QUADRO
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

const px = document.getElementsByClassName('pixel');

for (let index = 0; index < px.length; index += 1) {
  px[index].addEventListener('click', paint);
}