"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// class

/**
 * 实例属性
 * 
 * 类属性 也称之为 静态属性
 * 
 * 公共属性   原型属性
 * 
 * Object.create()
 * 
 * 判断是不是new  this 是不是 构造器函数的实例  this instanceof  构造器函数名
 */
// ES6 中 继承 extends 会继承  this属性和方法  prototype属性和方法  静态方法
var Animal =
/*#__PURE__*/
function () {
  //myProp = 42; // 实例属性
  function Animal(name) {
    _classCallCheck(this, Animal);

    this.name = name;
  }

  _createClass(Animal, [{
    key: "eat",
    value: function eat() {
      // 原型属性
      console.log('吃饭');
    }
  }], [{
    key: "f",
    value: function f() {
      // es6 只支持静态方法 不支持静态属性
      console.log("静态方法");
    } // es7 支持静态属性
    //static a = 1;

  }]);

  return Animal;
}();

var a = new Animal("01");
console.log(a);
Animal.f();
console.log(Animal.a);
