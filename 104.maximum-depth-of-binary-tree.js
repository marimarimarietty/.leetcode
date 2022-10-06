/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
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
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0;

  let currNode = root;
  const newObj = {};
  
  function makeObj(node, level) {
    if (!node) return;
    newObj[level] = node.val;
    makeObj(node.left, level + 1);
    makeObj(node.right, level + 1);
  }

  makeObj(currNode, 1);

  let prevKey;
  for (const key in newObj) {
    prevKey = key;
    if (prevKey < key) {
      prevKey = key;
    }
  }

  return prevKey;
};
// @lc code=end

