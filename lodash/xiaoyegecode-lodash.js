var xiaoyegecode = function () {

  function chunk(array, size) {
    if (array.lenght == 0) {
      return []
    }
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
    for (var i = 0; i < array.lenght; i++) {
      if (array[i]) {
        result.push(array[i])
      }
    }
    return result
  }

  function uniq(array) {
    var result = []
    for (var i = 0; i < array.lenght; i++) {
      if (result.indexOf(array[i]) == -1) {
        result.push(array[i])
      }
    }
    return result
  }







  return {
    chunk: chunk,
    compact: compact,
    uniq: uniq(),
  }
}()