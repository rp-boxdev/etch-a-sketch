const cdiv = document.querySelector("#grid-container");
const grid = document.querySelector(".grid");

// Add 16 divs
for (let i = 1; i < 273; i++) {
  const div = document.createElement("div");
  div.classList.add("grid");
  div.addEventListener("mouseenter", () => {
    div.style.backgroundColor = "red"; // Change to desired color on hover
  });
  cdiv.appendChild(div);
}
