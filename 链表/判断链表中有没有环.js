// 集度一面面试题


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 /

/**
 * @param {ListNode} head
 * @return {boolean}
 */


// 思路：快慢指针
// 如果存在环，快指针和慢指针一定会在某次循环后相等
const hasCircle = (head) => {
    if (!head || !head.next) return false;

    let slow = head;

    // 如果都指向head，那么一开始就会返回true
    let fast = head.next;

    while (slow || fast) {
        if (slow === fast) return true;

        slow = slow.next;
        fast = fast.next ? fast.next.next : null;
        if(!slow || !fast){
            return false
        }
    }
}