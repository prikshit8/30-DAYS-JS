var createCounter = function (init) {
  return {
    count: init,
    increment() {
      this.count++;
      return this.count;
    },
    decrement() {
      this.count--;
      return this.count;
    },
    reset() {
      this.count = init;
      return this.count;
    },
  };
};
