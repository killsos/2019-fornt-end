/*
 * @Description: 
 * @version: 
 * @Company: GIT
 * @Author: killsos.ql
 * @Date: 2019-01-07 19:30:43
 * @LastEditors: killsos.ql
 * @LastEditTime: 2019-01-13 01:41:45
 */

const Promise = require('./3.promise');


const fs = require("fs");

function read(url) {
    const defer = Promise.defer();
    fs.readFile(url, "urt8", function(err, data) {
        if (err) {
            defer.reject(err);
            return;
        }
        defer.resolve(data);
    })
    return defer.promise;
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