const container = document.querySelector("#container");
//let userInput = document.getElementById("button1");

//const red = document.querySelector("#rangeRed");

const filledCell = document.createElement("div");
filledCell.classList.add("filledCell");

const grid = document.createElement("div");
grid.classList.add("grid")
container.appendChild(grid);

const cell = document.createElement("div");
cell.classList.add("cell");

const btn1 = document.createElement("button");
btn1.classList.add("button");
btn1.textContent = "Change grid size";
button1.appendChild(btn1);
btn1.addEventListener("click", updateGrid);

const btn2 = document.createElement("button");
btn2.classList.add("button")
btn2.textContent = "Random Color"
button2.appendChild(btn2);
btn2.addEventListener("click", randomColor)

const btn3 = document.createElement("button");
btn3.classList.add("button");
btn3.textContent= "Reset";
button3.appendChild(btn3);
btn3.addEventListener("click", reset);


function reset(){
    grid.innerHTML = ""
    let userInput = 16
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
        cell.classList.add("filledCell")
}));
}

function updateGrid(){
    grid.innerHTML = ""
    let userInput = prompt("How many squares per side? (1-100)")
    if (userInput < 1 || userInput > 100 ){
        reset()
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
        cell.classList.add("filledCell")
}));
}

function makeGrid(gridUnits){
    for (let i= 0; i < (gridUnits * gridUnits); i++){
        const cell = document.createElement("div");
        grid.appendChild(cell).className = "cell";
    }
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.addEventListener("mouseover", () => {
     cell.style.backgroundColor = "black"
}));
}
makeGrid(16)


function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
}

function randomColor() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.addEventListener("mouseover", () => {
     cell.style.backgroundColor = getRandomColor()
}));
}

function changeColor(){
    let red = document.getElementById("rangeRed").value;
    let green = document.getElementById("rangeGreen").value;
    let blue = document.getElementById("rangeBlue").value;
    let color = "rgb(" + red + "," + green + "," + blue + ")";
    document.getElementById("colorOutput").textContent= ": " + color;
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.addEventListener("mouseover", () => {
     cell.style.backgroundColor = color
}));

}

document.getElementById("rangeRed").addEventListener("input", changeColor)
document.getElementById("rangeGreen").addEventListener("input", changeColor)
document.getElementById("rangeBlue").addEventListener("input", changeColor)




