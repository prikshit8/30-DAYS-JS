var compactObject = function (obj) {
  if (typeof obj === "object") {
    if (Array.isArray(obj)) {
      let res = [];
      for (let i = 0; i < obj.length; i++) {
        if (Boolean(obj[i])) {
          res.push(compactObject(obj[i]));
        }
      }
      return res;
    } else {
      let res = {};
      for (key in obj) {
        if (Boolean(obj[key])) {
          res[key] = compactObject(obj[key]);
        }
      }
      return res;
    }
  }
  return obj;
};
