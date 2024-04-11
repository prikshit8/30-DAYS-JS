var flat = function (arr, n) {
  let res = [];
  arr.forEach((item) => {
    if (Array.isArray(item) && n > 0) {
      const miniAns = flat(item, n - 1);
      res.push(...miniAns);
    } else {
      res.push(item);
    }
  });
  return res;
};
