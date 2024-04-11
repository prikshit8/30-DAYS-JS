var cancellable = function (fn, args, t) {
  let id = setInterval(() => {
    fn(...args);
  }, t);
  fn(...args);
  return function () {
    clearInterval(id);
  };
};
