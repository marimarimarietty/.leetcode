/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sSorted = s.split("").sort().join("");
  const tSorted = t.split("").sort().join("");

  return sSorted === tSorted;
    // const objS = {};
    // const objT = {};
    // let isSame = false;

    // for (let i = 0; i < s.length; i++) {
    //   if (objS[s[i]]) {
    //     objS[s[i]] += 1;
    //   } else {
    //     objS[s[i]] = 1;
    //   };
    // }

    // for (let j = 0; j < t.length; j++) {
    //   if (objT[t[j]]) {
    //     objT[t[j]] += 1;
    //   } else {
    //     objT[t[j]] = 1;
    //   };
    // }

    // if (Object.keys(objS).length >= Object.keys(objT).length) {
    //   for (const key in objS) {
    //     if (objS[key] === objT[key]) {
    //       isSame = true;
    //     } else {
    //       return false;
    //     }
    //   }
    // } else {
    //   for (const key in objT) {
    //     if (objS[key] === objT[key]) {
    //       isSame = true;
    //     } else {
    //       return false;
    //     }
    //   }
    // }

    // return isSame;
};
// @lc code=end

