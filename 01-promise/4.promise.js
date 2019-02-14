function Promise(executor) {
    let that = this;
    that.status = "pending";
    that.value = "";
    that.reason = "";
    that.onResolvedCallbacks = [];
    that.onRejectedCallbacks = [];

    function resolve(value) {
        if (that.status == "pending") {
            that.status = "fulfilled";
            that.value = value;
            that.onResolvedCallbacks.forEach(function(fn) {
                fn();
            });
        }

    }

    function reject(reason) {
        if (that.status == "pending") {
            that.status = "rejected";
            that.reason = reason;
            that.onRejectedCallbacks.forEach(function(fn) {
                fn();
            });
        }
    }

    try {
        executor(resolve, reject);
    } catch (error) {
        reject(error);
    }
}

function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
        return reject(new TypeError("循环引用"))
    }
    // 1 x是不是promise
    if (typeof x === 'object' && x !== null || typeof x === 'function') {
        try {
            let then = x.then;
            if (typeof then === "function") {
                then.call(x, function(y) {
                    resolvePromise(promise2, y, resolve, reject);
                }, function(error) {
                    reject(r);
                });
            }
        } catch (error) {
            reject(error);
        }
    } else {
        // 2 非promise
        resolve(x);
    }
}

Promise.prototype.then = function(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : function(data) {
        return data;
    }
    onRejected = typeof onRejected === 'function' ? onFulfilled : function(error) {
        throw error;
    }
    let that = this;
    let promise2;
    // 每次都要返回一个新的promise
    promise2 = new Promise(function(resolve, reject) {
        if (that.status == "fulfilled") {
            setTimeout(function() {
                try {
                    let x = onFulfilled(that.value);
                    resolvePromise(promise2, x, resolve, reject);
                    // resolvePromise的功能
                    // 如果x是promise 则继续执行then方法
                    // 如果不是promise的任何值 resolve(x)
                } catch (error) {
                    reject(error);
                }
            }, 0)
        }
        if (that.status == "rejected") {
            setTimeout(() => {
                try {
                    let x = onRejected(that.reason);
                    resolvePromise(promise2, x, resolve, reject);
                    // resolvePromise的功能
                    // 如果x是promise 则继续执行then方法
                    // 如果不是promise的任何值 resolve(x)
                } catch (error) {
                    reject(error);
                }
            }, 0);
        }
        if (that.status == "pending") {
            that.onResolvedCallbacks.push(function() {
                // TODO:
                setTimeout(() => {
                    try {
                        let x = onFulfilled(that.value);
                        resolvePromise(promise2, x, resolve, reject);
                        // resolvePromise的功能
                        // 如果x是promise 则继续执行then方法
                        // 如果不是promise的任何值 resolve(x)
                    } catch (error) {
                        reject(error);
                    }
                }, 0);
            });
            that.onRejectedCallbacks.push(function() {
                // TODO:
                setTimeout(() => {
                    try {
                        let x = onRejected(that.reason);
                        resolvePromise(promise2, x, resolve, reject);
                        // resolvePromise的功能
                        // 如果x是promise 则继续执行then方法
                        // 如果不是promise的任何值 resolve(x)
                    } catch (error) {
                        reject(error);
                    }
                }, 0);
            });
        }
    });
    return promise2;
}

Promise.prototype.catch = function(errCallback) {
    return this.then(null, errCallback);
}

/**
 * finally 无论成功还是失败都会执行
 */

Promise.prototype.finally = function(Callback) {
    return this.then(function(value) {
        Callback();
        return value;
    }, function(err) {
        Callback();
        throw err;
    });
}


// 实现deferred
Promise.deferred = Promise.defer = function() {
    let dfd = {};
    dfd.promise = new Promise(function(resolve, reject) {
        dfd.resolve = resolve;
        dfd.reject = reject;
    })
    return dfd;
};
Promise.resolve = function(value) {
    return new Promise(function(resolve, reject) {
        resolve(value);
    })
};

Promise.reject = function(error) {
    return new Promise(function(resolve, reject) {
        reject(error);
    })
};

Promise.all = function(promises) {
    return new Promise(function(resolve, reject) {
        let arr = [];
        let i = 0;

        function processsData(index, value) {
            i++
            arr[index] = value;
            if (i === promises.length) {
                resolve(arr);
            }
        }

        for (let i = 0; i < promises.length; i++) {
            let current = promises[i];
            if (typeof current === "obejct" && current.then) {
                current.then(function(data) {
                    processsData(i, data);
                }, reject)
            } else {
                processsData(i, current);
            }

        }
    })
};

Promise.race = function(promises) {
    return new Promise(function(resolve, reject) {
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(resolve, reject);
        }
    })
};

module.exports = Promise;