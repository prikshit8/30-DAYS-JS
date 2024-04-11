var addTwoPromises = async function (promise1, promise2) {
  try {
    const d1 = await promise1;
    const d2 = await promise2;
    return d1 + d2;
  } catch (e) {
    console.log(e);
  }
};
