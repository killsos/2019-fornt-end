/*****
 * npm install bluebird
 */

const bluebird = require("bluebird");
const fs = require("fs");

// let read = bluebird.promisify(fs.readFile); // 把方法promise化

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


let read = promisify(fs.readFile); // 把方法promise化

read("name.txt", 'utf8').then(function(data) {
    console.log(data);

})