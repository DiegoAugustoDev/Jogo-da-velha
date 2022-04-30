document.addEventListener("DOMContentLoaded", ()=>{
    let squares = document.querySelectorAll(".square")

    squares.forEach((square)=>{
        square.addEventListener("click", handleClick)
    })
})


function handleClick(event){
    let player1 = document.getElementById("player1").value
    let player2 = document.getElementById("player2").value
    
    let square = event.target
    let position = square.id

    if(handleMove(position)){

        playerTime = (playerTime == 0)? player1 : player2

        setTimeout(() => {
            let gameOverLayer = document.getElementById("gameOver")
            gameOverLayer.style.display = "flex"
            let gameOverMessage = document.getElementById("gameOverMessage")
            gameOverMessage.innerHTML = "O vencedor foi " + playerTime
        }, 10);
        
    }
    upadeteSquare(position);
}

function upadeteSquare(position){
    let player1 = document.getElementById("player1").value
    let player2 = document.getElementById("player2").value

    let square = document.getElementById(position.toString())
    let symbol = board[position]
    square.innerHTML = `<div class=${symbol}></vid>`

    let scoreboard = document.getElementById("scoreboard")
    if(symbol == "o" && gameOver == true){
        scoreboard.innerHTML = ` ${player1} (${playerO + 1}) ${player2} (${playerX})`
        playerO +=1
    }
    else if(symbol == "x" && gameOver == true){
        scoreboard.innerHTML = `${player1} (${playerO}) ${player2} (${playerX + 1})`
        playerX += 1
    }
}

function updateSquares() {


    let squares = document.querySelectorAll(".square");


    squares.forEach((square) => {
        let postion = square.id;
        let symbol = board[postion];


        if (symbol != '') {
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })
    
 
}




function play(){
    let gameStartLayer = document.getElementById("gameStart")
    gameStartLayer.style.display = "none"
}

function restart(){
    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.innerHTML = "";

    })

    board = ["", "", "", "", "", "", "", "", ""];
    playerTime = 0;
    gameOver = false;

    let gameOverLayer = document.getElementById("gameOver")
    gameOverLayer.style.display = "none"
}
