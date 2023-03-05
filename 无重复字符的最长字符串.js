/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//     let curMaxlen = 0;
//     let list = s.split('');
//     for (let i = 0; i < list.length; i++) {
//         let curStash = [];
//         curStash = [list[i]]
//         for (let j = i + 1; j < list.length; j++) {
//             if (!curStash.includes(list[j])) {
//                 curStash = [...curStash, list[j]];
//             } else {
//                 break;
//             }
//         }
//         curMaxlen = curMaxlen < curStash.length ? curStash.length : curMaxlen
//     }
//     return curMaxlen;
// };

// var lengthOfLongestSubstring = function (s) {
//     // 哈希集合，记录每个字符是否出现过
//     const occ = new Set();
//     const n = s.length;
//     // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
//     let rk = -1,
//         ans = 0;
//     for (let i = 0; i < n; ++i) {
//         if (i != 0) {
//             // 左指针向右移动一格，移除一个字符
//             occ.delete(s.charAt(i - 1));
//         }
//         while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
//             // 不断地移动右指针
//             occ.add(s.charAt(rk + 1));
//             ++rk;
//         }
//         // 第 i 到 rk 个字符是一个极长的无重复字符子串
//         ans = Math.max(ans, rk - i + 1);
//     }
//     return ans;
// };

var lengthOfLongestSubstring = function (s) {
    const curStr = new Set();
    const len = s.length;
    let maxlen = 0;
    let rc = 0; //窗口右边界
    for (i = 0; i < len - maxlen; i++) {
        // i 为窗口左边界
        if (i) curStr.delete(s.charAt(i-1));
        while (rc < len && !curStr.has(s.charAt(rc))) {
            curStr.add(s.charAt(rc));
            rc++;
        }
        maxlen = Math.max(maxlen, rc-i)
    }
    return maxlen;
};

console.log(lengthOfLongestSubstring("abcabcbb"))