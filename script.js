$(document).ready(function () {
    

    // Game settings
    let currentPlayer = firstPlayer;
    const winningCombinations = getWinningCombinations(dimension, combinationLength);
    let gameBoard = Array(dimension * dimension).fill(null);
    let gameOver = false;

    createBoard();
    startGame();


    // Main script, handles the game logic
    $('.cell').on('click', function () {
        const index = $(this).data('index');

        if (gameBoard[index] === null) {
            makeMove(index, currentPlayer);
            if (checkWin(currentPlayer)) {
                sendGameOverAlert(`${currentPlayer.name} win!`, 100);
            } else if (isBoardFull()) {
                sendGameOverAlert('It\'s a tie!', 100);
            }  
            switchTurn();
            if (currentPlayer.nature === 'computer' && !gameOver){
                // Computer's move
                const computerMove = getComputerMove();
                makeMove(computerMove, currentPlayer);

                if (checkWin(currentPlayer)) {
                    sendGameOverAlert(`${currentPlayer.name} wins!`, 100);
                }
                else if (isBoardFull()) {
                    sendGameOverAlert('It\'s a tie!', 100);
                }
                switchTurn();
        }
        }
    });


    function createBoard() {
        console.log("Creating board")
        $('#turn-announcement').text(`${currentPlayer.name}'s turn`);
        $('#reset').on('click', reset);
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
    

    function sendGameOverAlert(message, delay) {
        gameOver = true;
        // timeOut to allow the last move to be displayed
        setTimeout(function() {
            alert(message);
            reset();
        }, delay);
    }

    function startGame() {
        if (currentPlayer !== firstPlayer) { 
            switchTurn();
        }
        if (currentPlayer.nature === 'computer') {
            const computerMove = getComputerMove();
            makeMove(computerMove, currentPlayer);
            console.log("Star game");
            switchTurn();
        }
    }

    function reset() {
        gameBoard = Array(dimension * dimension).fill(null);
        $('.cell').removeClass(player1.symbol);
        $('.cell').removeClass(player2.symbol);
        firstPlayer = firstPlayer === player1 ? player2 : player1;
        gameOver = false;
        startGame();
    }
    
    function switchTurn() {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
        $('#turn-announcement').text(`${currentPlayer.name}'s turn`);
        console.log("Switching turn: " + currentPlayer.name + "'s turn")
    }

    function makeMove(index, player) {
        gameBoard[index] = player.symbol;
        $(`.cell[data-index="${index}"]`).addClass(player.symbol);
    }

    function checkWin(player) {
        return winningCombinations.some(combination => 
            combination.every(cell => gameBoard[cell] === player.symbol));

    }

    function isBoardFull() {
        return gameBoard.every(cell => cell !== null);
    }

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
        gameBoard[index] = player2.symbol;

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

    const winner = checkWin(player2) ? player2 : (checkWin(player1) ? player1 : null);
    if (checkWin(player2)) {
        return 1;
    } else if (checkWin(player1)) {
        return -1;
    } else if (isBoardFull(board)) {
        return 0; 
    }

    if (isMaximizing) {
        let maxScore = -Infinity;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === null) {
                board[i] = player2.symbol;
                maxScore = Math.max(maxScore, minimax(board, depth + 1, false));
                board[i] = null;
            }
        }
        return maxScore;
    } else {
        let minScore = Infinity;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === null) {
                board[i] = player1.symbol;
                minScore = Math.min(minScore, minimax(board, depth + 1, true));
                board[i] = null;
            }
        }
        return minScore;
    }
}


});
