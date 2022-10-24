const body = document.querySelector("body");
const button = document.querySelector("#btn");
const resetBtn = document.querySelector("#reset");
const randomBtn = document.querySelector("#randomB");
let randomC = false;

const container = document.createElement("div");
const varGrid = getComputedStyle(container); // for css variable --grid

container.classList.add("container");
body.appendChild(container);

gridCreator(); // start the grid by default (16 x 16)

button.addEventListener("click", newGrid);
resetBtn.addEventListener("click", resetGrid);
randomBtn.addEventListener("click", () => {
    if (randomC === false){
        randomC = true;

    }
    else if (randomC === true) {
        randomC = false;

    }
    console.log("randomC is: " + randomC);
})

function newGrid () {
    
   const template = prompt("Select number of squares per side (max 100)", 16);

   if (template > 100) { // set a max of 100
    alert("The limit of squares are 100, please select a valid number");
    template = 100;
   }
   if (template < 0) {
    alert("The number must be a positive number (Max 100)")
    template = 0;
   }
   container.style.setProperty("--grid", template);
   
   gridCreator(template);
}

function gridCreator (num = 16) {  // 16 x 16 default
    deleteOld();

    for (let i = 1; i <= num * num; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        container.appendChild(grid);
    }
    drawPx();
}
function deleteOld () {
    const grid = document.querySelectorAll(".grid");
    grid.forEach(e => {
        e.remove(".grid");
    })

}
function drawPx (){
    const grid = document.querySelectorAll(".grid");
    grid.forEach(e => {
        e.addEventListener("mouseover", () => {
            e.classList.add("mouseOn");
        })
    })
}
function resetGrid (){
    const grid = document.querySelectorAll(".grid");
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor);
    grid.forEach(e => {
        e.classList.remove("mouseOn");
        })
    }
