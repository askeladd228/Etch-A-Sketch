const bigContainer = document.querySelector('.bigContainer');

const button =  document.querySelector('.button');
button.textContent = 'MAMAMIA!'

function createGrid() {

  button.addEventListener('click', insertGridValue);

  function insertGridValue() {
    let column = prompt('Add values to column', '');
    let row = prompt('Add values to row', '');
  
    for (let i = 0; i < column; i++) {
      const gridContainer = document.createElement('div'); //creates 16 containers in a row (after flex)

      for (let k = 0; k < row; k++) {
        const div = document.createElement('div');
        div.classList.add('box');
        div.addEventListener('mouseenter', () => {
          div.classList.add('colorChange');
        });
        gridContainer.appendChild(div); //creates 16 divs in all of the gridContainers
        bigContainer.appendChild(gridContainer); //stores 16 gridContainers in a big container
      }
    }
  }
}

createGrid();


