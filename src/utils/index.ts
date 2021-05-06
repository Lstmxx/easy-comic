import { isObject } from '@/utils/is';

/**
 * Add the object as a parameter to the URL
 * @param baseUrl url
 * @param obj
 * @returns {string}
 * eg:
 *  let obj = {a: '3', b: '4'}
 *  setObjToUrlParams('www.baidu.com', obj)
 *  ==>www.baidu.com?a=3&b=4
 */
export function setObjToUrlParams(baseUrl: string, obj: any): string {
  let parameters = '';
  let url = '';
  for (const key in obj) {
    parameters += key + '=' + encodeURIComponent(obj[key]) + '&';
  }
  parameters = parameters.replace(/&$/, '');
  if (/\?$/.test(baseUrl)) {
    url = baseUrl + parameters;
  } else {
    url = baseUrl.replace(/\/?$/, '?') + parameters;
  }
  return url;
}

export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string;
  for (key in target) {
    src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key]);
  }
  return src;
}

export function cloneDeep(obj: any, hash = new WeakMap()) { //递归拷贝
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Date) return new Date(obj);
  if (obj === null || typeof obj !== 'object') {
      //如果不是复杂数据类型，直接返回
      return obj;
  }
  if (hash.has(obj)) {
      return hash.get(obj);
  }
  /**
   * 如果obj是数组，那么 obj.constructor 是 [Function: Array]
   * 如果obj是对象，那么 obj.constructor 是 [Function: Object]
   */
  const t = new obj.constructor();
  hash.set(obj, t);
  for (const key in obj) {
      //递归
      if (obj.hasOwnProperty(key)) {//是否是自身的属性
          t[key] = cloneDeep(obj[key], hash);
      }
  }
  return t;
}

export function findByReg(reg: RegExp, target: string = ''): string {
  const matchArr = target.match(reg) || [];
  const data = matchArr.length > 0 ? matchArr[0] : '';
  return data;
}
