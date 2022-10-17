const container = document.querySelector("#container");
let userInput = document.getElementById("button1")




const grid = document.createElement("div");
grid.classList.add("grid")
container.appendChild(grid);

const cell = document.createElement("div");
cell.classList.add("cell");

const btn1 = document.createElement("button");
btn1.classList.add("button");
btn1.textContent = "Change grid size"
button1.appendChild(btn1);

btn1.addEventListener("click", updateGrid)

function updateGrid(){
    grid.innerHTML = ""
    let userInput = prompt("How many squares per side? (1-100)")
    if (userInput < 1 || userInput > 100 || NaN ){
        return alert("Error: Must be a number between 1 and 100.")
    }
    
    grid.style.setProperty(
        "grid-template-columns",
        `repeat(${userInput}, 1fr)`
    );
    grid.style.setProperty(
        "grid-template-rows",
        `repeat(${userInput}, 1fr)`
    );
    
    for (let i= 0; i < (userInput * userInput); i++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        grid.appendChild(cell).className = "cell";
    }
    makeGrid(userInput)
    console.log(userInput);
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.addEventListener("mouseover", () => {
        cell.classList.replace("cell", "filledCell")
}));
}

userInput.addEventListener("change", updateGrid)

function makeGrid(gridUnits){
    for (let i= 0; i < (gridUnits * gridUnits); i++){
        const cell = document.createElement("div");
        grid.appendChild(cell).className = "cell";
    }
}
makeGrid(16)

const cells = document.querySelectorAll(".cell");
cells.forEach(cell => cell.addEventListener("mouseover", () => {
    cell.classList.replace("cell", "filledCell")
}));



//cells.forEach(cell => cell.addEventListener("mouseover", colorCell));

//addEventListener("mouseover", colorCell);

//function colorCell(){
//    cell.style.backgroundColor = "blue";

//}
