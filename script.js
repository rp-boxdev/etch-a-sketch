const gridContainer = document.querySelector('.grid-container');
let isDragging = false;

function createGrid() {
  for (let i = 0; i < 256; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridContainer.appendChild(gridItem);

    gridItem.addEventListener('mousedown', () => {
      isDragging = true;
      gridItem.classList.add('active');
    });

    gridItem.addEventListener('mouseover', () => {
      if (isDragging) {
        gridItem.classList.add('active');
      }
    });
  }
}

document.addEventListener('mouseup', () => {
  isDragging = false;
});

createGrid();
