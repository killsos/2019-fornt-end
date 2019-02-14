/**
 * let  存在暂存死区
 */

let a = 1;

{
    //console.log(a); //ReferenceError: a is not defined

    let a = 1;
}

// line8 到 line 9 是暂存死区

for (let index = 0; index < 10; index++) { // 默认let声明的变量与作用域绑定
    setTimeout(function() {
        console.log(index);
    })
}