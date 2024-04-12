var promiseAll = function (functions) {
  let l = functions.length;
  // let promises = new Array(l);
  // for(let i=0;i<l;i++){
  //     promises[i] = functions[i]();
  // }
  return new Promise((res, rej) => {
    let output = new Array(l);
    functions.forEach(async (p, i) => {
      if (l === 0) {
        resolve(output);
      }
      try {
        const data = await p();
        output[i] = data;
        l--;
        if (l === 0) {
          res(output);
        }
      } catch (e) {
        rej(e);
      }
    });
  });
};
