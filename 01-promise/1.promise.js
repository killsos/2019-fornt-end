/**
 * 现在是同步版 不能完成异步
 * 
 */

function Promise(executor) {
    let that = this;
    that.status = "pending";
    that.value = "";
    that.reason = "";

    function resolve(value) {
        if (that.status == "pending") {
            that.status = "fulfilled";
            that.value = value;
        }
    }

    function reject(reason) {
        if (that.status == "pending") {
            that.status = "rejected";
            that.reason = reason;
        }
    }

    executor(resolve, reject);
}

Promise.prototype.then = function(onFulfilled, onRejected) {
    if (this.status == "fulfilled") {
        onFulfilled(this.value)
    }

    if (this.status == "rejected") {
        onRejected(this.reason);
    }

}

module.exports = Promise;