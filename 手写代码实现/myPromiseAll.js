// 实现promise.all()

// 接收一个数组，当数组中的promise全部resolve，返回结果数组

Promise.MyAll = function (promises) {
    let arr = [];
    let count = 0;
    return new Promise((resolve, reject) => {
        promises.forEach((item, i) => {
            // 这里把每一个都封装成了promise对象，然后一个一个在then中处理
            Promise.resolve(item).then(res => {
                // 暂存结果
                arr[i] = res
                // 暂存已拿到结果的数量
                count += 1
                // 数量和入参长度一样 代表都拿到结果了，直接resolve这个结果数组
                if (count === promises.length) resolve(arr)
            }).catch(reject)
        })
    })
}