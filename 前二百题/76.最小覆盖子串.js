var minWindow = function (s, t) {
    if (t.length === 0) {
        return '';
    }
    if (t.length === 1) {
        return t;
    }
    let l = 0,
        r = 1;
    let res = '';
    while (r < s.length) {
        let temp = s.substring(l, r + 1);
        while (t.split('').every(x => {
                return temp.indexOf(x) !== -1
            })) {
            res = res.length < temp.length ? res : temp;
            l++;
            temp = temp = s.substring(l, r + 1);
        }
        r++;
    }
    return res;
};

console.log(minWindow("ADOBECODEBANC", "ABC"))