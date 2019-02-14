/*
 * @Description: 
 * @version: 
 * @Company: GIT
 * @Author: killsos.ql
 * @Date: 2019-01-07 19:30:43
 * @LastEditors: killsos.ql
 * @LastEditTime: 2019-01-12 18:34:29
 */


//  发布订阅模式

function Event() {
    this.events = [];
}



// 订阅
Event.prototype.on = function(fn) {
    this.events.push(fn);
}

// 发布
Event.prototype.emit = function(data) {
    this.events.forEach(function(fn) {
        fn(data);
    })
}


let e = new Event();
let arr = [];
e.on(function(data) {
    arr.push(data);
    if (arr.length == 2) {
        console.log(arr);
    }
});

const fs = require("fs");

fs.readFile('age.txt', 'utf-8', function(error, data) {
    if (error) {
        console.error(error);
    }
    e.emit(data);
});

fs.readFile('name.txt', 'utf-8', function(error, data) {
    if (error) {
        console.error(error);
    }
    e.emit(data);
});