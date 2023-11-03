// JavaScript code

const player1 = {
    name: 'Player 1',
    symbol: 'x',
    nature: 'human'
}
const player2 = {
    name: 'Player 2',
    symbol: 'o',
    nature: 'computer'
}

const dimension = 3
//const turnAnnouncement = document.getElementById('turn-announcement');
//turnAnnouncement.textContent = "${player1['name']}'s turn";
const cells = document.querySelectorAll('.cell');
let currentPlayer = player1; // TO-DO change the value of the variable currentPlayer according to the first player

// Add event listeners to the cells
cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
});

/** 
 * @param {MouseEvent} e
 * Handles the click event
 * @return {void}
 */
function handleClick(e) {
    const cell = e.target;
    if (isEmpty(cell)) {
      cell.classList.add(currentPlayer['symbol']);
      cell.classList.add('no-click'); // disable clicks on the cell
    }
    if (checkWin()) {
        alert(`${currentPlayer['name']} wins!`);
        resetGame();
    } else if (checkDraw()) {
        alert("It's a draw!");
        resetGame();
    } else {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
        turnAnnouncement.textContent = `${currentPlayer['name']}'s turn`;
        if (currentPlayer === player2 && player2['nature'] === 'computer') { // assuming player2 is the computer
          // Disable clicks
          document.body.classList.add('no-click');
          setTimeout(() => {
              // Computer makes a move
              playMachine();
              // Enable clicks after the computer's move
              document.body.classList.remove('no-click');
          }, 100); // adjust the delay as needed
        }
    }
}

/**
 * Computer makes a move
 * @return {void}
 */
function playMachine(){
    const index = findBestMove();
    cells[index].classList.add(player2['symbol']);
    cells[index].classList.add('no-click');
    if (checkWin()) {
        alert(`${player2['name']} wins!`);
        resetGame();
    } else if (checkDraw()) {
        alert("It's a draw!");
        resetGame();
    } else {
        currentPlayer = player1;
        turnAnnouncement.textContent = `${currentPlayer['name']}'s turn`;
    }
}

/**
 * Looks for the best move for the computer
 * @return {number}
 */
function findBestMove() {
    const emptyCells = [...cells].filter(isEmpty);
    const bestMoves = emptyCells.map(cell => {
        const index = [...cells].indexOf(cell);
        const score = minimax(index, player2['symbol']);
        return { index, score };
    });
    const bestScore = Math.max(...bestMoves.map(move => move.score));
    const bestMovesWithBestScore = bestMoves.filter(move => move.score === bestScore);
    const randomIndex = Math.floor(Math.random() * bestMovesWithBestScore.length);
    return bestMovesWithBestScore[randomIndex].index;
}

/**
 * @param {number} index
 * @param {string} symbol
 * @return {number}
 */
function minimax(index, symbol) {
    const newCells = [...cells];
    newCells[index].classList.add(symbol);
    if (checkWin()) {
        return symbol === player2['symbol'] ? 1 : -1;
    } else if (checkDraw()) {
        return 0;
    } else {
        const emptyCells = newCells.filter(isEmpty);
        const scores = emptyCells.map(cell => {
            const index = [...cells].indexOf(cell);
            const score = minimax(index, symbol === player1['symbol'] ? player2['symbol'] : player1['symbol']);
            return score;
        });
        return symbol === player2['symbol'] ? Math.max(...scores) : Math.min(...scores);
    }
}

/**
 * @param {HTMLElement} cell
 * Checks if a cell is empty
 * @return {boolean}
 */
function isEmpty(cell) {
    return !(cell.classList.contains(player1['symbol']) || cell.classList.contains(player2['symbol']));
}

/** 
 * Checks if the game is won
 * @return {boolean}
 */
function checkWin() {
    const rows = getRows();
    const columns = getColumns();
    const diagonals = getDiagonals();
    const lines = [...rows, ...columns, ...diagonals];
    return lines.some(line => {
        return line.every(cell => {
            return cell.classList.contains(currentPlayer['symbol']);
        });
    });
}

/**
 * @return {Array<Array<HTMLElement>>}
 */
function getRows() {
    const rows = [];
    for (let i = 0; i < cells.length; i += dimension) {
        const row = [];
        for (let j = i; j < i + dimension; j++) {
            row.push(cells[j]);
        }
        rows.push(row);
    }
    return rows;
}

/**
 * @return {Array<Array<HTMLElement>>}
 */
function getColumns() {
    const columns = [];
    for (let i = 0; i < dimension; i++) {
        const column = [];
        for (let j = i; j < cells.length; j += dimension) {
            column.push(cells[j]);
        }
        columns.push(column);
    }
    return columns;
}

/**
 * @return {Array<Array<HTMLElement>>}
 */
function getDiagonals() {
    const diagonals = [];
    const diagonal1 = [];
    const diagonal2 = [];
    for (let i = 0; i < cells.length; i += dimension + 1) {
        diagonal1.push(cells[i]);
    }
    diagonals.push(diagonal1);
    for (let i = dimension - 1; i < cells.length - 1; i += dimension - 1) {
        diagonal2.push(cells[i]);
    }
    diagonals.push(diagonal2);
    return diagonals;
}


/**
 * Checks if the game is a draw
 * @return {boolean}
 */
function checkDraw() {
    return [...cells].every(cell => {
        return cell.classList.contains(player1['symbol']) || cell.classList.contains(player2['symbol']);
    });
}

/**
 * Resets the game
 * @return {void}
 */
function resetGame() {
    cells.forEach(cell => {
        cell.classList.remove(player1['symbol'], player2['symbol']);
        cell.classList.remove('no-click');
    });
    currentPlayer = player1;
}
