// 对象中函数简写
let o = {
    age: 12,
    fn() {
        setTimeout(function() {
            console.log(this);
        }, 0)
    }
}
o.fn(); // 浏览器中运行 this 执行 window

/**
 * setTimeout 是 属于 window对象
 * window.setTimeout
 * 所以 this 执向了 window
 */

let o1 = {
    age: 12,
    fn() {
        setTimeout(function() {
            console.log(this);
        }.bind(this), 0)
    }
}
o1.fn(); // bind this 使 this 指向了对象o1


let o2 = {
    age: 13,
    fn() {
        setTimeout(() => {
            console.log(this);
        }, 0)
    }
}
o2.fn(); // 箭头函数

let oo2 = o2.fn;

oo2()