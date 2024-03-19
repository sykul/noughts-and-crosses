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
    return {playerName, symbol}
}

const gameController = (function() {
    function playRound() {

    }

    function trackPlayerScore() {
        
    }

})();

const screenController = (function() {

})();

const player1 = createPlayer('player1', 'X');
const player2 = createPlayer('player2', 'O');