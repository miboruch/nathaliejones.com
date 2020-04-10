export const convertObjectToArray = object => {
  const array = [];
  for (const item in object) {
    array.push(object[item]);
  }
  return array;
};
