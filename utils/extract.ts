const formatDate = (time: any) => {
  const timestamp = parseInt(time, 10) * 1000; // Convert to milliseconds
  const date = new Date(timestamp);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

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
        if (newKey === "start_time" || newKey === "end_time") {
          result[key] = formatDate(obj[key]);
        } else {
          result[newKey] = obj[key];
        }
      }
    } else {
      if (key === "time") {
        result[key] = formatDate(obj[key]);
      } else {
        result[key] = obj[key];
      }
    }
  }
  return result;
};
