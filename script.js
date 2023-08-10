// const gridButton = document.querySelector("#grid-button");
// const cdiv = document.querySelector("#grid-container");
// const grid = document.querySelector(".grid");

// // Add 16 divs
// for (let i = 1; i < 273; i++) {
//   const div = document.createElement("div");
//   div.classList.add("grid");
//   div.addEventListener("mousedown", () => {
//     div.style.backgroundColor = "red"; // Change to desired color on hover
//   });
//   div.style.cursor = "grab";
//   cdiv.appendChild(div);
// }

// gridButton.addEventListener("click", () => {
//   prompt("Enter a number for the grid size: ");
// });


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
