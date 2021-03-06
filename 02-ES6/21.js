// class

/**
 * 实例属性
 * 
 * 类属性 也称之为 静态属性
 * 
 * 公共属性   原型属性
 * 
 * Object.create()
 * 
 * 判断是不是new  this 是不是 构造器函数的实例  this instanceof  构造器函数名
 * 
 * 子类可以继承父类的静态属性
 * 
 * 不能把原型上的方法拿出来调用否则this无指向
 */

// ES6 中 继承 extends 会继承  this属性和方法  prototype属性和方法  静态方法

class Animal {
    //myProp = 42; // 实例属性
    constructor(name) {
        this.name = name;
    }
    eat() { // 原型属性
        console.log('吃饭');
    }

    static f() { // es6 只支持静态方法 不支持静态属性
            console.log("静态方法");

        }
        // es7 支持静态属性
    static a = 1;

    drink = () => { // es7 这种写法会绑定this是实例
        console.log(this);

    }
}

let a = new Animal("01");

console.log(a);

Animal.f()

console.log(Animal.a);