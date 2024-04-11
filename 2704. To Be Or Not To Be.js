var expect = function (val) {
  let vall = val;
  return {
    toBe(a) {
      if (a === vall) {
        return true;
      } else {
        throw "Not Equal";
      }
    },
    notToBe(b) {
      if (b !== vall) {
        return true;
      } else {
        throw "Equal";
      }
    },
  };
};
