const gameBoard = (function() {
    const numberOfRows = 3;
    const numberOfColumns = 3;
    const board = []

    for (let i = 0; i < numberOfRows; i++) {
        board[i] = [];
        for (let j = 0; j < numberOfColumns; j++) {
            board[i][j] = [];
        }
    }
    return board;
})();

