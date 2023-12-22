// DOM Elements
const grid = document.querySelector("#grid");
const createGridButton = document.querySelector("#create-grid-btn");

// Add an event listener to the create grid button
createGridButton.addEventListener("click", () => {
    let gridSize;
    
    // Keep prompting the user for a grid size until its valid
    do {
        gridSize = prompt("Enter Grid Size (Max 100): ", DEFAULT_GRID_SIZE);
        // If the user has cancelled, cancel the new grid operation
        if (gridSize === null) {
            return;
        }

    } while (gridSize < 1 || gridSize > 100);

    createGrid(gridSize); // Create a grid with the specified grid size
});

// Constants
const DEFAULT_GRID_SIZE = 16;

// Creates a grid of specified number of divs
function createGrid(gridSize) {
    removeGrid(); // Clears the grid to avoid any problems

    for (let i = 0; i < gridSize; i++) {
        // Creates a grid row
        let gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");

        // Creates the squares in the grid row
        for (let j = 0; j < gridSize; j++) {
            let gridSquare = document.createElement("div");
            gridSquare.classList.add("grid-square");

            gridSquare.addEventListener("mouseenter", () => {
                gridSquare.style.backgroundColor = getRandomColor();
            });

            gridRow.appendChild(gridSquare);
            grid.appendChild(gridRow);
        }
    }
}

// Removes (Clears) the grid.
function removeGrid() {
    while (grid.lastElementChild) {
        grid.removeChild(grid.lastElementChild);
    }
}

// Get a random color
function getRandomColor() {
    red = Math.floor(Math.random() * 255);
    green = Math.floor(Math.random() * 255);
    blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
}

// Create the grid
createGrid(DEFAULT_GRID_SIZE);