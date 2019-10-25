const winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
const squareCount = 9;
const gameOver = false;
const squares = document.querySelectorAll(".square");



const startGame = () => {
document.querySelector(".endgame").getElementsByClassName.display = "none";
    originalBoard = Array.from(Array(9).keys());
    console.log(originalBoard);   
    for (var i = 0; i < squares.length; i++) {
        squares[i].innerText = "";
        squares[i].style.removeProperty("background-color");
        squares[i].addEventListener("click", turnClick, false);

    } 
}

const turnClick = square
