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

  function compact() {

  }


  return {
    chunk: chunk,
    compact: compact,
  }
}