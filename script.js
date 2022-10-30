const grid = document.querySelector(".game-grid")
const modal = document.getElementById('dialog-rounded')
const closeModal = document.querySelector(".nes-btn")
const actualScore = document.querySelector(".score-display")

let myInterval = ""
let snake = [2,1,0]
let tail = 0
let direction = 1
let gridWidth = 30
let applePosition = 0
let score = 0


resetGame = () =>{
    modal.close()
    grid.innerHTML = ""
    snake = [2,1,0]
    tail = 0
    direction = 1
    applePosition = 0
    score = 0 
    actualScore.innerHTML= `<p>Score:${score}</p>`
    startGame()
}


startGame = () => { 
    createGrid()
    displaySnake()
    displayApple()
    myInterval = setInterval(checkAndMove,100)
}


createGrid = () =>{
    for (let i =0; i< 900; i++){
        let div = document.createElement("div")
        grid.appendChild(div)
    }
}

displaySnake = () =>{
    let squares = document.querySelectorAll(".game-grid div")
    snake.forEach((index) => squares[index].classList.add("snake"))
}



displayApple = () =>{
    let squares = document.querySelectorAll(".game-grid div")
    do{
        applePosition = Math.floor(Math.random() * squares.length)
        
    }while (squares[applePosition].classList.contains("snake"))
    squares[applePosition].classList.add("apple") 
}

checkApple= (squares)=>{
    if((squares[snake[0] + direction].classList.contains("apple"))){
        (squares[snake[0] + direction].classList.remove("apple"))
        displayApple()
        score++
        actualScore.innerHTML= `<p>Score:${score}</p>`
        snake.unshift(snake[0])
    }
}


getDirection= (e)=>{
    
    if (e.code == "ArrowRight"){
        if(direction ==-1){

        }else{
            direction = 1
        }
        
    }else if(e.code == "ArrowLeft"){
        if(direction ==1){
            
        }else{
            direction = -1
        }
    
    }else if(e.code == "ArrowUp"){
        if(direction ==gridWidth){
            
        }else{
            direction = -gridWidth
        }
        
    }else if(e.code == "ArrowDown"){
        if(direction == -gridWidth){
            
        }else{
            direction = gridWidth
        }
    }
    
}

checkAndMove = ()=>{
    let squares = document.querySelectorAll(".game-grid div")

    if(((snake[0] + 1) % gridWidth ==0 && direction==1) || 
    (snake[0] % gridWidth ==0 && direction==-1) ||
    (snake[0] - gridWidth < 0 && direction == -gridWidth )||
    (snake[0] + gridWidth >= gridWidth*gridWidth && direction == gridWidth) ||
    (squares[snake[0] + direction].classList.contains("snake")))
    {//!Checks for wall and body colitions 
        clearInterval(myInterval); 
        modal.showModal()
    }else{
        checkApple(squares)
        moveSnake(squares)
        displaySnake()
    }  
}


moveSnake = (squares)=>{
    tail= snake.pop()
    squares[tail].classList.remove("snake")
    snake.unshift(snake[0]+direction)
}

startGame()


document.addEventListener("keydown", getDirection)
closeModal.addEventListener("click", resetGame)



