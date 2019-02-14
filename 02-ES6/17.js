// 箭头函数  语法糖  没有this  没有arguments

// 箭头函数this 取决于声明处  不取决于调用的时候

// 这是和普通函数的区别

// 不需要function 关键字

// 可以不写 renturn 要去掉{}

// 如果参数只有一个 可以不写()

// 如果返回值 是 一个对象  那需要用()包起来



let fn = () => {

}

let fn1 = x => 2 * x;

console.log(fn1(2));

let a = x => y => x + y;

console.log(a(1)(2));

function b() {
    console.log(arguments);
}

b(1, 2, 3, 4)