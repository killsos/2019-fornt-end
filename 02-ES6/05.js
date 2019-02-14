/**
 * 扩展  剩余运算符
 * 
 */

let a = [1, 2];

let b = [3, 4];

let c = [...a, ...b];

console.log(c);

let d = { name: 'killsos', age: 12, china: true };

let { name, ...reset } = d;

console.log(name, reset);

let f = { year: 1900, ...d }; // 这里拷贝 是浅拷贝

console.log(f);

// 扩展只能一层 超过一层就不能识别了

let o = { name: { name: { name: 'killsos', age: 12 } } };

let r = {...o };

o.name.name.age = 18;

console.log('o', o); // 18

console.log('r', r); // 18  所以只是拷贝了一层

/**
 * 实现浅拷贝  
 * 
 * JSON.parse(JSON.stringify(obj))
 * 
 * Object.assign()
 */