/*
 * @Description: 
 * @version: 
 * @Company: GIT
 * @Author: killsos.ql
 * @Date: 2019-01-07 19:30:43
 * @LastEditors: killsos.ql
 * @LastEditTime: 2019-01-12 13:25:51
 */

const fs = require("fs");

function after(times, callback) {
    let arr = []; // 闭包
    return function(data) {
        arr.push(data);
        if (--times === 0) {
            callback(arr);
        }
    }
}

let fn = after(2, function(data) {
    console.log(data);

});
fs.readFile('age.txt', 'utf-8', function(error, data) {
    if (error) {
        console.error(error);
    }
    fn(data);
});

fs.readFile('name.txt', 'utf-8', function(error, data) {
    if (error) {
        console.error(error);
    }
    fn(data);
});