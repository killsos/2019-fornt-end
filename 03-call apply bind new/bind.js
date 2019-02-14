Function.prototype.bind = function(context) {
    context = context ? Object(context) : window;
    let _this = this;

    // 取出参数
    let slice = Array.prototype.slice;
    let args = slice.apply(arguments, [1]);

    let fNOP = function() {};
    let bound = function() {
        //这里的this指的是调用时候的环境
        return _this.apply(this instanceof fNOP ? 　this : context || window,
            args.concat(Array.prototype.slice.apply(arguments, [0]))
        )
    };

    fNOP.prototype = _this.prototype;
    bound.prototype = new fNOP();
    return bound;
}