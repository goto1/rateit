import { isString } from "lodash";

/**
 * Creates a hash table from an array
 */

export const createHashTableFromArray = (arr, key) =>
  Array.isArray(arr) && isString(key)
    ? arr.reduce((acc, val) => {
        acc[val[key]] = val;
        return acc;
      }, {})
    : {};
