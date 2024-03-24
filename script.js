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
    const XwinsOneFourSeven = createGameBoard().map((element, index) => { return (index == 0 || index == 3 || index == 6) ? 'X' : element });
    const XwinsTwoFiveEight = createGameBoard().map((element, index) => { return (index == 1 || index == 4 || index == 7) ? 'X' : element });
    const XwinsThreeSixNine = createGameBoard().map((element, index) => { return (index == 2 || index == 5 || index == 8) ? 'X' : element });
    const XwinsOneFiveNine = createGameBoard().map((element, index) => { return (index == 0 || index == 4 || index == 8) ? 'X' : element });
    const XwinsThreeFiveSeven = createGameBoard().map((element, index) => { return (index == 2 || index == 4 || index == 6) ? 'X' : element });
    const XwinsOneTwoThree = createGameBoard().map((element, index) => { return (index == 0 || index == 1 || index == 2) ? 'X' : element });
    const XwinsFourFiveSix = createGameBoard().map((element, index) => { return (index == 3 || index == 4 || index == 5) ? 'X' : element });
    const XwinsSevenEightNine  = createGameBoard().map((element, index) => { return (index == 6 || index == 7 || index == 8) ? 'X' : element });

    const YwinsOneFourSeven = createGameBoard().map((element, index) => { return (index == 0 || index == 3 || index == 6) ? 'Y' : element });
    const YwinsTwoFiveEight = createGameBoard().map((element, index) => { return (index == 1 || index == 4 || index == 7) ? 'Y' : element });
    const YwinsThreeSixNine = createGameBoard().map((element, index) => { return (index == 2 || index == 5 || index == 8) ? 'Y' : element });
    const YwinsOneFiveNine = createGameBoard().map((element, index) => { return (index == 0 || index == 4 || index == 8) ? 'Y' : element });
    const YwinsThreeFiveSeven = createGameBoard().map((element, index) => { return (index == 2 || index == 4 || index == 6) ? 'Y' : element });
    const YwinsOneTwoThree = createGameBoard().map((element, index) => { return (index == 0 || index == 1 || index == 2) ? 'Y' : element });
    const YwinsFourFiveSix = createGameBoard().map((element, index) => { return (index == 3 || index == 4 || index == 5) ? 'Y' : element });
    const YwinsSevenEightNine  = createGameBoard().map((element, index) => { return (index == 6 || index == 7 || index == 8) ? 'Y' : element });

    return {XwinsOneFourSeven, XwinsTwoFiveEight, XwinsThreeSixNine, XwinsOneFiveNine, XwinsThreeFiveSeven, XwinsOneTwoThree, XwinsFourFiveSix, XwinsSevenEightNine,
        YwinsOneFourSeven, YwinsTwoFiveEight, YwinsThreeSixNine, YwinsOneFiveNine, YwinsThreeFiveSeven, YwinsOneTwoThree, YwinsFourFiveSix, YwinsSevenEightNine}
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