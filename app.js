const container = document.querySelector("#container");


const grid = document.createElement("div");
grid.classList.add("grid")
container.appendChild(grid);

const cell = document.createElement("div");
cell.classList.add("cell");

const btn1 = document.createElement("button");
btn1.classList.add("button");
btn1.textContent = "Change grid size"
button1.appendChild(btn1);

btn1.addEventListener("click", () => {
    let userInput = prompt("How large would you like the grid? (1-100")
    makeGrid(userInput)
})

function clear(){
        cell.classList.remove("filledCell")
};

function makeGrid(gridUnits){
    for (let i= 0; i < (gridUnits * gridUnits); i++){
        const cell = document.createElement("div");
        grid.appendChild(cell).className = "cell";
    }
}

makeGrid(16)

const cells = document.querySelectorAll(".cell");
cells.forEach(cell => cell.addEventListener("mouseover", () => {
    cell.classList.add("filledCell")
}));



//cells.forEach(cell => cell.addEventListener("mouseover", colorCell));

//addEventListener("mouseover", colorCell);

//function colorCell(){
//    cell.style.backgroundColor = "blue";

//}
