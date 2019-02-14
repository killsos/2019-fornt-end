// Object.assign

let target = {};

let school = { name: 'killsos' };

let age = { age: 12 };

//Object.assign(target, school, age);

target = Object.assign(school, age); // 等价于Object.assign(target, school, age);

console.log(target);

// ES6 扩展运算符

let s = {...school, ...age };

console.log(s);