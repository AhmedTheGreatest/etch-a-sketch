const grid = document.querySelector("#grid");

const GRID_SIZE = 16;

// Creates a grid of specified number of divs
function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        // Creates a grid row
        let gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");

        // Creates the squares in the grid row
        for (let j = 0; j < gridSize; j++) {
            let gridSquare = document.createElement("div");
            gridSquare.classList.add("grid-square");
            gridRow.appendChild(gridSquare);
            grid.appendChild(gridRow);
        }
    }
}

// Create the grid
createGrid(GRID_SIZE);