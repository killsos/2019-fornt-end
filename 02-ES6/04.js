/**
 * 解构 destructor
 * 
 * 数组 按 位置
 * 
 * 对象 按 属性名
 * 
 * 解构有 声明 和 赋值  两个功能
 */

let arr = ["killsos", 12];

//let [name, age] = arr;

// console.log(name, age);

// let { name, age } = { name: "killsos.ql", age: 12 };

// console.log(name, age);

let { name: nameValue, age: agevalue } = { name: "killsos-ql", age: 12 };

console.log(nameValue, agevalue);


let { length } = [1, 2];

console.log(length);