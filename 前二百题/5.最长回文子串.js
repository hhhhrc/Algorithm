// 中心扩散
var longestPalindrome = function (s) {
    let maxLen = 1
    let startIndex = 0
    for (let i = 1, len = s.length; i < len; i++) {
        let len1 = expandAroundCenter(s, i, i)
        let len2 = expandAroundCenter(s, i, i + 1)
        if (Math.max(len1, len2) > maxLen) {
            maxLen = Math.max(len1, len2)
            startIndex = i - Math.floor((maxLen - 1) / 2);
        }
    }
    return s.substr(startIndex, maxLen)
};

// aba
// 判断字符串 s , 以 left 、right 为中心扩散开的 最大回文长度
function expandAroundCenter(str, left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
        --left;
        ++right;
    }
    return right - left - 1
}

console.log(longestPalindrome('bb'))