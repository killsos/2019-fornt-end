/** 
 * 判断函数是否new
 * 1. new.target 是否存在 并且是否是构造函数
 * 2. this instanceof  fnConstruct
 */

function mockNew() {
    let Constructor = [].shift.call(arguments);
    let o = [];
    o.__proto__ = Constructor.prototype;
    // 防止构造器函数的返回值是引用类型
    let r = Constructor.apply(o, [arguments]);
    return r instanceof Object ? r : o;
}

function fn() {
    console.log(new.target);
}

fn();

new fn();