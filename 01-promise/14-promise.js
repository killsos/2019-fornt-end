/*
 * @Description: 
 * @version: 
 * @Company: GIT
 * @Author: killsos.ql
 * @Date: 2019-01-07 19:30:43
 * @LastEditors: killsos.ql
 * @LastEditTime: 2019-01-13 01:17:55
 */

const Promise = require('./3.promise');


const fs = require("fs");

function read(url) {
    return new Promise(function(resolve, reject) {
        fs.readFile(url, 'utf-8', function(error, data) {
            if (error) {
                reject(error);
                return;
            }
            resolve(data);
        });
    });
}

read('age.txt').then(function(data) {
    console.log(data);
    return 100;
}, function(err) {
    console.error(err);
    return 200;
}).then(function(val) {
    console.log(val);
})