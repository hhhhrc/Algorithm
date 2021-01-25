import {
    isPalindrome
} from "../palindrome";


test('sort:1', () => {
    let num = 121;
    let res = isPalindrome(num) === true
    console.log(res)
    expect(res).toBe(true)
})