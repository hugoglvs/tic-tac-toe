$(document).ready(function () {
    const player = 'X';
    const computer = 'O';
    let firstPlayer = player;
    let currentPlayer = firstPlayer;
    

    // Use the combinations.js file
    const dimension = 3; // Assuming a 3x3 board
    let gameBoard = Array(dimension * dimension).fill(null);
    const combinationLength = 3; // Assuming a winning combination length of 3
    const winningCombinations = getWinningCombinations(dimension, combinationLength);


    function createBoard() {
        let cells = '';
        for (let i = 0; i < dimension; i++) {
            cells += '<tr>';
            for(let j = 0; j < dimension; j++) {
                cells += `<td class="cell" data-index="${(i*dimension)+j}"></td>`;
            };
            cells += '</tr>';
        }
        $('table').append(cells);
    }
    
    createBoard();

    // If the first player is the computer, it makes a move
    if (currentPlayer === computer) {
        const computerMove = getComputerMove();
        makeMove(computerMove, computer);
    }

    // Event listener for cell click
    $('.cell').on('click', function () {
        const index = $(this).data('index');

        // Check if the cell is empty
        if (gameBoard[index] === null) {
            // Player's move
            makeMove(index, player);

            // Check if there's a winner
            if (checkWin(player)) {
                alert('Player wins!');
                return;
            }

            // Check if the board is full (draw)
            if (isBoardFull()) {
                alert('It\'s a draw!');
                return;
            }

            // Computer's move
            const computerMove = getComputerMove();
            makeMove(computerMove, computer);

            // Check if there's a winner after the computer's move
            if (checkWin(computer)) {
                alert('Computer wins!');
                return;
            }

            // Check if the board is full (draw) after the computer's move
            if (isBoardFull()) {
                alert('It\'s a draw!');
            }
        }
    });

    // Function to handle player and computer moves
    function makeMove(index, symbol) {
        gameBoard[index] = symbol;
        $(`.cell[data-index="${index}"]`).text(symbol);
    }

    // Function to check for a win
    function checkWin(symbol) {
        return winningCombinations.some(combination => 
            combination.every(cell => gameBoard[cell] === symbol));
    }

    // Function to check if the board is full (tie)
    function isBoardFull() {
        return gameBoard.every(cell => cell !== null);
    }

// Function to get the computer's move using the minimax algorithm
function getComputerMove() {
    // array.reduce : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    const emptyCells = gameBoard.reduce((acc, cell, index) => {
        if (cell === null) {
            acc.push(index);
        }
        return acc;
    }, []);

    // Initialize the best move with a suboptimal value
    let bestMove = -1;
    let bestScore = -Infinity;

    for (const index of emptyCells) {
        // Make the move
        gameBoard[index] = computer;

        // Evaluate the score for this move
        const score = minimax(gameBoard, 0, false);

        // Undo the move
        gameBoard[index] = null;

        // Update the best move if the current move has a higher score
        if (score > bestScore) {
            bestScore = score;
            bestMove = index;
        }
    }

    return bestMove;
}

// Minimax algorithm
function minimax(board, depth, isMaximizing) {
    const scores = {
        X: -1, // Player's score
        O: 1,  // Computer's score
        tie: 0 // Score for a tie
    };

    // Check for a win or draw
    const winner = checkWin(computer) ? computer : (checkWin(player) ? player : null);
    if (winner !== null) {
        return scores[winner];
    } else if (isBoardFull(board)) {
        return scores.tie;
    }

    if (isMaximizing) {
        let maxScore = -Infinity;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === null) {
                board[i] = computer;
                maxScore = Math.max(maxScore, minimax(board, depth + 1, false));
                board[i] = null;
            }
        }
        return maxScore;
    } else {
        let minScore = Infinity;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === null) {
                board[i] = player;
                minScore = Math.min(minScore, minimax(board, depth + 1, true));
                board[i] = null;
            }
        }
        return minScore;
    }
}


});
