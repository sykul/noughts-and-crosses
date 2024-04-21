function createGameBoard() {
    const boardArray = ['','','','','','','','','']
    return boardArray;
}

let gameBoard = createGameBoard();

function createPlayer(name, OorX) {
    const playerName = name;
    const symbol = OorX;
    let score = 0;
    const increaseScore = () => ++score;
    const resetScore = () => score = 0;
    return {playerName, symbol, increaseScore, resetScore}
}

const player1 = createPlayer('player1', 'X');
const player2 = createPlayer('player2', 'O');

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

    let currentPlayer = player1;

    function switchPlayer(currentPlayer) {
        if (currentPlayer == player1) {
            return player2;
        } else if (currentPlayer == player2) {
            return player1;
        }
    }
    
    function checkWinningCondition() {
        for (const condition in winningConditions) {
            positionToCheck1 = winningConditions[condition][0];
            positionToCheck2 = winningConditions[condition][1];
            positionToCheck3 = winningConditions[condition][2];       
            if ((gameBoard[positionToCheck1] == 'X' || gameBoard[positionToCheck1] == 'O')
                    && (gameBoard[positionToCheck1] == gameBoard[positionToCheck2])
                    && (gameBoard[positionToCheck1] == gameBoard[positionToCheck3])) {
                return true;
            }
        }
        return false;
    }

    function playRound() {
        let position;
        for (let i = 0; i<9; i++) {
            do {
                position = Number(prompt("Position?"));
            } while (!(position.toString().length > 0
                        && Number.isInteger(position)
                        && position >= 0
                        && position < 9
                        && gameBoard[position] == ''));
            gameBoard[position] = currentPlayer.symbol;

            if (checkWinningCondition() === true) {
                restartGameState();
                return currentPlayer.playerName;
            };
            
            currentPlayer = switchPlayer(currentPlayer);
        }
    }

    function restartGameState() {
        gameBoard = createGameBoard();

    }

    return {playRound}
})();

const displayController = (function() {
    
})();
