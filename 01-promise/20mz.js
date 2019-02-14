/**
 * mz 是一个库 将 nodejs 全部 prmoise
 * 
 * npm install mz
 */
const fs = require("mz/fs");

fs.readFile('age.txt', 'utf8').then(function(data) {
    console.log(data);
}, function(error) {
    console.error(error);
})