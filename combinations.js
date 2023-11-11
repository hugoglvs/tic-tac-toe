/* JavaScript */
/* Script to get all winning combinations in a tic-tac-toe game
   of n-dimension and m the length needed to be a winning combination
   In ordinary tic-tac-toe, n=3 and m=3
   The complexity in time of these functions is O(n^2) so be careful
*/

/**
* Returns an array of all the winning combinations
* @param {Number} dimension The dimension of the board
* @param {Number} combinationLength The length of the winning combination
* @returns {Array} Array of winning combinations
*/
function getWinningCombinations(dimension, combinationLength) {
  const winningCombinations = [];
  const winningRows = getWinningRows(dimension, combinationLength);
  const winningColumns = getWinningColumns(dimension, combinationLength);
  const winningDiagonals = getWinningDiagonals(dimension, combinationLength);
  winningCombinations.push(...winningRows, ...winningColumns, ...winningDiagonals);
  return winningCombinations;
}

/**
 * @param {Number} dimension The dimension of the board
 * @param {Number} combinationLength The length of the winning combination
 * @returns {Array} Array of winning rows
 */ 
function getWinningRows(dimension, combinationLength) {
  const winningRows = [];
  for (let i = 0; i < dimension; i++) {
    for (let j = 0; j <= dimension - combinationLength; j++) {
      const row = [];
      for (let k = 0; k < combinationLength; k++) {
        row.push(i * dimension + j + k);
      }
      winningRows.push(row);
    }
  }
  return winningRows;
}

/**
 * @param {Number} dimension The dimension of the board
 * @param {Number} combinationLength The length of the winning combination
 * @returns {Array} Array of winning columns
 */
function getWinningColumns(dimension, combinationLength) {
  const winningColumns = [];
  // i is the column index
  for (let i = 0; i < dimension; i++) {
    // j is the row index
    for (let j = 0; j <= dimension - combinationLength; j++) {
      const column = [];
      // k is the cell index
      for (let k = 0; k < combinationLength; k++) {
        column.push((j + k) * dimension + i);
      }
      winningColumns.push(column);
    }
  }
  return winningColumns;
}

/**
 * @param {Number} dimension The dimension of the board
 * @param {Number} combinationLength The length of the winning combination
 * @returns {Array} Array of winning diagonals
 */
function getWinningDiagonals(dimension, combinationLength) {
  const winningDiagonals = [];
  // Top-left to bottom-right diagonals
  for (let i = 0; i <= dimension - combinationLength; i++) {
    // j is the column index
    for (let j = 0; j <= dimension - combinationLength; j++) {
      const diagonal = [];
      // k is the row index
      for (let k = 0; k < combinationLength; k++) {
        diagonal.push((i + k) * dimension + j + k);
      }
      winningDiagonals.push(diagonal);
    }
  }
  // Top-right to bottom-left diagonals
  for (let i = 0; i <= dimension - combinationLength; i++) {
    for (let j = dimension - 1; j >= combinationLength - 1; j--) {
      const diagonal = [];
      for (let k = 0; k < combinationLength; k++) {
        diagonal.push((i + k) * dimension + j - k);
      }
      winningDiagonals.push(diagonal);
    }
  }
  return winningDiagonals;
}