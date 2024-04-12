Array.prototype.groupBy = function (fn) {
  let cache = {};
  for (let i = 0; i < this.length; i++) {
    const key = fn(this[i]);
    if (cache[key] === undefined) {
      cache[key] = [this[i]];
    } else {
      cache[key].push(this[i]);
    }
  }
  return cache;
};
