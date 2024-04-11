var once = function (fn) {
  let allow = true;
  return function (...args) {
    if (allow) {
      allow = false;
      return fn(...args);
    }
  };
};
