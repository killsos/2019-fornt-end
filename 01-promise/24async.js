/**
 * async await
 * async函数的返回值  是  一个promise
 * async + await = generator + co
 * retrun  value 就是 promise的是成功回调的参数值
 */
const fs = require("mz/fs");

/**
 * await 可以放任何类型的值
 * await 如果是promise 成功执行结果 返回 data
 * 如果失败
 *  1. async函数内部trycatch拦截到
 *  2. 如果没有1 就执行外层prmoise失败回调 或者 catch回调
 */
async function read() {
    let content = await { name: "killsos", age: 123 };
    console.log(content);
    let value = await fs.readFile('age1.txt', 'utf8');
    console.log(value);
    return value;
}

read().then(function(data) {
    console.log("success is ", data);
}).catch(function(err) {
    console.error('output is', err);
})