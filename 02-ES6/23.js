// decorator 装饰器

// 装饰器 可以装饰  类的属性  类的方法  类 三者

// 装饰器三个参数  1 类的原型  2 属性名称或则方法名称

// 修饰方法  3 描述 是一个对象 如果是方法 描述的value是原来的方法名  writable  writable  writable

// 修饰属性  3 描述 是一个对象 如果是属性 描述中的initializer函数的返回值是原来的属性值  writable  writable  writable

// 修饰类 只有一个参数 target  就是类本身

// 装饰器不能装饰函数  函数预解析
class Circle {
    @readonly PI = 3.14;
    //@log
    say() {
        console.log("hello");
    }
}

function readonly(CPrototype, key, descriptor) { // descriptor 是对属性的描述
    //descriptor.writable = false;
    console.log(descriptor);
}

function log(CPrototype, key, descriptor) {
    console.log(CPrototype, key, descriptor);
}

let c = new Circle();

c.PI = 3.15;