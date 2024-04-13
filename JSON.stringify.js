export default function jsonStringify(value) {
  if (value === null || value === undefined) {
    return String(value);
  }
  if (Array.isArray(value)) {
    return "[" + value.map((item) => jsonStringify(item)).join(",") + "]";
  }
  if (typeof value === "object") {
    let res = "";
    for (let key in value) {
      res += '"' + key + '"' + ":" + jsonStringify(value[key]) + ",";
    }
    return "{" + res.slice(0, -1) + "}";
  }
  if (typeof value === "string") {
    return '"' + value + '"';
  }
  return String(value);
}
