class Node {
  constructor(value) {
    this.val = value
    this.next = undefined
  }
}

class NodeList {
  constructor(arr) {
    // 声明头部节点
    let head = new Node(arr.shift())
    let next = head
    arr.forEach(item => {
      // 声明下一个新节点
      next.next = new Node(item)
      // next往后进一
      next = next.next
    })
    return head
  }
}

// 交换值
let swap = (p, q) => {
  let val = p.val
  p.val = q.val
  q.val = val
}

// 给定起始和终点，找出基准元素，用于拆分后递归
let partion = (begin, end) => {
  let val = begin.val // 基准元素的值，用于比较
  let p = begin
  let q = begin.next
  while (q !== end) {
    // 先交换再右移和先右移再交换是一样的，目的都是把小的放在左边来
    if (q.val < val) {
      swap(q, p.next)
      p = p.next
    }
    q = q.next
  }
  // 最后p指针停在第一个右边元素之前，这时交换begin和p，让基准点在中间
  swap(begin, p)
  return p
}

let sort = (begin, end) => {
  if (begin != end) {
    let base = partion(begin, end) // 基准节点
    sort(begin, base)
    sort(base.next, end)
  }
}

export function lianbiaokuaipai(arr) {
  let head = new NodeList(arr)
  sort(head)
  let res = []
  let next = head
  while (next) {
    res.push(next.val)
    next = next.next
  }
  return res
}

let arr = [4, 1, 3, 2, 7, 9, 10, 12, 6]
console.log(lianbiaokuaipai(arr))

export {
  NodeList
}