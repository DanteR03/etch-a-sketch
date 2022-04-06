function createGrid() {
  const container = document.querySelector(".container");
  for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
  }
}

const brush = document.querySelector("#sketch");

brush.addEventListener("mouseover", function( event ) {
  event.target.style.backgroundColor = "black";
});

const eraser = document.querySelector("#clear");

eraser.addEventListener("click", function () {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.style.backgroundColor = "white";
  });
});

window.onload = createGrid();  
