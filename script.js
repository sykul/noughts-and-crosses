const gameBoard = (function() {
    const numberOfRows = 3;
    const numberOfColumns = 3;
    const boardArray = []
    for (let i = 0; i < numberOfRows; i++) {
        boardArray[i] = [];
        for (let j = 0; j < numberOfColumns; j++) {
            boardArray[i][j] = [];
        }
    }

    return boardArray;
})();

function createPlayer(name, OorX) {
    const playerName = name;
    const symbol = OorX;
    let score = 0;
    const increaseScore = () => ++score;
    return {playerName, symbol, increaseScore}
}

const gameController = (function() {
    function playRound() {

    }

    function trackPlayerScore() {
        
    }
    const currentPlayer = 'player1'


    return {currentPlayer}
})();

const displayController = (function() {
    
})();

const player1 = createPlayer('player1', 'X');
const player2 = createPlayer('player2', 'O');

for (let i = 0; i<50; i++) {
    if (gameController.currentPlayer == 'player1') {
        console.log(gameController.currentPlayer);
        gameController.currentPlayer = 'player2'
    } else if (gameController.currentPlayer == 'player2') {
        console.log(gameController.currentPlayer);
        gameController.currentPlayer = 'player1'
    }
}