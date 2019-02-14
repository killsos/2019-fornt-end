/*
 * @Description: 
 * @version: 
 * @Company: GIT
 * @Author: killsos.ql
 * @Date: 2019-01-07 19:30:43
 * @LastEditors: killsos.ql
 * @LastEditTime: 2019-01-12 18:34:51
 */

// 观察者模式

// 被观察者 或 称之为 目标
function Subject() {
    this.obervers = [];
    this.state = "yes";
}

// attach 是 目标 绑定 观察者
Subject.prototype.attach = function(observer) {
    this.obervers.push(observer);
}

Subject.prototype.setState = function(state) {
    this.state = state;
    this.notify();
}

Subject.prototype.notify = function() {
    this.obervers.forEach(function(oberver) {
        oberver.update();
    });
}

// 观察者
function Observer(name, target) { // name 是 观察者的名字
    this.name = name;
    this.target = target;
}

Observer.prototype.update = function() {
    console.log(`通知到了 ${this.name} 的状态是 ${this.target.state}`);

}


let subject = new Subject();

let oberver1 = new Observer('my', subject);

let oberver2 = new Observer('you', subject);

subject.attach(oberver1); // 目标 绑定 观察者1

subject.attach(oberver2); // 目标 绑定 观察者2

subject.setState("hello");