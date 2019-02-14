function Animal(name) {
    this.name = name; // 实例属性
    // this.data = { height: 30 };
}

// 公用放到原型上
Animal.prototype.height = 30;

let animal1 = new Animal("monkey1");

let animal2 = new Animal("monkey2");

console.log(animal1 == animal2); // false

console.log(animal1 === animal2); // false

console.log(animal1.constructor.prototype); // { height: 30 }

console.log(animal1.constructor.prototype.__proto__); // {}

console.log(animal1.constructor.prototype.__proto__.__proto__); // null



/****
 * 构造器函数 有 prototype 属性
 * 
 * 对象实例没有prototype 只有 __proto__属性
 * 
 * 构造器函数的prototype属性 和 该构造器生成的实例 的 __proto__属性 都指向 同一个原型对象
 * 
 */