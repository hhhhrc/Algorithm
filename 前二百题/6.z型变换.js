/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    // 1.numRow列 全都有值 且从上向下排列 纵坐标 +1 ； 2.非numRow列 都只有一个值 为上一个字符坐标 横坐标+1 纵坐标 -1
    // 边界：字符遍历结束
    // 满列 x 个  每列numRow个字符
    // 非满列 y个  每列numRow -2 个字符
    if (numRows === 1) {
        return s;
    }
    // let fullCol; // 满列
    // let notFullCol; //非满列
    let len = s.length;
    let group = Math.floor(len / (2 * (numRows - 1))); //有几组
    // let lastRowNum = len % (2 * (numRows - 1)); // 剩下几个
    // if (group) { // 有超过一个组
    //     if (!lastRowNum) { // 正好有几组
    //         fullCol = group;
    //         notFullCol = group * (numRows - 2);
    //     } else { // 余下了不满一组的数字,看够不够一个满列
    //         if (Math.floor(lastRowNum / numRows) === 0) { // 不够
    //             fullCol = group;
    //             notFullCol = group * (numRows - 2) + 1;
    //         } else { // 有一个满列 非满列个数加上余数个
    //             fullCol = group + 1;
    //             notFullCol = group * (numRows - 2) + Math.floor(lastRowNum / numRows);
    //         }s'd'd'd'd'd'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x
    //     }
    // } else { // 不到一组
    //     if (Math.floor(lastRowNum / numRows) === 0) { // 不够
    //         fullCol = 0;
    //         notFullCol = 1;
    //     } else { // 有一个满列 非满列个数加上余数个
    //         fullCol = 1;
    //         notFullCol = len - numRows;
    //     }
    // }

    // console.log(fullCol, notFullCol)
    // 至此刚刚算出有多少列
    // 生成map
    let map = Array.from(new Array(numRows), () => new Array(group * numRows + numRows - 1));
    // let map = Array.from(new Array(numRows), () => new Array(fullCol + notFullCol));
    let x = 0,
    y = 0,
    i = 0
    while (i <= len) {
        map[y][x] = s[i]
        if (!(x % (numRows - 1)) && y < numRows - 1) {
            y++;
        } else if (y > 0) {
            x++;
            y--;
        }
        i++
    }
    let result = [];
    map.forEach(item=>{
        result = result.concat(item);
    })
    return result.join('')
    // return map.reduce((pre, next) => [...pre, ...next]).join('');
};

console.log(convert("dhkiqhukrzhozmyxznwkxolutcszdxdjfntxxphqooepdfpesloszbmvdgwjgzunonkncresikklpzpkkfclgqimwevcfprwebjivnadykqplhzvmdjuttgsadwfsobyplgkajpavfqhoreavpxojdijhfqbtscifivhtkipsawgrcjosgfblnmuseylwawdirledttvtremtpblxgoitcfmhdxfdtjnmwrqrmnmdtyxibkhhbsddxpmaosdkdswbkosweecxcbielrnojqsghgiwanidggesvyqbcsahtinhaavltpsawaywogcwniokhenjznquyfbyizlboddkgcjwklszvilcmymnmeikklkskvvzbylhcwfpjxoffchtctjoarakcmepizolzbucyztjwjodlwyorheryfddrjubkkmkliolhjvfsjiehhubqyupfauzjqawapilxyzhhumzfvfpezquaklhmhgwxjuxaclzakghgtilqocwpsqrfezrlhplqlksnvsnhywntfbjvdfkwycdedwpkocbznvnincsobfhigtdkaniarneujwfxyizldowtqqhtvqbeleoouyollviwrpwpxvdcjbxbrgvozwskdiaxgpktksqdhmsgjxluakvtrsiqrccwldtrudngydjhrdocdbwfltzeojuhlzdwewqabdibirjbwzdbczhnugsipopcpsbvqrvuwdvgwehvfkwhldvhlpqcfhfxcgsuzqovtkbsqknwwjdjnaqaridzsiwuoqongfkcpnuhxhftslchluifdlevvcrjufydkkhbxblwkqrebtmppwuuhapcegnaonfaxmewprsbhjgleuatqwoxyfbeoogedmgaykwobqrlzxwdryyhwogwujaiziocuuevhalkscv",
    700))