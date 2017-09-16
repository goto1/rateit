import { isString, isObject, isArray, filter, reduce } from "lodash";

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

/**
 * Filters an object, returning properties that are 
 * only specified in the passed array
 */

export const filterObjectByKeys = (props, keys) =>
  isObject(props) && isArray(keys)
    ? reduce(
        props,
        (result, value, key) => {
          if (keys.includes(key)) {
            result[key] = value;
          }
          return result;
        },
        {}
      )
    : {};
