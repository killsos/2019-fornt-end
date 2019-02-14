class Aniaml {
    constructor(name) {
        this.name = name;
    }

    drink() {
        console.log("drink");
    }
}

function readonly(target, key, value) {
    console.log(target, key, value);
    value.writable = false;
    console.log(value.initializer())
}


class Cat extends Aniaml {
    @readonly PI = 3.14;
    constructor(name, age) {
        super(name)
        this.age = age;
    }
    say() {
        console.log("drink");
    }
}