/**
 * apply的特点
 * 1 可以改变我们当前函数的this指向
 * 2 还会让当前函数执行
 */

function fn0() {
    console.log(this, arguments);
}

function fn1() {
    console.log(1);
}

function fn2() {
    console.log(2);
}


Function.prototype.apply = function(context, args) {
    context = context ? Object(context) : window;
    context.fn = this;
    if (!args) {
        return context.fn();
    }
    let result = eval('context.fn(' + args + ')');
    delete context.fn;
    return result;
}

fn0.apply("hello", [1, 2, 3])