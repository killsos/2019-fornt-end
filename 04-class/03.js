function Animal(name) {
    this.name = name; // 实例属性
    this.data = { height: 30 };
}

let animal1 = new Animal("monkey1");

let animal2 = new Animal("monkey2");

console.log(animal1 == animal2); // false

console.log(animal1 === animal2); // false

console.log(animal1.constructor);