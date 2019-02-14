/**
 * 实现深拷贝
 * SON.parse(JSON.stringify(obj)) 的权限
 * null  reg  function ...
 * 
 * 深拷贝中 数字 字符串 function是不需要拷贝的
 * 
 *  1 javascript 中基本数据类型
 * 
 *    number string boolean null undefined symbol object
 * 
 *  2 object 包含
 * 
 *    Object   Array  Regexp  Map WeakMap  Set  weakSet  ArrayBuffer   TypedArray DataView
 * 
 *  3 typeof 返回值有
 * 
 *    number string boolean null undefined symbol object  function
 */

function deepClone(value) {
    // null
    if (value === null) return value;

    // 非对象  number string boolean null undefined symbol  function
    if (typeof value !== 'object') return value;

    // RegExp
    if (value instanceof RegExp) return RegExp(value);

    // 日期
    if (value instanceof Date) return new Date(value);

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