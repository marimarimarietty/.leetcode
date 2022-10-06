/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const arr = String(x).split('');
    while (arr.length > 1) {
      if (arr.shift() !== arr.pop()) {
          return false;
      }
    }
    return true;
};
// @lc code=end

