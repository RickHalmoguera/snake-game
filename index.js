const gameGrid = document.getElementById("gridContainer")
const startBtn = document.getElementById("StartBtn")
const scoreDisplay = document.getElementById("score")
const winLoseDisplay = document.getElementById("winLoseText")
let squares

const snakeSize = 3
const rowSize = 30
const gridSize = rowSize * rowSize

let currentSnake = [2,1,0]

let snakeCurrentPosition = 0
let direction = 1
let speed = 0.1
let intervalTime = 1000
let interval
let score = 0

for (let i = 0; i < gridSize; i++) {
    gameGrid.appendChild( document.createElement("div"))
}
const deployApple = () =>{
    const appleIndex = Math.floor(Math.random() * 901);
    if(squares[appleIndex].classList.contains("snake") ){
        appleIndex = Math.floor(Math.random() * 901)
    }else{
        squares[appleIndex].classList.add("apple")
    }
}

const startGame = () =>{
    
    squares = document.querySelectorAll("div")
    
    squares.forEach(index =>{
        index.classList.remove("snake")
        index.classList.remove("apple")
        }
    )
    
    clearInterval(interval)
    currentSnake = [2,1,0]
    snakeCurrentPosition = 0
    direction = 1
    speed = 0.1
    score = 0
    winLoseDisplay.innerText = ""
    deployApple()
    interval = setInterval(checkOutOfBounds, intervalTime * speed)
}


const  checkOutOfBounds = () =>{
    if(currentSnake[0] % rowSize == rowSize -1 ){
        winLoseDisplay.innerText = "Your Lose"
        clearInterval(interval)
    }else if(currentSnake[0] % rowSize == 0 ){
        winLoseDisplay.innerText = "Your Lose"
        clearInterval(interval)
    }else if(currentSnake[0] + rowSize >= (rowSize * rowSize) ){
        winLoseDisplay.innerText = "Your Lose"
        clearInterval(interval)
    }else if(currentSnake[0] - rowSize < 0 && direction == - rowSize ){
        winLoseDisplay.innerText = "Your Lose"
        clearInterval(interval)
    }else if(squares[currentSnake[0] + direction].classList.contains('snake')){
        winLoseDisplay.innerText = "Your Lose"
        clearInterval(interval)
    }else if(squares[currentSnake[0] + direction].classList.contains('apple')){
        squares[currentSnake[0] + direction].classList.remove('apple')
        currentSnake.push(currentSnake[currentSnake.length - 1])
        deployApple()
        score ++
        scoreDisplay.innerText = score
    }else{
        moveSnake()
    }
}

const moveSnake = () =>{
    
    const tail = currentSnake.pop()
    squares[tail].classList.remove('snake')
    currentSnake.unshift(currentSnake[0] + direction)
    squares[currentSnake[0]].classList.add('snake')
    
    
}


const getDirection = (event)=>{
    
    if(event.key =="ArrowDown" && direction !== -rowSize ){
        direction = + rowSize
    }else if(event.key == "ArrowUp" && direction !== + rowSize ){
        direction = - rowSize
    }else if(event.key == "ArrowLeft" && direction !== + 1 ){
        direction = - 1
    }else if(event.key == "ArrowRight" && direction !== -1 ){
        direction = + 1
    }
}


startBtn.addEventListener("click", startGame)

window.addEventListener("keydown", () => getDirection(event))

