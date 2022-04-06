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

const clear = document.querySelector("#clear");

window.onload = createGrid();