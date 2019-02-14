/*
 * @Description: 
 * @version: 
 * @Company: GIT
 * @Author: killsos.ql
 * @Date: 2019-01-07 19:30:43
 * @LastEditors: killsos.ql
 * @LastEditTime: 2019-01-13 00:13:07
 */

const fs = require("fs");

function read(url) {
    return new Promise(function(resolve, reject) {
        fs.readFile(url, "utf8", function(err, data) {
            if (err) {
                return reject(err)
            }
            resolve(data);
        })
    });
}

// 1. 如果返回值是promise 并且执行这个promise 执行失败
// 那么就会走外层失败回调 执行成功 就走外层成功的回调
// read('age.txt').then(function(data) {
//     return read(data + 1);
// }, function(err) {
//     console.error(err);
// }).then(function(value) {
//     console.log(value);
// }, function(err) {
//     console.error('error is', err);
// });

// 2. 只要返回值不是promise 不管是其他什么值 都是走外层的成功回调
// 演示 成功的回调  输出100
// read('age.txt').then(function(data) {
//     return 100;
// }, function(err) {
//     console.error(err);
//     return -100
// }).then(function(value) {
//     console.log("外层的成功", value);
// }, function(err) {
//     console.error('外层的失败', err);

// 演示 失败的回调  输出 -100
// 没有age1.txt这个文件
// read('age1.txt').then(function(data) {
//     return 100;
// }, function(err) {
//     return -100
// }).then(function(value) {
//     console.log('外层的成功', value);
// }, function(err) {
//     console.error('外层的失败', err);
// });

// 3. 不管在什么时候 throw 抛出异常 走失败回调 或者 走catch

function READ1(url) {
    return new Promise(function(resolve, reject) {
        throw new Error("错误");
    });
}
// READ1('aaa').then(function(data) {
//     console.log(data);

// }, function(error) {
//     console.error('throw出来的错误是', error);
// })
// READ1('aaa').then(function(data) {
//     console.log(data);

// }).catch(function(error) {
//     console.error('catch 捕获 throw出来的错误是', error);
// })

// function READ2(url) {
//     return new Promise(function(resolve, reject) {
//         fs.readFile(url, "utf8", function(err, data) {
//             if (err) {
//                 reject(err);
//                 return;
//             }
//             resolve(data);
//         })
//     });
// }

// READ2('age.txt').then(function(data) {
//     throw data;
// }).then(function(data) {
//     console.log(data);
// }, function(error) {
//     console.error('throw is', error); // name.txt
//     return 999;
// }).then(function(data) {
//     console.log(data); // 999
// })


// READ2('age1.txt').then(function(data) {
//     throw data;
// }).then(function(data) {
//     console.log(data);
// }, function(error) {
//     console.error('throw is', error); // name.txt
//     return 999;
// }).then(function(data) {
//     console.log(data); // 999
// })

function READ3(url) {
    return new Promise(function(resolve, reject) {
        throw Error("在执行器中抛出错误");
        fs.readFile(url, "utf8", function(err, data) {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        })
    });
}

READ3('age.txt').then(null, function(error) {
    console.log("看看错误来自", error);
    return 888;
}).then(function(data) {
    console.log(data); // 888
})