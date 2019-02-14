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
    this.drink = function() {
        console.log("drink");
    }
}

// 公用放到原型上
Animal.prototype.height = 30;

function Cat(name) {
    Animal.call(this, name); // 完成继承父类的实例属性和实例方法
}

// Cat.prototype.__proto__ = Animal.prototype; // 原型继承1

Object.setPrototypeOf(Cat.prototype, Animal.prototype); // 原型继承2 和 原型继承1 是等价的

// Cat.prototype = Object.create(Animal.prototype, {
//     constructor: {
//         value: cat
//     }
// });

let c = new Cat("cat1");

c.drink();

console.log(c.constructor);