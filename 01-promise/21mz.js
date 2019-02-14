/**
 * 实现一个co库
 * TODO: 通过pormise实现一个co库
 * 
 */
const fs = require("mz/fs");

fs.readFile('age.txt', 'utf8').then(function(data) {
    console.log(data);
}, function(error) {
    console.error(error);
})