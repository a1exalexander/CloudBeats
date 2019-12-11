import filterSearch from './search';

const $hasOwnProperty = Object.prototype.hasOwnProperty;

export const has = (obj, key) => {
  if (typeof obj !== 'object') return false;
  return $hasOwnProperty.call(obj, key);
}

export const isObject = (el) => typeof el === 'object';
export const isFunction = (el) => typeof el === 'function';
export const isString = (el) => typeof el === 'string';
export const isNumber = (el) => !Number.isNaN(Number(el)) && el !== null;

export { filterSearch };
