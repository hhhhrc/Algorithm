import sort, {
    lianbiaokuaipai,
    NodeList
} from '../lianbiaokuaipai';

test('sort:1', () => {
    let arr = [4, 1, 3, 2, 7, 9, 10, 12, 6];
    let res = lianbiaokuaipai(arr)
    expect(res).toEqual([1, 2, 3, 4, 6, 7, 9, 10, 12])
})