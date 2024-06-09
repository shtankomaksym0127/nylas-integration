export const extractTopLevelProperties = async (
  obj: any,
  parentKey: string = "",
  result: any = {}
) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;
      if (
        typeof obj[key] === "object" &&
        obj[key] !== null &&
        !Array.isArray(obj[key])
      ) {
        extractTopLevelProperties(obj[key], newKey, result);
      } else {
        result[newKey] = obj[key];
      }
    } else {
      result[key] = obj[key];
    }
  }
  return result;
};
