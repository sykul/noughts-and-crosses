function createGameBoard() {
    const boardArray = ['','','','','','','','','']
    return boardArray;
}

const gameBoard = createGameBoard()

function createPlayer(name, OorX) {
    const playerName = name;
    const symbol = OorX;
    let score = 0;
    const increaseScore = () => ++score;
    const resetScore = () => score = 0;
    return {playerName, symbol, increaseScore, resetScore}
}

const winningConditions = (function() {
    const OneFourSeven = [0, 3, 6];
    const TwoFiveEight = [1, 4, 7];
    const ThreeSixNine = [2, 5, 8];
    const OneFiveNine = [0, 4, 8];
    const ThreeFiveSeven = [2, 4, 6];
    const OneTwoThree = [0, 1, 2];
    const FourFiveSix = [3, 4, 5];
    const SevenEightNine  = [6, 7, 8];

    return {OneFourSeven,TwoFiveEight,ThreeSixNine,OneFiveNine,ThreeFiveSeven,OneTwoThree,FourFiveSix,SevenEightNine}
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