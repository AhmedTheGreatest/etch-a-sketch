const grid = document.querySelector("#grid");
const createGridButton = document.querySelector("#create-grid-btn");

createGridButton.addEventListener("click", () => {
    let gridSize;
    do {
        gridSize = prompt("Enter Grid Size (Max 100): ", 16);
    } while (gridSize < 1 || gridSize > 100 || gridSize === null);

    createGrid(gridSize);
});

const DEFAULT_GRID_SIZE = 16;

// Creates a grid of specified number of divs
function createGrid(gridSize) {
    clearGrid(); // Clears the grid to avoid any problems

    for (let i = 0; i < gridSize; i++) {
        // Creates a grid row
        let gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");

        // Creates the squares in the grid row
        for (let j = 0; j < gridSize; j++) {
            let gridSquare = document.createElement("div");
            gridSquare.classList.add("grid-square");

            gridSquare.addEventListener("mouseenter", () => {
                gridSquare.style.backgroundColor = "red";
            });

            gridRow.appendChild(gridSquare);
            grid.appendChild(gridRow);
        }
    }
}

function clearGrid() {
    while (grid.lastElementChild) {
        grid.removeChild(grid.lastElementChild);
    }
}

// Create the grid
createGrid(DEFAULT_GRID_SIZE);