/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  var i = 0;
  for (var j = 0; j < nums.length; j++) {
      if (nums[i] !== nums[j]) {
          nums[++i] = nums[j];
      }
  }
  return i+1;
};
// @lc code=end

