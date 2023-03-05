/**
 * 选择排序
 * 时间复杂度 O(n²)
 */

selectionSort = (arr) => {
    const { length } = arr;
    for (let i = 0; i < length - 1; i++) {
        flag = i; //每一轮都先假设i是最小值的下标，内层遍历到比它小的就把值赋给flag，遍历完flag就是后面的最小值。
        // i为每一轮开始下标 j也是
        // 找到这一轮的最小值
        for (let j = i; j < length; j++) {
            flag = arr[flag] < arr[j] ? flag : j;
        }
        // 把这一轮的最小值与前面互换
        [arr[i], arr[flag]] = [arr[flag], arr[i]];
    }
    return arr;
}

a = [2, 43, 745, 457, 3476, 347, 236, 346, 736, 2323, 28, 4]
console.log(selectionSort(a));