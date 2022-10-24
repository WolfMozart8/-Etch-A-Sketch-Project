const body = document.querySelector("body");
const button = document.querySelector("#btn");
const resetBtn = document.querySelector("#reset");
const randomBtn = document.querySelector("#randomB");
const onOff = document.querySelector("#onOff"); //random color switch text ON/OFF
onOff.textContent = "OFF";
let randomC = false; //random colors switch

const container = document.createElement("div");
const varGrid = getComputedStyle(container); // for css variable --grid

container.classList.add("container");
body.appendChild(container);

gridCreator(); // start the grid by default (16 x 16)

button.addEventListener("click", newGrid);
resetBtn.addEventListener("click", resetGrid);
randomBtn.addEventListener("click", () => { // choose between false and true for random Colors
    if (randomC === false){
        randomC = true;
        onOff.textContent = "ON";

    }
    else if (randomC === true) {
        randomC = false;
        onOff.textContent = "OFF";

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
   container.style.setProperty("--grid", template); // css variable --grid
   
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
    if (randomC === false) {
        const grid = document.querySelectorAll(".grid");
        grid.forEach(e => {
            e.addEventListener("mouseover", () => {
                e.classList.add("mouseOn");
            })
        })
    }
    if (randomC === true) {
        const grid = document.querySelectorAll(".grid");
        

        grid.forEach(e => {
            // const randomColor = Math.floor(Math.random()*16777215).toString(16); // random hex
            // chaged to hsl color, color gets darker with every time the cursos is over it 
            const randomColor = Math.floor(Math.random()*360 -1);
            const randomSat = Math.floor(Math.random()*30 + 65);
            let lightness = 50;
                e.addEventListener("mouseover", () => {
                e.setAttribute(`style`, `background-color: hsl(${randomColor}, ${randomSat}%, ${lightness}%)`);
                lightness -= 5;
                if (lightness === 0) {
                    lightness = 0;
                }
            })
            
        })
    }
}
function resetGrid (){
    const grid = document.querySelectorAll(".grid");
    grid.forEach(e => {
        e.classList.remove("mouseOn");
        e.removeAttribute("style");

        })
        
    }
