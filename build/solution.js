"use strict";
// We have nine boxes in a sudoku board, this function let us know for a pair (y,x) which box is
const getBoxId = (y, x) => Math.floor(y / 3) * 3 + Math.floor(x / 3);
// Return if the value _value_ can be inserted in position ( y, x ) without conflicting with the values already present in the board
const isValidValue = (y, x, box, value, cacheMap) => 
// ToDo: complete this function
false;
// This function checks if the combination is valid
const isValidSudokuCombination = (board, cacheMap) => {
    for (let y = 0; y < 9; y++) {
        for (let x = 0; x < 9; x++) {
            if (board[y][x] === ".") {
                // ToDo: This cell is empty, add the code to fill it
            }
        }
    }
    // if we didn't return before, it means no invalid value has been put in the board, and so the combination is valid
    // on top of that the sudoku is now solved because in order to check we filled it
    return true;
};
/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board) {
    const cacheMap = {
        row: Array.from({ length: 9 }).map(_ => new Map()),
        col: Array.from({ length: 9 }).map(_ => new Map()),
        box: Array.from({ length: 9 }).map(_ => new Map()),
    };
    // Construct the cache, the purpose of the cache is to avoid scanning the board every time
    for (let y = 0; y < 9; y++)
        for (let x = 0; x < 9; x++)
            if (board[y][x] !== ".") {
                cacheMap.row[y].set(board[y][x], true);
                cacheMap.col[x].set(board[y][x], true);
                cacheMap.box[getBoxId(y, x)].set(board[y][x], true);
            }
    // unless the board received as input is invalid, this function should always return true
    isValidSudokuCombination(board, cacheMap);
}
;
