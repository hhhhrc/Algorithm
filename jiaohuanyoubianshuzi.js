function max(arr) {
    return arr.sort((x, y) => {
        return x - y
    })[arr.length - 1];
}

function replaceElements(arr) {
    if (arr.length) {
        // write code here
        return arr = arr.map((item, index) => {
            console.log(index)
            if (index === arr.length - 1) {
                return -1
            } else {
                return max(arr.slice(index + 1, arr.length));
            }
        })
    } else {
        return [];
    }

}

console.log(replaceElements([17, 18, 5, 4, 6, 1]))