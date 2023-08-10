const gridContainer = document.querySelector(".grid-container");
const gridButton = document.getElementById("grid-button");
const numSquaresInput = document.getElementById("numSquares");
let isDragging = false;

gridButton.addEventListener("click", createGrid);

function createGrid() {
  const numSquares = parseInt(numSquaresInput.value);

  if (numSquares <= 0 || numSquares > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }

  gridContainer.innerHTML = ""; // Clear existing grid

  gridContainer.style.gridTemplateColumns = `repeat(${numSquares}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${numSquares}, 1fr)`;

  for (let i = 0; i < numSquares * numSquares; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridContainer.appendChild(gridItem);

    gridItem.addEventListener("mousedown", () => {
      isDragging = true;
      toggleActive(gridItem);
    });

    gridItem.addEventListener("mouseover", () => {
      if (isDragging) {
        toggleActive(gridItem);
      }
    });
  }
}

document.addEventListener("mouseup", () => {
  isDragging = false;
});

function toggleActive(element) {
  element.classList.toggle("active");
}

createGrid();
