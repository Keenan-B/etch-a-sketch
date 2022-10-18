const container = document.querySelector("#container");

const grid = document.createElement("div");
grid.classList.add("grid")
container.appendChild(grid);

const cell = document.createElement("div");
cell.classList.add("cell");

const userInput = document.getElementById("userInput");


const btn1 = document.createElement("button");
btn1.classList.add("button");
btn1.textContent = "Reset";
button1.appendChild(btn1);
btn1.addEventListener("click", updateGrid);

const btn2 = document.createElement("button");
btn2.classList.add("button")
btn2.textContent = "Random Color"
button2.appendChild(btn2);
btn2.addEventListener("click", randomColor)

const btn3 = document.createElement("button");
btn3.classList.add("button");
btn3.textContent= "Black";
button3.appendChild(btn3);
btn3.addEventListener("click", black);


function black(){
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "black";
}));
}

function updateGrid(){
    grid.innerHTML = "";
    document.getElementById("rangeRed").value = 0;
    document.getElementById("rangeGreen").value = 0;
    document.getElementById("rangeBlue").value = 0;
    document.getElementById("colorOutput").textContent= "";
    grid.style.setProperty(
        "grid-template-columns",
        `repeat(${userInput.value}, 1fr)`
    );
    grid.style.setProperty(
        "grid-template-rows",
        `repeat(${userInput.value}, 1fr)`
    );
    
    for (let i= 0; i < (userInput.value * userInput.value); i++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        grid.appendChild(cell).className = "cell";
    }
    makeGrid(userInput.value)
    console.log(userInput.value);
}

function makeGrid(gridUnits){
    for (let i= 0; i < (gridUnits * gridUnits); i++){
        const cell = document.createElement("div");
        grid.appendChild(cell).className = "cell";
    }
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

function gridSizeNum(){
    document.getElementById("gridSize").textContent = ": " + userInput.value;
}

document.getElementById("rangeRed").addEventListener("input", changeColor)
document.getElementById("rangeGreen").addEventListener("input", changeColor)
document.getElementById("rangeBlue").addEventListener("input", changeColor)
document.getElementById("userInput").addEventListener("input", gridSizeNum)
document.getElementById("gridSize").textContent = ": " + userInput.value;





