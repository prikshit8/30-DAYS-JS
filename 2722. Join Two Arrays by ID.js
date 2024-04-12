var join = function (arr1, arr2) {
  let cache = {};
  for (let i = 0; i < arr1.length; i++) {
    cache[arr1[i].id] = arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    if (cache[arr2[i].id] === undefined) {
      cache[arr2[i].id] = arr2[i];
    } else {
      for (let key in arr2[i]) {
        cache[arr2[i].id][key] = arr2[i][key];
      }
    }
  }
  let result = [];
  for (let key in cache) {
    result.push(cache[key]);
  }
  return result;
};
