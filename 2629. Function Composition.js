var compose = function (functions) {
  const newFunctions = functions.reverse();
  return function (x) {
    return newFunctions.reduce((acc, fn) => fn(acc), x);
  };
};
