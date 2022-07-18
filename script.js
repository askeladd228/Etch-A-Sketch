const bigContainer = document.querySelector('.bigContainer');

function createGrid() {
  for (let i = 0; i < 16; i++) {
    const gridContainer = document.createElement('div'); //creates 16 containers in a row (after flex)

    for (let k = 0; k < 16; k++) {
      const div = document.createElement('div');
      div.classList.add('box');
      gridContainer.appendChild(div); //creates 16 divs in all of the gridContainers
      bigContainer.appendChild(gridContainer); //stores 16 gridContainers in a big container
    }
  }
}

createGrid();