/**
 * call的特点
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

//fn0.call('hello', '1', '2');


Function.prototype.call = function(context) {
    context = context ? Object(context) : window;
    context.fn = this;
    let args = [];
    for (let i = 1; i < arguments.length; i++) {
        args.push('arguments[' + i + ']');
    }
    // 利用数组的toString的方法
    let result = eval('context.fn(' + args + ')');
    delete context.fn;
    return result;
}




//fn1.call(fn2) // 将fn1的this指向为fn2



fn1.call.call.call.call(fn2);

// 无论前面多几个call 实际上最后都是call函数
// 最后本质是fn2.call()

/**
 * 1 context===f2   this===f(context)
 *
 * 2 f2.call()  //
 */