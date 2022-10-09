/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  isIslandCount = 0;
  
  for (let rowIndex in grid) {
      for (let colIndex in grid[rowIndex]) {
          if (grid[rowIndex][colIndex] === '1') {
              isIslandCount++;
              teraForm(parseInt(rowIndex), parseInt(colIndex), grid);
          }
      }
  }
  
  return isIslandCount
};

const teraForm = (row, col, grid) => {
  if (grid[row] === undefined || grid[row][col] === undefined || grid[row][col] === '0') return;
  grid[row][col] = '0';
  teraForm(row - 1, col, grid);
  teraForm(row + 1, col, grid);
  teraForm(row, col - 1, grid);
  teraForm(row, col + 1, grid);
}
// @lc code=end

