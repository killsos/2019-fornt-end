/**
 *
 * 深拷贝中 数字 字符串 function是不需要拷贝的
 *
 *  1 javascript 中基本数据类型
 *
 *    number string boolean null undefined symbol object
 *
 *  2 object 包含  // 这里包含是指 typeof的返回值
 *
 *    Object  null  Array  Regexp  Map WeakMap  Set  weakSet  ArrayBuffer  TypedArray DataView
 *
 *  3 typeof 返回值有
 *
 *    number string boolean undefined symbol object  function
 *
 *  4 typeof NaN // number、
 *
 *  5 typeof null // object
 *  
 */

function deepClone(value) {

    // 非对象  number string boolean  undefined symbol  function
    if (typeof value !== 'object') return value;

    // null
    if (value === null) return value;

    // RegExp
    if (value instanceof RegExp) return RegExp(value);

    // Date
    if (value instanceof Date) return new Date(value);

    // Map
    if (value instanceof Map) return new Map(value);

    // Set
    if (value instanceof Set) return new Set(value);

    // WeakMap
    if (value instanceof WeakMap) {
        throw new Error("WeakMap不具有可复制性");
    };

    // WeakSet
    if (value instanceof WeakSet) {
        throw new Error("WeakSet不具有可复制性");
    };

    // 数组 普通对象
    let o = new value.constructor; // 返回一个新数组或者新对象

    for (const key in value) {
        o[key] = deepClone(value[key]); // 如果当前值是对象 递归拷贝
    }
    return o;
}

let s = { name: { name: "killsos", age: 12 } };

let r = deepClone(s);

s.name.age = 18;

console.log(r.name.age);