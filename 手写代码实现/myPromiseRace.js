// 实现promise.race

// 输入promise数组，只返回第一个拿到的结果

Promise.myRace = (promises) => {

    return new Promise((reslove, reject) => {
        for (const item in promises) {
            Promise.resolve(item).then(reslove, reject)
        }
    })
}