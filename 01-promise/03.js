/*
 * @Description: 
 * @version: 
 * @Company: GIT
 * @Author: killsos.ql
 * @Date: 2019-01-07 19:30:43
 * @LastEditors: killsos.ql
 * @LastEditTime: 2019-01-12 13:19:02
 */

const fs = require("fs");

fs.readFile('age.txt', 'utf-8', function(error, data) {
    if (error) {
        console.error(error);
    }
    console.log(data);
});

fs.readFile('name.txt', 'utf-8', function(error, data) {
    if (error) {
        console.error(error);
    }
    console.log(data);
});