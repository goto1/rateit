import { isString, isObject, filter } from "lodash";

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

/**
 * Filters a collection by type of the
 * property and returns an array
 */

export const filterByType = (collection, type) =>
  isObject(collection) && isString(type)
    ? filter(collection, item => typeof item === type)
    : [];
