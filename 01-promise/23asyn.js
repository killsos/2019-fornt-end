/**
 * 实现一个co库
 * 
 * async函数的返回值  是  一个promise
 * async + await = generator + co
 */
const fs = require("mz/fs");

/**
 * async await 是可以用拦截错误的
 * 类似同步代码
 * 被trycatch拦截后
 * 外部catch 或者 promise的失败回调就不能捕获到了
 */
async function read() {
    try {
        let content = await fs.readFile('age1.txt', 'utf8');
        let value = fs.readFile(content, 'utf8');
        return value;
    } catch (error) {
        console.log('try catch is ', error);

    }
}

// console.log(read); // [AsyncFunction: read]

// console.log(read()); // Promise { <pending> }

read().then(function(data) {
    console.log(data);
}).catch(function(err) {
    console.error('output is', err);
})