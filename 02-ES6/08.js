/**
 * Map Set 是可迭代
 * 
 * WeakMap WeakSet 是 不可迭代
 */

// 日期 可以
let d1 = new Date();

let d2 = new Date(d1);

console.log(d1 == d2); // false

console.log(d1 === d2); // false

// 数组 不可以

let a1 = [1, 2];

let a2 = new Array(...a1);

console.log(a2);

// Ser 可以

let s1 = new Set(a1);

console.log(s1);

let s2 = new Set(s1);

console.log(s2);

console.log(s1 == s2); // false

console.log(s1 === s2); // false

// Map 可以

let m1 = new Map();

const KEY = {};

m1.set(KEY, 123);

console.log(m1);

let m2 = new Map(m1);

console.log(m2);

console.log(m1 === m2);

console.log(m1 == m2);

// WeakMap  不可以

// <WeakMap> is not iterable
let sm1 = new WeakMap();

sm1.set(KEY, 456);

console.log(sm1);

let sm2 = new WeakMap();

sm2.set(KEY, 456);

console.log(sm2);

console.log(sm1 === sm2);

console.log(sm1 == sm2);

// WeakSet
// <WeakSet> is not iterable
let ws1 = new WeakSet([
    [1],
    [2]
]);

console.log(ws1);

let ws2 = new WeakSet(ws1); // <WeakSet> is not iterable

console.log(ws2);

console.log(ws1 == ws2); // false

console.log(ws1 === ws2); // false