/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // for (let i = 0; i < nums.length; i++) {
    //   for (let j = i + 1; j < nums.length; j++) {
    //     if (nums[i] + nums[j] === target) {
    //       return [i, j];
    //     }
    //   }
    // }
    const indices = {};

    nums.forEach((elm, index) => {
      indices[elm] = index;
    });

    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];

      if (indices[complement] !== undefined && indices[complement] !== i) {
        return [i, indices[complement]];
      }
    }
};
// @lc code=end

