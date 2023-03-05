// 集度一面面试题 深拷贝实现

const deepCopy = (source) => {

    const isObject = (obj) => {
        return typeof obj === 'object' && obj
    }
    // 先判断是不是对象
    if (!isObject(source)) return source;

    let obj = Array.isArray(source) ? [] : {};

    for (let key in source) {
        if (source.hasOwnProperty(key)) {
            if (isObject(source[key])) {
                deepCopy(source[key])
            } else {
                obj[key] = source[key]
            }
        }
    }
    return obj;

}