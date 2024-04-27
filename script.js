function createGameBoard() {
    const boardArray = Array(9).fill(null);
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

const player1 = createPlayer('', 'O');
const player2 = createPlayer('', 'X');

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

    function assignPlayerOneName() {
        const inputtedName = document.querySelector("#playerOneName").value;
        player1.playerName = inputtedName;
    }
    
    function assignPlayerTwoName() {
        const inputtedName = document.querySelector("#playerTwoName").value;
        player2.playerName = inputtedName;
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

    function makeAMove(clickedCell, currentPlayerSymbol) {
        position = Number(clickedCell.classList[1]);

        if (position.toString().length > 0
        && Number.isInteger(position)
        && position >= 0
        && position < 9
        && gameBoard[position] == null
        && (player1.playerName != '' && player2.playerName != '')) {

            clickedCell.textContent = `${currentPlayer.symbol}`
            gameBoard[position] = currentPlayer.symbol;

            if (checkWinningCondition() === true) {
                displayController.writeWinnersName(`Winner: ${currentPlayer.playerName}`);
                restartGameState();
            } else if (checkWinningCondition() == false
                        && !(gameBoard.some((x) => x == null))) {
                restartGameState()
                displayController.writeWinnersName("Draw!")
            }

            currentPlayer = switchPlayer(currentPlayer);
        }
    }

    function restartGameState() {
        gameBoard = createGameBoard();
    }

    return {currentPlayer, makeAMove, restartGameState, assignPlayerOneName, assignPlayerTwoName}
})();

const displayController = (function() {

    const boardObject = document.querySelector(".board");
    const cellObjects = boardObject.querySelectorAll(".cell");
    const winnerName = document.querySelector(".winnerName");

    function writeWinnersName(content) {
        winnerName.textContent = `${content}`;
    }

    function resetGrid() {
        cellObjects.forEach((cell) => {
            cell.textContent = "";
        })
        writeWinnersName("Winner: ")
    }

    function addEventListenersToCells() {
        cellObjects.forEach((cell) => {
            cell.addEventListener("click", function () {
                gameController.makeAMove(this, gameController.currentPlayer.symbol);
                });
            });
        };

    function addEventListenerToButtons() {
        const resetButton = document.querySelector("#resetButton");
        resetButton.addEventListener("click", function () {
            resetGrid();
            gameController.restartGameState();
        })

        const playerOneButton = document.querySelector("#playerOneButton");
        playerOneButton.addEventListener("click", gameController.assignPlayerOneName);

        const playerTwoButton = document.querySelector("#playerTwoButton");
        playerTwoButton.addEventListener("click", gameController.assignPlayerTwoName)
    }

    addEventListenersToCells();
    addEventListenerToButtons();

    return {writeWinnersName}
})();

