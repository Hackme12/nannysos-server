/**
 * This method check if provided value is empty
 * @param {*} obj value to check if it is undefined or null
 * @returns {boolean} true || false
 */
const isEmpty = (obj) => {
  if (isUndefinedOrNull(obj)) {
    return true;
  }
  if (Array.isArray(obj)) {
    return obj.length == 0 ? true : false;
  }
  return false;
};

/**
 * This method check if provided value is undefined or null
 * @param {*} value value to check if it is undefined or null
 * @returns {boolean} true || false
 */
const isUndefinedOrNull = (value) => {
  return value === undefined || value === null;
};

module.exports = {
  isEmpty,
  isUndefinedOrNull,
};
