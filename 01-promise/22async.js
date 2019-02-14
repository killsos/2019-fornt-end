/**
 * async await
 * async函数的返回值  是  一个promise
 * async + await = generator + co
 * retrun  value 就是 promise的是成功回调的参数值
 */
const fs = require("mz/fs");

async function read() {
    let content = await fs.readFile('age.txt', 'utf8');
    let value = fs.readFile(content, 'utf8');
    return value;
}

// console.log(read); // [AsyncFunction: read]

// console.log(read()); // Promise { <pending> }

read().then(function(data) {
    console.log(data);
}).catch(function(err) {
    console.error('output is', err);
})