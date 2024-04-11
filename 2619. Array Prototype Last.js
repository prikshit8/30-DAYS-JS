Array.prototype.last = function () {
  let length = this.length;
  if (length === 0) {
    return -1;
  } else {
    return this[length - 1];
  }
};
