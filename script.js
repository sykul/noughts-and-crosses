function createGameBoard(numberOfRows, numberOfColumns) {
    const boardArray = []
    for (let i = 0; i < numberOfRows; i++) {
        boardArray[i] = [];
        for (let j = 0; j < numberOfColumns; j++) {
            boardArray[i][j] = [];
        }
    }

    return boardArray;
}

const gameBoard = createGameBoard(3, 3)

function createPlayer(name, OorX) {
    const playerName = name;
    const symbol = OorX;
    let score = 0;
    const increaseScore = () => ++score;
    const resetScore = () => score = 0;
    return {playerName, symbol, increaseScore, resetScore}
}

const winningConditions = (function() {
    const numberOfRows = 3;
    const numberOfColumns = 3;

    const oneFourSeven = createGameBoard(3, 3)
    for (i in oneFourSeven) {
        for (j in oneFourSeven[i]) {
            if (j == 0) {
                oneFourSeven[i][j] = 'true';
            }
        }
    }

    const twoFiveEight = []


    const threeSixNine = []


    const oneFiveNine = []


    const threeFiveSeven = []


    const oneTwoThree = []


    const fourFiveSix = []


    const sevenEightNine  = []


    return {oneFourSeven, twoFiveEight, threeSixNine, oneFiveNine, threeFiveSeven, oneTwoThree, fourFiveSix, sevenEightNine}
})()

const gameController = (function() {
    function checkWinningCondition() {
        for (i in gameBoard) {
             gameBoard[i];
            return 
        }
    }

    function playRound() { 
        for (let i = 0; i<50; i++) {
            if (gameController.currentPlayer == 'player1') {
                console.log(gameController.currentPlayer);
                gameController.currentPlayer = 'player2'
            } else if (gameController.currentPlayer == 'player2') {
                console.log(gameController.currentPlayer);
                gameController.currentPlayer = 'player1'
            }
        }
    }

    function trackPlayerScore() {
        
    }

    const currentPlayer = 'player1'


    return {currentPlayer, checkWinningCondition, playRound}
})();

const displayController = (function() {
    
})();

const player1 = createPlayer('player1', 'X');
const player2 = createPlayer('player2', 'O');