const numPixels = 16 * 16
const sideLength = 960/16
const container = document.getElementById("container")

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function generateRandomColor(){
    const redValue = getRandomInt(255)
    const greenValue = getRandomInt(255)
    const blueValue = getRandomInt(255)
    return `rgb(${redValue}, ${greenValue}, ${blueValue})`
}

for (let i = 0; i < numPixels; i++){
    const grid = document.createElement("div")
    grid.style.boxSizing = "border-box"
    grid.style.width = sideLength + "px"
    grid.style.height = sideLength + "px"
    grid.style.backgroundColor = "white"
    grid.style.opacity = "0.1"
    container.appendChild(grid)
}