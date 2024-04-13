var checkIfInstanceOf = function (obj, classFunction) {
  if (
    obj === null ||
    obj === undefined ||
    typeof classFunction !== "function"
  ) {
    return false;
  }
  let proto = obj.__proto__;
  while (proto !== null) {
    if (proto !== classFunction.prototype) {
      proto = proto.__proto__;
    } else {
      return true;
    }
  }
  return false;
};
