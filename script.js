const gridContainer = document.querySelector(".grid-container");
const gridButton = document.getElementById("grid-button");
const gridSizeInput = document.getElementById("gridSize");
let isDragging = false;

gridButton.addEventListener("click", createGrid);

function createGrid() {
  const gridSize = parseInt(gridSizeInput.value);

  if (gridSize <= 0 || gridSize > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }

  gridContainer.innerHTML = ""; // Clear existing grid

  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize * gridSize; i++) {
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
