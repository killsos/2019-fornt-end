/*
 * @Description: 
 * @version: 
 * @Company: GIT
 * @Author: killsos.ql
 * @Date: 2019-01-07 19:30:43
 * @LastEditors: killsos.ql
 * @LastEditTime: 2019-01-13 01:03:53
 */

const Promise = require('./3.promise');


const fs = require("fs");

function read(url) {
    return new Promise(function(resolve, reject) {
        throw new Error("error in executor");
    });
}

read('age.txt').then(function(data) {
    return 100;
}, function(err) {
    console.error(err);
    return 200;
})