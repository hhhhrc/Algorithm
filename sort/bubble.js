/**
 * 冒泡排序
 * 时间复杂度：O(n²)
 */

bubbleSort = (arr) => {
    const { length } = arr;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

/// 优化：外层每轮过去，都会多一个数字排好，内层循环无需遍历到底 j在原本基础上-i
newBubbleSort = (arr) => {
    const { length } = arr;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

console.time(1)
console.log(bubbleSort([4, 2, 6, 8, 5, 7,213,312,3,4235,52352352,2355,234,235,235,12,12,5,523,22345,25,235,235,325,235,2562,235,235,235]))
console.timeEnd(1)

console.time(2)
console.log(newBubbleSort([4, 2, 6, 8, 5, 7, 213, 312, 3, 4235, 52352352, 2355, 234, 235, 235, 12, 12, 5, 523, 22345, 25, 235, 235, 325, 235, 2562, 235, 235, 235]))
console.timeEnd(2)