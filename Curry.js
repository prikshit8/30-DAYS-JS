function curryMaker(fn, initial) {
  let sum = initial;
  return function currySum(...args) {
    if (args.length === 0) {
      return fn(sum, initial);
    } else {
      for (let i = 0; i < args.length; i++) {
        sum = fn(sum, args[i]);
      }
      return function (...next) {
        return currySum(...next);
      };
    }
  };
}

// 3,9 , 10 ,11

function sum(a, b) {
  return a + b;
}
function multi(a, b) {
  return a * b;
}

const test = curryMaker(sum, 0);

console.log(test(1)(2)());
