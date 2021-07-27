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
    array.splice(-1, n)
    return array
  }








}





return {
  chunk: chunk,
  compact: compact,
  uniq: uniq,
  difference: differerce,
  drop: drop,
  dropRight: dropRight
}


}()