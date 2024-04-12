var TimeLimitedCache = function () {};

TimeLimitedCache.prototype.set = function (key, value, duration) {
  let res = false;
  if (this[key] !== undefined) {
    clearTimeout(this[key].id);
    res = true;
  }
  let id = setTimeout(() => {
    delete this[key];
  }, duration);

  this[key] = {
    value,
    id,
  };
  return res;
};

TimeLimitedCache.prototype.get = function (key) {
  if (this[key] === undefined) return -1;
  return this[key].value;
};

TimeLimitedCache.prototype.count = function () {
  return Object.keys(this).length;
};
