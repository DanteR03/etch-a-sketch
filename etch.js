let input = 16;

function askInput() {
  numberPerSide = prompt("Squares per side?");
  if (numberPerSide > 0 && numberPerSide < 100) {
    return numberPerSide
  } else {
    alert("Insert a number higher than 0 and less than 100");
    askInput()
  } 
}

function createGrid() {
  const container = document.querySelector(".container");
  for (let i = 0; i < (input ** 2); i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${512 / input - 2}px`
    square.style.height = `${512 / input - 2}px`
    container.appendChild(square);
  }
}

const brush = document.querySelector("#sketch");

brush.addEventListener("mouseover", function( event ) {
  event.target.style.backgroundColor = "black";
});

const eraser = document.querySelector("#clear");

eraser.addEventListener("click", function () {
  const container = document.querySelector(".container");
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    container.removeChild(square);
  });
  input = askInput();
  createGrid();
});

window.onload = createGrid();  
