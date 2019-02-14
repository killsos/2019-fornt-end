"use strict";

var _class, _descriptor, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

// decorator 装饰器
// 装饰器 可以装饰  类的属性  类的方法  类 三者
// 装饰器三个参数  1 类的原型  2 属性名称或则方法名称
// 3 描述 是一个对象 如果是方法 描述的value是原来的方法名  writable  writable  writable
// 3 描述 是一个对象 如果是属性 描述中的initializer函数的返回值是原来的属性值  writable  writable  writable
var Circle = (_class = (_temp =
/*#__PURE__*/
function () {
  function Circle() {
    _classCallCheck(this, Circle);

    _initializerDefineProperty(this, "PI", _descriptor, this);
  }

  _createClass(Circle, [{
    key: "say",
    //@log
    value: function say() {
      console.log("hello");
    }
  }]);

  return Circle;
}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "PI", [readonly], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 3.14;
  }
})), _class);

function readonly(CPrototype, key, descriptor) {
  // descriptor 是对属性的描述
  //descriptor.writable = false;
  console.log(descriptor);
}

function log(CPrototype, key, descriptor) {
  console.log(CPrototype, key, descriptor);
}

var c = new Circle();
c.PI = 3.15;
