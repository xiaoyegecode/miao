var xiaoyegecode = function () {

  function chunk(array, size = 2) {
    if (array.lenght == 0) {
      return []
    }
    let length = array.length
    let res = []
    let index = 0
    while (index < length) {
      res.push(array.slice(index, index + size))
      index += size
    }
    return res

  }

  function compact() {

  }


  return {
    chunk: chunk,
    compact: compact,
  }
}