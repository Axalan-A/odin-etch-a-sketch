const container = document.getElementById("container")
const gridChangeButton = document.getElementById("gridSize")

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function generateRandomColor(){
    const redValue = getRandomInt(256)
    const greenValue = getRandomInt(256)
    const blueValue = getRandomInt(256)
    return `rgb(${redValue}, ${greenValue}, ${blueValue})`
}

gridChangeButton.addEventListener("click", () => {
    const squaresPerSide = prompt("How many squares per side?")
    if(squaresPerSide > 100){
        alert("Max grid size is 100x100")
        generateGrid(100)
    } else{
    generateGrid(squaresPerSide)
    }
})

function deleteGrid(){
    const currentPad = document.querySelectorAll(".pixel")
    currentPad.forEach(pixel => pixel.remove())
}

function generateGrid(squaresPerSide){
    const numPixels = squaresPerSide**2
    const pixelLength = 960/squaresPerSide
    deleteGrid()
    for (let i = 0; i < numPixels; i++){
        const grid = document.createElement("div")
        grid.setAttribute("class", "pixel")
        grid.style.boxSizing = "border-box"
        grid.style.width = pixelLength + "px"
        grid.style.height = pixelLength + "px"
        grid.style.backgroundColor = "white"
        grid.style.opacity = "0.1"
        grid.addEventListener("mouseover", () => {
            grid.style.backgroundColor = generateRandomColor()
            grid.style.opacity = String(parseFloat(grid.style.opacity) + 0.1)
        })
        container.appendChild(grid)
    }
}
generateGrid(16)