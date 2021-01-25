// // 求第k个差值
// function getInter(array, start) {
//     // write code here
//     // 初始补了几个数
//     if (array[0] > start) {
//         return start;
//     }
//     var num = array[0] - 1;
//     for (let i = 0; i < array.length - 1; i++) {
//         // 不连续的时候，num累加
//         while (array[i] + 1 !== array[i + 1]) {
//             // 求出差几个数
//             let temp = array[i + 1] - array[i] - 1;
//             // 先补上
//             num = num + temp;
//             // 
//             if (num >= start) {
//                 return array[i] + temp - (num - start);
//             } else {
//                 break;
//             }
//         }
//     }
//     if (num < start) {
//         return array[array.length - 1] + start - num
//     }
// }

// console.log(getInter([1,2], 1))

var findKthPositive = function (arr, k) {
    // 两条线：ptr指针记录数组的下标，current每次累加记录应该出现的数，对得上ptr就往后走一个，对不上current就是最新缺失的数，同时累加缺到第几个了，和k相等的时候就不往下执行了所以是<k
    let missCount = 0,
        lastMiss = -1,
        current = 1,
        ptr = 0;
    for (missCount = 0; missCount < k; ++current) {
        if (current == arr[ptr]) {
            ptr = (ptr + 1 < arr.length) ? ptr + 1 : ptr;
        } else {
            ++missCount;
            lastMiss = current;
        }
    }
    return lastMiss;
};

console.log(findKthPositive([2, 3, 4, 7, 11], 5))