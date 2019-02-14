// eval
// eval接受字符串参数，解析其中的js代码。如果编译失败，会抛出异常，否则执行其中的代码，计算返回值

console.log(eval('2+2')); // 4

eval('console.log("ok")'); // ok

// 在实际应用中，通常这样转换JSON。

let jsonStr = '{ "age": 20, "name": "jack" }';

eval('(' + jsonStr + ')');

/**
 * 为什么要加括号呢？
 * 因为js中{}通常是表示一个语句块，eval只会计算语句块内的值进行返回
 * 加上括号就变成一个整体的表达式。
 */

console.log(eval('{}')); // undefind

console.log(eval('({})')); // Object {}

// 使用eval需要注意执行作用域

var s = 1;

function a() {
    eval('var s=2');
    console.log(s);
}
a(); // 2
console.log(s); // 1

// 在局部环境使用eval便会创建局部变量

// 可以显示指定eval调用者来改变上下文环境

var s = 'global';

function b() {
    eval('var s = "local"');
    console.log(s); // local
    console.log(eval('s')); // local
    console.log(window.eval('s')); // global
}

b();