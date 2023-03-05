const reduce = (list, fn, ...init) => {
  let next = init.length ? init[0] : list[0]
  for (let i = init.length ? 0 : 1; i < list.length; i++) {
    next = fn(next, list[i])
  }
  console.log('???')
  return next
}

console.log(reduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (x, y) => x + y))