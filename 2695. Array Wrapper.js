var ArrayWrapper = function (nums) {
  this.array = nums;
};

ArrayWrapper.prototype.valueOf = function () {
  let sum = 0;
  for (let i = 0; i < this.array.length; i++) {
    sum += this.array[i];
  }
  return sum;
};

ArrayWrapper.prototype.toString = function () {
  return JSON.stringify(this.array);
};
