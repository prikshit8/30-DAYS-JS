function memoize(fn) {
  let memoize = {};
  return function (...args) {
    let stringArgs = JSON.stringify(args);
    if (memoize[stringArgs] === undefined) {
      memoize[stringArgs] = fn(...args);
    }
    return memoize[stringArgs];
  };
}
