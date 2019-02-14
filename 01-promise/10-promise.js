/*
 * @Description: 
 * @version: 
 * @Company: GIT
 * @Author: killsos.ql
 * @Date: 2019-01-07 19:30:43
 * @LastEditors: killsos.ql
 * @LastEditTime: 2019-01-12 21:51:08
 */

const Promise = require('./2.promise');

// console.log(Promise.toString());

let promise = new Promise(function(resolve, reject) {
    console.log(1);
    setTimeout(function() {
        // resolve("成功的值");
        reject("失败的原因")
    }, 1000);

});

promise.then(function(value) {
    console.log("success", value);
}, function(reason) {
    console.log("reason", reason);
})

console.log(2);