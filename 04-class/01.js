let target = {};

let school = { name: 'git' };

let age = { age: 10 };

target = Object.assign(school, age);

console.log(target); // { name: 'git', age: 10 }