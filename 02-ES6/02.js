// 如果在同一个作用域中存在  var定义变量 和  同名函数 提升是函数 而不是变量

console.log(a); // [Function: a]


var a = 1;

function a() {}

// {
//     console.log(b);

//     let b = 2;

//     function b() {} // 这里会报错 Syntax Error  Identifier 'b' has already been declared
// }

// {
//     console.log(c);

//     function c() {} // 这里会报错 Syntax Error  Identifier 'b' has already been declared

//     const c = 2;
// }

console.log(f);

{
    console.log(d);

    let e = 2;

    function d() {}

    var f = 5;
}