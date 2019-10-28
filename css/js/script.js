const ticTacToeGame = new TicTacToeGame();
ticTactToeGame.start();

function TicTacToeGame() {
 const board = new board();   
 const humanPlayer = new humanPlayer()
 const computerPlayer = new computerPlayer();
 let turn = 0;

 this.start = function() {

 }
}

function Board() {
    this.positions =Array.from(document.querySelectorAll('.square'));
    console.log(this.psitions)
}