/*
 * @lc app=leetcode id=199 lang=javascript
 *
 * [199] Binary Tree Right Side View
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  const obj = {};
  const result = [];

  if (!root) {
    return [];
  }

  const setObj = (node, level) => {
    obj[level] = node.val;

    if (node.left) {
      setObj(node.left, level + 1);
    }
    if (node.right) {
      setObj(node.right, level + 1);
    }
  }

  setObj(root, 1);

  for (const key in obj) {
    result.push(obj[key]);
  }

  return result;
};
// @lc code=end

