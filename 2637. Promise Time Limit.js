var timeLimit = function (fn, t) {
  return async function (...args) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        rej("Time Limit Exceeded");
      }, t);
      fn(...args)
        .then((data) => res(data))
        .catch((err) => rej(err));
    });
  };
};
