/*
 * @Description: 
 * @version: 
 * @Company: GIT
 * @Author: killsos.ql
 * @Date: 2019-01-07 19:30:43
 * @LastEditors: killsos.ql
 * @LastEditTime: 2019-01-12 19:02:16
 */

//  promsie 

/**
 * promise 可以解决 回调地狱问题  错误处理的问题 并发的问题
 * 
 * ES6 已经实现了 promsie类
 */

let promise = new Promise(function(resolve, reject) {
    console.log(1);
});

console.log(2);

// 1  , 2