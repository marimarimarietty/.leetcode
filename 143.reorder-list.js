/*
 * @lc app=leetcode id=143 lang=javascript
 *
 * [143] Reorder List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let queue = [];
    let currNode = head;
    while(currNode) {
      queue.push(currNode);
      currNode = currNode.next;
    }

    currNode = head;
    queue = queue.slice(Math.ceil(queue.length / 2));

    while (queue.length >= 0) {
      if (queue.length === 0) {
        currNode.next = null;
        return;
      }

      let temp = currNode.next;
      let endNode = queue.pop();
      endNode.next = temp;
      currNode.next = endNode;
      currNode = endNode.next;
    }
};
// @lc code=end

