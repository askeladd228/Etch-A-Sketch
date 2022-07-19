const bigContainer = document.querySelector('.bigContainer');

const button =  document.querySelector('.button');
button.textContent = 'Create a Grid!'

button.addEventListener('click', createGrid);

function createGrid() {
  bigContainer.replaceChildren();

  let column = prompt('Add values to column', '');
  let row = prompt('Add values to row', '');
  if (column > 100|| row > 100) {
    alert('Please insert a value below 100');
    return;
  }
  
  for (let i = 0; i < column; i++) {
    const gridContainer = document.createElement('div'); //creates 16 containers in a row (after flex)
    gridContainer.classList.add('gridContainer');

    for (let k = 0; k < row; k++) {
      const div = document.createElement('div');
      div.classList.add('box');
      // div.addEventListener('mouseenter', () => {
      //   div.classList.add('colorChange');
      // });
      div.addEventListener('mouseenter', changeBackground);
      gridContainer.appendChild(div); //creates 16 divs in all of the gridContainers
      bigContainer.appendChild(gridContainer); //stores 16 gridContainers in a big container
    }
  }
}

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  return color;
}

function changeBackground() {
  this.style.backgroundColor = getRandomColor();
}
 


