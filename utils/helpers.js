export const convertObjectToArray = object => {
  const array = [];
  for (let item in object) {
    array.push(object[item]);
  }
  return array;
};
