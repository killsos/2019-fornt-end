// ES6 generator 生成器 ===> 迭代器

// Symbol.iterator 就是 迭代器函数

function sum() {
    let arr = [... {
        0: 0,
        1: 1,
        2: 2,
        "length": 3,
        [Symbol.iterator]: function() {
            let that = this;
            let len = 0;
            return {
                next() {
                    return {
                        done: len == that.length,
                        value: that[len++]
                    }
                }
            }
        }
    }];
    console.log(arr);
}

sum();


function* fn() {
    yield 12;
    yield 22;
    return 32;
}

let it = fn();
let r = it.next();
console.log(r.value, r.done);

r = it.next();
console.log(r.value, r.done);


r = it.next();
console.log(r.value, r.done);