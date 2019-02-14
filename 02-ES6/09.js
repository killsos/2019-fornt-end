/**
 * Object.defineProperty 拦截器 代理
 * 
 * 只能用在对象上 不能用数组身上
 */

let person = {};

// Object.defineProperty(person, "name", {
//     writable: true, // 可写
//     configurable: true, // 可配置 可删除
//     enumerable: true, // 可枚举
//     value: "killsos" // 值
// })

// console.log(person);

// 通过get set 设置的时候 没有writable属性

let age;
Object.defineProperty(person, "age", {
    configurable: true, // 可配置 可删除
    enumerable: true, // 可枚举
    get() {
        return age;
    },
    set(v) {
        age = v;
    }
})
person.age = 12;
console.log(person.age);


let school = {
    _n: '',
    get name() {
        return this._n;
    },
    set name(v) {
        this._n = v;
    }
}

school.name = 'git';

console.log(school.name);