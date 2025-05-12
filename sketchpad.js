const numPixels = 16 * 16
const sideLength = 960/16
const container = document.getElementById("container")

for (let i = 0; i < numPixels; i++){
    const grid = document.createElement("div")
    grid.style.boxSizing = "border-box"
    grid.style.width = sideLength + "px"
    grid.style.height = sideLength + "px"
    grid.style.backgroundColor = "blue"
    grid.style.border = "solid"
    container.appendChild(grid)
}