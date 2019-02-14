/*
 * @Description: 
 * @version: 
 * @Company: GIT
 * @Author: killsos.ql
 * @Date: 2019-01-07 19:30:43
 * @LastEditors: killsos.ql
 * @LastEditTime: 2019-01-12 18:47:15
 */

//  promsie base

const fs = require("fs");

fs.readFile('age.txt', 'utf-8', function(error, data) {
    if (error) {
        console.error(error);
    }

    fs.readFile(data, 'utf-8', function(error, data) {
        if (error) {
            console.error(error);
        }
        console.log(data);
    });
});

/*
 * 上面代码 就是 典型的 回调地狱
 */