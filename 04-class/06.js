/**
 * constructor
 * 对象没有prototype属性
 * 但是可以通过 对象的constructor属性
 * 找到构造函数 然后通过构造函数的prototype属性
 * 来找到原型对象
 * */

function Animal(name) {
    this.name = name; // 实例属性
    // this.data = { height: 30 };
}

// 公用放到原型上
Animal.prototype.height = 30;

let animal1 = new Animal("monkey1");

let animal2 = new Animal("monkey2");

console.log(animal1.constructor) // [Function: Animal]

console.log(animal1.constructor.prototype) // { height: 30 }

console.log(animal1.__proto__ === Animal.prototype) // true