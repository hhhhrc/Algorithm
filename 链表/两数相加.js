// function NodeList(val, next) {
//     this.val = (val === undefined ? 0 : val)
//     this.next = (next === undefined ? null : next)
// }

class Node {
    constructor(value) {
        this.val = value;
        this.next = undefined;
    }
}

class NodeList {
    constructor(arr) {
        let head = new Node(arr.shift());
        let base = head;
        //base就是即将要指向下一个节点的节点
        arr.forEach(item => {
            base.next = new Node(item);
            base = base.next;
        })
        return head;
    }
}

/**
 * @param {NodeList} l1
 * @param {NodeList} l2
 * @return {NodeList}
 */

var addTwoNumbers = function (l1, l2) {
    let add = 0 //进位
    let head = new NodeList([])
    let sum = head //当前指针
    while (add || l1 || l2) {
        let val1 = l1 ? l1.val : 0
        let val2 = l2 ? l2.val : 0
        let r1 = val1 + val2 + add
        add = parseInt(r1 / 10)
        sum.next = new NodeList([r1 % 10])
        sum = sum.next
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }
    return head.next
};

console.log(addTwoNumbers(new NodeList([9, 9, 3]), new NodeList([4, 5])))