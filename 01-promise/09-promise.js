/*
 * @Description: 
 * @version: 
 * @Company: GIT
 * @Author: killsos.ql
 * @Date: 2019-01-07 19:30:43
 * @LastEditors: killsos.ql
 * @LastEditTime: 2019-01-12 19:12:25
 */

//  promsie 

/**
 * promise 可以解决 回调地狱问题  错误处理的问题 并发的问题
 * 
 * ES6 已经实现了 promsie类
 */

let promise = new Promise(function(resolve, reject) {
    console.log(1);
    //resolve("成功的值");
    reject("失败的原因")
});

promise.then(function(value) {
    console.log("success", value);
}, function(reason) {
    console.log("reason", reason);
})

console.log(2);