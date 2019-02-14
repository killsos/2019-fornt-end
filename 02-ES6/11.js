/**
 * 数据的响应变化
 * 
 * 双向绑定  = 数据劫持  +   观察者模式 +   模板的编译
 * 
 * vue 的数组的更新也触发 视图更新
 * 实现机制 面向切片编程 在数组原有push pop slice shift 的方法的基础上
 * 再包装一层 自己的方法
 */



function update() {
    console.log('数据更新了');
}
let p = Array.prototype.push;

Array.prototype.push = function(v) {
    p.call(this, v);
    update();
}

[1, 2].push(3)