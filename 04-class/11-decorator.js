class Aniaml {
    constructor(name) {
        this.name = name;
    }

    drink() {
        console.log("drink");
    }
}

function before(target, key, descriptor) {
    console.log(target, key, descriptor);

    let old = descriptor.value;

    descriptor.value = function() {
        console.log("before");
        return old();
    }

}
class Cat extends Aniaml {
    constructor(name, age) {
        super(name)
        this.age = age;
    }
    @before
    say() {
        console.log("drink");
        return 1;
    }
}


/****
 * target: Cat {} 
 * key: 'say' 
 * value :{ value: [Function: say],
 * writable: true,
 * enumerable: false,
 * configurable: true }
 */

let c = new Cat("1", 2);

console.log(c.say());