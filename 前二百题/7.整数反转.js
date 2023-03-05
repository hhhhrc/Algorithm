var myAtoi = function (s) {
    if (!s.length) return 0;
    s = s.trim();
    if (s[0] !== '-' && !Number(s[0])) return 0;
    let target = '';
    let flag = false;
    for (i = 0; i < s.length; i++) {
        if (s[i] !== ' ' && (Number(s[i]) === 0 || Number(s[i]) || s[i] === '-' || s[i] === '+' || s[i] === '.')) {
            target += s[i]
            if (s[i] === '-') {
                flag = true;
            }
        } else if (flag) {
            return 0;
        }
    }
    console.log(target)
    let max = Math.pow(2, 31) - 1;
    let min = -Math.pow(2, 31);
    target = Number(target)
    if (target > max) {
        return max;
    } else if (target < min) {
        return min;
    } else {
        return target ? target : 0;
    }
};

var myAtoi1 = function (s) {
    let res = 0,
        // 正负号，默认正号
        negativeSymbol = 1;
    // 把首尾的空格都去掉
    s = s.trim();
    for (let i = 0; i < s.length; i++) {
        // 负数
        if (i == 0 && s[i] == "-") {
            negativeSymbol = -1;
            continue;
            // 正数
        } else if (i == 0 && s[i] == "+") continue;
        // 因为空格会被转成0，所以要排除空格的情况，也就是说在数字范围内就加上
        if (s[i] >= 0 && s[i] <= 9 && s[i] != " ") {
            res = res * 10 + (s[i] - 0);
            // 为什么在这里就判断呢，因为这里如果就溢出的话，就直接跳出，不需要再后面无意义的计算了
            if (res * negativeSymbol <= -2147483648) return -2147483648;
            else if (res * negativeSymbol >= 2147483647) return 2147483647;
        } else break;
    }
    return res * negativeSymbol;
};

console.log(myAtoi("+1"))