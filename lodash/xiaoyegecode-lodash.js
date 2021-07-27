var xiaoyegecode = function () {

  function chunk(array, size) {

    var result = []
    var index = 0
    while (index < array.length) {
      result.push(array.slice(index, index + size))
      index += size
    }
    return result
  }

  function compact(array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        result.push(array[i])
      }
    }
    return result
  }

  function uniq(array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (result.indexOf(array[i]) == -1) {
        result.push(array[i])
      }
    }
    return result
  }

  function difference(array, ...values) {
    let dif = [].concat(...values)
    return array.filter(item => !dif.includes(item))
  }

  function drop(array, n = 1) {
    array.splice(0, n)
    return array
  }

  function dropRight(array, n = 1) {
    if (array.length < n) {
      return []
    }
    return array.slice(0, array.length - n)
  }

  function dropRightWhile() {

  }

  function dropWhile() {

  }

  function fill(array, value, start = 0, end = array.length) {
    for (var i = 0; i < array.length; i++) {
      array[i] = value
    }
    return array
  }

  function findIndex(array, f, idx = 0) {
    var iter = iterator(f)
    for (var i = idx; i < array.length; i++) {
      if (iter(array[i])) {
        return i
      }
    }
    return -1
  }


  function findLastIndex(array, f, idx = array.length - 1) {
    var iter = iterator(f)
    for (var i = idx; i >= 0; i--) {
      if (iter(array[i])) {
        return i
      }
    }
    return -1
  }

  function flatten(array) {
    return [].concat(...array)
  }

  function flattenDeep(array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        result = result.concat(flattenDeep(array[i]))
      } else {
        result.push(array[i])
      }
    }
    return result
  }

  function flattenDepth(array, depth = 1) {
    if (depth == 0) {
      return array
    }
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        result = result.concat(flattenDepth(array[i], depth - 1))
      } else {
        result.push(array[i])
      }
    }
    return result
  }

  function fromPairs() {

  }

  function head() {

  }

  function indexOf() {

  }

  function initial() {

  }

  function intersection() {

  }

  function join() {

  }

  function last() {

  }

  function lastIndexOf() {

  }

  function pull() {

  }

  function reverse() {

  }

  function sortedIndex() {

  }

  function union() {

  }

  function unionBy() {

  }

  function unzip() {

  }

  function without() {

  }

  function xor() {

  }

  function zip() {

  }

  function countBy() {

  }

  function every() {

  }

  function filter() {

  }

  function find() {

  }

  function flatMap() {

  }

  function flatMapDepth() {

  }

  function forEach() {

  }

  function groupBy() {

  }

  function keyBy() {

  }

  function map() {

  }

  function partition() {

  }

  function reduce() {

  }

  function reduceRight() {

  }

  function reject() {

  }



  return {
    chunk: chunk,
    compact: compact,
    uniq: uniq,
    difference: difference,
    drop: drop,
    dropRight: dropRight,
    fill: fill,
    findIndex: findIndex,
    findLastIndex: findLastIndex,
    flatten: flatten,
    flattenDeep: flattenDeep,
    flatMapDepth: flatMapDepth,
    fromPairs: fromPairs,
    head: head,
    indexOf: indexOf,
    initial: initial,
    intersection: intersection,
    join: join,
    last: last,
    lastIndexOf: lastIndexOf,
    pull: pull,
    reverse: reverse,
    sortedIndex: sortedIndex,
    union: union,
    unionb: unionBy,
    unzip: unzip,
    without: without,
    xor: xor,
    zip: zip,
    countBy: countBy,
    every: every,
    filter: filter,
    find: find,


  }

}()




