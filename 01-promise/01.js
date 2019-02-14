/*
 * @Description: 
 * @version: 
 * @Company: GIT
 * @Author: killsos.ql
 * @Date: 2019-01-07 19:47:01
 * @LastEditors: killsos.ql
 * @LastEditTime: 2019-01-12 13:12:52
 */

/**
 * AOP 面向切片编程
 * 就是原有逻辑上 如同切面包片一样
 * 加上自己的逻辑
 *
 * 使用回调函数来完成  如同装饰器
 */

Function.prototype.before = function(fn) {
    let that = this;
    return function() {
        fn.apply(that, arguments);
        that.apply(that, arguments); // 指向了原来的函数
    };
};


let fn = function(arg) {
    console.log("old", arg);
}

let newFn = fn.before(function(arg) {
    console.log("new", arg);
});

// newFn();

newFn("参数");