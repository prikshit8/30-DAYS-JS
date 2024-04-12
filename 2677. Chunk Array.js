var chunk = function (arr, size) {
  let res = [];
  for (let i = 0; i < arr.length; i += size) {
    let chunk = [];
    for (let j = i; j < i + size; j++) {
      if (j < arr.length) {
        chunk.push(arr[j]);
      }
    }
    res.push(chunk);
  }
  return res;
};
