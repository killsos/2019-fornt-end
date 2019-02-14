/*
 * @Description: 
 * @version: 
 * @Company: GIT
 * @Author: killsos.ql
 * @Date: 2019-01-07 19:30:43
 * @LastEditors: killsos.ql
 * @LastEditTime: 2019-01-12 13:13:40
 */


function after(times, callback) {
    return function() {
        if (--times === 0) {
            callback();
        }
    }
}

let fn = after(3, function(param) {
    console.log("fn call 3 times");

});

fn();

fn();

fn();