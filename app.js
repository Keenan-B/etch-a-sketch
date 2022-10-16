const container = document.querySelector("#container");

const grid = document.createElement("div");
grid.classList.add("grid")
container.appendChild(grid);



function makeGrid(gridUnits){
    for (let i= 0; i < (gridUnits * gridUnits); i++){
        const cell = document.createElement("div");
        grid.appendChild(cell).className = "cell";
    }
}

makeGrid(16)
