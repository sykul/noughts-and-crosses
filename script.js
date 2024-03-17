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

const gameController = (function() {
    function playRound() {

    }

    function trackPlayerScore() {
        
    }

})();

const screenController = (function() {

})();