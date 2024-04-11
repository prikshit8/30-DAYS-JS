var cancellable = function (fn, args, t) {
  let id = setTimeout(() => {
    fn(...args);
  }, t);
  return function () {
    clearTimeout(id);
  };
};
