/*****
 * npm install bluebird
 */

const bluebird = require("bluebird");
const fs = require("fs");

let read = bluebird.promisifyAll(fs); // 把方法promise化

function promiseAll(obj) {
    for (const key in object) {
        if (object.hasOwnProperty(key) && (typeof object[key] === "function")) {
            const element = object[key];
            object[key + 'Async'] = promiseify(object[key]);
        }
    }
}


function promisify(fn) {
    return function(...args) {
        return new Promise(function(resolve, reject) {
            args.push(function(err, data) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(data);
            });
            fn.apply(null, args)
        })
    }
}



fs.readFileAsync("name.txt", 'utf8').then(function(data) {
    console.log(data);
})