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

Promise.prototype.then = function(onFulfilled, onRejected) {
    let that = this;
    if (that.status == "fulfilled") {
        onFulfilled(that.value)
    }

    if (that.status == "rejected") {
        onRejected(that.reason);
    }

    if (that.status == "pending") {
        that.onResolvedCallbacks.push(function() {
            // TODO:
            onFulfilled(that.value);
        });

        that.onRejectedCallbacks.push(function() {
            // TODO:
            onRejected(that.reason);
        });
    }



}

module.exports = Promise;