const sort = (arr) => {
    if (arr.length > 1) {
        const {
            length
        } = arr;
        const middle = Math.floor(length / 2); // 向下取整
        const left = sort(arr.slice(0, middle))
        const right = sort(arr.slice(middle, length))
        console.log('执行这句了!')
    }
    return arr;
}
sort([8,7,6,5])