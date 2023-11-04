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
//turnAnnouncement.textContent = `${player1['name']}'s turn`;
const cells = document.querySelectorAll('.cell');
let currentPlayer = player1; // TO-DO change the value of the variable currentPlayer according to the first player
let message = '';
cells.forEach(cell => cell.addEventListener('click', handleCellClick));

function handleCellClick(event) {
  const clickedCell = event.target;
  clickedCell.classList.add(currentPlayer['symbol']);
  clickedCell.removeEventListener('click', handleCellClick);
  if(isEndOfGame()) {
    announce('message').then(() => resetGame());
  }
  switchTurns();
  turn();
}

function isEndOfGame() {
  if (checkForWinner()) {
    message = ` ${winner['name']} wins!`;
    return true;
  } else if (isBoardFull()){
    message = 'Draw!';
    return true;
  } else {
    return false;
  }
}

function turn() {
  if (currentPlayer['nature'] === 'computer') {
    setTimeout(() => {computerPlay()}, 200);
  }
}

/**
 * @param {Number} delay The delay in milliseconds so the symbol appears before the alert message
 * Announces the winner
 */
function announce(delay = 100) {
  return new Promise((resolve) => {
    if (currentPlayer !== null) {
      setTimeout(() => {
        alert(`${winner['name']} wins!`);
        resolve();
      }, delay);
    } else {
      setTimeout(() => {
        alert('Draw!');
      }, delay); // delay the alert message by 2 seconds
      resolve();  
    }
  });
}

function switchTurns() {
  currentPlayer = currentPlayer === player1 ? player2 : player1;
}

/**
 * Checks if there is a winner
 * @returns {Boolean} True if there is a winner, false otherwise
 */
function checkForWinner() {
  const winningCombinations = getWinningCombinations();
  winningCombinations.forEach(combination => {
    return (combination.every(index => cells[index].classList.contains(player1['symbol'] ))
    || combination.every(index => cells[index].classList.contains(player2['symbol'])))
    }
  )
}

/**
 * Returns an array of all the winning combinations
 * @returns {Array} Array of winning combinations
 * @example
 * // returns [[0, 1, 2], [3, 4, 5], [6, 7, 8],
 * //          [0, 3, 6], [1, 4, 7], [2, 5, 8],
 * //          [0, 4, 8], [2, 4, 6]]
 * @example
 * // returns [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10 ,11], [12, 13, 14, 15],
 * //          [0, 4, 8, 12], [1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15],
 * //          [0, 5, 10, 15], [3, 6, 9, 12]]
 */ 
function getWinningCombinations() {
  const winningCombinations = [];
  const winningRows = getWinningRows();
  const winningColumns = getWinningColumns();
  const winningDiagonals = getWinningDiagonals();
  winningCombinations.push(...winningRows, ...winningColumns, ...winningDiagonals);
  return winningCombinations;
}

/**
 * Returns an array of all the winning rows
 * @returns {Array} Array of winning rows
 * @example
 * // returns [[0, 1, 2], [3, 4, 5], [6, 7, 8]]
 * @example
 * // returns [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10 ,11], [12, 13, 14, 15]]
 */ 
function getWinningRows() {
  const winningRows = [];
  for (let i = 0; i < dimension; i++) {
    const row = [];
    for (let j = 0; j < dimension; j++) {
      row.push(i * dimension + j);
    }
    winningRows.push(row);
  }
  return winningRows;
}

/**
 * Returns an array of all the winning columns
 * @returns {Array} Array of winning columns
 * @example
 * // returns [[0, 3, 6], [1, 4, 7], [2, 5, 8]]
 * @example 
 * // returns [[0, 4, 8, 12], [1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15]]
 */
function getWinningColumns() {
  const winningColumns = [];
  for (let i = 0; i < dimension; i++) {
    const column = [];
    for (let j = 0; j < dimension; j++) {
      column.push(i + j * dimension);
    }
    winningColumns.push(column);
  }
  return winningColumns;
}

/**
 * Returns an array of all the winning diagonals
 * @returns {Array} Array of winning diagonals
 * @example
 * // returns [[0, 4, 8], [2, 4, 6]]
 * @example
 * // returns [[0, 5, 10, 15], [3, 6, 9, 12]]
 */
function getWinningDiagonals() {
  const winningDiagonals = [];
  const diagonal1 = [];
  const diagonal2 = [];
  for (let i = 0; i < dimension; i++) {
    diagonal1.push(i * dimension + i);
    diagonal2.push((dimension - 1) * (i + 1));
  }
  winningDiagonals.push(diagonal1, diagonal2);
  return winningDiagonals;
}

/**
 * Checks if the board is full
 */
function isBoardFull() {
  return [...cells].every(cell => !isEmpty(cell));
}

/**
 * Checks if the cell is empty
 * @param {Element} cell The cell to be checked
 * @returns {Boolean} True if the cell is empty, false otherwise
 */
function isEmpty(cell){
  return !(cell.classList.contains(player1['symbol']) || cell.classList.contains(player2['symbol']));
}

/**
 * Resets the game
 */ 
function resetGame() {
  cells.forEach(cell => {
    cell.classList.remove(player1['symbol']);
    cell.classList.remove(player2['symbol']);
    cell.addEventListener('click', handleCellClick);
  });
  winner = null;
  currentPlayer = player1; // TO-DO change the value of the variable currentPlayer according to the first player
}

/**
 * Simulates the computer's turn
 */
async function computerPlay() {
  // Get all cells that are not yet clicked
  const availableCells = Array.from(cells).filter(cell => isEmpty(cell));

  // Select the cell with the highest score
  //const bestMove = minimax(availableCells, 0, true);
  const bestMove = Math.floor(Math.random() * availableCells.length);
  const targetCell = cells[bestMove];

  // Simulate a click on the random cell
  await handleCellClick({target: targetCell});
}

// TO-DO implement the minimax algorithm
function minimax(node, depth, isMaximizing) {
  if (checkForWinner()) {
    return isMaximizing ? -1 : 1;
  }
  else if (isBoardFull()) {
    return 0;
  }
  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < node.length; i++) {
      if (isEmpty(node[i])) {
        node[i].classList.add(player2['symbol']);
        bestScore = Math.max(bestScore, minimax(node, depth + 1, false));
        node[i].classList.remove(player2['symbol']);
      }
    }
    return bestScore;
  }
  else {
    let bestScore = Infinity;
    for (let i = 0; i < node.length; i++) {
      if (isEmpty(node[i])) {
        node[i].classList.add(player1['symbol']);
        bestScore = Math.min(bestScore, minimax(node, depth + 1, true));
        node[i].classList.remove(player1['symbol']);
      }
    }
    return bestScore;
  }

}