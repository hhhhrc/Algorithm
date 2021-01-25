/**
 * @param {number} x
 * @return {boolean}
 */
export function isPalindrome(x) {
  if (x < 0) {
    return false
  }
  let div = 1 // 位数
  // 求出位数： 
  while (x / 10 > div) div *= 10
  while (x > 0) {
    let left = parseInt(x / div)
    let right = x % 10
    if (left !== right) {
      return false
    }
    x = parseInt((x % div) / 10)
    div = div / 100
  }
  return true
}