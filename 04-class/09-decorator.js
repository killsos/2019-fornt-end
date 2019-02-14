class Aniaml {
    constructor(name) {
        this.name = name;
    }

    drink() {
        console.log("drink");
    }
}

function log(target) { // target 是 class
    console.log(target);

    target.word = "hello world";

    target.say = function() {
        console.log(this.word);
    };
}


@log
class Cat extends Aniaml {
    constructor(name, age) {
        super(name)
        this.age = age;
    }
}



let c = new Cat("1", 12);

console.log(Cat);

console.log(Cat.word)