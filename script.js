const bigContainer = document.querySelector('.bigContainer');
const containerOne = document.querySelector('.containerOne');
const containerTwo = document.querySelector('.containerTwo');


function createGrid() {
  for (let i = 0; i < 16; i++) {
    const div = document.createElement('div');
    div.classList.add('boxOne');
    containerOne.appendChild(div);
    
    for (let k = i; k < 16; k++) {
      const div = document.createElement('div');
      div.classList.add('boxTwo');
      containerTwo.appendChild(div);
    }
  }
}

createGrid();