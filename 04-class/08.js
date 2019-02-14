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

//Object.setPrototypeOf(Cat.prototype, Animal.prototype); // 原型继承2 和 原型继承1 是等价的

Cat.prototype = Object.create(Animal.prototype, {
    constructor: {
        value: cat
    }
});

function create(parentProto, propertiesObject) {
    function FN() {}
    Fn.prototype = parentProto;
    var value = new FN();

    if (propertiesObject) {
        for (const key in propertiesObject) {
            if (object.hasOwnProperty(key)) {
                value[key] = object[key].value;
            }
        }
    }
    return value;
}

Cat.prototype = create(Animal.prototype);

let c = new Cat("cat1");

c.drink();

console.log(c instanceof Cat);