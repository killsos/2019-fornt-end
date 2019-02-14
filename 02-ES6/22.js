// 不能把原型上的方法拿出来调用否则this无指向

// 但是可以通过es7  声明箭头函数方式来解决

class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
            console.log(this);
        }
        // es7 这种写法会绑定this是实例
    drink = () => {
        console.log(this);
    }
}

class Person extends Animal {
    constructor(name) {
        super(name)
    }
}

let p1 = new Person("killsos");

let eat = p1.eat;

let drink = p1.drink;

eat();

drink();